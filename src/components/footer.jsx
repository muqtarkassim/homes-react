import React from "react";
import ig from "./images/2111463.png";
import tw from "./images/5968958.png";
import fb from "./images/5968764.png"
import logoimg from "./images/png/logo-no-background.png"
export default function Footer(){
    return (
        <>
        <hr></hr>
             <div className="footer-first">
           
           <p>Amana Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our</p>
       <p>web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please</p>
     <p><a href="/">let us know</a></p> 
      <p className="p-groupl">Amana Homes, Inc. holds real estate brokerage licenses in multiple states. Zillow (Canada), Inc. holds real estate brokerage licenses in multiple provinces.</p>
      <p>§ 442-H Nairobi Standard Operating Procedures</p>
      <p>§ Nairobi Fair Housing Notice</p>
      <p>TREC: Information about brokerage services, Consumer protection notice</p>
  
  <p className="p-groupl">For listings in East-africa, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The east-african Real Estate Association (EFREA) and </p>

  <p>identify real estate professionals who are members of EFREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by EFREA </p>
  <p>and identify the quality of services provided by real estate professionals who are members of EFREA. Used under license.</p>
   </div>
   <div className="footer-second">
       <div className="footer-logo">
           <a href="#" >
           <img src={logoimg} alt="img"/>

           </a>
       </div>
       <div className="footer-socials">
        <p><a href="https://instagram.com/agueroo_12?utm_source=qr&igshid=MThlNWY1MzQwNA==" target="_blank">  <img src={ig}alt="img"/></a></p>
        <p> <a href="https://www.facebook.com/muktar.kassim.733?mibextid=ZbWKwL"target="_blank"><img src={fb} alt="img"/></a></p>
        <p><a href="https://x.com/Muqtar71679720?t=3iRR4X7ouED3leX22NIaqg&s=08" target="_blank"><img src={tw}alt="img"/></a></p>
       
       </div>
       <div className="copyright-c">
           <p>&copy; 2023 Amana Homes. All rights reserved.</p>

       </div>
   </div>
        </>
    )
}