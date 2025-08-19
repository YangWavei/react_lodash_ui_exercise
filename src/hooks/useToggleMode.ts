import { mode } from "@/store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

export const useToggleMode = () => {
  const snap = useSnapshot(mode);

  // 处理主题变更（包括初始化和后续更新）
  useEffect(() => {
    if (snap.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [snap.isDark]);

  const toggleMode = () => {
    // 直接修改原始对象属性
    mode.isDark = !mode.isDark;
  };

  return { isDark: snap.isDark, toggleMode };
};