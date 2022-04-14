import meow from 'meow';
import path from 'path';
import {
  createFigmaConfig,
  downloadSvgsToFs,
  generateIconManifest,
  generateReactComponents,
  getFigmaDocument,
  getGitCustomDiff,
  getIcons,
  getIconsPage,
  prechecks,
  renderIdsToSvgs,
  swapGeneratedFiles,
} from './services';
import { CodedError, ERRORS } from './types';
import { handleError } from './utils';
import { render, unmount } from './view';

async function main() {
  const cli = meow(
    `
  Usage
    $ ${path.basename(process.argv[1])} --file=<file-key>

  Options
    --file, -f      File Key from Figma
    --page, -p      Page name
    --out, -o       Output directory. Defaults to current directory
    --force         Allow dirty working directory
    --help          Show this message

  Examples
    $ ${path.basename(process.argv[1])} --file=EEggMA9IV81CYzCSI8LFEUOY
`,
    {
      hardRejection: false,
      flags: {
        file: {
          type: 'string',
          alias: 'f',
        },
        page: {
          type: 'string',
          alias: 'p',
        },
        out: {
          type: 'string',
          alias: 'o',
        },
      },
    }
  );

  if (!cli.flags.file) {
    cli.showHelp(1);
  }

  if (!cli.flags.force) {
    await prechecks();
  }

  const figmaConfig = createFigmaConfig(cli.flags.file);
  render({ fileKey: cli.flags.file });

  /* 1. Request the figma document, to source all visual nodes */
  render({
    spinners: [{ text: 'Finding the file in Figma...' }],
  });

  const document = await getFigmaDocument(figmaConfig);
  render({
    spinners: [{ success: true, text: 'Found the Figma file 👌' }, { text: 'Finding all Icons in the designs...' }],
  });

  /* 2. Filter nodes for our Icons page */
  const iconsCanvas = getIconsPage(document, cli.flags.page || 'icons');
  if (!iconsCanvas) {
    throw new CodedError(
      ERRORS.NO_ICONS_PAGE,
      'Expected an "Icons" page to exist in the Figma File. Please rename your primary page to "Icons" if you have not already.'
    );
  }

  /* 3. Transform the Icons page into a flat dictionary of icons, labeled by their path */
  const icons = getIcons(iconsCanvas);
  const iconIds = Object.keys(icons);
  if (!iconIds.length) {
    throw new CodedError(
      ERRORS.NO_ICONS_IN_SETS,
      'Expected one or more icon-sets to be in the "Icons" page. Please try again when you have created Frames to group icon-sets; refer to documentation for more details.'
    );
  }

  /* 4. Request Figma services to render Icon nodes as individual SVGs */
  render({
    spinners: [{ text: 'Rendering on the Figma platform...' }],
  });
  const iconSvgUrls = await renderIdsToSvgs(iconIds, figmaConfig);

  /* 4. Pull down all rendered SVGs to update our local working package */
  render({
    spinners: [
      {
        success: true,
        text: 'Rendered Icons on the Figma platform 🙌',
      },
    ],
    progress: {
      text: 'Gathering Figma renders...',
      percent: 0,
    },
  });

  let downloadsCompleted = 0;
  await downloadSvgsToFs(iconSvgUrls, icons, () => {
    downloadsCompleted += 1;
    render({
      progress: {
        text: 'Gathering Figma renders...',
        percent: downloadsCompleted / iconIds.length,
      },
    });
  });

  render({
    spinners: [
      {
        success: true,
        text: 'Downloaded and processed SVG renders 👍',
      },
      {
        text: 'Generating React Components...',
      },
    ],
  });

  /* 5. Generate React Components from the SVGs */

  await generateReactComponents(icons);

  render({
    spinners: [
      {
        success: true,
        text: 'Created React Components ⚛️ ✨',
      },
      {
        text: 'Generating Icon Manifest...',
      },
    ],
  });

  /* 6. Generate React Components from the SVGs */

  const [previousIconManifest, nextIconManifest] = await generateIconManifest(icons);

  render({
    spinners: [
      {
        success: true,
        text: 'Created Icon Manifest 📓 🔥',
      },
      {
        text: 'Applying changes...',
      },
    ],
  });

  /* 7. Apply all new files, while removing previous dirs/files entirely. */
  const touchedPaths = await swapGeneratedFiles(previousIconManifest, nextIconManifest, cli.flags.out || process.cwd());

  render({
    spinners: [
      {
        success: true,
        text: `Applied changes to ${cli.flags.out || 'working directory'} 💇‍`,
      },
    ],
  });

  /* 8. Finish. Print stats. */

  try {
    render({
      diff: await getGitCustomDiff(touchedPaths),
    });
  } catch (err) {
    // Swallow git errors, and continue with closing the CLI. 🤙
  }

  unmount();
}

main()
  .then(() => {
    console.log('Bai 👋');
  })
  .catch((err) => handleError(err));

process.addListener('unhandledRejection', (err) => handleError(err));
