import { uiActions } from "./ui-slice"
import { cartActions } from "./cart-slice"



export const fetchData = () => {
    return async(dispatch) => {

        const fetchHandler = async() => {
            const response = await fetch('https://redux-http-c6843-default-rtdb.firebaseio.com/cartItems.json')
            const data = response.json()
            return data
        }

        try{ 
            const cartData = await fetchHandler()
            dispatch(cartActions.replaceData(cartData))
        }
        catch(err){
            dispatch(uiActions.showNotification({
                open: true,
                message: "Request Sending Failed",
                type: 'error'
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async(dispatch) => {
        dispatch(uiActions.showNotification({
            open: true,
            message: "Sending Request",
            type: 'warning'
        }))

        const sendRequest = async () => {      
            const response = await fetch('https://redux-http-c6843-default-rtdb.firebaseio.com/cartItems.json', {
                                            method: "PUT",
                                            body: JSON.stringify(cart) })
            const data = response.json()
            dispatch(uiActions.showNotification({
              open: true,
              message: "Sent Request To Database Successfully",
              type: 'success'
            }))
        }
        try{ await sendRequest() }
        catch(err){ 
            dispatch(uiActions.showNotification({
                open: true,
                message: "Request Sending Failed",
                type: 'error'
            }))
        }
    }
}