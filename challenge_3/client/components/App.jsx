class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      userId: 0,
      summary: {}
    };

    this.next = this.next.bind(this);
    this.saveId = this.saveId.bind(this);
    this.addToSummary = this.addToSummary.bind(this);
  }

  next() {
    this.setState({ step: this.state.step += 1 });
  }

  getHomePage() {
    this.setState({ step: 0 });
    this.setState({ userId: 0 });
  }

  addToSummary(form) {
    this.setState({ summary: Object.assign(this.state.summary, form) });
  }

  saveId(id) {
    this.setState({ userId: id });
  }

  render() {
    return this.state.step === 0 ?
    (<Checkout checkOut={this.next}/>) :
    (<Form step={this.state.step} next={this.next} saveId={this.saveId} userId={this.state.userId} addToSummary={this.addToSummary} summary={this.state.summary} getHome={this.getHomePage.bind(this)} />)
  }
}
