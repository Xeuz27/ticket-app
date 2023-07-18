import React, { useContext, useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Route,
  useNavigate,
  Routes,
} from "react-router-dom";
import Login from "./Login";
import WaitLine from "./WaitLine";
import CreateTicket from "./CreateTicket";
import Desk from "./Desk";
import { UiContext } from "../context/UiContext";
const RouterPage = () => {
  const navigate = useNavigate();
  const {hideMenuState} = useContext(UiContext)
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const handleClick = ({ label }) => {
    navigate(`/${label}`);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider hidden={hideMenuState} trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Login",
              onClick: () => {
                handleClick({ label: "login" });
              },
              // children: <Button>login</Button>
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "WaitLine",
              onClick: () => {
                handleClick({ label: "WaitLine" });
              },
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Create Ticket",
              onClick: () => {
                handleClick({ label: "Create-Ticket" });
              },
            },
          ]}
        />
      </Sider>
      <Layout>
        {/* <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header> */}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/WaitLine" element={<WaitLine />} />
            <Route path="/create-ticket" element={<CreateTicket />} />
            <Route path="/desk" element={<Desk />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RouterPage;
