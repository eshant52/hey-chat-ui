/* eslint-disable react/prop-types */
import { Add, Mic, Send } from "@mui/icons-material";
import MessageBox from "@components/input/MessageBox";
import { useState } from "react";
import Button from "@components/Buttons/Button";

export default function Footer({ send, ...props }) {
  const [message, setMessage] = useState(null);

  function sendMessage() {
    if (message?.trim() !== "") {
      console.log(message);
      // send(message);
    }
  }

  function handleMessage(e) {
    const message = e.target.value;
    setMessage(message);
    
  }

  function onEnter(e) {
    if (e.key === 'Enter' && e.shiftKey) { 
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
      setMessage('');
    }
  }

  return (
    <footer {...props}>
      <div className="p-2.5">
        <Add sx={{ fontSize: "2rem" }} />
      </div>
      <div className="p-2.5">
        <Mic />
      </div>
      <div className="grow px-2.5">
        <MessageBox onChange={handleMessage} value={message} onKeyDown={onEnter}/>
      </div>
      <div className="p-2.5">
        <Button icon={<Send />} onClick={sendMessage}></Button>
      </div>
    </footer>
  );
}
