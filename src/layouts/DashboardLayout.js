import React from "react";
import { Layout, theme } from "antd";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import SiderLayout from "./Sider";
import { useSelector } from "react-redux";
import { getAccessToken } from "../utiles/aauthToken";
import { items } from "../utiles/sider";

const { Header, Content } = Layout;

const DashboardLayout = () => {
  const data = useSelector((state) => state.auth.userInfo?.data?.user);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  if (data && getAccessToken()) {
    return (
      <Layout className="min-h-screen">
        <SiderLayout item={items}/>
        <Layout className="site-layout pl-50 bg-sky-100">
          <Header
            className="h-fit "
            style={{ padding: 0, background: colorBgContainer }}
          >
            <Navbar className="container" />
          </Header>
          <Content
            className="main-content dark:bg-black pt-2"
            style={{
              margin: "14px 14px",
              padding: 10,
              paddingLeft:10,
              paddingRight:10,
              minHeight: 280,
              background: colorBgContainer,
              borderTop: "3px solid #0d2f66",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
  if (!(data || getAccessToken())) {
    return <Navigate to="/login" />;
  }

  return null;
};

export default DashboardLayout;
