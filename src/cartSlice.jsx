import {createSlice} from '@reduxjs/toolkit'
import { message } from 'antd';



const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartValue:[]
    },
    reducers:{
        addToCart: (state,action)=>{
            const foundItem = state.cartValue.find((item)=> item.id == action.payload.id)
            if(foundItem){
                message.warning("Item already in cart")
            }
            else{
                state.cartValue.push(action.payload)
                message.success("Item successfully added to cart")
            }        
            

        },
        removeFromCart: (state,action)=>{
            state.cartValue = state.cartValue.filter((item)=>{
                return item.id != action.payload
            })

        },
        increaseQuantity: (state,action)=>{
            state.cartValue.map((item)=>{
                if(item.id == action.payload){
                    item.quantity++
                }
            })
        },
        decreaseQuantity: (state,action)=>{
            state.cartValue.map((item)=>{
                if(item.id == action.payload){
                    if(item.quantity > 1){
                        item.quantity--
                    }
                }
                else{
                    message.error("Quantity cannot be less than 1")
                }
            })
        }
    }
})

export default cartSlice.reducer

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity}= cartSlice.actions