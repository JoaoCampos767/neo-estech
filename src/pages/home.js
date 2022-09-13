import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/table.css";

export default function Home() {
  const [qrcode, setQrcode] = useState({});

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://dev.api.neoestech.com.br/dashboard/teste-dev",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer 1462|xhkruOA7Q2yL9WQyvHW3pEI6HF0vS5SJzmsRHClE",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setQrcode(response.data.chamados_abertos);

        data();
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
      dataIndex: "referencia",
      key: "referencia",
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

  const data = [
    () => {
      qrcode.map((q) => {        
        console.log(
          q.id +
            " / " +
            q.referencia_cliente +
            " / " +
            q.problema +
            " / " +
            q.status
        );
      });
    },
  ];

  return (
    <>
      {data}
      <Table columns={columns} dataSource={data} />
    </>
  );
}
