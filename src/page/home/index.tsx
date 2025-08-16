import { Camera } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";
const iconlist = ['camera', 'armchair', 'rocking-chair', 'toggle-right', 'panel-top-dashed', 'apple'] as const;

export default function Index() {
  const [iconName, setIconName] = useState<(typeof iconlist)[number]>('apple');

  const handleToggleIcon = () => {
    const randomIdx = Math.floor(Math.random() * iconlist.length);
    setIconName(() => iconlist[randomIdx]);
  };

  return (
    <div>
      <div className="text-[40px] font-bold">测试</div>
      <Camera color="red" size={100} strokeWidth={1} fill="yellow" />
      <h1 className="font-bold">DynamicIcon</h1>
      <DynamicIcon className="cursor-pointer" name={iconName} onClick={handleToggleIcon} size={100} />
    </div>
  );
};