import React, { useEffect, useState } from "react";
import style from "./list.css";
import { Link, useNavigate } from "react-router-dom";
import { FIZZY_REACT_LIST_MOCK_DATA } from "@/constant/storage";
import { Button } from "antd";

export default function List(): React.ReactElement<any, any> {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const initData = [
      { id: 1, description: "Item 1" },
      { id: 2, description: "Item 2" },
      { id: 3, description: "Item 3" },
    ];
    const _localData = localStorage.getItem(FIZZY_REACT_LIST_MOCK_DATA) ?? "";
    // 缓存数据为长度大于0的数组，则使用缓存数据，否则使用初始数据
    try {
      const _arr = JSON.parse(_localData);
      if (Array.isArray(_arr) && _arr.length > 0) {
        setData(_arr);
        return;
      }
      setData(initData);
      localStorage.setItem(
        FIZZY_REACT_LIST_MOCK_DATA,
        JSON.stringify(initData),
      );
    } catch (e) {
      setData(initData);
      localStorage.setItem(
        FIZZY_REACT_LIST_MOCK_DATA,
        JSON.stringify(initData),
      );
    }
  }, []);

  return (
    <>
      <h3>List</h3>
      <Button
        className={style.add}
        type="primary"
        onClick={() => {
          navigate("/demo-edit");
        }}
      >
        Add
      </Button>
      <table className={style.list} border={1}>
        <thead>
          <tr className={style.item}>
            <th>ID</th>
            <th>description</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className={style.item}>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td>
                <Button
                  type="primary"
                  onClick={() => {
                    navigate(`/demo-detail/${item.id}`);
                  }}
                >
                  Detail
                </Button>
                &nbsp;
                <Button
                  type="primary"
                  onClick={() => {
                    navigate(`/demo-edit/${item.id}`);
                  }}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
