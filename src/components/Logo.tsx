import { useToggleMode } from "@/hooks/useToggleMode";
import { useEffect, useState } from "react";

export function Logo() {
  const { isDark } = useToggleMode();
  const [logoUrl, setLogoUrl] = useState(isDark ? '/logo-dark.svg' : '/logo.svg');

  useEffect(() => {
    setLogoUrl(isDark ? '/logo-dark.svg' : '/logo.svg');
  }, [isDark]);

  return (
    <img src={logoUrl} alt="Logo" className="w-full h-full" />
  );
};
