import ReactDOM from "react-dom";
import Pet from "./Pet";

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
      <h1>Adopt Me!</h1>
      {/*Below is how we pass props to our component in JSX*/}
      <Pet name="Honey" animal="Dog" breed="Poodle" />
      <Pet name="IB" animal="Bird" breed="Budgie" />
      <Pet name="Sora-Momo" animal="Cat" breed="Blue Persian" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
