export const isServer = typeof global !== 'undefined'

export const FAB_SETTINGS = {
  TV_SHOW_NAME: 'Batman',
  ...((isServer ? global.FAB_SETTINGS : window.FAB_SETTINGS) || {})
}

export const httpsify = url => url.replace(/^http:/,'https:')

export const getLargeImage = ({ original }) => httpsify(original)
export const getSmallImage = ({ medium }) => httpsify(medium)
