import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from 'react-redux'
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
import { sendCartData, fetchData } from "./store/cart-actions";


let isFirstRender = true;

function App() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const notification = useSelector((state) => state.ui.notification)

  // console.log(isLoggedIn)
  // const cartItems = useSelector((state) => state.cart.itemsList)
  // console.log(cartItems)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if(isFirstRender){
      isFirstRender = false;
      return
    }
    // const sendRequest = async () => {
    //   dispatch(uiActions.showNotification({
    //     open: true,
    //     message: "Sending Request",
    //     type: 'warning'
    //   }))

    //   const response = await fetch('https://redux-http-c6843-default-rtdb.firebaseio.com/cartItems.json', {
    //                                   method: "PUT",
    //                                   body: JSON.stringify(cart) })
    //   const data = await response.json()
    //   dispatch(uiActions.showNotification({
    //     open: true,
    //     message: "Sent Request To Database Successfully",
    //     type: 'success'
    //   }))
    // }
    // sendRequest().catch(err => {
    //   dispatch(uiActions.showNotification({
    //     open: true,
    //     message: "Request Sending Failed",
    //     type: 'error'
    //   }))
    // })

    if(cart.changed){
      dispatch(sendCartData(cart))
    }

  }, [cart, dispatch])

  return (
    <div className="App">
      { notification.open && <Notification type={notification.type} message={notification.message} /> }
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
