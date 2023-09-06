import React from 'react'
import { useParams } from 'react-router-dom';

export default function Detail () {
  const { detailId } = useParams();
  return (
    <div>DetailID: {detailId}</div>
  )
}
