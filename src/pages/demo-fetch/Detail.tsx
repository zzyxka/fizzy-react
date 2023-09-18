import React, { useState } from "react";

async function fetchDetail(name): object {
  const res = await fetch(`${process.env.POKE_API}/v2/pokemon/${name}`);
  const data = await res.json();
  return data;
}

export default function Detail({ name }) {
  const [detail, setDetail] = useState({});

  return detail.sprites ? (
    <img src={detail.sprites.front_default} alt="pokemon" />
  ) : (
    <button
      onClick={async (): void => {
        const data = await fetchDetail(name);
        setDetail(data);
      }}
    >
      查看详情
    </button>
  );
}
