import React from "react"
import {connect} from "react-redux"
import {incrementCounter ,decrementCounter} from "./TestAction"
import {Button} from "semantic-ui-react"
import TestPlace from "./TestPlace"
import {openModel} from "../modals/ModelActions"
class TestComponent extends React.Component{
  render(){
  	const {data, incrementCounter,decrementCounter , openModel} = this.props
  return(
  	
    <div>
      <h1> Test Component </h1>
      <h3>The Answer is : {data}</h3>
      <Button onClick={incrementCounter} positive content="Increment"></Button>
      <Button onClick={decrementCounter} negative content="Decrement"></Button><br/><br/>
      <Button onClick={()=>openModel('TestModel' , {data: 42})} color="teal" content="Open Model"></Button>
      <TestPlace/>
    </div>
  )
}
}

const mapState = (state)=>({data:state.test.data})
const actions = {
	incrementCounter,
	decrementCounter,
  openModel
}
export default connect(mapState,actions)(TestComponent)

