import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import PropTypes from "prop-types";
import Validator from "validator";

import InlineError from "../messages/InlineError";


class LoginForm extends React.Component {

  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {},
    serverError:""
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });


  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data)
      .catch(err =>
        this.setState(
          { serverError: err.response.data.non_field_errors, loading: false }
        )
      );
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) {
      errors.email = "Invalid email.";
    }
    if (!data.email) errors.email = "Can't be blank.";
    if (!data.password) errors.password = "Can't be blank.";
    return errors;
  };

  render() {
    const { data, errors, loading, serverError} = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {serverError && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{serverError}</p>
          </Message>
        )}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={this.onChange}
          />
        {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary fluid disabled={loading}>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
