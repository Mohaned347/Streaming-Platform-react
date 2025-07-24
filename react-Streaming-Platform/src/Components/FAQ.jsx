const FAQ = () => {
  const faqItems = [
    {
      id: 1,
      question: "What is StreamVibe?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
      id: 2,
      question: "How does the subscription work?",
      answer: "You choose a monthly or yearly plan and get instant access to all content."
    },
    {
      id: 3,
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time without penalty."
    },
    {
      id: 4,
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 7-day free trial for all new users."
    },
    {
      id: 5,
      question: "What devices are supported?",
      answer: "StreamVibe works on smartphones, tablets, smart TVs, and computers."
    },
    {
      id: 6,
      question: "Is there a limit on simultaneous streams?",
      answer: "You can stream on up to 4 devices simultaneously with our premium plan."
    }
  ];

  const toggleFAQ = (id) => {
    const items = document.querySelectorAll('.FAQ-Item');
    items.forEach(item => {
      if (item.dataset.id == id) {
        item.classList.toggle('active');
        const btn = item.querySelector('.btn');
        btn.textContent = item.classList.contains('active') ? '−' : '+';
      } else {
        item.classList.remove('active');
        const btn = item.querySelector('.btn');
        btn.textContent = '+';
      }
    });
  };

  return (
    <div className="FAQ-Contener">
      <div className="FAQhead">
        <div className="FAQ-Title">
          <h1>Frequently Asked Questions</h1>
          <p>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
        </div>
        <div className="TBtn">
          <button className="Qbtn">Ask a Question</button>
        </div>
      </div>

      <div className="FAQ-Content">
        {faqItems.map(item => (
          <div className="FAQ-Item" key={item.id} data-id={item.id}>
            <div className="row">
              <div className="text">
                <span className="num">0{item.id}</span>
                <h2 className="q">{item.question}</h2>
              </div>
              <button className="btn" onClick={() => toggleFAQ(item.id)}>+</button>
            </div>
            <p className="a">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;