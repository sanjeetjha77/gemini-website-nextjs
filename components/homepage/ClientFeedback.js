import React from 'react'
import styles from './ClientFeedback.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { clientFeedbacks } from '../../pages/api/data';


const ClientFeedback = () => {
  return (
    <div className={styles.clientFeedbackBox}>
        <Container fluid>
            <Row>
                <Col>
                    <div className={styles.clientFeedbackHead}>
                        <h5> 
                            <span> 
                                <Image src='/images/thumbnail_Outlook-43bluowa.png' width={50} height={10} alt='colorbar' /> 
                            </span> MORE THAN BUSINESS 
                        </h5>
                        <h1 className='mt-2'> Great Clients </h1>
                    </div>
                <Carousel controls={true}>
                    {clientFeedbacks.map((feedback, index) => {
                        return (
                            <Carousel.Item key={feedback.id}>
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <p> {feedback.feedbackText} </p>
                                    <p style={{textAlign : 'right'}}>
                                        <b> {feedback.clientName} </b>
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ClientFeedback