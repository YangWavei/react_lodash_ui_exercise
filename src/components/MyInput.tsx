import { useEffect, useRef, type ChangeEventHandler } from "react"

interface I_MyInputProps {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function MyInput({ value, onChange }: I_MyInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  // 只在组件挂载完成后执行一次
  useEffect(() => {
    ref.current?.focus();
  }, [])
  return (
    <input type="text" ref={ref} value={value} onChange={onChange} />
  );
};
