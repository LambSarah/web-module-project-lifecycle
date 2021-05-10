import React from 'react'
import { Form, Row, Col, Container } from 'reactstrap';
import SearchForm from './SearchForm';

class FormWrapper extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs='6' sm='4'>
                            <Form inline>
                                <SearchForm />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default FormWrapper;