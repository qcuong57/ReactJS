import React from 'react'
import { services } from '../data/dummydata'
import { Heading } from '../common/Heading'
export const Services = () => {
    return (
        <>
            <section className="services">
                <div className='container'>
                    <Heading title='Services' />
                    <div className='content grid3'  data-aos='zoom-out-right' >
                        {services.map((item, i) => (
                            <div className='box'>
                                <i>{item.icon}</i>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}
