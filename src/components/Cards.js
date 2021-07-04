import React from 'react'
import { CardsList } from './CardsList';


export const Cards = ({listData}) => {
  return (
    <div className="row">
      {
        listData.map(datos =>(
          <CardsList  datos={datos} key={datos.id}/>
        ))
      }
    </div>
  )
}
