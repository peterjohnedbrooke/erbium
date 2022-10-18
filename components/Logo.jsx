import React from 'react'
import {Image as NextImage} from 'next/image';


const Logo = ({navLogo}) => {
const logo = "https://erbiumbackend.herokuapp.com" + navLogo.data.attributes.NavLogo.data.attributes.url
  return (
    <div className="logoContainer">
        <NextImage src={logo} />
    </div>
  )
}

export default Logo