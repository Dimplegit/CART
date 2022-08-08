import React from "react";


function Home(props) {
    console.warn("Home", props)
    console.warn('props', props)
    return (
        <div>
           
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" />
            </div>
            <h1>GET YOUR DEVICE </h1>
            <div className="cart-warper " >
                <div className="img-warper item">
                    <img src=" https://www.globalbrandsmagazine.com/wp-content/uploads/2020/08/Top-10-Mobile-Brands-in-World-1-1.jpg" />
                </div>
                <div className="text-warper item">
                    <span>
                        I-phone
                    </span>

                    <span> <br></br>
                        Starts From: 1000$

                    </span>

                </div>
                <div className="btn-warper item">
                    <button
                        onClick={() =>
                            props.addToCartHandler({ prise: 1000, name: "i-phone 12" })
                        }> Add to Cart</button>
                    <button
                        className="remove-cart-btn"
                        onClick={() => { props.removeToCartHandler() }
                        }>
                        Remove to cart </button>
                </div>
               
            </div>
        </div>
    )
}
export default Home;