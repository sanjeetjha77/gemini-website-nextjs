// import styles from '../styles/Home.module.css'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SliderBanner from '../components/carousel/SliderBanner';
import Head from 'next/head';
import CategoryBanner from '../components/homepage/CategoryBanner';
import ClientList from '../components/homepage/ClientList';
import SmartSolution from '../components/homepage/SmartSolution';
import ClientFeedback from '../components/homepage/ClientFeedback';
import GeminiAwardCertificates from '../components/homepage/GeminiAwardCertificates';
import WorkCulture from '../components/homepage/WorkCulture';

export default function Home() {
  return (
    <>
    <Head>
      <title> Welcome - Gemini Consulting & Services </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      
          <SliderBanner />
          <CategoryBanner />
          <ClientList />
          <SmartSolution />
          <ClientFeedback />
          <GeminiAwardCertificates />
          <WorkCulture />

    </>
  )
}
