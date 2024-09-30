import React from 'react'
import { title } from '../data/dummydata'
export const Heading = ({title}) => {
  return (
    <>
      <h2 className='heading' data-aos='zoom-in-down'>{title}</h2>
    </>
  )
}
