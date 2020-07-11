import React , {Fragment} from  "react"
import EventListItem from "./EventListItem"
class EventList extends React.Component{
	render(){
    const {events , deleteEvent} = this.props
		return(
			<Fragment>
			{events.map(event =>(
			<EventListItem 
             key={event.id} 
             event={event}  
             deleteEvent= {deleteEvent}
            />
		))}
			}
			</Fragment>
		)
	}
}

export default EventList