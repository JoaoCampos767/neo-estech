import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./styles.css";

export default function Tabled() {
  const [qrcode, setQrcode] = useState([]);

  useEffect(() => {
    const config = {
      method: "GET",
      url: "https://dev.api.neoestech.com.br/dashboard/teste-dev",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer 1462|xhkruOA7Q2yL9WQyvHW3pEI6HF0vS5SJzmsRHClE",
      },
    };

    axios
      .request(config)
      .then(function (response) {
        setQrcode(response.data.chamados_abertos);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      title: "QR Code",
      dataIndex: "qrcode",
      key: "qrcode",
    },
    {
      title: "Referência Cliente",
      dataIndex: "referencia_cliente",
      key: "referencia_cliente",
    },
    {
      title: "Problema",
      dataIndex: "problema",
      key: "problema",
    },
    {
      title: "Status do Chamado",
      dataIndex: "status",
      key: "status",
    },
  ];

  /*const App = () => (
    <Table dataSource={qrcode} columns={columns}>
      {qrcode.map((data) => {
        return <div>{data.qrcode}</div>;
      })}
    </Table>
  );*/

  const App = () => <Table dataSource={qrcode} columns={columns} />;

  return (
    <>
      <App />
      <Link to={{pathname: "/"}}>
        <Button type="link">Voltar</Button>
      </Link>
    </>
  );
}
