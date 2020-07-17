import {SIGN_OUT_USER,LOGIN_USER} from "./AuthConstant"
import {closeModel} from "../modals/ModelActions"
export const login = (creds)=>{
	return dispatch =>{
		dispatch({
		type: LOGIN_USER,
		payload:{
			creds
		}
	})
		dispatch(closeModel())
	} 
}

export const logout = ()=>{
	return{
		type: SIGN_OUT_USER
	}
}