import React, { useEffect, useState } from 'react'
import style from './list.css'
import { Link } from 'react-router-dom';
import {FIZZY_REACT_LIST_MOCK_DATA} from '@/constant/storage'

export default function List (): React.ReactElement<any, any> {
  const [data, setData] = useState([]);
  useEffect(() => {
    const initData = [
      { id: 1, description: 'Item 1' },
      { id: 2, description: 'Item 2' },
      { id: 3, description: 'Item 3' }
    ];
    const _localData = localStorage.getItem(FIZZY_REACT_LIST_MOCK_DATA) || '';
    // 缓存数据为长度大于0的数组，则使用缓存数据，否则使用初始数据
    try {
      const _arr = JSON.parse(_localData);
      if (Array.isArray(_arr) && _arr.length > 0) {
        setData(_arr);
        return;
      }
      setData(initData);
      localStorage.setItem(FIZZY_REACT_LIST_MOCK_DATA, JSON.stringify(initData));
    } catch (e) {
      setData(initData);
      localStorage.setItem(FIZZY_REACT_LIST_MOCK_DATA, JSON.stringify(initData));
    }
  }, []);

  return (
    <>
      <Link to="/demo-edit" className={style.add}>Add</Link>
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
                <Link to={`/demo-detail/${item.id}`}>Detail</Link>
                &nbsp;
                <Link to={`/demo-edit/${item.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
