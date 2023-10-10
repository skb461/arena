import logo from '../logo.svg';
import '../App.css';

import Course from './Course'
import Course_Name from './Course_Name';
import Course_hour from './Course_hour';

// bootstrap
import { Button, Container, Row, Col, Card} from 'react-bootstrap';

function Header() {
  return (
    <div>
        <Container>
            <h1 className='text-center'>Course Registration</h1>
            <Row>
                <Col sm={9}>
                    <Row>
                        <Course />
                    </Row>
                </Col>
                <Col sm={3}>
                    <Card className='p-1 a'>
                        <h3></h3>
                        <hr />
                        <h3>Course Name</h3>
                        <Course_Name />
                        <hr />
                        <Course_hour />
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Header;
