import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  return(
  	<Form>
  		<Form.Group controlId="formBasicEmail">
    		<Form.Label>Title</Form.Label>
    		<Form.Control type="title" placeholder="Enter title" />
  		</Form.Group>
  			<Button variant="primary" type="submit">
    			Submit
  			</Button>
			</Form>
  	)
   }

}


export default Title;