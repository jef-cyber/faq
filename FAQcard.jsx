import { useState } from "react";

function FAQCard({ faq, search }) {

  const [open, setOpen] = useState(false);

  // Highlight searched keyword
  const highlightText = (text) => {

    if (!search || search.trim() === "") {
      return text;
    }

    const regex = new RegExp(`(${search})`, "gi");

    return text.replace(
      regex,
      "<mark>$1</mark>"
    );
  };

  return (
    <div className="faq-card">

      {/* Question Section */}
      <div
        className="faq-question"
        onClick={() => setOpen(!open)}
      >

        <h3
          dangerouslySetInnerHTML={{
            __html: highlightText(faq.question),
          }}
        />

        <span>
          {open ? "▲" : "▼"}
        </span>

      </div>

      {/* Answer Section */}
      {open && (
        <div className="faq-answer">

          <p
            dangerouslySetInnerHTML={{
              __html: highlightText(faq.answer),
            }}
          />

          {/* Optional Metadata */}
          <div className="faq-meta">

            <span>👁 {faq.views || 0}</span>

            <span> 👍 {faq.likes || 0}</span>

          </div>

        </div>
      )}

    </div>
  );
}

export default FAQCard;