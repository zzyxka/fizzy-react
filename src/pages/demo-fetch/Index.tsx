import React, { useEffect, useState } from "react";
import style from "./list.css";

async function fetchDetail(name): object {
  const res = await fetch(`${process.env.POKE_API}/v2/pokemon/${name}`);
  const data = await res.json();
  return data;
}

export default function Index(): React.ReactElement<any, any> {
  const [list, setList] = useState([]);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    (async (): void => {
      const res = await fetch(`${process.env.POKE_API}/v2/pokemon`);
      const data = await res.json();
      console.log("data: ", data);
      setList(data.results);
    })();
  }, []);

  return (
    <>
      <h3>FetchList</h3>
      <div style={{ display: "flex" }}>
        <table className={style.list} border={1}>
          <thead>
            <tr className={style.item}>
              <th>ID</th>
              <th>operation</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.name} className={style.item}>
                <td>{item.name}</td>
                <td>
                  <button
                    onClick={async (): void => {
                      const data = await fetchDetail(item.name);
                      setDetail(data);
                    }}
                  >
                    查看详情
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {detail.sprites && (
          <div>
            <img src={detail.sprites.front_default} alt="pokemon" />
          </div>
        )}
      </div>
    </>
  );
}
