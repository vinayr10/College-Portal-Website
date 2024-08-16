import React from 'react'
import './Main.css'

function Main() {
  return (
    <div>
       <section className="main py-0">
        <div className="banner"></div>
        <div className="container py-5">
            <div className="row py-2">
                <div className="col-lg-9 py-2 layer">
                        <h3><small>PDIT COLLEGE PORTAL</small><br/>
                            
                    </h3>
                    

                </div>

            </div>
        </div>
    </section>

    <section className="about py-5" id="scrollspy1">
      <div className="container py-5">
          <div className="heading">
            <h1>WELCOME TO PDIT</h1>
            <p>Proudhadeveraya Institute of Technology, (PDIT) established in 1997.The Institution is affiliated to Visvesvaraya Technological University, Belgaum, Karnataka, India and recognized by AICTE, New Delhi.

PDIT is situated in a sprawling 20 acres of land quite adjacent to T.B.Dam and very near to famous world heritage historical place Hampi.

The campus homed in a beautiful spacious building with calm, decent and serene environment and is congenial for the pursuit of knowledge</p>
            <p className="events py-2">Click on "EVENTS"  to know more</p>
        </div>
        </div>
        
</section>

<section className='mainimg py-4'>
  <div className="container ">
    
      <img  className="image" src="events.png" alt="" />
    </div> 

</section>

<section className='foooter'>
<div className="container">
  <p className='fooottxt'>Join, Collaborate, Share, and Learn </p>
</div>
</section>




    </div>
  )
}

export default Main
