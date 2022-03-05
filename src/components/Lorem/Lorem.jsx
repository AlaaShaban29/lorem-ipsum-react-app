import React, { useState } from "react";
import data from "../Data/data.js";
function Lorem() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    } else if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  }
  return (
    <>
      <main>
        <div className="container">
          <div className="title text-center pb-3">
            <h3>TIRED TO BORING LOREM IPSUM ?</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row g-3 justify-content-center align-items-center">
              <div className="col-auto">
                <label className="col-form-label">Paragraphs:</label>
              </div>
              <div className="col-auto">
                <input
                  type="number"
                  className="form-control "
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn">
                  general
                </button>
              </div>
            </div>
          </form>
          <div className="row text-center">
            <div className="col-12">
              <div className="lorem-text ">
                {text.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Lorem;
