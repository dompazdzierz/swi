import { Container, Button, Row, Col, Spinner, Form, Pagination, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import './ResultsPage.css';
import { useCallback, useState } from 'react';
import { IResult } from '../models/IResult';

function ResultsPage() {
    const results: Array<IResult> = [
        {
            user: 1234,
            book: 1234,
            rating: 2,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2022',
            updatedAt: '04.06.2022'
        },
        {
            user: 1234,
            book: 1234,
            rating: 2,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2022',
            updatedAt: '04.06.2022'
        },
        {
            user: 1234,
            book: 1234,
            rating: 2,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2022',
            updatedAt: '04.06.2022'
        }
    ];

    const [ratingMin, setRatingMin] = useState('');
    const [ratingMax, setRatingMax] = useState('');
    const [commentsMin, setcommentsMin] = useState('');
    const [commentsMax, setcommentsMax] = useState('');
    const [votesMin, setVotesMin] = useState('');
    const [votesMax, setVotesMax] = useState('');
    
    const handleElasticCall = useCallback(() => {
 
    }, []);

    const handleApplyFilters = useCallback(() => {
 
    }, []);

    const handleGoBack = useCallback(() => {
 
    }, []);

    const renderDropdown = () => {
        return (
            <DropdownButton id="dropdown-basic-button" title="Choose report">
                <Dropdown.Item href="#/action-1">List</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Timeline by user</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Timeline by book</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Rating by user for book</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Rating by book for user</Dropdown.Item>
            </DropdownButton>
        );
    };

    const renderCard = (result: IResult) => {
        return (
            <Card className='w-100 mr-2 mt-4'>
                <Card.Body className='w-100 d-flex' >
                    <Container className='w-25'>
                        <h5>User: {result.user}</h5>
                        <h5>Book: {result.book}</h5>
                        <h5>Rating: {result.rating}</h5>
                        <h5>Comments: {result.comments}</h5>
                    </Container>
                    <Container className="d-flex flex-column justify-content-between">
                        <h5>{result.review}</h5>
                        <Container className="d-flex justify-content-between">
                            <div>Created: {result.createdAt}</div>
                            <div>Updated: {result.updatedAt}</div>
                        </Container>
                    </Container>
                </Card.Body>
            </Card>
        );
    };

    const renderCards = () => {
        return results.map(x => renderCard(x));
    };

    const renderFilersRow = (section: string, type: string = 'text') => {
        const label = section.substring(0, 1).toUpperCase() + section.substring(1);
        const colClassName = type === 'date' ? 'w-50' : '';

        return (
            <Row className='mt-3'>
                <h5>{label}</h5>
                <Col className={colClassName}>
                    <Form.Group controlId={section + 'min'}>
                        <Form.Label>Min</Form.Label>
                        <Form.Control type={type} />
                    </Form.Group>
                </Col>
                <Col className={colClassName}>
                    <Form.Group controlId={section + 'max'}>
                        <Form.Label>Max</Form.Label>
                        <Form.Control type={type} />
                    </Form.Group>
                </Col>
            </Row>
        );
    };

    const renderFilters = () => {
        return (
            <div className='d-flex flex-column'>
                <h2>Filters</h2>
                {renderFilersRow('rating')}
                {renderFilersRow('comments')}
                {renderFilersRow('votes')}
                {renderFilersRow('update', 'date')}
                {renderFilersRow('addition', 'date')}
                <Button 
                    className="mt-4 align-self-center" 
                    variant="primary" 
                    type="submit"
                >
                    Apply filters
                </Button>
            </div>
        );
    };

    return (
        <>
            <Container className='d-flex p-5 pb-0 my-4'>
                <Button
                    variant="primary" 
                >
                    Return
                </Button>
            </Container>
            <Container className="d-flex px-5 h-100 w-100">
                <Card className='w-25 mr-4'>
                    <Card.Body className='w-100' style={{height: '860px'}}>
                        {renderFilters()}
                    </Card.Body>
                </Card>
                <Card className='w-75 mx-4'>
                    <Card.Body className='w-100' style={{height: '860px'}}>
                        <Container className="d-flex justify-content-between mb-4">
                            <h5>Search results for...</h5>
                            {renderDropdown()}
                        </Container>
                        {renderCards()}
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default ResultsPage;
