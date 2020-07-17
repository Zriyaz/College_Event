import {INCREMENT_COUNTER} from "./TestConstant"
import {DECREMENT_COUNTER} from "./TestConstant"
import {asyncActionFinish} from "../async/asyncAction"
import {ASYNC_ACTION_START} from "../async/asyncConstant"


export const incrementCounter = (state)=>{
	return{
		type:INCREMENT_COUNTER
	}
}
export const decrementCounter = (state)=>{
	return{
		type:DECREMENT_COUNTER
	}
}

const delay =(ms)=>{
	return new Promise(resolve=>setTimeout(resolve,ms))
}

export const incrementAsync = (name) =>{
	return async dispatch =>{
		dispatch({type : ASYNC_ACTION_START , payload : name})
		await delay(1000)
		dispatch(incrementCounter())
		dispatch(asyncActionFinish())
	} 
}

export const decrementAsync = (name) =>{
	return async dispatch =>{
		dispatch({type : ASYNC_ACTION_START , payload: name})
		await delay(1000)
		dispatch({type:DECREMENT_COUNTER})
		dispatch(asyncActionFinish())
	} 
}