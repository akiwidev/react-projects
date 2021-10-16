// Hooks always begin with 'use..' and track the state of something. Whenever some kind of input changes, React kicks off a re-render cycle, and it's gonna call the hooks.
// Never put hooks inside of for loops or if statements!

import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "reptile", "fish", "kangaroo"]

const SearchParams = () => {
  {/* 95% of the time your hooks are going to be written here, at the top of your component. */ }

  {/* With destructuring */ }
  const [location, setLocation] = useState("Te Awamutu");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  {/* Without destructuring */ }
  // const locationTuple = useState("Te Awamutu");
  // const location = locationTuple[0];
  // const setLocation = locationTuple[1];

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
    </div>
  )
}

export default SearchParams;
