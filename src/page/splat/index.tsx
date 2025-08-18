import { useParams } from "react-router";

export default function Splat() {
  const params = useParams();
  return (
    <div>
      <h1 className="text-[60px] text-purple-600">Splat Router</h1>
      <h2 className="text-[50px] text-yellow-500">{`通配符路由参数params["*"] = ` + params["*"]}</h2>
    </div>
  );
};
