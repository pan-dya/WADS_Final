import './Design/Faq.css'

const Faq = () => {
  return (
    <section id='faq'>
      <div className='wrapper'>
        <div className='accordion'>
          {data.map((item, i) => (
            <div className='item'>
              <div className='title'>
                <h2>{item.question}</h2>
              </div>
              <div className='content'>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const data = [
  {
    question: 'Question 1',
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quidem velit. Corrupti soluta optio quibusdam voluptatem nulla, aliquam, sapiente molestiae obcaecati est repudiandae nesciunt sed dolore maiores quidem, ipsum libero?"
  },
  {
    question: 'Question 2',
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quidem velit. Corrupti soluta optio quibusdam voluptatem nulla, aliquam, sapiente molestiae obcaecati est repudiandae nesciunt sed dolore maiores quidem, ipsum libero?"
  },
  {
    question: 'Question 3',
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quidem velit. Corrupti soluta optio quibusdam voluptatem nulla, aliquam, sapiente molestiae obcaecati est repudiandae nesciunt sed dolore maiores quidem, ipsum libero?"
  }
]

export default Faq
