import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Card } from "antd";
import "./styles.css";

const App = () => (
  <>
    <Card
      title="Default size card"
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    
    <Link to={{ pathname: "/" }}>
      <Button type="link">Voltar</Button>
    </Link>
  </>
);

export default App;
