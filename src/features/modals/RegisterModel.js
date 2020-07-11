import React from "react"
import {Modal} from "semantic-ui-react"
import {connect} from "react-redux"

import RegisterForm from "../auth/Register/RegisterForm"
import {closeModel} from "./ModelActions"


const actions = {closeModel}

class RegisterModel extends React.Component{
	render(){
		return(
			<Modal 
				size="mini"
				open={true}
				onClose={this.props.closeModel}
			>
			<Modal.Header>
				Register to Re-vents
			</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<RegisterForm />
				</Modal.Description>
			</Modal.Content>
			</Modal>

		)
	}
}
export default connect(null,actions)(RegisterModel)