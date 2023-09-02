import React from 'react'
import './Vegies.css'
export default function Vegies(props) {
   console.log(props.food['veg1']);
  return (
    <div className='my4'>
      <div className="d-flex flex-column mb-3  my-4 justify-content-between">
  <div className="p-2  bord">{props.food['veg1'] }</div>
  <div className="p-2  bord">{props.food['veg2'] }</div>
<div className="p-2  bord">{props.food['veg3'] }</div>
<div className="p-2  bord">{props.food['veg4'] }</div>
<div className="p-2  bord">{props.food['veg5'] }</div>
<div className="p-2  bord">{props.food['veg6'] }</div>
<div className="p-2  bord">{props.food['veg7'] }</div>
<div className="p-2  bord">{props.food['veg8'] }</div>
<div className="p-2  bord">{props.food['veg9'] }</div>
<div className="p-2  bord">{props.food['veg10'] }</div>
</div>
    </div>
  )
}
