import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

// 导入用户 store
import { useLQrStore } from '@/store/modules/LQr'

// 导入网站设置面板 store
import { useLQSettingsStore } from '@/store/modules/settings'

const store = createPinia()

export function setupPinia(app: App<Element>) {
  store.use(piniaPluginPersistedstate)
  app.use(store)
}

export function storeReset() {
  const userStore = useLQrStore()
  const settingsStore = useLQSettingsStore()

  userStore.$reset()
  settingsStore.$reset()
}

export default { store }
