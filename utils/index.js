export const isServer = typeof global !== 'undefined'

export const FAB_SETTINGS = {
  TV_SHOW_NAME: 'Batman',
  ...((isServer ? global.FAB_SETTINGS : window.FAB_SETTINGS) || {})
}
