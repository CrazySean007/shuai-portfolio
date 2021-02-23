import { Timeline, Card, Col } from "antd";
import * as Styles from "./index.module.css";
import { useState } from "react";

const { Meta } = Card;
const { Item } = Timeline;

const Label = ({ start, end }) => {
  return (
    <Col
      xs={16}
      sm={16}
      md={16}
      lg={16}
      xl={16}
      style={{
        textAlign: "center",
        margin: 0,
        float: "right",
        lineHeight: "1rem",
        position: "relative",
        left: "-1rem",
      }}
    >
      {start} <br />
      {end && (
        <span>
          | <br /> {end}
        </span>
      )}
    </Col>
  );
};

const Experience = () => {
  const [showIntern, setShowIntern] = useState(false);
  const [shoppingMall, setShoppingMall] = useState(false);
  const [latimes, setLatimes] = useState(false);
  const [weather, setWeather] = useState(false);
  let timeout = undefined;

  return (
    <div className={Styles.experience}>
      <h1 className={Styles.header}>Experience</h1>
      <br />
      <div>
        <Timeline mode={"left"} className={Styles.timeline}>
          <Item label={<Label start="Aug 2020" end="Dec 2020" />}>
            <Col className={Styles.education_card}>
              <Card
                hoverable
                className={Styles.card_content}
                onMouseEnter={() => {
                  clearTimeout(timeout);
                  timeout = setTimeout(() => setShowIntern(true), 300);
                }}
                onMouseLeave={() => {
                  clearTimeout(timeout);
                  timeout = setTimeout(() => setShowIntern(false), 300);
                }}
              >
                <Meta
                  title="Frontend Software Engineer"
                  description="@TableFlash Co."
                />
                {showIntern && (
                  <div>
                    • Utilize React to implement customer components and
                    restaurant management system and collaborate with three
                    other engineers and maintain best version practice control
                    using Git
                    <br />
                    • Improve First Meaningful Paint(FMP) time by 30% faster by
                    implementing Lazyload features and expand user range with
                    switching languages(Chinese and English) feature <br />
                    • Optimize food order logic by designing new order flows and
                    UI patterns <br />
                    • Reform Log in/Sign up workflows with new UI and
                    client-side encryption of password <br />• Provide succinct
                    and pretty home page UI by implementing two-column masonry
                    to display restaurant deals
                  </div>
                )}
              </Card>
            </Col>
          </Item>
          <Item label={<Label start="Jun 2020" end="Jul 2020" />}>
            <Col className={Styles.education_card}>
              <Card
                hoverable
                className={Styles.card_content}
                onMouseEnter={() => {
                  clearTimeout(timeout);
                  timeout = setTimeout(() => setShoppingMall(true), 300);
                }}
                onMouseLeave={() => {
                  clearTimeout(timeout);
                  timeout = setTimeout(() => setShoppingMall(false), 300);
                }}
              >
                <Meta
                  title="E-mall management system"
                  description="@project leader"
                />
                {shoppingMall && (
                  <div>
                    • Implemented a comprehensive management system using React
                    and Ant Design to display and manage users, products, access
                    and categories information <br />• Fetch weather information
                    from Dark Sky API(https://api.forecast.io/forecast) and
                    display in user status navigation part with a small icon
                  </div>
                )}
              </Card>
            </Col>
          </Item>
          <Item label={<Label start="Jan 2020" />}>
            <Col className={Styles.education_card}>
              <Card
                hoverable
                className={Styles.card_content}
                onMouseEnter={() => {
                  clearTimeout(timeout);
                  timeout = setTimeout(() => setLatimes(true), 300);
                }}
                onMouseLeave={() => {
                  clearTimeout(timeout);
                  timeout = setTimeout(() => setLatimes(false), 300);
                }}
              >
                <Meta
                  title="Simple Search Engine for LA Times"
                  description="@school project"
                />
                {latimes && (
                  <div>
                    • Implemented a simple search engine backend and frontend
                    using JavaScript and PHP
                    <br />
                    • Build the search engine based on Apache Solr, crawl over
                    20,000 pages from LA Times and index the crawled pages for
                    searching engines
                    <br />• Improve the ranking results by applying PageRank
                    algorithm and compared with the results from Solr default
                    ranks
                  </div>
                )}
              </Card>
            </Col>
          </Item>
          <Item label={<Label start="Sept 2019" />}>
            <Col className={Styles.education_card}>
              <Card
                hoverable
                className={Styles.card_content}
                onMouseEnter={() => {
                  clearTimeout(timeout);
                  timeout = setTimeout(() => setWeather(true), 300);
                }}
                onMouseLeave={() => {
                  clearTimeout(timeout);
                  timeout = setTimeout(() => setWeather(false), 300);
                }}
              >
                <Meta
                  title="Weather Forecast Application"
                  description="@school project"
                />
                {weather && (
                  <div>
                    Frontend:
                    <br />
                    • Build a responsive weather forecast website based on
                    Angular8 and Bootstrap which allows users to look up
                    information about weather, temperature, wind speed, etc.
                    within a week.
                    <br />
                    • Support IP-based and input-based lookup for weather
                    conditions with Geolocation API and Weather API
                    <br />
                    • Improve UX by performing auto-complete for city name input
                    based on Google city auto-complete API
                    <br />
                    Backend:
                    <br />
                    • Launch a scalable web service using node.js to handle
                    requests and process the JSON-format data returned
                    <br />
                  </div>
                )}
              </Card>
            </Col>
          </Item>
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
