import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";

class App extends React.Component {
  state={

  };

  addEvent = () => {

  }

  toggleModal = () => {

  }

  handleInputChange = inputName => value => {

  }

  handleDelete = eventId => {

  }

  render() {
    return (
      <React.Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="9">
            <Event time="10:00" title="Meet with Sara"/>
          </MDBCol>
          <MDBCol md="3">

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </React.Fragment>
    )
  }
}

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
      title: this.props.title
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>
          State:
          {this.state.time} - {this.state.title}
          <button
            onClick={() => {
              this.setState({
                title: "Me NEW state title"
              });
            }}
          >
            Change my title
          </button>
        </h3>
      </React.Fragment>
    );
  }
}

export default App;
