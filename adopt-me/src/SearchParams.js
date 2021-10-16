// Hooks always begin with 'use..' and track the state of something. Whenever some kind of input changes, React kicks off a re-render cycle, and it's gonna call the hooks.
// Never put hooks inside of for loops or if statements!

import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "reptile", "fish", "kangaroo"]

const SearchParams = () => {
  {/* 95% of the time your hooks are going to be written here, at the top of your component. */ }

  {/* With destructuriing */ }
  const [location, setLocation] = useState("Te Awamutu");
  const [animal, updateAnimal] = useState("");

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
            onChange={e => updateAnimal(e.target.value)}
            onBlur={e => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map(animal => (
              <option value={animal} key={animal}>
                {animal}
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
