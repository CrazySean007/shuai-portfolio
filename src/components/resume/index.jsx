import * as Styles from "./index.module.css";
import { Layout, Menu, Row, Col } from "antd";
import { useState } from "react";
import Profile from "./profile";
import Education from "./education";
import Career from "./career";
import Experience from "./experience";
import { MenuOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const ResumeBook = () => {
  const [selectedKey, setSelectedKey] = useState("3");

  const setCurrentTab = (e) => {
    const { key } = e;
    setSelectedKey(key);
  };

  return (
    <div className={Styles.resume}>
      <Layout>
        <Header className={Styles.header}>
          <Row>
            <Col xl={12} lg={12} md={12} sm={17} xs={15}>
              <div className={Styles.logo}>
                Shuai Ma, MSc
                <br />
                Frontend Engineer
              </div>
            </Col>
            <Col xl={12} lg={12} md={12} sm={7} xs={9}>
              <Menu
                className={Styles.navi_tab}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={selectedKey}
                onClick={(e) => setCurrentTab(e)}
                overflowedIndicator={<MenuOutlined />}
              >
                <Menu.Item key="1">My profile</Menu.Item>
                <Menu.Item key="2">Education</Menu.Item>
                <Menu.Item key="3">Experience</Menu.Item>
                <Menu.Item key="4">Career</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content className={Styles.resume_content}>
          {selectedKey === "1" && <Profile />}
          {selectedKey === "2" && <Education />}
          {selectedKey === "3" && <Experience />}
          {selectedKey === "4" && <Career />}
        </Content>
        <Footer className={Styles.footer} style={{ textAlign: "center" }}>
          To discuss projects or opportunities get in touch at{" "}
          <a
            href="mailto:shuaim@usc.edu"
            style={{ textDecoration: "underline" }}
          >
            shuaim@usc.edu
          </a>
        </Footer>
      </Layout>
    </div>
  );
};

export default ResumeBook;
