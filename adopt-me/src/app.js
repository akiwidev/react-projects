// App is a React component. It's like a rubber stamp (something that can be re-used). It is critical that we capitalise the name of our components.
const App = () => {
  return React.createElement(
    "div",
    { }, // If we want to pass our div any attributes i.e. a class or an id, this is where would do it.
    React.createElement("h1", { }, "Adopt Me!")
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
