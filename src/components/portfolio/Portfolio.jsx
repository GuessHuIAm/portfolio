import React from 'react'
import { Pagination, Autoplay, EffectCards} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'
import 'swiper/modules/effect-cards/effect-cards.min.css'

import POOL_IMG from '../../assets/pool.gif'
import IMG3 from '../../assets/logo.png'

import './portfolio.css'

const portfolioItems = [
  {
    title: 'Shadow Mapper',
    img: IMG3,
    subtitle: 'Hello!',
    alt: 'Link',
  },
  {
    title: 'Shadow Mapper',
    img: IMG3,
    subtitle: 'Hello!',
    alt: 'Link',
  },
  {
    title: 'Shadow Mapper',
    img: IMG3,
    subtitle: 'Hello!',
    alt: 'Link',
  },
  {
    title: 'Shadow Mapper',
    img: IMG3,
    subtitle: 'Hello!',
    alt: 'Link',
  },
  {
    title: 'Shadow Mapper',
    img: IMG3,
    subtitle: 'Hello!',
    alt: 'Description',
    btn_name: 'Github',
  },
]

const crimsonItems = [
  {
    title: 'Shadow Mapper',
    img: IMG3,
    subtitle: 'Hello!',
    alt: 'Link',
  },
  {
    title: 'Shadow Mapper',
    img: IMG3,
    subtitle: 'Hello!',
    alt: 'Link',
  },
  {
    title: 'Shadow Mapper',
    img: IMG3,
    subtitle: 'Hello!',
    alt: 'Link',
  },
  {
    title: 'Shadow Mapper',
    img: IMG3,
    subtitle: 'Hello!',
    alt: 'Link',
  },
  {
    title: 'Shadow Mapper',
    img: IMG3,
    subtitle: 'Hello!',
    alt: 'Link',
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Artworks</h5>
      <h2>Portfolio</h2>
      <Swiper
        modules={[Pagination, Autoplay, EffectCards]}
        slidesPerView={1}
        effect={'cards'}
        autoplay={{delay: 5000}}
        pagination={{ clickable: true }}>
        <article>
          {portfolioItems.map(item => {
            return (
              <SwiperSlide className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={item.img} alt={item.alt} />
                </div>
                <h2>
                  {item.title}
                </h2>
                <small className='text-light'>
                  {item.subtitle}
                </small>
              </SwiperSlide>
            )
          })}
        </article>
      </Swiper>
      <br/>
      <Swiper
        modules={[Pagination, Autoplay, EffectCards]}
        slidesPerView={1}
        effect={'cards'}
        autoplay={{delay: 5000}}
        pagination={{ clickable: true }}>
        <article>
          {crimsonItems.map(item => {
            return (
              <SwiperSlide className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={item.img} alt={item.alt} />
                </div>
                <h2>
                  {item.title}
                </h2>
                <small className='text-light'>
                  {item.subtitle}
                </small>
              </SwiperSlide>
            )
          })}
        </article>
      </Swiper>
    </section>
  )
}

export default Portfolio
