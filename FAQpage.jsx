import { useEffect, useState } from 'react'

import API from '../services/api'

import FAQCard from '../components/FAQCard'
import SearchBar from '../components/SearchBar'
import TrendingFAQs from '../components/TrendingFAQs'

function FAQPage() {

  const [faqs, setFaqs] = useState([])
  const [search, setSearch] = useState('')
  const [trending, setTrending] = useState([])

  useEffect(() => {
    fetchFAQs()
    fetchTrending()
  }, [])

  const fetchFAQs = async () => {

    const res = await API.get('/faqs')

    setFaqs(res.data)
  }

  const fetchTrending = async () => {

    const res = await API.get('/faqs/trending')

    setTrending(res.data)
  }

  const filteredFAQs = faqs.filter((faq) => {

    return (
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div className='container'>

      <h1>Frequently Asked Questions</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <TrendingFAQs faqs={trending} />

      {
        filteredFAQs.map((faq) => (
          <FAQCard
            key={faq._id}
            faq={faq}
            search={search}
          />
        ))
      }

    </div>
  )
}

export default FAQPage