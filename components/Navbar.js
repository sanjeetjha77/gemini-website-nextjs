import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { headerMenu } from '../pages/api/data';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import {Modal, Form, InputGroup, Button } from 'react-bootstrap';



const Navbar = () => {

const [modalOpen, setModalOpen] = useState(false);

const router = useRouter();
const currentRoute = router.pathname;

return (

    <>
        <nav className={styles.headerNavbar}>
            <div className={styles.geminiLogo}>
                <Image src="/images/gemini-logo.png" alt='gemini logo' width={300} height={50} />
            </div>

            <ul className={styles.navLink}>
                <li>
                    <Link href="/" className={currentRoute === "/" ? styles.active : " "}> Home </Link>
                </li>
                <li>
                    <Link href="/services" className={currentRoute === "/services" ? styles.active : " "}> Services </Link>
                </li>
                <li>
                    <Link href="/industries" className={currentRoute === "/industries" ? styles.active : " "}> Industries </Link>
                </li>
                <li>
                    <Link href="/innovations" className={currentRoute === "/innovations" ? styles.active : " "}> Innovations </Link>
                </li>
                <li>
                    <Link href="/about-us" className={currentRoute === "/about-us" ? styles.active : " "}> About Us </Link>
                </li>
            </ul>

            <div className={styles.searchIcon}>
                <Button  variant='link' onClick={() => setModalOpen(true)}> <FaSearch /> </Button>
            </div>
        </nav>

        <Modal
            size="lg"
            show={modalOpen}
            backdrop='static'
            onHide={() => setModalOpen(false)}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
                Search
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Looking For..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                 <FaSearch />
                </Button>
            </InputGroup>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default Navbar