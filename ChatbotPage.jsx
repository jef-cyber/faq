import { useState } from 'react'

import API from '../services/api'

function ChatbotPage() {

  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])

  const sendMessage = async () => {

    const res = await API.post('/chatbot', {
      message
    })

    setChat([
      ...chat,
      {
        user: message,
        bot: res.data.reply
      }
    ])

    setMessage('')
  }
   return (
    <div className='container'>

      <h1>Mini Chatbot</h1>

      <div className='chat-box'>

        {
          chat.map((msg, index) => (
            <div key={index}>
              <p><b>You:</b> {msg.user}</p>
              <p><b>Bot:</b> {msg.bot}</p>
            </div>
          ))
        }

      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>
        Send
      </button>

    </div>
  )
}
export default ChatbotPage
