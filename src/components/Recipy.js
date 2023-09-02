import React from 'react'
import './Reciepy.css'

export default function Recipy(props) {
  
  return (
    <div className="accordion accordion-flush  setup" id="accordionFlushExample" >
  <div className="accordion-item ">
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        DISH 1 RECIPE
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body  bod" ><h4>{props.food.re1}</h4></div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        DISH 2 RECIPE
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bod" ><h4>{props.food.re2}</h4></div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        DISH 3 RECIPE
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bod" ><h4>{props.food.re3}</h4></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        DISH 4 RECIPE
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bod"><h4>{props.food.re4}</h4></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        DISH 5 RECIPE
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bod"><h4>{props.food.re5}</h4></div>
    </div>
  </div>
</div>
  )
}
