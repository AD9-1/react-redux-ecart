import React from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { AddToCart as AddToCartAction } from "./redux/action/action";
const AddToCart = ({token,cartItem}) => {
    const dispatch = useDispatch();
    const addTocart=async(cartItem)=>{
        dispatch(AddToCartAction(cartItem))
                try{
                    if(token)
                        {
                            console.log("Add to cart",token)
                        await fetch("http://localhost:2000/user/addToCart",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json",
                            "Authorization":`Bearer ${token}`
                        },
                        body:JSON.stringify({cartItem})
                    })
                }
               
                }
                catch(err)
                {
                  toast.error("Error adding to cart",err)
                    return;
                }
            }
            return(
                <button
                className="btn btn-warning me-3"
                onClick={() => addTocart(cartItem)}
              >
                Add To Cart
              </button>
            )
             
    }
   


export default AddToCart
