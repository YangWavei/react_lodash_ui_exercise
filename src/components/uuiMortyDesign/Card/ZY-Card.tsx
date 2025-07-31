import { type ReactNode } from 'react';
import { Icon } from "@iconify/react";
import { Button } from 'antd';
import './ZY_Card.css';

function ZY_Card({ ...props }: I_ZY_Card) {
  const toggleMode = () => {
    const htmlNode = document.querySelector('html')
    const isDark = htmlNode?.classList.contains('dark')
    isDark ? htmlNode?.classList.remove('dark') : htmlNode?.classList.add('dark')
  }
  return (
    <>
      <Button onClick={toggleMode}>Dark Mode</Button>
      <div className="box px-2 py-3">
        <Icon className='cursor-pointer text-[20px]  text-red-400 dark:text-yellow-400' icon="uiw:smile-o" />
        <h1 className='font-bold'>Writesupside-down 写字颠倒</h1>
        <article>{props.children}</article>
        <p className='text-[14px]'>The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</p>
        <footer className='text-[12px]'>
          零重力笔可以在任何方向书写，包括倒置。它甚至在外太空也能使用。
        </footer>
      </div>
    </>
  )
};
export default ZY_Card;

/* -------------------------------------------------------------------------- */
interface I_ZY_Card {
  children?: ReactNode
}