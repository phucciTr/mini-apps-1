class F2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      city: '',
      zip: '',
    }
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value });
  }

  handleCityChange(e) {
    this.setState({ city: e.target.value });
  }

  handleZipChange(e) {
    this.setState({ zip: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    if (this.isFormReady()) {
      request.saveLoc(this.getForm(), () => {
        this.props.nextForm();
      });
    }
  }

  getForm() {
    return {
      userId: this.props.userId,
      address: this.state.address,
      city: this.state.city,
      zipcode: this.state.zip
    }
  }

  isFormReady() {
    return this.state.address !== '' && this.state.city !== '' && this.state.zip !== '';
  }

  render() {
    return (
      <div>
        <h1>F2</h1>

        <form onSubmit={this.submitForm.bind(this)} >
          <label>
            Address: <input type="text" value={this.state.address} onChange={this.handleAddressChange.bind(this)} />
          </label> <br/>

          <label>
            City: <input type="text" value={this.state.city} onChange={this.handleCityChange.bind(this)} />
          </label> <br/>

          <label>
            Zip Code: <input type="text" value={this.state.zip} onChange={this.handleZipChange.bind(this)} />
          </label> <br/>


          <input type="submit" value="submit" />
        </form>

      </div>
    )
  }
}

// var F2 = () => (
//   <div>
//     <h1>F2</h1>
//   </div>
// );