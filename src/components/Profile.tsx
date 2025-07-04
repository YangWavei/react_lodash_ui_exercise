import type { ReactNode } from "react";

/** Profile组件，将子组件作为属性传入 */
function Profile() {
  return (
    <div>
      <Card name={"Photo"} imgUrl="https://i.imgur.com/OKS67lhm.jpg" size={80} />
      <Card name="About" >
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}


interface cardPropsType {
  name: string,
  imgUrl?: string,
  size?: number,
  children?: ReactNode
}

function Card({ name, imgUrl, size = 70, children }: cardPropsType) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Photo</h1>
        {/* 根据是否传入imgUrl属性来决定是否渲染图片
        若未传入则渲染插槽内容 */}
        {imgUrl ? (
          <img
            className="avatar"
            src={imgUrl}
            alt={name}
            width={size}
            height={size}
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export default Profile
