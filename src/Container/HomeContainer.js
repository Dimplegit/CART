import {connect} from 'react-redux'
import Home from '../Components/Home'
import { addToCart,removeToCart} from '../Services/Action/Action'

  
const mapStateToProps=state => ({
   data:state.cardItems
    

})
const mapDispatchToProps= dispatch=> ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler:() => dispatch(removeToCart())


})
export default connect(mapStateToProps,mapDispatchToProps)(Home)


//export default Home;