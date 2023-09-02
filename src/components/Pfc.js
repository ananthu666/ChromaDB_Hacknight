import React from 'react'
import './Pfc.css'

export default function Pfc(props) {
  return (
    <div className='cont'>
      <div className="container">
        <h2>Nutritional Input</h2>
        <form>
            <div className="form-group">
                <label htmlFor="protein">Protein (g):</label>
                <input type="number" id="protein" placeholder="Enter protein amount (100 grams)" required/>
            </div>

            <div className="form-group">
                <label htmlFor="fat">Fat (g):</label>
                <input type="number" id="fat" placeholder="Enter fat amount (100 grams)" required/>
            </div>

            <div className="form-group">
                <label htmlFor="carbohydrates">Carbohydrates (g):</label>
                <input type="number" id="carbohydrates" placeholder="Enter carbohydrate amount (100 grams)" required/>
            </div>

        </form>
            <button onClick={props.generateMeal}>Generate Meal</button>
    </div>
    </div>
  )
}
