import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import banner from 'rollup-plugin-banner2';
import S from 'tiny-dedent';
import packageJson from './package.json';

const license = () => S(`
  /*!
   * ${packageJson.nameFull} v${packageJson.version} (${packageJson.homepage})
   * Copyright (c) ${packageJson.author}
   * @license ${packageJson.license}
   */
   `
);

const production = !process.env.ROLLUP_WATCH;
const sourcemap = production ? true : 'inline';

export default [

  // Modern Module (No babel preset)
  {
    input: './src/index.js',
    output: [
      {
        file: packageJson.module.replace('.js', '.mjs'),
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-private-methods'
        ]
      }),
      banner(license)
    ]
  },

  // CJS and ESM (preset-env)
  {
    input: './src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap
      },
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/env',
            {
              modules: 'auto',
              targets: {
                browsers: '> 1%, IE 11, not op_mini all, not dead',
                node: 8
              },
              // useBuiltIns: 'usage',
              // corejs: 3,
            }
          ]
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-private-methods'
        ]
      }),
      commonjs(),
      // production &&
      // terser({
      //   output: {
      //     // compress: false,
      //     // mangle: false,

      //   }
      // }),
      banner(license)
    ]
  },

  // Legacy UMD (preset-env)
  {
    input: './src/index.js',
    output: [
      {
        name: packageJson.globalVar,
        file: packageJson.unpkg,
        format: 'umd',
        sourcemap
      }
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/env',
            {
              modules: 'auto',
              targets: {
                browsers: '> 1%, IE 11, not op_mini all, not dead',
                node: 8
              },
              // useBuiltIns: 'usage',
              // corejs: 3,
            }
          ]
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-private-methods'
        ]
      }),
      commonjs(),
      production &&
      terser({
        output: {}
      }),
      banner(license)
    ]
  }

];
