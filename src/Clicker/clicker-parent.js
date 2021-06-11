import React from "react";
import "../App.css";
import { Typography, Layout } from "antd";

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const ClickerParent = () => {
  const [score, setScore] = React.useState(0);

  return (
    <div className={"App-header"}>
      <Title level={2}>Clicker</Title>
      <Layout>
        <Sider>
          <Text>Points: {score}</Text>
        </Sider>
        <Content>Clicks Table</Content>
        <Sider>Purchases</Sider>
      </Layout>
    </div>
  );
};

export default ClickerParent;
