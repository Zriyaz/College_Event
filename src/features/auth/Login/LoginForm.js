import React from "react"

import {Form , Segment , Button} from "semantic-ui-react"
import {Field , reduxForm} from "redux-form"
import TextInput from "../../../app/common/form/TextInput"
import {login} from "../AuthAction"
import {connect} from "react-redux"

const action ={
	login
}

const LoginForm = ({login , handleSubmit }) =>{
	return(
		<Form error size="large" onSubmit = {handleSubmit(login)} autoComplete='off'>
			<Segment>
				<Field  
				  name="email"
				  component={TextInput}
				  type="text"
				  placeholder ="Email Address"
				/>
				<Field 
				  name="email"
				  component={TextInput}
				  type="text"
				  placeholder ="Email Address"
				/>
				<Button fluid size="large" color="teal">Login</Button>
			</Segment>
		</Form>
	)
}
export default connect(
null,
action
)(reduxForm({form:'loginForm'})(LoginForm)) 