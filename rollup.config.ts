import type { RollupOptions } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import less from 'rollup-plugin-less';
import postcss from 'rollup-plugin-postcss'

const config: RollupOptions = {
  input: ['src/view.tsx'],
  output: [{
    file: 'dist/index.js',
    format: 'cjs',
    plugins: [less()]
  }, {
    file: 'dist/index.min.js',
    format: 'iife',
    name: 'reactJoy',
    plugins: [terser() ]
  }],
  plugins: [postcss({
    modules: true
  }),  typescript(), json()]
}

export default config