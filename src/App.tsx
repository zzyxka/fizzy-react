// App.tsx
import React from 'react';
import style from './style.css';

export default function App (): React.ReactElement<any, any> {
  return (
    <div><h1 className={style.h1}>Hello <span>Fizzy</span> React !</h1></div>
  )
}
