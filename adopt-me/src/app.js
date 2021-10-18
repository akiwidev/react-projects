import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

// FYI I've downloaded prettier locally, and it works, but as soon as I enable the VS Code extension, it stops working and I don't know why 🤷‍♀️

// App is a React component. It's like a rubber stamp (something that can be re-used). It is critical that we capitalise the name of our components.

// Data flows down! So I can pass properties from the App component to the Pet component, but not the other way around. ONE WAY DATA FLOW Parent > Child.

// const App = () => {
//   return React.createElement(
//     "div",
//     {}, // If we want to pass our div any attributes i.e. a class or an id, this is where would do it.
//     [
//       React.createElement("h1", {}, "Adopt Me!"),
//       React.createElement(Pet, {
//         name: "Honey",
//         animal: "Dog",
//         breed: "Poodle",
//       }),
//       React.createElement(Pet, { name: "IB", animal: "Bird", breed: "Budgie" }),
//       React.createElement(Pet, {
//         name: "Sora-Momo",
//         animal: "Cat",
//         breed: "Blue Persian",
//       }),
//     ] // These array brackets are optional.
//   );
// };

// re-writing the above code in JSX format (so much more readable!!)
const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
