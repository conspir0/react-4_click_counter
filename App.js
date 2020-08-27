class App extends React.Component {
  state = {}

  render() {
    const { isVisible } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          Hello Wolrd
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
