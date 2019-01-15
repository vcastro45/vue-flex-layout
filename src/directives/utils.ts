import { DirectiveBinding } from 'vue/types/options'

export function booleanUpdate (binding: DirectiveBinding, onTrue?: () => void, onFalse?: () => void) {
  if ((binding.value || binding.value === undefined) && onTrue) onTrue()
  else if (onFalse) onFalse()
}
