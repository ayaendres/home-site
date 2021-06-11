import { Space, Typography, Row, Col, Card } from "antd";
import React from "react";
import "../App.css";

const { Text, Link } = Typography;
const Home = () => {
  return (
    <div className="App-header">
      <Row>
        <Text style={{ fontSize: "40px" }}>🌸 Aya Endres (she/her) 🌸</Text>
      </Row>
      <Row>
        <Text style={{ fontSize: "25px" }}>
          React, Gardening 🌱, LGBTQ+ Advocacy 🏳‍🌈
        </Text>
      </Row>
      <Card
        style={{
          marginTop: 50,
          height: 500,
          width: 500,
          backgroundColor: "#fdb0c0",
        }}
      >
        <Row>
          <Text style={{ fontSize: "30px", fontFamily: "Lucida Handwriting" }}>
            Stuff ✨
          </Text>
        </Row>
        <Row>
          <Link href={"/clicker"} style={{ fontSize: 20 }}>
            Clicker Game
          </Link>
        </Row>
      </Card>
    </div>
  );
};

export default Home;
