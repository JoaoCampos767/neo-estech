import { Card } from 'antd';
import React from 'react';
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
  </>
);

export default App;