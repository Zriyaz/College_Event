import React from "react"

import EventList from "../eventlist/EventList"
import EventActivity from "../EventActivity/EventActivity"
import {Grid} from "semantic-ui-react"
import {connect} from "react-redux"
import {createEvent,deleteEvent,updateEvent} from "../eventActions"
import LoadingComponent from "../../../app/layout/LoadingComponent"



const mapState=(state) =>({
    events:state.events,
    loading : state.Async.loading
    
})
 
 const actions={
  createEvent,
  deleteEvent,
  updateEvent
 }
class EventDashborad extends React.Component{

 handleDeleteEvent=(id)=>{
   this.props.deleteEvent(id) 
 }
  render(){
    const {events ,loading}= this.props
    if(loading) return <LoadingComponent />
    return(
      <Grid>
        <Grid.Column width={10}>
          <EventList 
           events={events} 
           deleteEvent = {this.handleDeleteEvent}
           />
        </Grid.Column>
        <Grid.Column width={6}>
         <EventActivity />
        </Grid.Column>
      </Grid>
    )
  }
}
export default connect(mapState,actions)(EventDashborad)