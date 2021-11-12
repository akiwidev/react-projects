import { expect, test } from "@jest/globals";
import { create } from "react-test-renderer";
import Results from "../Results";

test("snapshot with no pets", () => {
  const tree = create(<Results pets={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
