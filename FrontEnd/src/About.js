import '../src/Design/About.css'
import Image1 from './Assets/holdhands.jpg'
import Image2 from './Assets/kidsmile.jpg'
import Card from './Card'
import CardData from './CardData'

const About = () => {
  return (
    <section id='about'>
      <div className='container about_container'>
        <div className='about_left'>
          <div className='about_image'>
            <img src={Image1} alt='Image 1' />
            <img src={Image2} alt='Image 2' />
          </div>
        </div>
        <div className='about_right'>
          <h2>About Us</h2>
          <div className='about_cards'>
            {
              CardData.map(item => (
                <Card key={item.id} className='about_card'>
                  <span className='about_card_icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </Card>
              ))
            }
          </div>
          <p>Nowadays as the growth of technology gets faster and faster more people in this world are getting eaten by their ego and is growing a seed of individualism in their hearts. Odd Jobs is the organization that is fighting against that.</p>
          <h5>Funding</h5>
          <p>You might ask "Why try to get paid if your goal is to solely help others?" Well by earning money not only do we get bigger in name so that more people will be aware of our purpose, but also by earning money we can do better than before, we can start providing facilities like cars and machines to make your job request go smoother, that's our reason as to why we need to earn money. All of it is for achieving our dream.</p>
        </div>
      </div>
    </section>
  )
}

export default About