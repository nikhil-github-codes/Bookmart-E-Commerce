import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cartdata: {
        
        Products: [

        ],
        Subtotal: 0,
       
       
    }

    // cartdata:null

}

export const Cartslice = createSlice({
    name: "cartdata",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            //    console.log("action",action)
            const { datacart } = action.payload
            state.cartdata = datacart
            // // state.cartdata.Products.push(datacart)


        },

        setCartData: (state, action) => {
                // console.log("action",action)
            const {cart}= action.payload;
            state.cartdata=cart 
        }

    }

})



export const { addtocart,setCartData } = Cartslice.actions;

export default Cartslice.reducer;
