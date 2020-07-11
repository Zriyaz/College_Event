import React from "react"

import EventList from "../eventlist/EventList"
import {Grid} from "semantic-ui-react"
import {connect} from "react-redux"
import {createEvent,deleteEvent,updateEvent} from "../eventActions"


const mapState=(state) =>({
    events:state.events
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
    const {events}= this.props
    return(
      <Grid>
        <Grid.Column width={10}>
          <EventList 
           events={events} 
           deleteEvent = {this.handleDeleteEvent}
           />
        </Grid.Column>
        <Grid.Column width={6}>
         <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    )
  }
}
export default connect(mapState,actions)(EventDashborad)