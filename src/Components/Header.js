import React from 'react'


function Header(props) {
    console.warn("Header",props.data)
    return (
        <div>
          
            <div className="add-to-cart">
               <span className="cart-count">{props.data.length}</span> 
               
                <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" />
            </div>   
          
        </div>

    )
}
export default Headers