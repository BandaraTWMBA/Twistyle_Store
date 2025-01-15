import React from 'react'
import './Products.css'
import cart from '../../assets/shopping-cart1.png'
import scrunch1 from '../../assets/scrunch1.jpg'
import scrunch2 from '../../assets/scrunch2.jpg'
import scrunch3 from '../../assets/scrunch3.jpg'
import scrunch4 from '../../assets/scrunch4.jpg'
import scrunch5 from '../../assets/scrunch5.jpg'
import scrunch6 from '../../assets/scrunch6.jpg'
import scrunch7 from '../../assets/scrunch7.jpg'
import scrunch8 from '../../assets/scrunch8.jpg'
import scrunch9 from '../../assets/scrunch9.jpg'
import scrunch10 from '../../assets/scrunch10.jpg'
import scrunch11 from '../../assets/scrunch11.jpg'
import scrunch12 from '../../assets/scrunch12.jpg'
import e1 from '../../assets/e1.jpg'
import e2 from '../../assets/e2.jpg'
import e3 from '../../assets/e3.jpg'
import e4 from '../../assets/e4.jpg'
import e5 from '../../assets/e5.jpg'
import e6 from '../../assets/e6.jpg'
import e7 from '../../assets/e7.jpg'
import e8 from '../../assets/e8.jpg'
import e9 from '../../assets/e9.jpg'
import e10 from '../../assets/e10.jpg'
import e11 from '../../assets/e11.jpg'
import e12 from '../../assets/e12.jpg'
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import c5 from '../../assets/c5.jpg'
import c6 from '../../assets/c6.jpg'
import c7 from '../../assets/c7.jpg'
import c8 from '../../assets/c8.jpg'
import c9 from '../../assets/c9.jpg'
import c10 from '../../assets/c10.jpg'
import c11 from '../../assets/c11.jpg'
import c12 from '../../assets/c12.jpg'







