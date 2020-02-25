import React from "react"
import Button from "../components/Button/Button"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
// import Post from '../components/Post/Post'

const ContentWrapper = styled.div`
width : 100%; 
height: 100%;
max-height: 100vh; 
overflow: hidden; 
display: grid;  
padding : 10px 10px 50px 10px; 
grid-template-columns : 1fr 1.5fr; 
grid-template-rows: .5fr 2fr 100px .5fr ;
justify-items: center;

@media(min-width:639px){ 
  grid-template-columns : 2fr 1.5fr; 
grid-template-rows: 200px 300px 1fr .5fr ;

}


h1{ 
  font-size : 2em; 
  grid-row: 1/1;
  grid-column: 1/3;
  text-align: center;
 
  @media(min-width:639px){ 
    grid-row: 1/1;
  grid-column: 1/1;    
  }
}
p{ 
  width : 80% ;
  font-size : .8em;
  margin-bottom : 20px; 
  grid-row: 3/3;
  grid-column: 1/3;
  text-align: center; 
  margin-bottom: 10px;

  @media(min-width:639px){ 
    grid-row: 2/2;
  grid-column: 1/1;    
  }
}
`

const StyledImg = styled(Image)`
position: relative;
height : 100%; 
width : 100%; 
object-fit: fit;
grid-row: 2/2; 
grid-column: 1/3;
@media(min-width:639px){ 
    grid-row: 1/4;
  grid-column: 2/2;    
  max-height: 90vh;
  }

`


const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      {/* <Post /> */}
      <h1>Your new space</h1>
      <p>While artist work from real to the abstract, architects must work from the abstract to the real </p>
      <StyledImg fluid={data.file.childImageSharp.fluid} />
      <Button>estimate project</Button>

    </ContentWrapper>
    {/* <StyledImg src={data.file.childImageSharp.fluid.src} srcSet={data.file.childImageSharp.fluid.srcSet} szies={data.file.childImageSharp.fluid.sizes}/> */}

  </>
)



export const query = graphql`
  {
    file(name :{eq : "hero"}) {
      childImageSharp{
        fluid(maxWidth:800 , maxHeight:1200, quality:90){
      ...GatsbyImageSharpFluid_noBase64 
      ...GatsbyImageSharpFluid_tracedSVG

        }
      }
    }
  }
`

export default IndexPage





