class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
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

  getNextForm(e) {
    e.preventDefault();

    if (this.isFormReady()) {

      let form = this.getInputs();
      console.log('data = ', form);

      request.createUser(form);

      this.props.next();
    }
  }

  getInputs() {
    this.state.data.name = this.state.name;
    this.state.data.email = this.state.email;
    this.state.data.password = this.state.password;
    return this.state.data;
  }

  isFormReady() {
    return this.state.name !== '' && this.state.email !== '' && this.state.password !== '';
  }

  render() {
    return (
      <div>
        <h1>F1</h1>

        <form onSubmit={this.getNextForm.bind(this)}>
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
