// This has to be delayed until render time, sadly
const getFabSettings = () => {
  const isServer = typeof global !== 'undefined'
  const fabSettings = isServer ? global.FAB_SETTINGS : window.FAB_SETTINGS
  return fabSettings || {}
}

export const FAB_SETTINGS = {
  get TV_SHOW_NAME() {
    return getFabSettings().TV_SHOW_NAME || 'Star Trek'
  }
}

export const httpsify = url => url.replace(/^http:/, 'https:')

export const getLargeImage = ({ original }) => httpsify(original)
export const getSmallImage = ({ medium }) => httpsify(medium)
