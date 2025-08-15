/* eslint-disable react/prop-types */
import type { ReactNode } from "react";

interface I_ButtonProps {
  size?: 'small' | 'default' | 'large';
  onClick?: () => void;
  children?: ReactNode;
  type?: 'default' | 'destructive' | 'outline' | 'link';
  disabled?: boolean;
}

const Z_Button: React.FC<I_ButtonProps> = ({ size = 'default', type = 'default', children, onClick, disabled = false }) => {
  const sizeChoices = {
    large: 'w-[6rem] h-[3rem] rounded-[8px] text-[1.2rem]',
    default: 'w-[4rem] h-[2rem] rounded-[6px] text-[1rem]',
    small: 'w-[3rem] h-[1.5rem] rounded-[4px] text-[0.8rem]'
  };

  const typeChoices = {
    default: 'bg-black text-white border border-gray-300',
    destructive: 'bg-red-500 text-white border border-red-600 hover:bg-red-600',
    outline: 'bg-transparent text-black border border-black hover:bg-gray-100',
    link: 'bg-transparent text-blue-500 border-none underline hover:text-blue-700'
  };

  // 禁用状态样式
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  return (
    <button disabled={disabled} onClick={onClick}
      className={`
        ${sizeChoices[size]} 
        ${typeChoices[type]}
        ${disabledClasses}
        baseFontFamily 
        flex-center
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </button>
  );
};

export default Z_Button;