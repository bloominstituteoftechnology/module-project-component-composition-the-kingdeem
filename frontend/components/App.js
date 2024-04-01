import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ApodLayout from './ApodLayout'

const apodInfo = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'


function App() {
  const [photo, setPhoto] = useState()

  useEffect( () => {
    function getPhoto() {
    axios
      .get(apodInfo)
      .then(res => {
        console.log(res.data)
        setPhoto(res.data)
      })
      .catch(err => console.log(err.message))
    }
    getPhoto()
  }, [])

  if (!photo) return 'Fetching Data...'
  return (
    <section>
      <ApodLayout
        title={photo.title}
        description={photo.explanation}
        photoURL={photo.url}
        date={photo.date}
      />
    </section>
  )
}

export default App
