import React from "react";
import { Layout, theme } from "antd";
import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import SiderLayout from "./Sider";
import { analyticsitems } from "../utiles/analyticsSidebar";


const { Header, Content } = Layout;

const AnalyticsLayout = () => {
    const {
        token: { colorBgContainer }, 
      } = theme.useToken();
    return (
      <Layout className="min-h-screen">
        <SiderLayout item={analyticsitems}/>
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
 

export default AnalyticsLayout;
