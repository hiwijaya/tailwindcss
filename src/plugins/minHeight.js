import createUtilityPlugin from '../util/createUtilityPlugin'

export default function() {
  return createUtilityPlugin('minHeight', [['min-h', ['minHeight']]])
}
