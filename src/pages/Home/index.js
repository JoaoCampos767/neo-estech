import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

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
          <Button type="primary">Graficos</Button>
        </Link>

        <Link to={{ pathname: "/card" }}>
          <Button type="primary">Cartões</Button>
        </Link>
      </div>
    </>
  );
}
