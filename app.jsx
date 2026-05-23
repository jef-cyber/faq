import { BrowserRouter, Routes, Route } from 'react-router-dom'

import FAQPage from './pages/FAQPage'
import AskDoubtPage from './pages/AskDoubtPage'
import ChatbotPage from './pages/ChatbotPage'

import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<FAQPage />} />
        <Route path='/ask' element={<AskDoubtPage />} />
        <Route path='/chatbot' element={<ChatbotPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App