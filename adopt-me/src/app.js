// props aka properties, allows our React components to be more flexible!
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ])
}

// App is a React component. It's like a rubber stamp (something that can be re-used). It is critical that we capitalise the name of our components.

// Data flows down! So I can pass properties from the App component to the Pet component, but not the other way around. ONE WAY DATA FLOW Parent > Child.
const App = () => {
  return React.createElement(
    "div",
    {}, // If we want to pass our div any attributes i.e. a class or an id, this is where would do it.
    [
      React.createElement("h1", { }, "Adopt Me!"),
      React.createElement(Pet, { name: "Honey", animal: "Dog", breed: "Poodle" }),
      React.createElement(Pet, { name: "IB", animal: "Bird", breed: "Budgie" }),
      React.createElement(Pet, { name: "Sora-Momo", animal: "Cat", breed: "Blue Persian" }),
    ] // These array brackets are optional.
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
