import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';


function App() {


  return (
    <>
    bookstore <FontAwesomeIcon icon={faInstagram} />
    <Button variant="outline-primary">Primary</Button>

    </>
  )
}

export default App
