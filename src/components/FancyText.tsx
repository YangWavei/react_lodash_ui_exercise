interface FancyTextParamsType {
  title?: string,
  text: string
}

function FancyText({ title, text }: FancyTextParamsType) {
  return title
    ? <h2 className="fancy title">{text}</h2>
    : <h3 className="fancy cursive">{text}</h3 >
  // cursive 草书/手写体 (的)
}
export default FancyText
