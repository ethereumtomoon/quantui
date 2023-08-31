// Laoquant 设置面板的 store
import { defineStore } from 'pinia'

// 网站的默认设置
import { LQLanguage, mode } from '@/utils/getDefaultEnv'

// 设置面板配置
interface LQSettings {
  // 白天黑夜模式切换
  showLQMode: string
  // 网站显示语言
  showLQLanguage: string
  // 主页宽度
  showLQMainPageWidth: string
  // 背景图
  showLQBackground: string
  // 自定义背景图
  showLQCustomBackground: string
}

export const useLQSettingsStore = defineStore({
  id: 'forum-settings',
  persist: true,
  // 默认值
  state: (): LQSettings => ({
    showLQMode: mode,
    showLQLanguage: LQLanguage,
    showLQMainPageWidth: '61.8',
    showLQBackground: 'none',
    showLQCustomBackground: '',
  }),
  actions: {
    // 恢复出厂设置()
    restoreSettings() {
      this.setTheme('light')
      this.showLQLanguage = 'en'
      this.showLQMainPageWidth = '61.8'
      this.showLQBackground = 'none'
      this.showLQCustomBackground = ''
    },
    // 设置主题，只有两种模式 light 和 dark，light 为 ''
    setTheme(theme: string) {
      this.showLQMode = theme
      document.documentElement.className = theme
    },
  },
})
