import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  const [Malta, setMalta] = useState(0);
  const [Santra, setSantra] = useState(0);
  const [Sonfree, setSonfree] = useState(0);

  const [flag, setFlag] = useState(0);
  const [indexValueForUpdate, setIndexValueForUpdate] = useState(0);
  const [values, setValues] = useState({
    name: "",
    cocktail: "",
    points: "",
  });
  const { name, cocktail, points } = values;
  const [entries, setEntries] = useState([
    { name: "DummyOne", cocktail: "Dummy", points: 0 },
  ]);
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const arr = [...entries];
    arr.push(values);
    pointCalculator(values.cocktail, values.points);

    setEntries(arr);
    console.log("dd", entries);
  };
  const onReset = (event) => {
    event.preventDefault();
    setValues({ name: "", cocktail: "", points: "" });
  };

  const pointCalculator = (c, p) => {
    if (c == "Malta") {
      // let malta = 0;
      let temp = Malta;
      let malta = temp + parseInt(p);

      setMalta(malta);
      console.log("malta", malta);

      // console.log("c", c);
      // console.log("p", p);
    } else if (c == "Santra") {
      let temp = Santra;
      let santra = temp + parseInt(p);

      setSantra(santra);
    } else if (c == "Sonfree") {
      let temp = Sonfree;
      let sonfree = temp + parseInt(p);

      setSonfree(sonfree);
    }
  };
  // console.log("Malta", Malta);
  // console.log("Santra", Santra);
  // console.log("Sonfree", Sonfree);

  const AddForm = () => {
    return (
      <div className="bg-dark">
        <h1 className="text-white">Add Entries</h1>
        <form>
          <div className="form-group">
            <label className="text-light">Name</label>
            <input
              className="form-control mt-2 "
              name="name"
              onChange={handleChange("name")}
              type="Text"
              value={name}
              required
            />
          </div>
          <div className="form-group mt-3 ">
            <label className="text-light">Select Cocktail</label>
            <select
              onChange={handleChange("cocktail")}
              className="form-control mt-2 "
              value={cocktail}
            >
              <option>Select</option>

              <option value="Malta">Malta</option>
              <option value="Santra">Santra</option>
              <option value="Sonfree">Sonfree</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label className="text-light">Points (0 - 10)</label>
            <input
              className="form-control mt-2 "
              name="points"
              min="1"
              max="5"
              onChange={handleChange("points")}
              type="number"
              value={points}
            />
          </div>
          {flag === 0 ? (
            <button
              onClick={onSubmit}
              className="btn btn-warning btn-block mt-2 my-3"
            >
              Add
            </button>
          ) : (
            <button
              onClick={performActualUpdate}
              className="btn btn-warning btn-block mt-2 my-3"
            >
              Update
            </button>
          )}
          <button
            onClick={onReset}
            className="btn btn-success btn-block mt-2 my-3 mx-3"
          >
            Reset
          </button>
        </form>
      </div>
    );
  };
  const performDelete = (index) => {
    const deletedArray = entries.filter((data, ind) => ind !== index);
    setEntries(deletedArray);
  };
  const performUpdate = (index) => {
    const updateArrayData = entries.filter((data, ind) => ind === index);
    setValues({
      ...values,
      name: updateArrayData[0].name,
      cocktail: updateArrayData[0].cocktail,
      points: updateArrayData[0].points,
    });
    setIndexValueForUpdate(index);
    setFlag(1);
  };
  const performActualUpdate = (event) => {
    event.preventDefault();

    let newArray = [...entries];
    // console.log("na", newArray);
    newArray[indexValueForUpdate] = {
      name: name,
      cocktail: cocktail,
      points: points,
    };

    //   ...newArray[indexValueForUpdate],
    //   name: name,
    //   cocktail: cocktail,
    //   points: points,
    // };
    console.log("kk", newArray);
    setEntries(newArray);
    pointCalculator(values.cocktail, values.points);

    setFlag(0);
  };
  const Entries = () => {
    return (
      <div>
        <h1 className="text-white text-center">Entries</h1>
        <h3 className="text-white">
          #1malta ({Malta}), #2santra ({Santra}), #3sonfree ({Sonfree})
        </h3>

        <table class="table table-dark py-50">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Cocktail</th>
              <th scope="col">Points</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {entries.map((ente, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row">{ente.name}</th>
                  <td>{ente.cocktail}</td>
                  <td>{ente.points}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-warning"
                      onClick={() => {
                        performUpdate(index);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      class="btn btn-danger mx-2"
                      onClick={() => {
                        performDelete(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  };
  return (
    <div className=" bg-dark">
      <Navbar />

      <div className="container py-700 bg-dark ">
        <div className="row">
          <div className="col">{AddForm()}</div>
          <div className="col mx-3 ">{Entries()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
