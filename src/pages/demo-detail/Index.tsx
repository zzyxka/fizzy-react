import React from 'react'
import { useParams } from 'react-router-dom';

export default function Detail (): React.ReactElement<any, any> {
  const { detailId } = useParams();
  return (
    <div>DetailID: {detailId}</div>
  )
}
