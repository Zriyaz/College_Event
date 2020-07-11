import React from "react"
import {Modal} from "semantic-ui-react"
import {connect} from "react-redux"
import {closeModel} from "./ModelActions"

const actions={
	closeModel
}
const TestModel = ({closeModel}) =>{
	return(
		<Modal closeIcon = "close" open={true} onClose={closeModel}>
			<Modal.Header>Test modal</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<p>Test modal......nothing to see here</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	)
}
export default connect(null, actions)(TestModel)