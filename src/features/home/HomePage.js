import React from "react"
import {Segment, Container,Button ,Header,Image,Icon} from "semantic-ui-react"

const HomePage= ({history}) =>{
  return(
    <Segment inverted textAlign="center" vertical clasname="masthead" >
      <Container text>
        <Header as="h1" inverted>
          <Image 
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{marginBottom:12}}
          />
          Re-vents
        </Header>
        <Button onClick={()=>history.push('/events')} size="huge" inverted>
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  )
}

export default HomePage 