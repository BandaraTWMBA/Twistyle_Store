import React from 'react'
import './About.css'
import aboutpic01 from '../../assets/aboutpic01.png'
import aboutpic02 from '../../assets/aboutpic02.png'
import aboutpic03 from '../../assets/aboutpic3.png'

// import picture02 from '../../assets/sbpic02.png'
// import picture03 from '../../assets/sbpic03.png'

const About = () => {
  return (
    <div >
      

    <div className='about1'>
      <h1 className='aboutus'>ABOUT US</h1>

      <div className='aboutpicture1'>
          
      </div>
    
              {/* <img src={picture03} alt="pic03"/>
            <img src={picture02} alt="pic02"/> */}
             <div className='about-text01'>
              <h3>MEET THE FOUNDER</h3>
              <h4>BUDHATHRI BANDARA</h4>
              
              <br/>
              <p>Twistyle offers a curated collection of trendy and timeless accessories,
                   from statement jewelry and elegant scarves to chic handbags and unique gifts.  
                   With a focus on quality, affordability,   and personal expression,
                   Twistyle is the go-to destination  for those  looking to elevate their look or find the perfect gift. 
                    Step into a world of style and   discover something special at Twistyle!</p>
            </div>
              
      
      
    </div>

    <div className='about2'>
    <h1 className='ourstory'>OUR STORY</h1>
      <div className='aboutpicture2'>
          <img src={aboutpic01} alt="aboutpic01"/>
      </div>
      <div className='about-text02'>
      <h3>WHERE IT ALL BEGAN</h3>
              
              
              <br/>
              <p>Twistyle was born from a simple idea: to create beautiful, affordable accessories that bring joy to everyday moments. 
              It is a result of the strict goal of being independent financially and be a help to my family while
               carrying out higher studies.
              What started as a small passion project and a lifelong dream  quickly grew into a thriving business,
               driven by creativity, dedication, and a love for unique designs. 
              From humble beginnings, Twistyle has become a destination for those seeking to add a touch of
               charm and individuality to their style.</p>
            </div>
              

            
    
       </div>    
       
    <div className='about3'>
  
      
      <div className='about-text03'>
      <h3>LOVE FOR ART</h3>
              
              
              <br/>
              <p>our love for art is at the heart of everything we create. 
                Each accessory is a testament to creativity, blending intricate designs with timeless elegance. 
                Inspired by the beauty of everyday moments, we aim to turn simple pieces into wearable works of art 
                that allow you to express your unique style and personality. For us, art isn't just a passion—it's a way of life.
              </p>
            </div>
              

            
    
       </div>  
       <div className='aboutpicture3'>
          <img src={aboutpic02} alt="aboutpic03"/>
      </div> 
      
      <div className='about4'>
 
      <div className='aboutpicture4'>
          <img src={aboutpic03} alt="aboutpic03"/>
      </div>
      <div className='about-text04'>
      <h3>CREATIVITY</h3>
              
              
              <br/>
              <p>Creativity is the soul of Twistyle. 
                Every accessory we design is a reflection of innovative ideas and a passion for crafting something truly unique. 
                From playful patterns to elegant details, our pieces are thoughtfully created to inspire 
                self-expression and add a touch of individuality to your style. 
                At Twistyle, creativity isn’t just a process—it’s what sets us apart.</p>
            </div>
              

            
    
       </div> 

    
       </div>   
       
    
    
   
  )
}

export default About
