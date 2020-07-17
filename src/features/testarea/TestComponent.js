import React from "react"
import {connect} from "react-redux"
import {incrementAsync ,decrementAsync} from "./TestAction"
import {Button} from "semantic-ui-react"
import TestPlace from "./TestPlace"
import {openModel} from "../modals/ModelActions"
class TestComponent extends React.Component{
  render(){
  	const {data, 
      incrementAsync, 
      decrementAsync, 
      openModel, 
      loading, 
      buttonName} = this.props
  return(
  	
    <div>
      <h1> Test Component </h1>
      <h3>The Answer is : {data}</h3>
      <Button
       name="increment" 
       loading={buttonName ==='increment' && loading} 
       onClick={(e) => incrementAsync(e.target.name)} 
       positive 
       content="Increment"
       />
      <Button 
        name="decrement" 
        loading={buttonName === 'decrement' && loading} 
        onClick={(e) => decrementAsync(e.target.name)} 
        negative 
        content="Decrement"
        /><br/><br/>
      <Button 
        onClick={()=>openModel('TestModel' , {data: 42})} 
        color="teal" 
        content="Open Model" 
        />
      <TestPlace/>
    </div>
  )
}
}

const mapState = (state)=>({
  data:state.test.data,
  loading : state.Async.loading,
  buttonName : state.Async.elementName
})
const actions = {
	incrementAsync,
	decrementAsync,
  openModel
}
export default connect(mapState,actions)(TestComponent)

