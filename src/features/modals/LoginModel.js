import React from "react"
import {Modal} from "semantic-ui-react"
import {connect} from "react-redux"

import LoginForm from "../auth/Login/LoginForm"
import {closeModel} from "./ModelActions"


const actions = {closeModel}

class LoginModel extends React.Component{
	render(){
		return(
			<Modal 
				size="mini"
				open={true}
				onClose={this.props.closeModel}
			>
			<Modal.Header>
				Login to Re-vents
			</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<LoginForm />
				</Modal.Description>
			</Modal.Content>
			</Modal>

		)
	}
}
export default connect(null,actions)(LoginModel)