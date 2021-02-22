class F2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      city: '',
      zipcode: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    if (this.isFormReady()) {
      request.saveLoc(this.getForm(), () => {
        this.props.addToSummary(this.getForm());
        this.props.nextForm();
      });
    }
  }

  getForm() {
    return {
      userId: this.props.userId,
      address: this.state.address,
      city: this.state.city,
      zipcode: this.state.zipcode
    }
  }

  isFormReady() {
    return this.state.address !== '' && this.state.city !== '' && this.state.zipcode !== '';
  }

  render() {
    return (
      <div>
        <h1>F2</h1>

        <form onSubmit={this.submitForm.bind(this)} >
          <label>
            Address: <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
          </label> <br/>

          <label>
            City: <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
          </label> <br/>

          <label>
            Zip Code: <input type="number" name="zipcode" value={this.state.zipcode} onChange={this.handleChange} />
          </label> <br/>

          <input type="submit" value="next" />
        </form>

      </div>
    )
  }
}
