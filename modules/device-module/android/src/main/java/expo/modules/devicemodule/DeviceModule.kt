package expo.modules.devicemodule

import android.provider.Settings
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class DeviceModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("DeviceModule")

    Function("getDeviceId") {
      getAndroidId()
    }
  }

	private fun getAndroidId(): String {
		val context = appContext.reactContext
			?: throw IllegalStateException("React context is not available")

		return Settings.Secure.getString(
			context.contentResolver,
			Settings.Secure.ANDROID_ID
		)
	}

}
