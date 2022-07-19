import './App.css';

function App() {
  return (
    <div>
      <header className='header'>
        <h1>Piarzinho Mangá List</h1>
      </header>
      <div className='content-wrapper'>
        <div className='content-list'>
          <div className='content-list-item'>
            <span>Naruto</span>
            <span>700/700</span>
            <span>finished</span>
          </div>
          <div className='content-list-item'>
            <span>In Another World With my Smartphone</span>
            <span>--/--</span>
            <span>to read</span>
          </div>
          <div className='content-list-item'>
            <span>Accel World</span>
            <span>20/--</span>
            <span>reading</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
