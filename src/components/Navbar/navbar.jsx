import React, { useState } from 'react'
import './navbar.css'

import logo from '../assets/logo192.png'


const Navbar = () => {
  const [menu,setmenu]=useState("AddFuel Data");
return (
<div className='navbar'>
<div className="nav-logo">
<img src={logo} alt="" />
<p>Fuel Switch Carbon Credits DApp</p>
</div>
<u1 className="nav-menu">
<li onClick={()=>{setmenu("addfuel data")}}>AddFuel Data{menu==="addfuel data"?<hr/>:<></>}</li>
<li onClick={()=>{setmenu("Calculate COEF")}}>Calculate COEF{menu==="Calculate COEF"?<hr/>:<></>}</li>
<li onClick={()=>{setmenu("Calculate Emissions")}}>Calculate Emissions{menu==="Calculate Emissions"?<hr/>:<></>}</li>
<li onClick={()=>{setmenu("VVB Voting")}}>VVB Voting{menu==="VVB Voting"?<hr/>:<></>}</li>
<li onClick={()=>{setmenu("Mint Carbon Credits")}}>Mint Carbon Credits{menu==="Mint Carbon Credits"?<hr/>:<></>}</li>
</u1>

    </div>
  )
}

export default Navbar
