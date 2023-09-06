import React from 'react'
import { useParams } from 'react-router-dom';

export default function Edit (): React.ReactElement<any, any> {
  const { editId } = useParams();
  // 有 editId 则为编辑，否则为新增
  return (
    <div>
      {editId ? `EditID: ${editId}` : 'Add'}
    </div>
  )
}
