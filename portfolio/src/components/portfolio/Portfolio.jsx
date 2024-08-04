import React from 'react'
import './portfolio.css'
import OUT1 from '../../assets/out1.jpeg'
import OUT2 from '../../assets/out2.jpeg'
import OUT3 from '../../assets/out3.jpg'
import OUT4 from '../../assets/out4.png'
import OUT5 from '../../assets/Ai.jpg'
import OUT6 from '../../assets/out6.jpeg'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
              <img src={OUT1} alt="out1" />
          </div>

          <h3>Car Maintanence Website</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/siva1827/Training/tree/main/week_assignment' target='_blank' className='btn'>Github</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
              <img src={OUT2} alt="out2" />
          </div>

          <h3>Product Website</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/siva1827/Training/tree/main/project_sub' target='_blank' className='btn'>Github</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
              <img src={OUT3} alt="out3" />
          </div>
           <h3>Stone Paper Scissors</h3>
           <div className="portfolio_item-cta">
          <a href='https://github.com/siva1827/Stone-Paper-Scissor-Game' target='_blank' className='btn'>Github</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
              <img src={OUT4} alt="" />
          </div>
          <h3>Grocery Website</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/siva1827/repo/tree/main/Grocery_website/project-main/project' target='_blank' className='btn'>Github</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
              <img src={OUT5} alt="" />
          </div>
          <h3>AI-Fitness Trainer</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/siva1827/AI-Fitness_Trainer.git' target='_blank' className='btn'>Github</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
              <img src={OUT6} alt="" />
          </div>
          <h3>E-Commerce website</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/siva1827/ecom-admin.git' target='_blank' className='btn'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio