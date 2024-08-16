import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'

function Events() {
  return (
   <>
   <section className="mainn py-0">
  <div className="banner2"></div>
 
            
                
                        <h3 className='events'><small>EVENTS</small><br/>
                            
                    </h3>
                    

                

            
        </section>

        
        <div class="width-100 margin-top-50">
  <div class="container">
    <div className="row">
      <div className="col-lg-4">
        
    <div class="width-33">
      <div class="latest-news">
        <div class="heading-sect">
          <h3 class="head-title">Latest News</h3>
        </div>
          
        <marquee direction="up">
        <ul class="latest-news-ul">
          <li>About31 mar 2022 Ph D list Part 01_16 feb 2022<img src="images/latest-news-blink-img.gif"/></li>
          <li> 31 mar 2022 Ph D list Part 02_16 feb 2022 <img src="images/latest-news-blink-img.gif"/> </li>
          <li> 24 May 2022 Incubation Center </li>
          <li> 31 mar 2022 Instituitional Distinctiveness </li>
          <li> 31 mar 2022 Academic Calender Session 2019-20 </li>
          <li> 16 feb 2022 Ph D merit list Part 01_16 feb 2022 </li>
          <li> 16 feb 2022 Ph D merit list Part 02_16 feb 2022 </li>
          <li> 17 Oct 2022 Consolidate academic Calender </li>
        </ul>
        </marquee>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
    <div class="width-33">
      <div class="event-list">
        <div class="heading-sect">
          <h3 class="head-title">Upcoming Events</h3>
        </div>
        <ul class="upcoming-event-list">
          <li><span class="event-date">29 <br/>
             April</span><span> Seminar is conducted on BCA courses.</span> </li>
          <li><span class="event-date">30 <br/>
            April</span><span> Seminar is conducted on B.com courses.</span> </li>
          <li><span class="event-date">2 <br/>
            Mar</span><span> Conducted its 2nd convocation ceremony.</span> </li>
          <li><span class="event-date">5 <br/>
            Mar</span><span> Annual Meeting for Batch of BBA ( 2018 to 2021 ).</span> </li>
        </ul>
      </div>
      </div>
    </div>
    <div className="col-lg-4">
    <div class="width-33">
      <div class="notice-board">
        <div class="heading-sect">
          <h3 class="head-title">Notice Board</h3>
        </div>
        <ul class="notice-board-list">
          <li><i class="fa-regular fa-file"></i><a href="/"> Participation in Climate Correction Day (CCD) Challenge for Mission LiFE</a></li>
          <li><i class="fa-regular fa-file"></i> <a href="/">	West Zone Inter University Table Teniss (man) Tournament 2022-23 </a> </li>
          <li><i class="fa-regular fa-file"></i>< a href="/"> 	PhD Registration Form for Selected Candidates</a></li>
          <li><i class="fa-regular fa-file"></i><a href="/"> 	List of Activities organised under TEQIP-III </a></li>
          <li><i class="fa-regular fa-file"></i>< a href="/"> 	Documents for empanellment of vendor for A Class contyractor </a></li>
          <li><i class="fa-regular fa-file"></i><a href="/"> School of Architecture College Level counselling 2022-23  </a></li>
        </ul>
      </div>
    </div>
    </div>
  </div>
  </div>
</div>

     
   </>
  )
}

export default Events
