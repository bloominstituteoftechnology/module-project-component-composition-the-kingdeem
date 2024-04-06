import React from "react"
import Figure from './Figure'
import styled from "styled-components"

const StyledApodLayout = styled.div `
  border: 2px solid black;
  border-radius: 10px;
  padding: 3px;
  
  h2 {
    font-size: 30px;
    text-align: center;
    margin: 5px;
    color: red;
  }

  p {
    text-align: center;
    margin: 5px;
  }
`


export default function apodLayout({title, description, photoURL, date}) {
    return (
      <StyledApodLayout className='apodlayout'>
        <h2>{title}</h2>
        <p>{description}</p>
        <Figure 
            photoURL={photoURL}
            caption={date}
        />
      </StyledApodLayout>
    )
  }