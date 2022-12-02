import React from 'react'
import styles from './GeminiAwardCertificates.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { awardCertificates } from '../../pages/api/data';
import Button from 'react-bootstrap/Button';


const GeminiAwardCertificates = () => {
  return (
    <Container className='mt-5'>
        <Row>
            <Col>
                <h2> Gemini Consulting & Services </h2>
                <p className='text-primary'> <b>  Trusted & Proven | Innovative Solutions </b></p>
                <p> A certified global IT & ITES services provider in consulting, technology, and outsourcing solutions. <br/>
                    Enabling your Digital Transformation </p>
                <div className={styles.awardLogo}>
                    <ul>
                        {awardCertificates.map((award) => {
                            return (
                                <li key={award.id}>
                                    <Image src={award.imgLink} alt={award.imgTitle} width={200} height={200} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <p> Gemini will help our start-up alliances with strategic planning and market research that will help them in a best way to promote their brand and their new products. Being our alliances, we provide digital marketing support and content to guarantee your company’s trading success from the onset. We even offer innovative commercial models to improve your businesses. </p>
                <Button variant='outline-primary' size='lg'> Read More </Button>
            </Col>
        </Row>
    </Container>
    
  )
}

export default GeminiAwardCertificates