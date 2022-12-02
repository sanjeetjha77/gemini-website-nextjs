import React from 'react'
import styles from './index.module.css';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/UI/Card';
import { Button } from 'react-bootstrap';
import { servicePageCategory } from '../../pages/api/data';


const Services = () => {
  return (
    <>
      <div className={styles.headerBg}>
        <h5 className='text-primary'> <span> <Image src='/images/thumbnail_Outlook-43bluowa.png' width={40} height={10} alt='colorbar' /> </span> HOME </h5>
        <h2> Services </h2>
      </div>

      <Container>
        <Row className='my-5'>
          <Col>
            <p className='text-justify'> New technologies and digital developments are changing how organizations function. Digital economy demands organizations to move beyond smart manufacturing and integrated systems. We can help you create new capabilities to transform your organization into a future ready business. At Gemini, we offer tools to adopt a fresh digital perspective and make insightful business decisions. We can help enterprises to quickly move from problems to solutions to the next growth phase. </p>
          </Col>
        </Row>
        <Row>
          {servicePageCategory.map((data) => {
            return (
              <Col md={3} className='mb-5' key={data.id}>
                <Card>
                  <div className='p-4 text-center'>
                    <Image className={styles.serviceCategoryImg} src={data.imgLink} width={512} height={512} alt='enterprise' />
                    <h5 className='text-primary py-3'> {data.contentHead} </h5>
                    <p> {data.content} </p>
                    <Button variant='link'> Read More </Button>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>

      </Container>
    </>
  )
}

export default Services