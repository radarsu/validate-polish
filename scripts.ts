import type { Scripts } from '@radrat/cli';

const scripts: Scripts = async (cli) => {
    await cli.run({
        name: `build`,
        command: `rm -rf dist && npx tsc && npx rollup -c ./config/rollup.config.js`,
    });

    await cli.run({
        name: `test`,
        command: `npx jest`,
        hiddenFromHelp: true,
    });

    await cli.run({
        name: `test.watch`,
        command: `npx jest --watch`,
        hiddenFromHelp: true,
    });

    await cli.loadPlugins([
        {
            name: `@radrat-scripts/package`,
        },
        {
            name: `@radrat-scripts/readme`,
        },
    ]);
};

export default scripts;
