const { withAndroidManifest } = require('@expo/config-plugins')

module.exports = config =>
  withAndroidManifest(config, async cfg => {
    const manifest = cfg.modResults.manifest
    const app = manifest.application?.[0]
    if (!app) return cfg

    const activity = app.activity?.find(a => a.$['android:name'] === '.MainActivity')
    if (!activity) return cfg

    const attrs = activity.$
    const cur = attrs['android:windowSoftInputMode'] || ''
    if (!cur.includes('adjustNothing')) {
      attrs['android:windowSoftInputMode'] = 'stateAlwaysHidden|adjustNothing'
    }
    return cfg
  })
