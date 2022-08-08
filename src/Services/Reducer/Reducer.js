import { Add_TO_CART,REMOVE_TO_CART } from  '../Constant'
const initialState ={
    cardData: []
}
export default function cardItems(state = [] ,action){
     
    switch(action.type){
        case Add_TO_CART:

       // console.warn('Reducer' .action)
           
        return[
            ... state,
            {cardData: action.data}
        ]
            case REMOVE_TO_CART:

                // console.warn('Reducer' .action)
                    state.pop();
                 return[
                     ... state,
                     
                 ]
        
        default: 
        return state
    }
}  