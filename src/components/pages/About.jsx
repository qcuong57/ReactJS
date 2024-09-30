import React from 'react'
import { about } from '../data/dummydata'
import { Heading } from '../common/Heading'

export const About = () => {  
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val, i) =>
            <>
              <div className='left' data-aos='fade-down-right'>
                <img key={i} src={val.cover} alt="" />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title={val.title} />
                <p>{val.desc}</p>
              </div>
            </>
          )}
        </div>
      </section>
      
    </>
  )

}
