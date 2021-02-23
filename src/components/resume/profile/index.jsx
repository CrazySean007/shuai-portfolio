import * as Styles from "./index.module.css";
import { Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Picture from "../../../asset/myself.jpg";
const Profile = () => {
  return (
    <div className={Styles.profile}>
      <Row>
        <Col xs={20} sm={20} md={10} lg={10} xl={10}>
          <div className={Styles.self_introduction}>
            <div>
              <p className={Styles.sim_intro}>
                Explorer, Adventurer, Frontend Software Engineer to constantly
                discover new areas
              </p>
              <p className={Styles.cla_intro}>
                <ArrowRightOutlined />
                UI/UX/CSS/REACT/CSS/HTML designer & learner
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <div className={Styles.self_image}>
            <img className={Styles.self_portrait} src={Picture} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
