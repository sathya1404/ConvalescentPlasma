import React, { Component } from "react";
import { Form, Button, Container,Select } from "semantic-ui-react";
import "./DonorForm.css";
import "../header/Header.css";
const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class DonorForm extends Component {
  render() {
    return (
      <div className="form_background">
      
    
        <div className="Donor-form">
          <Container >
            
            <Form unstackable>
              <Form.Group widths={2}>
              <Form.Input>DonorForm</Form.Input>  
              <Form.Input><Button circular icon='x' /></Form.Input>
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label="Name" />
                <Form.Input label="Phone number" />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label="Address Line 1" />
                <Form.Input label="Address Line 2" />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label="Age" />
                <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
         searchInput={{ id: 'form-select-control-gender' }}
      />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label="Do you currently have any symptoms" />
                <Form.Input label="Hospital for treatment" />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label="Date of Discharge" />
                <Form.Input label="Date of Admission" />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label="Certificate for Proof" />
                <Form.Input label="Preferable Location for Plasma Collection" />
              </Form.Group>

              <Form.Group>
                <h3>Do you want to pick up service</h3>
                <Form.Checkbox label="yes" />
                <Form.Checkbox label="no" />
              </Form.Group>

              <Button primary type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    );
  }
}

export default DonorForm;
