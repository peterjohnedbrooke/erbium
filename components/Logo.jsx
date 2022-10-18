import React from 'react'

const Logo = ({navLogo}) => {
const logo = "https://shielded-dusk-43078.herokuapp.com" + navLogo.data.attributes.NavLogo.data.attributes.url
  return (
    <div className="logoContainer">
        <img src={logo} />
    </div>
  )
}

export default Logo