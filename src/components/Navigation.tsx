import { Button, Space } from "antd";
import { Link, useLocation } from "react-router";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <div className="p-4 bg-gray-100 border-b">
      <Space>
        <Link to="/">
          <Button type={location.pathname === "/" ? "primary" : "default"}>
            首页
          </Button>
        </Link>
        <Link to="/detail/123">
          <Button type={location.pathname.startsWith("/detail") ? "primary" : "default"}>
            详情页 (ID: 123)
          </Button>
        </Link>
        <Link to="/detail/456">
          <Button type={location.pathname.startsWith("/detail") ? "primary" : "default"}>
            详情页 (ID: 456)
          </Button>
        </Link>
      </Space>
      <div className="mt-2 text-sm text-gray-500">
        当前路径: {location.pathname}
      </div>
    </div>
  );
};

export default Navigation; 