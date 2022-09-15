import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Card } from "antd";
import "./styles.css";

export default function Cardd() {
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
        console.log(response.data.status_internet);
        setQrcode(response.data.status_internet);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const App = () => (
    <>
      {qrcode.map((data) => {
        return (
          <Card title="Status da Estação">
            <div>{data.nome}</div>
            <div>Status: {data.status}</div>
          </Card>
        );
      })}

      <Link to={{ pathname: "/" }}>
        <Button className="ant-btn-card" type="link">Voltar</Button>
      </Link>
    </>
  );

  return (
    <>
      <App />
    </>
  );
}
