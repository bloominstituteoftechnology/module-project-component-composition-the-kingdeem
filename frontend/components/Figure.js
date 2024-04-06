import React from "react"
import styled from "styled-components"

const StyledFigure = styled.figure `
  padding: 5px;
  text-align: center;
  align-content: center;
  
`


export default function Figure({photoURL, caption}) {
    return (
        <StyledFigure>
          <img src={photoURL}/>
        <figcaption>Amazing Photo Taken {caption}</figcaption>
        </StyledFigure>
    )
}