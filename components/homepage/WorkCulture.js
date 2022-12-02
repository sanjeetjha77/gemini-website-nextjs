import React from 'react'
import styles from './WorkCulture.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';


const WorkCulture = () => {
  return (
    <Container>
        <Row className='my-5'>
            <Col md={6} className='mt-5'>
                <h5> 
                    <span>
                        <Image src='/images/thumbnail_Outlook-43bluowa.png' alt="colorbar" width={50} height={10} />
                    </span> Challenging and a lot of fun 
                </h5>
                <h2> Work Culture @ Gemini  </h2>
                <p className='text-primary'> <b> Right up There </b>  </p>
                <p className="mt-5 text-justify"> We are committed to creating a positive workplace culture. Every Geminite is special and we ensure to make your experience a priority. Our employee first approach encourages teamwork and open communication. At Gemini, you will be part of our family, where every employee is valued, supported and nurtured and we take great pride in our global, diverse workforce. We help our employees reach their own professional goals because we know Geminites are our most valuable resource and their talent our greatest competitive advantage. </p>
                <p className='text-justify'> At Gemini, you will be at the forefront of innovation - creating technologies for the future. We will empower you to be the change maker. </p>
                <div className="mt-5">
                    <Button variant="outline-primary" size="lg"> Current Openings </Button>
                </div>
            </Col>
            <Col md={6} className='mt-5'>
                <Image 
                    className={styles.workCultureImg} 
                    src='/images/workculture.jpg' 
                    alt='work culture' 
                    width={300}
                    height={300} />
            </Col>
        </Row>
    </Container>
  )
}

export default WorkCulture