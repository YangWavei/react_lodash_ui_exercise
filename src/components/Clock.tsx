interface ClockParamsType {
  time: Date
}
export default function Clock({ time }: ClockParamsType) {
  const hours = time.getHours()
  // 计算className将其包含在渲染的输出中，以此实现对组件的修复
  let className: string
  if (hours >= 0 && hours <= 6) {
    className = 'night'
  } else {
    className = 'day'
  }
  return (
    <h1 id="time" className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
