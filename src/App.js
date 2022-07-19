import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Alexandre's Mangá List</h1>
      </header>
      <div className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Current chapter/Total Chapters</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Naruto</td>
                <td>700/700</td>
                <td>finished</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>In Another World With my Smartphone</td>
                <td>--/--</td>
                <td>to read</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Accel World</td>
                <td>20/--</td>
                <td>reading</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default App;
