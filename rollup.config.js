import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import VuePlugin from 'rollup-plugin-vue'
import styles from 'rollup-plugin-styles'

/** @type {import('rollup').RollupOptions[]} */
const options = [
  {
    input: 'src/index.js',
    plugins: [typescript(), VuePlugin(), styles()],
    external: ['html2canvas', 'screenfull', 'vue'],
    output: [
      // {
      //   file: 'dist/index.esm.js',
      //   format: 'es',
      //   sourcemap: true
      // },
      {
        file: 'dist/index.esm.min.js',
        format: 'es',
        sourcemap: false,
        plugins: [
          terser({
            format: {
              comments: false
            }
          })
        ]
      },
      // {
      //   file: 'dist/index.cjs.js',
      //   format: 'cjs',
      //   exports: 'named',
      //   sourcemap: true
      // },
      {
        file: 'dist/index.cjs.min.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: false,
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
