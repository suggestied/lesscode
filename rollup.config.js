import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

export default [
  // Bundle for production (JS + CSS)
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(), // Exclude peer dependencies (React, Tailwind, etc.)
      resolve(), // Resolve dependencies from node_modules
      commonjs(), // Convert CommonJS to ES6 if needed
      typescript({ tsconfig: './tsconfig.json' }), // TypeScript support
      terser() // Minify JS files
    ],
    external: ['react', 'react-dom', 'tailwindcss'], // Mark these as external dependencies
  },
  // Type definitions (for better TypeScript support)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];
