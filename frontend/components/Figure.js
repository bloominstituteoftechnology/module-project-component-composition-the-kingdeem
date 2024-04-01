import React from "react"


export default function Figure({photoURL, caption}) {
    return (
        <figure>
          <img src={photoURL}/>
        <figcaption>Amazing Photo Taken {caption}</figcaption>
        </figure>
    )
}