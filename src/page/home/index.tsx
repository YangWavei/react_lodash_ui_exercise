import { Camera } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { useRef, useState } from "react";
const iconlist = ['camera', 'armchair', 'rocking-chair', 'toggle-right', 'panel-top-dashed', 'apple'] as const;

export default function Index() {
  const [iconName, setIconName] = useState<(typeof iconlist)[number]>('apple');
  const idx = useRef(0);
  const handleToggleIcon = () => {
    const randomIdx = (idx.current + 1) % iconlist.length;
    setIconName(() => iconlist[randomIdx]);
    idx.current++;
  };

  return (
    <div>
      <Camera color="red" size={100} strokeWidth={1} fill="yellow" />
      <h1 className="font-bold">DynamicIcon</h1>
      <DynamicIcon className="cursor-pointer" name={iconName} onClick={handleToggleIcon} size={100} />
    </div>
  );
};