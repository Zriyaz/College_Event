import React ,{Component,Fragment} from "react"

import {Container} from "semantic-ui-react"
import EventDashborad from "../../features/events/EventDashborad/EventDashborad"
import NavBar from "../../features/nav/NavBar/NavBar"
import {Route ,Switch , withRouter} from "react-router-dom"
import HomePage from "../../features/home/HomePage"
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage"
import PeopleDashborad  from "../../features/user/PeopleDashborad/PeopleDashborad"
import SettingsDashborad  from "../../features/user/Settings/SettingsDashborad"
import UserDetailedPage  from "../../features/UserDetailed/UserDetailedPage"
import EventForm from "../../features/events/eventform/EventForm"
import TestComponent from "../../features/testarea/TestComponent"
import ModelManager from "../../features/modals/ModelManager"


class App extends Component{
  render(){
    return(
      <Fragment>
        <ModelManager />
        <Route exact path="/" component={HomePage}/>
        <Route path="/(.+)" render={() =>(

          <Container className="main">
            <NavBar />
           <Switch key={this.props.location.key}> 
          <Route exact path="/events"  component={EventDashborad}/>
          <Route path="/events/:id"  component={EventDetailedPage}/>
          <Route path="/people"  component={PeopleDashborad}/>
          <Route path="/profile/:id"  component={UserDetailedPage}/>
          <Route path="/settings"  component={SettingsDashborad}/> 
          <Route path={["/createEvent", "/manage/:id"]}  component={EventForm}/> 
          <Route path="/test"  component={TestComponent}/> 
          </Switch>
       </Container>
        )} />
      </Fragment>
      )
  }
}

export default withRouter(App);
