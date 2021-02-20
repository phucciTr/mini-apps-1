class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };

  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    if (this.isFormReady()) {
      request.createUser(this.getForm(), (userId) => {
        this.props.saveId(userId);
        this.props.nextForm();
      });
    }
  }

  getForm() {
    return {
      username: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
  }

  isFormReady() {
    return this.state.name !== '' && this.state.email !== '' && this.state.password !== '';
  }

  render() {
    return (
      <div>
        <h1>F1</h1>

        <form onSubmit={this.submitForm.bind(this)}>
          <label>
            Name: <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
          </label> <br/>

          <label>
            Email: <input type="text" autoComplete="username" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
          </label> <br/>

          <label>
            Password: <input type="password" autoComplete="new-password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
          </label> <br/>

          <input type="submit" value="submit"/>
        </form>

      </div>
    )
  }
}
