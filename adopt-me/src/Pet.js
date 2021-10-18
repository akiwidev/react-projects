import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if(images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

{/* The code above is JSX (JavaScript XML). Instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript. It is a syntax extension of React, and allows us to directly write HTML in React. When run through babel it will output the same code as below👇 */}

{/* const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// }; */}

{/* props aka properties, allows our React components to be more flexible! */}


export default Pet;
