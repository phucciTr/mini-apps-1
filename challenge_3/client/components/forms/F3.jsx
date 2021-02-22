class F3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: '',
      expDate: '',
      cvv: '',
      zipCode: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitForm(e) {
    e.preventDefault();

    if (this.isFormReady()) {
      request.saveCard(this.getForm(), () => {
        this.props.addToSummary(this.getForm());
        this.props.nextForm();
      });
    }
  }

  getForm() {
    return {
      userId: this.props.userId,
      card_number: this.state.cardNumber,
      cvv: this.state.cvv,
      zipcode: this.state.zipCode
    }
  }

  isFormReady() {
    return this.state.cardNumber !== '' && this.state.expDate !== '' && this.state.cvv !== '' && this.state.zipCode !== '';
  }

  render() {
    return (
      <div>
        <h1>F3</h1>

        <form onSubmit={this.submitForm.bind(this)}>
          <label>
            Card #: <input type="number" name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange} />
          </label> <br/>

          <label>
            Exp Date: <input type="number" name="expDate" value={this.state.expDate} onChange={this.handleChange} />
          </label> <br/>

          <label>
            CVV: <input type="number" name="cvv" value={this.state.cvv} onChange={this.handleChange} />
          </label> <br/>

          <label>
            Zip Code: <input type="number" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} />
          </label> <br/>

          <input type="submit" value="next" />

        </form>
      </div>
    )
  }

};
