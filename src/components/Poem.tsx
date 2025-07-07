import { Fragment } from "react"

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
}
function Poem() {
  // todo 在每个`<p></p>`标签中插入 分割线
  // 注意，<hr /> 元素只应该在 <p> 元素 之间 出现，而不是在开头或结尾。
  // const output: ReactNode[] = []

  // 填装输出的数组

  // poem.lines.forEach((line, i) => {
  //   output.push(<hr key={i + 'line'} />)
  //   output.push(<p key={i + 'separate'}>{line}</p>)
  // })

  // // 移除第一个 <hr/>
  // poem.lines.shift()

  return (
    <article>
      {/* {output} */}

      {/* Fragment 相当于一个透明的袋子，用于包裹JSX元素 <></> 是它的简写形式 */}
      {poem.lines.map((ele, i) => {
        return (
          <Fragment key={i + 'line'}>
            {i > 0 && <hr />}
            <p>{ele}</p>
          </Fragment>
        )
      })}

      <Fragment >

      </Fragment>
    </article>
  )
}

export default Poem
