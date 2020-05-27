import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Title extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		title: ""
  	}
  }

  handleCardClick = (event) => {
  	event.preventDefault();

  }

  handleChange = (event) => {
  	this.setState({ title: event.target.value });
  }

  render(){
  return(
  	<Container fluid={true}>
    <Row className="justify-content-around">
  	<Form>
  		<Form.Group controlId="formBasicEmail">
    		<Form.Label>{this.state.title}</Form.Label>
    		<Form.Control type="title" id="title_text" placeholder="Enter title" onChange={ this.handleChange }/>
  		</Form.Group>
  			<Button variant="primary" type="submit" onClick={(e => this.handleCardClick(e))}>
    			Submit
  			</Button>
			</Form>
			</Row>
			</Container>
  	)
   }

}


export default Title;