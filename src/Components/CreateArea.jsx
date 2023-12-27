import React, {useState} from 'react'

const CreateArea = (props) => {
   
    const [note, setNote] = useState({
        title:"",
        content:""
    });
  
    function handleChange(event) {
        const {name, value}= event.target;

        setNote(prevnote =>{
            return{
                ...prevnote,
                [name]:value
            }
        })}

    function addnew(event){
        event.preventDefault();
        props.add(note);
        setNote(()=>{
            return {title:"",
            content:""}
        })
    }
  
  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title"/>
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="take a note..." rows="3"/>
        <button onClick={addnew}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea
