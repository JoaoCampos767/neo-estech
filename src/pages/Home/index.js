import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../Table";
import "./styles.css";

const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Tabela de Chamados
        <Link to={{ pathname: "/table" }} />
      </a>
    ),
    key: "table",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Gráfico
        <Link to={{ pathname: "/chart" }} />
      </a>
    ),
    key: "chart",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Status da Estação
        <Link to={{ pathname: "/card" }} />
      </a>
    ),
    key: "card",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Log in
        <Link to={{ pathname: "/" }} />
      </a>
    ),
    key: "login",
  },
];

const App = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default App;

/*
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Btn() {
  return (
    <>
      <div className="home-wrapper">
        <Link to={{ pathname: "/table" }}>
          <Button className="ant-btn-home" type="primary">
            Tabela de Chamados
          </Button>
        </Link>

        <Link to={{ pathname: "/chart" }}>
          <Button className="ant-btn-home" type="primary">
            Graficos
          </Button>
        </Link>

        <Link to={{ pathname: "/card" }}>
          <Button className="ant-btn-home" type="primary">
            Cartões
          </Button>
        </Link>
      </div>
    </>
  );
}/
*/
