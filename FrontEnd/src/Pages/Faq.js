import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import '../Design/Faq.css'

const Faq = () => {
  const [selected, setSelected] = useState(null)
  const [name, setName]= useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    refreshToken();
  },[]);
  const refreshToken = async ()=>{
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
        if(error.response){
          navigate("/login");
        }
    }
  }

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(async(config)=>{
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()){
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    }
    return config;
  },(error)=>{
      return Promise.reject(error);
  });

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
