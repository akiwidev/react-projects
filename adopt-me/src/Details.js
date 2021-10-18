import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor () {
    // We must ALWAYS call super() because we need to run the Component constructor.
    super();

    this.state = { loading: true};
  }
  async componentDidMount () {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await response.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }
  render () {
    const { animal, breed, city, state, description, name } = this.state;
   return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{animal} - {breed} - {city}, {state}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

// This is called a higher-order component. By wrapping Details inside withRouter, the Router is going to pass on all the information (aka props) into Details.
export default withRouter(Details);
