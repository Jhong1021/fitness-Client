import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: 'url(https://wallpapers.com/images/featured/fitness-2e1dufzgv4p5mtk6.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Full viewport height
    color: 'white', // Ensure text is readable
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  return (
    <Row style={backgroundImageStyle}>
      <Col>
        <h1>Welcome to our Fitness Tracker App</h1>
        <p>Create, Update, Delete and View Our Fitness Activities</p>
        <Link className="btn btn-primary" to={'/items'}>Check Our Fitness Activities</Link>
      </Col>
    </Row>
  );
}
