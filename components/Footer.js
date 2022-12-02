import React from 'react'
import styles from './Footer.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { footerBranchAddress } from '../pages/api/data';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Container>
          <Row>
            <Col md={6}>
              <h5> 
                <span> 
                  <Image src='/images/thumbnail_Outlook-43bluowa.png' width={40} height={10} alt='colorbar' /> 
                </span> GET IN TOUCH 
              </h5>
              <h1> <b> OUR LOCATIONS </b> </h1>
              <p className='text-primary'>  <b> Where to find us? </b>  </p>
            </Col>
            <Col md={6} className='text-end'>
              <Image className={styles.footerIsoLogos} src='/images/geminiisologo11.png' width={300} height={100} alt="logos" />
            </Col>
          </Row>

          <Row>
            {footerBranchAddress.map((branch)=> {
              return (
                <Col md={3} className={styles.footerAddress} key={branch.id}>
                  <h4> <b> {branch.branchName} </b> </h4>
                  <p> {branch.address} </p>
                  <p> {branch.phone} </p>
                  <p> {branch.email} </p>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <div className={styles.footerCopyrightText}>
            <Container>
              <Row>
                <Col md={7}>
                  <p>Copyright © 2022 <b>Gemini Consulting &amp; Services</b>. All Rights Reserved. Privacy Policy </p>
                </Col>
                <Col md={3}>
                  <p> icons </p>
                </Col>
                <Col md={2} className='text-end'>
                  <p> Back To Top </p>
                </Col>
              </Row>
            </Container>
      </div>
        
    </>
  )
}

export default Footer