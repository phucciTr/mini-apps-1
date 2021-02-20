class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
            Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label> <br/>

          <label>
            Email: <input type="text" name="email" autoComplete="username" value={this.state.email} onChange={this.handleChange} />
          </label> <br/>

          <label>
            Password: <input type="password" name="password" autoComplete="new-password" value={this.state.password} onChange={this.handleChange} />
          </label> <br/>

          <input type="submit" value="next"/>
        </form>

      </div>
    )
  }
}
