import { Container, Button, Row, Col, Spinner, Form, Pagination, Card } from 'react-bootstrap';
import './HomePage.css';
import bookOpenSVG from '../assets/book-open.svg';
import { useCallback, useState } from 'react';

function HomePage() {
    const [review, setReview] = useState('');
    const [book, setBook] = useState('');
    const [user, setUser] = useState('');

    const handleSearch = useCallback(() => {
 
    }, []);

    return (
        <Container fluid='md' className="d-flex p-5 h-100 my-4">
            <Card className='w-100 m-4 quote-card'>
                <Card.Body className='w-100' style={{height: '860px'}}>
                    <Container className="quote">
                        <img src={bookOpenSVG} width='100px' />
                        <h1 style={{fontWeight: 'bold'}}>Book reviews library</h1>
                        <h2 style={{fontStyle: 'italic'}}>Your all books reviews in one place.</h2>
                        <h4 style={{fontStyle: 'italic', marginBottom: '64px'}} className="quote-cacao">~ Cacao DecoMorreno</h4>
                        <Form className="w-75">
                            <Form.Group className="mb-3" controlId="formReview">
                                <Form.Control type="email" placeholder="Type search phrase..." />
                                <Form.Text className="text-muted">
                                    Search for whatever review you want.
                                </Form.Text>
                            </Form.Group>
                            <Button 
                                className="align-self-center" 
                                variant="primary" 
                                type="submit"
                                onClick={handleSearch}
                            >
                                Search
                            </Button>
                            <Row>
                                <Col>
                                    <Form.Group className="mt-4" controlId="formBook">
                                        <Form.Label>Advanced filters:</Form.Label>
                                        <Form.Control placeholder="Type book..." />
                                    </Form.Group>
                                    <Form.Group className="mt-1" controlId="formUser">
                                        <Form.Control placeholder="Type user..." />
                                    </Form.Group>
                                </Col>
                                <Col></Col>
                            </Row>

                        </Form>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default HomePage;
