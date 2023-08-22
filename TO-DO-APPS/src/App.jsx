import "./styles.css";

function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">ADD ITEM</label>
          <input type="text" id="item" />
        </div>

        <button className="btn">ADD</button>
      </form>
      <h1 className="header ">TODO LIST</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            item1
          </label>
          <button className="btn btn-danger">DELETE</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            item2
          </label>
          <button className="btn btn-danger">DELETE</button>
        </li>
      </ul>
    </>
  );
}

export default App;
