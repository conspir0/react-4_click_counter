class App extends React.Component {
  state = {
    counter: 0,
    result: 0
  }

  buttonHandler = (type) => {
    console.log(type)
    if (type === "+") {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
        result: prevState.result + 1
      }))
    } else if (type === "-") {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
        result: prevState.result - 1
      }))
    } else if (type === "reset") {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
        result: 0
      }))
    }
  }

  render() {
    const { result, counter } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <div className="button-container">
            <ButtonElem
              name="+"
              clickEvent={() => this.buttonHandler("+")}
            />

            <ButtonElem
              name="-"
              clickEvent={() => this.buttonHandler("-")}
            />

            <ButtonElem
              name="reset"
              clickEvent={() => this.buttonHandler("reset")}
            />
          </div>
          <div className="result-container">
            <ResultBox
              text="Result"
              value={result}
            />
            <ResultBox
              text="Counter"
              value={counter}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const ButtonElem = ({ name, clickEvent }) => {
  return (
    <button
      className="button"
      onClick={clickEvent}
    >
      {name}
    </button>
  )
}

const ResultBox = ({ text, value }) => {
  return (
    <div className="result-box">
      {`${text}: ${value}`}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
