import React from "react" 
import {connect} from "react-redux"
import TestModel from "./TestModel"
import LoginModel from "./LoginModel"
import RegisterModel from "./RegisterModel"

const modelLookup = {
	TestModel,
	LoginModel,
	RegisterModel
}

const mapState = (state)=>({
	currentModel: state.modals
})

const ModelManager =({currentModel})=>{
	let renderedModel
	if(currentModel){
		const {modelType , modelProps} = currentModel
		const ModelComponent= modelLookup[modelType]
		renderedModel = <ModelComponent {...modelProps}/>
	}

	return(
		<span>{renderedModel}</span>
	)
}

export default connect(mapState)(ModelManager)