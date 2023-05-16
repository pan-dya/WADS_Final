import './Design/Services.css'
import ServiceData from './ServiceData.js'
import Card from './Card.js'

const Services = () => {
  return (
    <section id='services'>
      <h2>Our Services</h2>
      <p>Choose from our available services</p>
      <div className='container services_container'>
        {
          ServiceData.map(item => (
            <Card key={item.id} className='service white'>
              <div className='service_icon'>{item.icon}</div>
              <div className='service_title'><h4>{item.title}</h4></div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services