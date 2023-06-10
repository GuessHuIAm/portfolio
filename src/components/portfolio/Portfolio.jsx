import React from 'react'
import { Pagination, Autoplay, EffectCards} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-cards'

import GreatBooks from '../../assets/videos/Great_Books.mov'
import Kirby from '../../assets/videos/Kirby.mp4'
import MoMA from '../../assets/videos/MoMA_Night.mp4'
import Fruits from '../../assets/videos/Fruits.mov'

import Diasphora from '../../assets/drawings/Diasporic_Essay.png'
import DrinkingAlone from '../../assets/drawings/Drinking_Alone_Under_the_Moon_with_Li_Bai.png'
import FromMeInCambridge from '../../assets/drawings/From_Me,_In_Cambridge,_With_Love.png'
import LadderFaculty from '../../assets/drawings/Ladder_Faculty.png'
import EmptyHarvardYard from '../../assets/drawings/Empty_Harvard_Yard.png'
import Lamonster from '../../assets/drawings/Lamonster.png'
import Situationship from '../../assets/drawings/Situationship.png'

import './portfolio.css'

const videoItems = [
  {
    title: 'Great Books',
    img: GreatBooks,
    subtitle: '',
    alt: 'Link',
  },
  {
    title: 'Kirby',
    img: Kirby,
    subtitle: '',
    alt: 'Link',
  },
  {
    title: 'Night at the MoMA',
    img: MoMA,
    subtitle: '',
    alt: 'Link',
  },
  {
    title: 'Fruits',
    img: Fruits,
    subtitle: '',
    alt: 'Link',
  }
]

const pictureItems = [
  {
    title: 'Lamonster',
    img: Lamonster,
    subtitle: '',
    alt: 'Link',
  },
  { 
    title: 'College Application',
    img: Diasphora,
    subtitle: '',
    alt: 'Link',
  },
  {
    title: 'Situationship',
    img: Situationship,
    subtitle: '',
    alt: 'Link',
  },
  {
    title: 'Ladders',
    img: LadderFaculty,
    subtitle: '',
    alt: 'Link',
  },
  {
    title: 'Empty Harvard Yard',
    img: EmptyHarvardYard,
    subtitle: '',
    alt: 'Link',
  },
  {
    title: 'Letters to Myself',
    img: FromMeInCambridge,
    subtitle: '',
    alt: 'Link',
  },
  {
    title: 'Drinking Alone Under the Moon with Li Bai',
    img: DrinkingAlone,
    subtitle: '',
    alt: 'Link',
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Artworks</h5>
      <h2>Portfolio</h2>

      <div className="swiper-container">
        {/* Photo Portfolio */}
        <Swiper
          modules={[Pagination, Autoplay, EffectCards]}
          slidesPerView={1}
          effect={'cards'}
          autoplay={{delay: 5000}}
          pagination={{ clickable: true }}>
          <article>
            {pictureItems.map(item => {
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

        {/* Video Portfolio */}
        <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}>
        <article>
          {videoItems.map(item => {
            return (
              <SwiperSlide className='portfolio__item'>
                <div className="portfolio__item-image">
                  <video src={item.img} alt={item.alt} controls>
                    Your browser doesn't support the video tag.
                  </video>
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
      </div>
    </section>
  )
}

export default Portfolio
