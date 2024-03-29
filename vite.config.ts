import vue from '@vitejs/plugin-vue'
import {md} from './plugins/md'
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

// https://vitejs.dev/config/
export default {
  base: './',
  assetsDir: 'assets',
  plugins: [vue({
    include: [/\.vue$/, /\.md$/], // <--
  }), md()]
  ,
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      // @ts-ignore
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      // @ts-ignore
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${
        JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }
  }
}