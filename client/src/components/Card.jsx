import React, { useState } from 'react';

const Card = () => {
    const [quantity, setQuantity] = useState([1, 2, 3, 4, 5, 6])
    const [size, setSize] = useState(['small', 'medium', 'large'])
  return (
    <div className="card m-5 " style={{ "width": "20rem", maxHeight: '300px' }}>
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">Vegeterian Pizza</h5>
        <p className="card-text">So many veggie pizza toppings would be great here.
            Add sautéed mushrooms, sliced olives, or mini broccoli florets.</p>
        <div className="container-fluid w-100" >
            {/* quantity dropdown */}
           
        
            <select name="quantity" id="quantity" className='m-2 bg-tertiary h-100 w-30 rounded'>
                {quantity.map((value, i) => {
                    return (
                        <option key={i} value={value}>{value}</option>
                    )

                })}

            </select>
            
            {/* Size dropdown  */}
            
           
            <select name="quantity" id="quantity" className='m-2 bg-tertiary h-100 w-30 rounded'>
                {size.map((value, i) => {
                    return (
                        <option key={i} value={value}>{value}</option>
                    )

                })}

            </select>
            <div className="d-inline">
                Total Price
            </div>
           
        </div>

    </div>
</div>
  );
}

export default Card;
