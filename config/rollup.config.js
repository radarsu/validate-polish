/* eslint-disable */
import pkg from '../package.json';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
    input: `./src/index.ts`,
    output: [
        {
            file: pkg.main,
            format: `cjs`,
        },
        {
            file: pkg.module,
            format: `es`,
        },
        {
            file: pkg.browser['./dist/index.js'],
            format: `iife`,
            name: `validatePolish`,
        },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [
        typescript(),
        terser(),
    ],
};
