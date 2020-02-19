import React from "react"
import {graphql} from 'gatsby' ;
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import styled from 'styled-components'


const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;


  @media(min-width:600px){ 
    grid-template-columns: repeat(2,1fr); 
  }


  @media(min-width:1001px){ 
    grid-template-columns: repeat(3,1fr); 
  }
`;

const AriclesPage = ({data}) => { 
  return ( 
    <ArticlesWrapper>
  {data.allMdx.nodes.map(item => <ArticlePreview key={item.frontmatter.title} title={item.frontmatter.title} author={item.frontmatter.author} background={item.frontmatter.Fimage.childImageSharp.fluid}>

  </ArticlePreview>)}

    </ArticlesWrapper>
  )
}


export const query = graphql`
{
  allMdx{
    nodes{
      frontmatter{
        title
        slug
        author
        Fimage {
          childImageSharp{
            fluid(maxWidth:600 maxHeight:400 quality:90){
            ...GatsbyImageSharpFluid_noBase64 
      ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
}`


// {
//   allMdx{
//     nodes{
//       frontmatter{
//         title
//         slug
//         author
//         Fimage {
//           childImageSharp{
//             fluid(maxWidth:600 maxHeight:400){
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// }`

export default AriclesPage
 