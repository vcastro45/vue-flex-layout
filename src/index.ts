import './scss/app.scss'
import { VueConstructor } from 'vue'
import directives from './directives'

export default {
  install (Vue: VueConstructor, options: any): void {
    Vue.directive('fxLayout', directives.FxLayout)
    Vue.directive('fxWrap', directives.FxWrap)
  }
}
