import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import styles from './ClientList.module.css';
import { clientLogoList } from '../../pages/api/data';

const ClientList = () => {
  return (
    <Container>
        <Row>
            <Col>
                <h2 className='my-5'> Our Clients </h2>
                <ul className={styles.clientLogoBox}>
                    {clientLogoList.map((clientlogo) => {
                        return (
                            <li key={clientlogo.id}>
                                <Image src={clientlogo.logoImage} alt={clientlogo.altText} width={200} height={100} />
                            </li>
                        )
                    })}
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default ClientList