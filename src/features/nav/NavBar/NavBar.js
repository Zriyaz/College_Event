import React from 'react';
import {connect} from "react-redux"
import { Menu, Container, Button } from 'semantic-ui-react';
import {Link ,NavLink, withRouter} from "react-router-dom"
import SignedOutMenu from "../Menus/SignedOutMenu"
import SignedInMenu from "../Menus/SignedInMenu"
import {openModel} from "../../modals/ModelActions"
import {logout} from "../../auth/AuthAction"

 const actions={
  openModel,
  logout
 }
 const mapState = (state)=>({
  auth : state.auth
 })
 class NavBar extends React.Component {
  
  handleSignIn = () => {
    this.props.openModel('LoginModel')
  }
  handleRegister=()=>{
    this.props.openModel('RegisterModel')
  }
  handleSignOut = () => {
    this.props.logout() 
    this.props.history.push('/')
  }
  render(){
    const {auth}= this.props 
    const authenticated = auth.authenticated
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as = {NavLink} exact to="/" header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item as ={NavLink} exact to="/events" name='Events' />
                {authenticated && (
                  <>
                   <Menu.Item as ={NavLink} to="/people" name='People' />
                <Menu.Item as ={NavLink} to="/test" name='Test' />
                <Menu.Item >
                    <Button 
                     as={Link} to="/createEvent"   
                     positive inverted 
                     content='Create Event'
                     floated="right" 
                     />
                </Menu.Item>
                  </>
                )}
                 {authenticated ? (<SignedInMenu signOut={this.handleSignOut} currentUser={auth.currentUser} />)
                 : (<SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />) }
            </Container>
        </Menu>
    )
  } 
}
export default withRouter(connect(mapState,actions)(NavBar))