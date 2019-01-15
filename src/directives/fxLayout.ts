import { DirectiveBinding } from 'vue/types/options'
import { booleanUpdate } from './utils'

type FxLayoutArgs = 'row' | 'column' | 'row-reverse' | 'column-reverse'

function inserted (el: HTMLElement, binding: DirectiveBinding) {
  const arg: FxLayoutArgs = (binding.arg as FxLayoutArgs | undefined) || 'row'

  if (binding.value) {
    el.classList.add('fxLayout')
    el.style.flexDirection = arg
  }
}

function update (el: HTMLElement, binding: DirectiveBinding) {
  if (binding.value === binding.oldValue) {
    return
  }
  const arg: FxLayoutArgs = (binding.arg as FxLayoutArgs | undefined) || 'row'

  booleanUpdate(binding, () => {
    el.classList.add('fxLayout')
    el.style.flexDirection = arg
  }, () => {
    el.classList.remove('fxLayout')
    el.style.flexDirection = null
  })
}

export default {
  inserted,
  update
}
