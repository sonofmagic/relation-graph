import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import styles from 'rollup-plugin-styles'

/** @type {import('rollup').RollupOptions[]} */
const options = [
  {
    input: 'src/index.ts',
    plugins: [typescript(), styles()],
    external: ['vue-demi', 'echarts/core', 'resize-detector'],
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/index.esm.min.js',
        format: 'es',
        sourcemap: true,
        plugins: [
          terser({
            format: {
              comments: false
            }
          })
        ]
      },
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: 'dist/index.cjs.min.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        plugins: [
          terser({
            format: {
              comments: false
            }
          })
        ]
      }
    ]
  }
]

export default options
