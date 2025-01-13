export const AddToCart = (item) => {
  return {
    type: "ADDITEM",
    payload: item,
  };
};
export const RemoveFromCart = (item) => {
  return {
    type: "REMOVEITEM",
    payload: item,
  };
};
 export const ClearCart=()=>{
   return {
     type:"CLEARCART",
     payload:[],
   }
 }

