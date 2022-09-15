import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Btn() {
  return (
    <>
      <Link to={{pathname: "/table"}}>
        <Button type="primary">Tabela de Chamados</Button>
      </Link>

      <Link to={{pathname: "/chart"}}>
        <Button type="primary">Graficos</Button>
      </Link>

      <Link to={{pathname: "/card"}}>
        <Button type="primary">Cartões</Button>
      </Link>
    </>
  );
}
