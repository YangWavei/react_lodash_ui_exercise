import { clsx } from "clsx";
import type { ReactNode } from "react";

/**
 * 自定义按钮
 */
function ZY_Button({ className, children, onClick, type = 'default', size = 'default' }: I_ZY_Button_Props) {
  return (
    <>
      <button
        onClick={onClick}
        className={
          clsx(
            'w-[40px] h-[30px] rounded-[6px] border-1 cursor-pointer',
            typeClasses[type],
            sizeClasses[size],
            className
          )
        }>
        {children}
      </button>
    </>
  )
};

export default ZY_Button;
/* -------------------------------------------------------------------------- */
interface I_ZY_Button_Props {
  className?: string,
  children?: ReactNode,
  onClick?: (value?: any) => void,
  type?: 'primary' | 'dashed' | 'text' | 'link' | 'default',
  size?: 'small' | 'default' | 'large'
}

const typeClasses = {
  default: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
  primary: 'border-blue-500 text-white bg-blue-500 hover:bg-blue-600',
  dashed: 'border-dashed border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
  text: 'border-transparent text-gray-700 bg-transparent hover:bg-gray-100',
  link: 'border-transparent text-blue-500 bg-transparent hover:text-blue-600'
}

const sizeClasses = {
  default: 'w-[60px] h-[40px]',
  small: 'w-[30px] h-[20px]',
  large: 'w-[90px] h-[60px]'
}
