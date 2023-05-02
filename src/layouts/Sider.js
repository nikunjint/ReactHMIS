import React from "react";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { determineDefaultOpenKeys} from "../utiles/sider";
import { useLocation, useNavigate } from "react-router-dom";
const { Sider } = Layout;

const SiderLayout = (props) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const userroute = useNavigate();
  const onClick = (e) => {
    userroute(e.key);
    setCollapsed(!collapsed);
  };
  const location = useLocation();

  return (
    <div>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={collapsed ? "minwidth-40 maxwidth-40 w-40 pt-5 pb-5" : "pt-5 pb-5"}
      >
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: `trigger absolute mt-2 z-50 text-white top-0 ml-1 pb-5 ${
              collapsed ? "left-2" : "left-50"
            }`,
            onClick: () => setCollapsed(!collapsed),
          }
        )}

        <div className="logo" />
        <Menu className="mt-4"
          theme="dark"
          mode="inline"
          selectedKeys={[location?.pathname]}
          defaultOpenKeys={determineDefaultOpenKeys(location)}
          items={props.item}
          onClick={onClick}
        />
      </Sider>
    </div>
  );
};
export default SiderLayout;
