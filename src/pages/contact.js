import React from "react"
import styled from 'styled-components'


const StyledWrapper = styled.div`
width : 100%; 
height: 100%; 


`
const Heading = styled.h2`
font-size : 1.5em; 
text-transform: capitalize; 
`

const Description = styled.div`
width : 80%; 
height: 40%; 
display: flex; 
justify-content : center;
align-items: center; 
flex-direction :column; 

`
const Paragraph = styled.p`
font-size : .6em; 
 
`


class ContactPage extends React.Component {
  state = {
    value: ''
  }
  render() {
    return (
      <StyledWrapper>
        <Description>
          <Heading>Hi on Blog Page</Heading>
          <Paragraph>Wellcome there .</Paragraph>
        </Description>
      </StyledWrapper>
    )

  }
}
;
export default ContactPage
