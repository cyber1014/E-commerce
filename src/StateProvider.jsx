import React, { createContext, useContext, useReducer } from "react";
//we need this to track the basket
//this is data layer
export const StateContext = createContext();

//Build  A provider wrap a entire app inside of this provider and the give the acces to ths+is data layer
//intialState hoe the data layer looks like an initial
//children is represeting the app of this page
//propertu called value this is saying use like a datalayer to store the information
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we used it inside the component

export const useStateValue = () => useContext(StateContext);
