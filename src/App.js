import "./App.css";
import React, { useEffect, useState } from "react";
import MangaContainer from "./containers/MangaContainer";
import api from "./services/api";

function App() {
  const [listName] = useState('manga')
  const username = "alexandrekg"
  const [mangaList, setMangaList] = useState(false);

  const getData = async () => {
    try {
      const data = await api.get(`${username}/lists/manga/`);
      setMangaList(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      <header className="header">
        <h1>Alexandre's Manga List</h1>
      </header>
      {listName === 'manga' ? <MangaContainer mangaList={mangaList}></MangaContainer>: null}
    </div>
  );
}

export default App;
