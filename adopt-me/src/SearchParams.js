// Hooks always begin with 'use..' and track the state of something. Whenever some kind of input changes, React kicks off a re-render cycle, and it's gonna call the hooks.
// Never put hooks inside of for loops or if statements!

import { useState, useEffect } from "react";
import Pet from './Pet'

const ANIMALS = ["bird", "cat", "dog", "reptile", "fish", "kangaroo"]

const SearchParams = () => {
  {/* 95% of the time your hooks are going to be written here, at the top of your component. */ }

  {/* Hooks with destructuring */ }
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  {/* Hooks without destructuring */ }
  // const locationTuple = useState("Te Awamutu");
  // const location = locationTuple[0];
  // const setLocation = locationTuple[1];

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // adding the sqaure brackets here ☝️ to make sure the api runs only once. If we don't have them, every time a hook is updated (re-rendered), then the api will run and we can enter an infinite loop. By adding a value inside the square brackets, we're defining when we want to call the api (i.e. every time animal is updated).

  // useEffect(() => {
  //   const timer = setTimeout(() => alert('hi'), 3000);

  //   {* clearing out (aka cleaning up after oneself) to prevent memory leaks.👇 *}
  //   {* useful when using timers, subscriptions etc. *}
  //   return () => clearTimeout(timer);
  // }, [animal]);

  async function requestPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const json = await response.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location" />
        </label>
        <label htmlFor="animal">Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map(animal => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">Breed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
          >
            <option />
            {breeds.map(breed => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map(pet => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id} />
      ))}
    </div>
  )
}

export default SearchParams;
