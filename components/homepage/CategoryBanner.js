import React from 'react'
import styles from './CategoryBanner.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';


function CategoryBanner() {
  return (
    <Container>
        <Row>
            <Col lg={4}>
                <div className={styles.card} style={{backgroundImage : 'radial-gradient( circle at top right, #0e7ec1, #fff 65% )'}}>
                    <Image className={styles.imgBg} src='/images/categoryBanner1.png' alt='services' width={300} height={300}  />
                    <h4> <span> <Image src='/images/thumbnail_Outlook-43bluowa.png' width={40} height={10} alt='color' /> </span> PLAN, THEN DO </h4>
                    <h2> Services </h2>
                    <p> Analytics, AI & ML Enterprise Apps Digital Testing & QA </p>
                    <button className={styles.cardButton}> Explore More </button>
                </div>
            </Col>
            <Col lg={4}>
                <div className={styles.card} style={{backgroundImage : 'radial-gradient( circle at top right, #0eb1e5, #fff 65% )'}}>
                    <Image className={styles.imgBg} src='/images/categoryBanner2.png' alt='services' width={300} height={300}  />
                    <h4> <span> <Image src='/images/thumbnail_Outlook-43bluowa.png' width={40} height={10} alt='color' /> </span> SMALL TACTICS </h4>
                    <h2> Innovations </h2>
                    <p> Product Development Innovation Lab Mobile Apps Chat Bots </p>
                    <button className={styles.cardButton}> Explore More </button>
                </div>
            </Col>
            <Col lg={4}>
                <div className={styles.card} style={{backgroundImage : 'radial-gradient( circle at top right, #fcd207, #fff 65% )'}}>
                    <Image className={styles.imgBg} src='/images/categoryBanner3.png' alt='services' width={300} height={300}  />
                    <h4> <span> <Image src='/images/thumbnail_Outlook-43bluowa.png' width={40} height={10} alt='color' /> </span> PROOF, NOT PROMISES </h4>
                    <h2> Industries </h2>
                    <p style={{paddingRight : '10%'}} > Higher Education & Healthcare Sports, Media & Entertainment, E-Governance & Manufacturing, Banking & Finance </p>
                    <button type='button' className={styles.cardButton}> Explore More </button>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default CategoryBanner