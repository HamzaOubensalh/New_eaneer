import Header from '../../../Component/Header/header';
import Footer from '../../../Component/Header/footer';
import './page.css'
import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className='Main-About-Us'>
        <div className='Main-About-Style'>
        <div className='Second-About-Us'>
            <p>About Us</p>
            <p>Empowering Excellence in Electrical Solutions
            Discover the Ideas Behind eaneer's Commitment to Innovation and Quality
            </p>
            <p>We're Committed To Pioneering Sustainable Electrical Solutions That Empower Our Clients To Thrive.</p>
        </div>
        <div className='Image-About-Us'>
            <Image src={''} alt={''}></Image>
        </div>
        <div className='Vision-Div'>
            <div className='first-div'>
                <p>Our Vision</p>
                <p>A Future Powered By Electrical Innovation</p>
                <div className='text-div'>
                    <p>At eaneer, we envision a future where innovation and sustainability drive electrical engineering. </p>
                    <p>We're dedicated to leveraging cutting-edge technologies in industrial, agricultural, and construction sectors to optimize energy consumption.</p>
                </div>
            </div>
            <div className='second-div'>

            </div>
        </div>
        <div className='Mission-Div'>
            <div className='first-Mission-Div'>


            </div>
            <div className='second-Mission-Div'>
                

            </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
