class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };

    this.next = this.next.bind(this);
  }

  next() {
    this.setState({ step: this.state.step += 1 });
    console.log('this.state.step = ', this.state.step);
  }

  render() {
    return this.state.step === 0 ?
    (<Button checkOut={this.next}/>) :
    (<Form step={this.state.step} next={this.next} />)
  }
}
