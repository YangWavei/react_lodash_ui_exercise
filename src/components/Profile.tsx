import type { ReactNode } from "react";

/** Profile组件，将子组件作为属性传入 */
function Profile() {
  return (
    <div>
      <Card >
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}


interface cardPropsType {
  children?: ReactNode
}

function Card({ children }: cardPropsType) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Profile
