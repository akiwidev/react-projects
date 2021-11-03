import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

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
  const theme = useState("purple");
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-0 m-0"
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
        }}
      >
        <Router>
          <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to bg-red-500">
            <Link to="/" className="text-6xl text-white hover:text-grey-200">
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
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
