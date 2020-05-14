import React, { Component } from "react";
import "./Header.css";
import {
  Image,
  Grid,
  Container,
  Icon,
  Button,
  Segment,
  Dropdown,
  Menu,
  Search,
} from "semantic-ui-react";
import map from "./map.png";
import doctor from "./doctor.jpg";
import donating from "./donating.jpg";
import whtsappicon from "./whtsappicon.png";
// import Donorform from "../donor_form/DonorForm";

const options = [
  { key: 1, text: "Plasma donors should be atlest 18 years old", value: 1 },
  {
    key: 2,
    text: "Plasma donors should weight at least 110 pounds or 50 kilograms",
    value: 2,
  },
  { key: 3, text: "Must pass a medical examination", value: 3 },
  { key: 1, text: "Complete an extensive medical history screening", value: 4 },
  {
    key: 2,
    text:
      "Test non-reactie for transmissible viruses including hepatitis and HIV",
    value: 5,
  },
  {
    key: 3,
    text: "Follow a recommended diet including 50 to 80 grams of daily protein",
    value: 6,
  },
];

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="main-banner">
            <Container>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={12}>
                    <Image
                      height="50px"
                      width="100px"
                      className="logo"
                      src="https://www.virchowbiotech.com/images/logo.png"
                      size="small"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid
                reversed="tablet"
                textAlign="right"
                width="20px"
                columns="equal"
              >
                <Grid.Column>Home</Grid.Column>
                <Grid.Column>About us</Grid.Column>
                <Grid.Column>Donate Plasma</Grid.Column>
                <Grid.Column>Contact us</Grid.Column>
              </Grid>

              <Grid>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <h1>
                      Could you donate Plasma to help treat coronovirus
                      (COVID-19) patients?
                    </h1>

                    <span>
                      <Icon name="ambulance" size="big"></Icon>
                    </span>
                    <span>
                      <Icon name="hospital" size="big"></Icon>
                    </span>
                    <span>
                      <Icon name="syringe" size="big"></Icon>
                    </span>
                    <span>
                      <Icon name="first aid" size="big"></Icon>
                    </span>
                  </Grid.Column>
                  <Grid.Column size="big" stretched width={5}>
                    <Segment>
                      <h1>Eligible to Donate</h1>
                      <br />
                      <h3>If you are Eligible to donate please register.</h3>
                      <Button primary>Register</Button>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
          <div>
            <Container>
              <Grid className="about-page">
                <Grid.Column width={4}>
                  <img src={doctor} alt="doctor" width="250px" />;
                </Grid.Column>
                <Grid.Column className="about-page-header" width={11}>
                  <h1>Welcome virchow</h1>
                  <h3>
                    Virchow Biotech pvt itd has got state and central approval
                    for immunotherapy trials, we will be ready with safe and
                    effective product soon. the only constrain is lack of plasma
                    donors which is posing a serious issue. Immunotherapy can
                    prove to be more promising as compared to direct plasma
                    adminstration in terms of several safety and efficacy
                    issues.
                  </h3>
                  <h3>
                    Dr.Murali Tummuru MD, Viruchow Biotech said 'The company
                    will be offering free treatment for the intial three months
                    after the product launch with the objective to serve the
                    national cause.
                  </h3>
                  <Button basic color="teal" content="Read More" />
                </Grid.Column>
              </Grid>
            </Container>
          </div>
          <br />

          <div>
            <Container>
              <Grid className="about-plasma">
                <Grid.Column width={7}>
                  <h1>What is Convalescent plasma?</h1>
                  <h3>
                    It is the Yellowish liquid part of the blood which is
                    collected from the patient who recovered from an infection.
                    This plasma rich antibody may help boost the immune system
                    of an infected person help him fight the virus. It has seen
                    that this therapy is can be promising to sevral ill COVID-19
                    patients. It could provide short-medium term humoral
                    immunity against to SARS-CoV-2 corono virus.
                  </h3>
                </Grid.Column>
                <Grid.Column width={8}>
                  <img
                    src={donating}
                    alt="donating"
                    width="600px"
                    height="400px"
                  />
                  ;
                </Grid.Column>
              </Grid>
            </Container>
          </div>
          <div>
            <Container stretched className="covid-updates">
              <h1>COVID 19</h1>
              <br />
              <Button basic>COVID-19 Dashboard</Button>
              <Button color="blue">Active cases</Button>
              <Button color="Green">cured/Discharged</Button>
              <Button color="olive">Deaths</Button>
              <Button color="green">Migrated</Button>
            </Container>
          </div>
          <br />
          <div>
            <Container>
              <Grid className="eligeble-donar">
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h1>Am I Eliglible to Donate Plasma?</h1>
                    <img
                      src={whtsappicon}
                      alt="whtsappicon"
                      width="80px"
                      height="80px"
                    />
                    <h3>Click here to pen information based Whsapp Chatbot</h3>
                    <Button color="green">Contact us</Button>
                    <Button primary>
                      Register
                    </Button>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Menu compact>
                      <Dropdown
                        text="General Guidelness for plasma Donation"
                        options={options}
                        simple
                        item
                      />
                    </Menu>
                    <Button color="white">
                      <Icon name="angle down" />
                      Before donating Plasma it is important
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
          <div>
            <Container>
              <Grid>
                <Grid.Column floated="left" width={5}>
                  <h1>Know your centers</h1>
                </Grid.Column>
                <Grid.Column floated="right" width={5}>
                  <Search className="search" placeholder="Search results" />
                </Grid.Column>
              </Grid>
            </Container>
            <br />
            <Container fluid>
              <img src={map} alt="map" width="900px" height="300px" />;
            </Container>
          </div>
        </div>

        {/* <Donorform /> */}
      </div>
    );
  }
}

export default Header;
