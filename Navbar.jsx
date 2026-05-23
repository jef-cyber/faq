import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <div className='navbar'>

      <h2>FAQ System</h2>

      <div className='links'>
        <Link to='/'>FAQs</Link>
        <Link to='/ask'>Ask Doubt</Link>
        <Link to='/chatbot'>Chatbot</Link>
      </div>

    </div>
  )
}

export default Navbar