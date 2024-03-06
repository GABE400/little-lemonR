// Service.jsx

import GreekSalad from "../../assets/greek salad.jpg";
import LemonDesert from "../../assets/lemon dessert.jpg";
import AsianNoodles from "../../assets/Asian Noodles and Green Pepper.jpg";
import GrilledMeat from "../../assets/grilled meat.jpg";
import { TbMenuOrder } from "react-icons/tb";
import "./Products.css";
import Btn from "../Button/Btn";

const Products = () => {
  return (
    <section id='products-section'>
      <div className='product-container container'>
        <div className='header'>
          <h2>Ths Weeks Specials!</h2>
          <Btn text='Online Menu' color='yellow' />
        </div>

        <div className='grid-container'>
          {/* Replace the following with your actual data */}
          <div className='card'>
            <img src={GreekSalad} alt='Service Image' />
            <div className='card-details'>
              <div className='title-price'>
                <h3>Greek salad</h3>
                <p className='price'>$12.99</p>
              </div>
              <p className='description'>
                The famous greek salad of cripsy lettuce, peppers, olives and
                our chicago style feta cheese. garnished with crunchy garlic and
                rosemary routons.
              </p>
              <div className='order-info'>
                <h3>Order a delivery</h3>
                <p className='icon'>
                  <TbMenuOrder />
                </p>
              </div>
            </div>
          </div>

          <div className='card'>
            <img src={LemonDesert} alt='Service Image' />
            <div className='card-details'>
              <div className='title-price'>
                <h3>Lemon Dessert</h3>
                <p className='price'>$12.99</p>
              </div>
              <p className='description'>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <div className='order-info'>
                <h3>Order a delivery</h3>
                <p className='icon'>
                  <TbMenuOrder />
                </p>
              </div>
            </div>
          </div>

          <div className='card'>
            <img src={GrilledMeat} alt='Service Image' />
            <div className='card-details'>
              <div className='title-price'>
                <h3>Grilled Meat</h3>
                <p className='price'>$12.99</p>
              </div>
              <p className='description'>
                Indulge in the savory delight of our perfectly grilled meat at
                Little Lemon. Each bite bursts with smoky, flavorful goodness,
                ensuring a memorable dining experience.
              </p>
              <div className='order-info'>
                <h3>Order a delivery</h3>
                <p className='icon'>
                  <TbMenuOrder />
                </p>
              </div>
            </div>
          </div>

          <div className='card'>
            <img src={AsianNoodles} alt='Service Image' />
            <div className='card-details'>
              <div className='title-price'>
                <h3>Asian Noodles</h3>
                <p className='price'>$12.99</p>
              </div>
              <p className='description'>
                Savor the fusion of bold flavors with our Asian Noodles and
                Green Pepper dish at Little Lemon. Experience the tantalizing
                blend of savory noodles and crisp green peppers, creating a
                harmonious and satisfying culinary adventure.
              </p>
              <div className='order-info'>
                <h3>Order a delivery</h3>
                <p className='icon'>
                  <TbMenuOrder />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
