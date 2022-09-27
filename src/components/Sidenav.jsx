import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import {BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlineClose } from "react-icons/ai"
import { navData } from './navdata';
import "./Sidenav.css"
import {IconContext} from "react-icons"
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import ReactTooltip from "react-tooltip";

function Sidenav() {
  
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar);
  const [tooltip, showTooltip] = useState(true);

  const hide = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }


  return (

    <>

      <IconContext.Provider value={{color:"black"}}>

      <motion.nav className="navbar" animate={{x: sidebar ? 250: 0}} transition={{ duration: 0.3 }} whileHover={{scale:1, boxShadow: "0px 0px 4px gray"}}>
        <Link>
        <motion.div className="threedots" onClick={showSidebar} transition={{ duration: 0 }} whileHover={{
    scale: 1.2}} initial="visible" animate={!sidebar ? "visible": "hidden"} variants={hide}>
          <BsThreeDotsVertical />
        </motion.div>
        </Link>
        
        <Link>
        <motion.div className='navbar-toggle' onClick={showSidebar} transition={{ duration: 0.2 }} whileTap={{ scale: 0.97 }} whileHover={{
    scale: 1.2}} initial="hidden" animate={sidebar ? "visible": "hidden"} variants={hide}>
                <AiOutlineClose />    
        </motion.div>
        
        </Link>  
    
          <motion.ul className='nav-menu-items' onClick={showSidebar} transition={{ ease: "easeOut", duration: 2 }} initial="hidden" animate={sidebar ? "visible": "hidden"} variants={hide}>

            
            {navData.map((item, index) => {
              return (
                <motion.li key={index} className="nav-text" whileHover={{scale:1.2, originX:0, color:"black", "font-weight":"bolder"}} transition={{type:"spring", stiffness:300, damping:18}}>
                  <NavLink to={item.path} activeClassName="selected">
                    {item.title.toUpperCase()}
                  </NavLink>
                </motion.li>
              );
            })}
          </motion.ul>
          

          <motion.ul className='nav-menu-items extra' transition={{ ease: "easeOut", duration: 2 }} initial="hidden" animate={sidebar ? "visible": "hidden"} variants={hide}>

            <motion.li className="nav-text">
              <Link className="fw">
                Contact
              </Link>
            </motion.li>
          
            <motion.li className="nav-text">
        
              <a href="mailto:saivamsi.ds123@gmail.com" className="contact_fs">
                <img alt='email' src={require("../assets/gmail.png")} width={"24px"} height={"24px"} data-tip="saivamsi.ds123@gmail.com" onMouseEnter={() => showTooltip(true)}
   onMouseLeave={() => {
     showTooltip(false);
     setTimeout(() => showTooltip(true), 50);
   }} />
              </a>
              <a href="https://www.linkedin.com/in/sai-vamsi-alisetti-4892a4197/" className="contact_fs">
                <img alt='linkedin' src={require("../assets/linkedin.png")} width={"24px"} height={"24px"} />
              </a>

              <a href="https://github.com/Vamsi995" className="contact_fs">
                <img alt='github' src={require("../assets/github.png")} width={"24px"} height={"24px"} />
              </a>

              {tooltip && <ReactTooltip effect="solid" backgroundColor="white" textColor='black'/>}
              {tooltip && <ReactTooltip effect="solid" backgroundColor="white" textColor='black'/>}
              <a href="https://github.com/Vamsi995" className="contact_fs" data-tip="(+91)7995939741" onMouseEnter={() => showTooltip(true)}
   onMouseLeave={() => {
     showTooltip(false);
     setTimeout(() => showTooltip(true), 50);
   }}>
                <img alt='phone' src={require("../assets/phone.png")} width={"24px"} height={"24px"} />
              </a>

            </motion.li>


          </motion.ul>


          <motion.ul className='nav-menu-items extra' transition={{ ease: "easeOut", duration: 2 }} initial="hidden" animate={sidebar ? "visible": "hidden"} variants={hide}>

            <motion.li className="nav-text">
              <Link className="fw">
                Socials
              </Link>
            </motion.li>
          
            <motion.li className="nav-text">

              <a href="https://instagram.com/_v.um.see_/" className="contact_fs">
                <img alt='instagram' src={require("../assets/instagram.png")} width={"24px"} height={"24px"} data-tip="_v.um.see_" onMouseEnter={() => showTooltip(true)}
   onMouseLeave={() => {
     showTooltip(false);
     setTimeout(() => showTooltip(true), 50);
   }}/>
              </a>
              <a href="https://www.facebook.com/alisetti.vamsi/" className="contact_fs">
                <img alt='facebook' src={require("../assets/facebook.png")} width={"24px"} height={"24px"} />
              </a>

              <a href="https://twitter.com/vumsee_" className="contact_fs">
                <img alt='twitter' src={require("../assets/twitter.png")} width={"24px"} height={"24px"} data-tip="vumsee_" onMouseEnter={() => showTooltip(true)}
   onMouseLeave={() => {
     showTooltip(false);
     setTimeout(() => showTooltip(true), 50);
   }}/>
              </a>

              <a href="https://discord.com/users/Vumsee#8824" className="contact_fs">
                <img alt='discord' src={require("../assets/discord.png")} width={"24px"} height={"24px"} data-tip="Vumsee#8824" onMouseEnter={() => showTooltip(true)}
   onMouseLeave={() => {
     showTooltip(false);
     setTimeout(() => showTooltip(true), 50);
   }} />
              </a>

            </motion.li>


          </motion.ul>

            
      
      </motion.nav>
      </IconContext.Provider>




    </>

    
  )
}

export default Sidenav