const Products = () => {

  const menueitems = [
    {
      name: 'Scrunchie_01',
      image: scrunch1,
      price: 'Rs.200'
    },
    {
      name: 'Scrunchie_02',
      image: scrunch2,
      price: 'Rs.250'
    },
    {
      name: 'Scrunchie_03',
      image: scrunch3,
      price: 'Rs.270'
    },
    {
      name: 'Scrunchie_04',
      image: scrunch4,
      price: 'Rs.280'
    },
    {
      name: 'Scrunchie_05',
      image: scrunch5,
      price: 'Rs.200'
    },
    {
      name: 'Scrunchie_06',
      image: scrunch6,
      price: 'Rs.200'
    },
    {
      name: 'Scrunchie_07',
      image: scrunch7,
      price: 'Rs.250'
    },
    {
      name: 'Scrunchie_08',
      image: scrunch8,
      price: 'Rs.250'
    },
    {
      name: 'Scrunchie_09',
      image: scrunch9,
      price: 'Rs.250'
    },
    {
      name: 'Scrunchie_10',
      image: scrunch10,
      price: 'Rs.240'
    },
    {
      name: 'Scrunchie_11',
      image: scrunch11,
      price: 'Rs.220'
    },
    {
      name: 'Scrunchie_12',
      image: scrunch12,
      price: 'Rs.200'
    },
    {
      name: 'Earrings_01',
      image: e1,
      price: 'Rs.250'
    },
    {
      name: 'Earrings_02',
      image: e2,
      price: 'Rs.200'
    },
    {
      name: 'Earrings_03',
      image: e3,
      price: 'Rs.200'
    },
    {
      name: 'Earrings_04',
      image: e4,
      price: 'Rs.290'
    },
    {
      name: 'Earrings_05',
      image: e5,
      price: 'Rs.200'
    },
    {
      name: 'Earrings_06',
      image: e6,
      price: 'Rs.200'
    },
    {
      name: 'Earrings_07',
      image: e7,
      price: 'Rs.250'
    },
    {
      name: 'Earrings_08',
      image: e8,
      price: 'Rs.250'
    },
    {
      name: 'Earrings_09',
      image: e9,
      price: 'Rs.250'
    },
    {
      name: 'Earrings_10',
      image: e10,
      price: 'Rs.250'
    },
    {
      name: 'Earrings_11',
      image: e11,
      price: 'Rs.200'
    },
    {
      name: 'Earrings_12',
      image: e12,
      price: 'Rs.200'
    },
    {
      name: 'ClawClips_01',
      image: c1,
      price: 'Rs.200'
    },
    {
      name: 'ClawClips_02',
      image: c2,
      price: 'Rs.250'
    },
    {
      name: 'ClawClips_03',
      image: c3,
      price: 'Rs.200'
    },
    {
      name: 'ClawClips_04',
      image: c4,
      price: 'Rs.290'
    },
    {
      name: 'ClawClips_05',
      image: c5,
      price: 'Rs.290'
    },
    {
      name: 'ClawClips_06',
      image: c6,
      price: 'Rs.200'
    },
    {
      name: 'ClawClips_07',
      image: c7,
      price: 'Rs.250'
    },
    {
      name: 'ClawClips_08',
      image: c8,
      price: 'Rs.200'
    },
    {
      name: 'ClawClips_09',
      image: c9,
      price: 'Rs.280'
    },
    {
      name: 'ClawClips_10',
      image: c10,
      price: 'Rs.200'
    },
    {
      name: 'ClawClips_11',
      image: c11,
      price: 'Rs.200'
    },{
      name: 'ClawClips_12',
      image: c12,
      price: 'Rs.220'
    },
  
  ];
  

  const scrunchies=menueitems.slice(0,12);
  const earrings=menueitems.slice(12,24);
  const clawclips=menueitems.slice(24,36);






  return (
    <>
    <h1 className='name'>SHOP ALL</h1>
    <section className="card-container">
      {scrunchies.map((item,index)=> (
        
        <section className="card" key={index}>
    <img src={item.image}  alt={item.name} className='card-img '/>
    <div className="card-details">
        <h3 className='card-title'>{item.name}</h3>
        <section className="card-reviews">
            {/* <img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /> */}
               {/* <span className="total-reviews">4</span> */}
              <section className="card-price">
                <div className="price">
                    <del>Rs.300</del><p>{item.price}</p>
                </div>
                <div className="bag"><img src={cart} alt="cart"/></div>
              </section>
        
        </section>
    </div>
    <button className="btnbuy">Buy Now</button>

   </section>
  
     ) )}
<hr/>

{earrings.map((item,index)=> (
        
        <section className="card" key={index}>
    <img src={item.image}  alt={item.name} className='card-img '/>
    <div className="card-details">
        <h3 className='card-title'>{item.name}</h3>
        <section className="card-reviews">
            {/* <img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /> */}
               {/* <span className="total-reviews">4</span> */}
              <section className="card-price">
                <div className="price">
                    <del>Rs.300</del><p>{item.price}</p>
                </div>
                <div className="bag"><img src={cart} alt="cart"/></div>
              </section>
        
        </section>
    </div>
    <button className="btnbuy">Buy Now</button>

   </section>
  
     ) )}
   

   {clawclips.map((item,index)=> (
        
        <section className="card" key={index}>
    <img src={item.image}  alt={item.name} className='card-img '/>
    <div className="card-details">
        <h3 className='card-title'>{item.name}</h3>
        <section className="card-reviews">
            {/* <img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /> */}
               {/* <span className="total-reviews">4</span> */}
              <section className="card-price">
                <div className="price">
                    <del>Rs.300</del><p>{item.price}</p>
                </div>
                <div className="bag"><img src={cart} alt="cart"/></div>
              </section>
        
        </section>
    </div>
    <button className="btnbuy">Buy Now</button>

   </section>
  
     ) )}

   



   










 
     


    </section>
      
    </>
  )
}

export default Products
