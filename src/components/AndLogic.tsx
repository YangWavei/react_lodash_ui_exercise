function AndLogic({ isFlag }: { isFlag: boolean }) {
  // 当传入的isFlag参数为真时，渲染后面的元素
  return isFlag && <div className="text-[red] font-bold text-[40px]">传入的isFlag成立</div>
}

export default AndLogic
