import React from "react"
import {connect} from "react-redux"
import {Segment ,Form ,Button, Grid, Header} from "semantic-ui-react"
import {createEvent , updateEvent} from "../eventActions"
import cuid from "cuid"
import {reduxForm , Field} from "redux-form"
import TextInput from "../../../app/common/form/TextInput"
import TextArea from "../../../app/common/form/TextArea"
import SelectInput from "../../../app/common/form/SelectInput"
import {composeValidators , combineValidators , isRequired , hasLengthGreaterThan} from "revalidate"
import DateInput from "../../../app/common/form/DateInput"

const mapState = (state,ownProps)=>{
	const eventId = ownProps.match.params.id

	let event = {}

	if(eventId && state.events.length > 0){
		event = state.events.filter(event => event.id===eventId)[0]
	}
	return{
		initialValues : event
	}
}

 const actions = {
 	createEvent ,
    updateEvent
 }
  
  const validate = combineValidators({
  	title : isRequired({message : 'The Event title is Required'}),
  	category : isRequired({message : 'The Category is Required'}),
  	description : composeValidators(
  		isRequired({message : 'Please Enter a description'}),
  		hasLengthGreaterThan(4) ({message: 'Description needs to be at least  5 characters'})
  	)(),
  	city : isRequired('city '),
  	venue : isRequired('venue'),
  	date: isRequired('date')

  })



  const categoryData = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
]


 
class EventForm extends React.Component{
	
	onFormSubmit =(values)=>{
    if(this.props.initialValues.id){
      this.props.updateEvent(values)
      this.props.history.push(`/events/${this.props.initialValues.id}`)
    }else{	
    	const newEvent = {
    	    ...values,
    		id : cuid(),
   			hostPhotoURL: '/assets/user.png',
   			hostedBy : 'Bob'
    	}
      this.props.createEvent(newEvent)
      this.props.history.push(`/events/${newEvent.id}`)
    }
	}


	render(){
		const {history, initialValues, invalid, submitting ,prsitine } = this.props
		return(
			<Grid>
				<Grid.Column width={10}>
				 <Segment>
				  <Header sub color="teal" content="Event Details" />
				<Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
					<Field 
					  name="title" 
					  component={TextInput} 
					  placeholder="Give your Event Name"/>

					<Field 
					  name="category"
					  component={SelectInput}
					  options={categoryData}
					  placeholder="What is Your Event About ?"/>
					<Field 
					  name="description" 
					  rows =  {3}
					  component={TextArea} 
					  placeholder="Tell us about your Event"/>

					  <Header sub color="teal" content="Event Location Detailes" />

					<Field 
					  name="city" 
					  component={TextInput} 
					  placeholder="Event City"/>

					<Field 
					  name="venue" 
					  component={TextInput} 
					  placeholder="Event Venue"

					  />

					<Field 
					  name="date" 
					  component={DateInput} 
					  dateFormat = 'dd  LLL yyyy h:mm a'
					  showTimeSelect
					  timeFormat = 'HH:mm'
					  placeholder="Event Date"/>
					
					<Button disabled={invalid || submitting || prsitine } positive type="submit">
					Submit</Button>

					<Button 
					  type="button" 
					  onClick = {initialValues.id 
						? ()=> history.push(`/events/${initialValues.id}`) 
						: () => history.push('/events')}>
						Cancel
						</Button>
				</Form>
			</Segment>
				</Grid.Column>
			</Grid>
			
		)
	}
}

export default connect(mapState , actions)(reduxForm({form:'eventForm', validate })(EventForm))