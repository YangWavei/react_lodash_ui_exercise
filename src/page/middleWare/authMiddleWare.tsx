import type { User } from "@/router";
import { Card, Spin } from "antd";
import { useEffect, useState } from "react";
import { redirect, useLoaderData, useNavigation } from "react-router";

type LoaderData = User | null;

export default function AuthMiddleWare() {
  const data = useLoaderData() as LoaderData;
  const navigation = useNavigation();
  const [delayed, setDelayed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDelayed(true), 200);
    return () => clearTimeout(t);
  }, []);

  // 加载中（进入路由或loader运行中）
  if (navigation.state === 'loading' || (!data && !delayed)) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Spin size="large" tip="加载中..." />
      </div>
    );
  }

  // 未登录
  if (!data) {
    throw redirect('/login');
  }

  // 加载成功
  return (
    <div className="p-6">
      <Card title="用户信息" variant="borderless" className="max-w-xl">
        <div>姓名：{data.name}</div>
        <div>用户ID：{data.id}</div>
        <div>年龄：{data.age}</div>
      </Card>
    </div>
  );
}