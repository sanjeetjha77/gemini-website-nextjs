import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import styles from './SliderBanner.module.css';
import { sliderBanners } from '../../pages/api/data';

const SliderBanner = () => {
  return (
    
    <div className={styles.carouselBanner}>
        <Carousel controls={false}>    
        
        {sliderBanners.map((slider) => {
            return (
                <Carousel.Item className={styles.carouselItem} key={slider.id}>
                    <Image
                        className="d-block w-100"
                        src={slider.backgroundImage}
                        // layout='fill'
                        width={1200}
                        height={550}
                        alt="slider banner"
                    />
                    <Carousel.Caption className={styles.carouselCaption}>
                        <h3> 
                            <span> <Image src="/images/thumbnail_Outlook-43bluowa.png" width={50} height={18} alt='image' /> </span>
                            {slider.bannerTitle} 
                        </h3>
                        <h4> {slider.bannerDetails} </h4>
                        <p> {slider.bannerDescription} </p>
                        <button> {slider.bannerButton} </button>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })}

        </Carousel>
        </div>
    
  )
}

export default SliderBanner