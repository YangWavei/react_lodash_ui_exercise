import store from "store";
import { proxy, subscribe } from "valtio";
/* ------------------------------------Dark & Light Mode-------------------------------------- */
// 暗黑模式切换
export const mode = proxy({
  isDark: (() => {
    // 从 store 读取主题偏好，如果没有则默认为 false
    try {
      const themeMode = store.get('theme-mode');
      return themeMode ? JSON.parse(themeMode) : false;
    } catch {
      return false;
    }
  })()
});

// 监听主题变化并持久化到 store
subscribe(mode, () => {
  try {
    store.set('theme-mode', JSON.stringify(mode.isDark));
  } catch (error) {
    console.warn('Failed to save theme preference:', error);
  }
});
