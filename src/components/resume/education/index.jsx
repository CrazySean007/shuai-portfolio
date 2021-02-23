import { Col, Card, Row } from "antd";
import * as Styles from "./index.module.css";
import USC from "../../../asset/usc.jpg";
import LZU from "../../../asset/lzu.jpeg";

const { Meta } = Card;

const Education = () => {
  return (
    <div className={Styles.education}>
      <h1 className={Styles.header}>Education</h1>
      <br />
      <Row>
        <Col
          xs={20}
          sm={20}
          md={8}
          lg={8}
          xl={8}
          className={Styles.education_card}
        >
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src={USC} />}
          >
            I finished my Master's Degree on Computer Science from University of
            Southern California on December 2020. During my graduate school
            year, I gained a lot of professional skills as well as great English
            spoken ability and collaboration skills while working on team
            projects with friends and classmates. I feel honorable and enjoyable
            for my experience in USC. It provides me with so much unforgettable
            memories. Most importantly, I found my love here.
            <Meta
              title="Master's Degree on Computer Science"
              description="GPA: 3.73/4.0"
              style={{ marginTop: "1rem" }}
            />
          </Card>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={8}
          lg={8}
          xl={8}
          className={Styles.education_card}
        >
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src={LZU} />}
          >
            I finished my Bachelor's Degree on Computer Science from Lanzhou
            University on December 2020. In my undergraduate study, I built a
            solid foundation wiht the mentorship of dear lecturers and
            professors. Thanks to my undergrad univeristy, I went out of my
            sweet home town and learnt how to make friends with strangers and
            embrace people from different cultural backgrounds.
            <Meta
              title="Bachelor's Degree on Computer Science"
              description="GPA: 4.65/5.0"
              style={{ marginTop: "1rem" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
