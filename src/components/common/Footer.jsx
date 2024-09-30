import React from 'react'
import { social } from '../data/dummydata'

export const Footer = () => {
    return (
        <>
        <footer>
            {social.map((item) => (
                <>
                    <i data-aos='zoom-in'>{item.icon}</i>
                </>
            ))}
        </footer>
        </>
    )
}
