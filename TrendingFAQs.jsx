function TrendingFAQs({ faqs }) {

  return (
    <div>

      <h2>🔥 Trending FAQs</h2>

      {
        faqs.map((faq) => (
          <p key={faq._id}>
            {faq.question}
          </p>
        ))
      }

    </div>
  )
}

export default TrendingFAQs