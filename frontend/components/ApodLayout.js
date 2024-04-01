import React from "react"
import Figure from './Figure'


export default function apodLayout({title, description, photoURL, date}) {
    return (
      <div className='apodlayout'>
        <h2>{title}</h2>
        <p>{description}</p>
        <Figure 
            photoURL={photoURL}
            caption={date}
        />
      </div>
    )
  }