import { useState } from 'react'
import '../Design/Faq.css'

const Faq = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div>
      <div className='padding'></div>
      <h2 className='page-title'>FAQs</h2>
        <div className='wrapper'>
          <article className='accordion'>
            {data.map((item, i) => (
              <div className='item'>
                <div className='title' onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content'} >
                  {item.answer}
              </div>
              </div>
            ))}
          </article>
        </div>
    </div>
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
