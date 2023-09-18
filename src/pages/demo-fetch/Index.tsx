import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import { Table } from "antd";

export default function Index(): React.ReactElement<any, any> {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async (): void => {
      const res = await fetch(`${process.env.POKE_API}/v2/pokemon`);
      const data = await res.json();
      console.log("data: ", data);
      setList(data.results);
    })();
  }, []);

  return (
    <div
      style={{
        height: "100%",
        overflow: "hidden",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <h3>FetchList</h3>
      <Table
        style={{ flex: 1 }}
        bordered
        scroll={{ y: "calc(100vh - 200px)" }}
        columns={[
          { title: "name", dataIndex: "name" },
          {
            title: "Operation",
            dataIndex: "operation",
            render: (text, { name }) => <Detail name={name} key={name} />,
          },
        ]}
        dataSource={list}
      />
    </div>
  );
}
