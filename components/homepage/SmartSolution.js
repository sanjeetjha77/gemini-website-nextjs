import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import styles from './SmartSolution.module.css';


const SmartSolution = () => {
  return (
    <Container>
        <Row className='my-5'>
            <Col md={6}>
                <Image 
                    className={styles.smartSolutionImg} 
                    src='/images/img-experience.png' 
                    alt='smart solution' 
                    width={300}
                    height={300} />
            </Col>
            <Col md={6}>
                <h5> 
                    <span>
                        <Image src='/images/thumbnail_Outlook-43bluowa.png' alt="colorbar" width={50} height={10} />
                    </span> Technology meets creativity 
                </h5>
                <h2> Smart solutions for tough challenges  </h2>
                <p className="mt-3"> We are a company that loves a tough business challenge. For us every challenge is an opportunity – to redefine, to innovate and to come up with a smart solution. We collaborate with our customers to offer innovative solutions to their business requirements in a dynamically changing world.  </p>
                <p> Are you an enterprise looking for a partner to drive your digital transformation? Gemini is the right partner for you. We provide solutions to streamline, enhance and transform your business. </p>
                <div className="mt-5">
                    <Button variant="outline-primary" size="lg"> Discover </Button>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default SmartSolution