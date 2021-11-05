// Hooks always begin with 'use..' and track the state of something. Whenever some kind of input changes, React kicks off a re-render cycle, and it's gonna call the hooks.
// Never put hooks inside of for loops or if statements!

import { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "reptile", "rabbit"];

const SearchParams = () => {
  {
    /* 95% of the time your hooks are going to be written here, at the top of your component. */
  }

  {
    /* Hooks with destructuring */
  }
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  {
    /* Hooks without destructuring */
  }
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
    );
    const json = await response.json();

    setPets(json.pets);
  }

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label className="search-label" htmlFor="location">
          Location
          <input
            className="search-content"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label className="search-label" htmlFor="animal">
          Animal
          <select
            className="search-content"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label className="search-label" htmlFor="breed">
          Breed
          <select
            className="search-content disabled:opacity-50"
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label className="search-label" htmlFor="theme">
          Theme
          <select
            className="search-content"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button
          className="rounded px-6 py-2 text-white hover:opacity-50 border-none"
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
