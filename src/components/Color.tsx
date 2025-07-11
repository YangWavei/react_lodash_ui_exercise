/** Color组件 */
function Color({ value }: { value: string }) {
  return <div className="border border-red-500" style={{ backgroundColor: value }} />
}
export default Color
