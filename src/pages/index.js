import React from "react"
import Button from "../components/Button/Button"
import  {graphql} from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Post from '../components/Post/Post'

const ContentWrapper = styled.div`
width : 60%; 
height: 100%; 
display: flex; 
justify-content : center; 
align-items: flex-end; 
flex-direction : column; 
text-align : right; 
padding : 34px; 


h1{ 
  font-size : 102px; 
}
p{ 
  width : 40% ;
  font-size : 18px;
  margin-bottom : 20px; 
}
`

const StyledImg = styled(Image)`
position : absolute !important; 
height : 100%; 
width : 40%; 
top: 0 ; 
right : 0 ; 
object-fit: fit;

`


const IndexPage = ({data}) => (
  <>
  <ContentWrapper> 
    <Post/>
   <h1>Your new space</h1> 
  <p>While artist work from real to the abstract, architects must work from the abstract to the real </p>
   <Button>estimate project</Button>
  
   </ContentWrapper>
   {/* <StyledImg src={data.file.childImageSharp.fluid.src} srcSet={data.file.childImageSharp.fluid.srcSet} szies={data.file.childImageSharp.fluid.sizes}/> */}

   <StyledImg fluid={data.file.childImageSharp.fluid}/>
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






