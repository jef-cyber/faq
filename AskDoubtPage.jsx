import { useState } from 'react'

import API from '../services/api'

function AskDoubtPage() {

  const [question, setQuestion] = useState('')

  const submitQuestion = async () => {

    await API.post('/doubts', {
      question
    })

    alert('Question Submitted')

    setQuestion('')
  }

  return (
    <div className='container'>
       
      <h1>Ask Your Doubt</h1>

      <textarea
        rows='8'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={submitQuestion}>
        Submit
      </button>

    </div>
  )
}

export default AskDoubtPage