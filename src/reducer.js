//this is datalaayer logic is going on header__optionLineOne
//state:anything inside the data layer is state
//action:is add basket add item to basket remove item to basket
export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET__USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //logic of to ADD TO BASKET
      //return cureently was the user it and the return the initial state in the baskey a
      return {
        //return ...state represent the initial state and the new data layer also show in the code that's why its used
        //but change the basket

        ...state, //returing the current state
        basket: [...state.basket, action.item], //and retun the basket what ever currently was and what ever i added
        //its represent the whatever you have in the basket and the cureent item you have in the basket
      };
      break;
    case "REMOVE_FROM_BASKET":
      //we clone the basket
      let newBasket = [...state.basket]; //return the whatever current basket
      //logic for removing the item from basket
      //we check
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);

        //item exist in the basket and remove it
      } else {
        console.warn(`cant remove product (id: ${action.id}) as it now`);
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
}

export default reducer;
