import React,{ useState } from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Note from "./Components/Note"
import CreateArea from "./Components/CreateArea"

function App() {

  const [notes, setNotes] = useState([])
  function addnote(note){
    setNotes(prevnote =>{
    return [...prevnote,note]
  });
  }

  function deletenode(id){
    setNotes(prevnote =>{
      return prevnote.filter((noteitem,index) => {
        return index !== id
      });
    });
  }
 
  return (
    <>
      <Header/>
      <CreateArea
        add={addnote}
      />
      {notes.map((notesItem, Index) => 
      <Note 
      key = {Index}
      id = {Index}  
      title={notesItem.title} 
      content={notesItem.content}
      del={deletenode}
      />)}
      <Footer/>
    </>
  )
}

export default App
