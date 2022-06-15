import { Container, Button, Row, Col, Spinner, Form, Pagination, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import './ResultsPage.css';
import { useCallback, useState } from 'react';
import { IResult } from '../models/IResult';
import { Chart } from 'react-google-charts';

function ResultsPage() {
    const results: Array<IResult> = [
        {
            user: 1231,
            book: 1235,
            rating: 0,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2021',
            updatedAt: '04.06.2021'
        },
        {
            user: 1231,
            book: 1231,
            rating: 2,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2021',
            updatedAt: '04.06.2021'
        },
        {
            user: 1231,
            book: 1231,
            rating: 2,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2023',
            updatedAt: '04.06.2023'
        },
        {
            user: 1231,
            book: 1231,
            rating: 4,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2022',
            updatedAt: '04.06.2022'
        },
        {
            user: 1231,
            book: 1231,
            rating: 1,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2022',
            updatedAt: '04.06.2022'
        },
        {
            user: 1231,
            book: 1231,
            rating: 4,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2022',
            updatedAt: '04.06.2022'
        },
        {
            user: 1231,
            book: 1231,
            rating: 3,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2022',
            updatedAt: '04.06.2022'
        },
        {
            user: 1232,
            book: 1232,
            rating: 2,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2022',
            updatedAt: '04.06.2022'
        },
        {
            user: 1231,
            book: 1232,
            rating: 2,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2022',
            updatedAt: '04.06.2022'
        },
        {
            user: 1232,
            book: 1231,
            rating: 2,
            comments: 2,
            review: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdAt: '11.05.2022',
            updatedAt: '04.06.2022'
        }
    ];

    const groupBy = (list: Array<IResult>, keyGetter: (el: IResult) => any) =>{
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        const result = new Array<any>();
        map.forEach((value, key, map) => result.push({key: key, values: value}));
        return result;
    };

    const [ratingMin, setRatingMin] = useState('');
    const [ratingMax, setRatingMax] = useState('');
    const [commentsMin, setcommentsMin] = useState('');
    const [commentsMax, setcommentsMax] = useState('');
    const [votesMin, setVotesMin] = useState('');
    const [votesMax, setVotesMax] = useState('');
    const [visualization, setVisualization] = useState(0);
    
    const handleElasticCall = useCallback(() => {
 
    }, []);

    const handleApplyFilters = useCallback(() => {
 
    }, []);

    const handleGoBack = useCallback(() => {
 
    }, []);

    const renderDropdown = () => {
        return (
            <DropdownButton id="dropdown-basic-button" title="Choose report">
                <Dropdown.Item href="#/action-1" onClick={() => setVisualization(0)}>List</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => setVisualization(1)}>Timeline by user</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() => setVisualization(2)}>Timeline by book</Dropdown.Item>
                <Dropdown.Item href="#/action-4" onClick={() => setVisualization(3)}>Rating by user for book</Dropdown.Item>
                <Dropdown.Item href="#/action-5" onClick={() => setVisualization(4)}>Rating by book for user</Dropdown.Item>
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

    const renderGroupedCard = (group: number, values: Array<IResult>) => {
        const options = {
            title: '',
            legend: { position: 'none' },
        };
        const data = new Array<Array<any>>();
        if(visualization === 3) {
            data.push(['User','Raiting']);
            options['title'] = 'Raiting by user for book:' + group;
            values.forEach(v => data.push(['User: ' + v.user.toString(), v.rating]));
            return (
                <Card className='w-100 mr-2 mt-4'>
                    <Card.Body className='w-100 d-flex' >
                        <Container className='w-25' style={{margin: 0, marginRight: 130}}>
                            <h5>Book: {group}</h5>
                            <h5>Rating count: {values.length}</h5>
                            <h5>First rating: {values.sort((v1,v2) => new Date(v1.createdAt).getTime() - new Date(v2.createdAt).getTime())[0].createdAt}</h5>
                            <h5>Last rating: {values.sort((v2,v1) => new Date(v1.createdAt).getTime() - new Date(v2.createdAt).getTime())[0].createdAt}</h5>
                        </Container>
                        <Container className='w-25' style={{margin:0}}>
                            <Chart
                                chartType="Histogram"
                                width="500px"
                                height="400px"
                                data={data}
                                options={options}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            );
        }

        if(visualization === 4) {
            data.push(['Book','Raiting']);
            options['title'] = 'Raiting by book for user:' + group;
            values.forEach(v => data.push(['Book: ' + v.book.toString(), v.rating]));
            return (
                <Card className='w-100 mr-2 mt-4'>
                    <Card.Body className='w-100 d-flex' >
                        <Container className='w-25' style={{margin: 0, marginRight: 130}}>
                            <h5>User: {group}</h5>
                            <h5>Rating count: {values.length}</h5>
                            <h5>First rating: {values.sort((v1,v2) => new Date(v1.createdAt).getTime() - new Date(v2.createdAt).getTime())[0].createdAt}</h5>
                            <h5>Last rating: {values.sort((v2,v1) => new Date(v1.createdAt).getTime() - new Date(v2.createdAt).getTime())[0].createdAt}</h5>
                        </Container>
                        <Container className='w-25' style={{margin:0}}>
                            <Chart
                                chartType="Histogram"
                                width="500px"
                                height="400px"
                                data={data}
                                options={options}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            );
        }
        

    };
    

    const renderCards = () => {
        switch(visualization) {
        case 3:
            return groupBy(results, result => result.book).map(res => renderGroupedCard(res.key, res.values));
        case 4:
            return groupBy(results, result => result.user).map(res => renderGroupedCard(res.key, res.values));
        case 0:
        default:
            return results.map(x => renderCard(x));
        }
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
