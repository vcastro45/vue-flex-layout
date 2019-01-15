import { DirectiveBinding } from 'vue/types/options'
import { booleanUpdate } from '@/directives/utils'

function inserted (el: HTMLElement, binding: DirectiveBinding) {
  el.classList.add('fxWrap')
}

function update (el: HTMLElement, binding: DirectiveBinding) {
  if (binding.value === binding.oldValue) {
    return
  }

  booleanUpdate(binding, () => {
    el.classList.add('fxWrap')
  }, () => {
    el.classList.remove('fxWrap')
  })
}

export default {
  inserted,
  update
}
