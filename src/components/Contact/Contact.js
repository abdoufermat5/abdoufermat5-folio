import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from "emailjs-com";
import { validateNameMessage, validateEmail } from "./validation";
import Card from "./Card";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Swal from "sweetalert2";
import "./formstyle.scss";

const SERVICE_ID = "service_p9l4yke";
const TEMPLATE_ID = "template_1z6zw9g";
const USER_ID = "a8tCIDaUj63hGbTLZ";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      user_name: {
        name: "user_name",
        label: "Name",
        value: "",
        focus: false,
        errorMessage: false,
        errorOccured: false
      },
      user_email: {
        name: "user_email",
        label: "Email",
        value: "",
        focus: false,
        errorMessage: false,
        errorOccured: false
      },
      user_message: {
        name: "user_message",
        label: "Message",
        value: "",
        focus: false,
        errorMessage: false,
        errorOccured: false
      },
      canIsubmit: false,
    };
    this.form = React.createRef();

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFocus(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = true;
    state.errorMessage = false;
    state.errorOccured = false;
    this.setState({ [name]: state });
  }

  handleBlur(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = false;
    this.setState({ [name]: state });
  }

  handleChange(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);

    state.value = e.target.value;

    this.setState({ [name]: state });
    
  }

  // handleSubmit(e) {
  //     const subject = "Mail From" + this.state.name.value,
  //           email = this.state.email.value,
  //           message = this.state.message.value;
  //     event.preventDefault();
  // }
  handleSubmit(e) {
    e.preventDefault();
    console.log("WAW---", this.form.current);

    this.setState({
      user_email: {
        ...this.state.user_email,
        errorMessage: validateEmail(this.state.user_email),
        errorOccured: validateEmail(this.state.user_email)!==false
      },
      user_name: {
        ...this.state.user_name,
        errorMessage: validateNameMessage(this.state.user_name),
        errorOccured: validateNameMessage(this.state.user_name)!==false,
      },
      user_message: {
        ...this.state.user_message,
        errorMessage: validateNameMessage(this.state.user_message),
        errorOccured: validateNameMessage(this.state.user_message)!==false,
      },
    });

    this.setState({
      canIsubmit:
        !this.state.user_email.errorMessage &&
        !this.state.user_name.errorMessage,
    });

    if (this.state.canIsubmit) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, this.form.current, USER_ID)
        .then(
          (result) => {
            console.log(result.text);
            this.setState({
              user_email: {
                ...this.state.user_email,
                errorMessage: false,
                errorOccured: false
              },
              user_name: {
                ...this.state.user_name,
                errorMessage: false,
                errorOccured: false
              },
              user_message: {
                ...this.state.user_message,
                errorMessage: false,
                errorOccured: false
              },
            });

            this.setState({
              canIsubmit: false,
            });
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully",
              confirmButtonText: '<i class="fa fa-thumbs-up"></i> Thank You!',
              confirmButtonColor: "#7aceb2",
              color: "#bdc9c1",
              padding: "2em",
              backdrop: `
              rgba(53, 136, 101, 0.259)
            `,
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "warning",
              title: "Ooops, something went wrong. Try again!",
              text: error.text,
              confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again!',
              confirmButtonColor: "#b3b1a4",
              color: "#ad891c",
              padding: "2em",
              backdrop: `
              rgba(110, 97, 12, 0.259)
            `,
            });
          }
        );
      e.target.reset();
    } else {
      console.log("STATE---", this.state);
      console.log("CAN I SUBMIT:   ", this.state.canIsubmit);
      Swal.fire({
        icon: "error",
        title: "Please fill the form correctly",
        text: "",
        confirmButtonText: '<i class="fa fa-frown-o"></i> Try Again!',
        confirmButtonColor: "#a35f60",
        color: "#b31405",
        padding: "2em",
        backdrop: `
          rgba(156, 42, 11,0.259)
      `,
      });
    }
  }

  render() {
    const { user_name, user_email, user_message } = this.state;

    console.log("NAME -- ", user_name);
    return (
      <Container fluid className="contact-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Get In <strong className="purple">TOUCH</strong>
          </h1>
        </Container>
        <Container>
          <Card>
            <form className="form" onSubmit={this.handleSubmit} ref={this.form}>
              <TextInput
                {...user_name}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
              <TextInput
                {...user_email}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
              <TextArea
                {...user_message}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
              <button className="custom-button" type="submit" value="Submit">
                Submit
              </button>
            </form>
          </Card>
        </Container>
      </Container>
    );
  }
}
