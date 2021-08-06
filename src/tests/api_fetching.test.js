import axios from "axios";
import sinon from "sinon";
import { getCharacters } from "../api_fetching";

let sandbox = sinon.createSandbox();

describe("api fetching test", function () {
  it("should return some data", () => {
    const expectedData = [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
      },
    ];

    sandbox.stub(axios, "get").resolves(
      Promise.resolve({
        data: { results: expectedData },
      })
    );

    return getCharacters().then((result) => {
      expect(result).toEqual(expectedData);
    });
  });
});
