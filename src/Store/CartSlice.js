import { createSlice} from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name : 'cart',
    initialState : {
        cart : [],
    },
    reducers : {
        addCart :(state , action) => {
         let productData = action.payload;
         let pid = productData.id;
         let existingProductIdx = state.cart.findIndex((cartobj) => cartobj.data.id == pid);
         if(existingProductIdx != -1){
            let existingProduct  = state.cart[existingProductIdx];
            existingProduct.quantity = existingProduct.quantity +1;
         }else{
            let cartobj = {data: productData , quantity : 1};
            state.cart.push(cartobj);
         }
        },
        removeCart : (state , action)=>{
            let pid = action.payload;
            let existingProductIdx = state.cart.findIndex((cartobj) => cartobj.data.id == pid);
            state.cart.splice(existingProductIdx,1);
        },
        QuantityIncrease : (state , action)=>{
              let pid = action.payload;
      let existingProductIdx = state.cart.findIndex(
        (cartObj) => cartObj.data.id === pid
      );

      let existingProduct = state.cart[existingProductIdx];
      existingProduct.quantity = existingProduct.quantity + 1;
      
        },
        QuantityDecrease : (state , action)=>{
            
            let pid = action.payload;
            let existingProductIdx = state.cart.findIndex((cartobj) => cartobj.data.id == pid);
           
               let existingProduct  = state.cart[existingProductIdx];
               if(existingProduct.quantity > 1)
               existingProduct.quantity = existingProduct.quantity -1;
            else{
                state.cart.splice(existingProductIdx,1);
            }
        },
        clearCart : (state)=>{
            state.cart = [];
        }, AscendingRating: (state) => {
            state.cart.sort((a, b) => a.data.rating - b.data.rating);
        },
        DescendingRating: (state) => {
            state.cart.sort((a, b) => b.data.rating - a.data.rating);
        }
    }
});
export const {addCart , removeCart , QuantityDecrease , QuantityIncrease , clearCart , AscendingRating , DescendingRating} = CartSlice.actions;
export default CartSlice.reducer;