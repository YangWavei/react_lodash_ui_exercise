import { useToggleMode } from "@/hooks/useToggleMode";
import { Moon, Sun } from "lucide-react";

export default function ToggleTheme() {
  const { isDark, toggleMode } = useToggleMode();
  return (
    <a className="select-none" title="Toggle Color Schema" onClick={toggleMode} >
      {isDark ? <Moon /> : <Sun />}
    </a>
  );
};
