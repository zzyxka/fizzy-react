import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Detail(): React.ReactElement<any, any> {
  const { detailId } = useParams();
  const loaderData = useLoaderData();
  console.log("loaderData", loaderData);

  return <div>DetailID: {detailId}</div>;
}
