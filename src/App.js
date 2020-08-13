import React, { useState , useEffect} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input, IconButton} from "@material-ui/core"
import SendIcon from '@material-ui/icons/Send';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {
  const [input, setInput] = useState("")
  const [message, setMessage] = useState([])
  const [userName, setUsername] = useState("")

  // run code on condition.....
  useEffect(() => {
   setUsername(prompt("Please enter the  message"))
  }, [])

  useEffect(() => {
    db.collection('messenger-app')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})))
    })
  }, [])
console.log(message)
  const sendMessage = (event) =>{
    event.preventDefault();
    // logic to enter send message go in here.....
    // setMessage([...message,{username: userName, message: input}])    
    db.collection('messenger-app').add({
      message: input,
      username:userName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
  }
  
  return (
    <div className="App">
     <h1>Messenger Application</h1>
  <h1>Welcome {userName}</h1>

     <form className="app_form">
      <FormControl className="app_formControl">
        {/* <InputLabel >Enter the Message</InputLabel> */}
        <Input className="app_input" placeholder=" Enter the Message...." value={input} onChange={e => setInput(e.target.value)}/>                      
      <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
        <SendIcon/>
      </IconButton> 
      </FormControl>
     </form>
     

     {/* messages rendering logic */}
     <FlipMove>
     {
       message.map(({id, message})=>(
         <Message key ={id} username={userName} message ={message}/>
       ))
     }
     </FlipMove>
     
    </div>
  );
}

export default App;
