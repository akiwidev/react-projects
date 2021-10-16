// hooks always begin with 'use..' and track the state of something. Never put hooks inside of for loops or if statements!

import { useState } from "react";

const SearchParams = () => {
  {/* With destructuriing */ }
  const [location, setLocation] = useState("Te Awamutu")

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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;
