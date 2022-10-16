import React, {useState} from 'react';
import useFetch from './hooks/useFetch';
import './App.css';

import Header from './components/header/Header';
import Songslist from './components/songslist/Songs-list';

const API_URL = 'https://api.lyrics.ovh';

function App() {
  /* Como el formulario está en el header y el resultado en Songslist, y ambos no tienen relación padre-hijo,
  el fetch tiene que ser el el componente App que es el padre de ambos. */
  const [suggestValue, setsuggestValue] = useState('');
  const {loading, error, post: songs} = useFetch(`${API_URL}/suggest/${suggestValue}`);

  /* Para manejar valores de artista y titulo para mostrar la letra, vamos a crear otros estados */
  const [artist, setArtist] = useState('')
  const [songTitle, setsongTitle] = useState('')
  const [songUrl, setSongUrl] = useState('')
  const {loading: loadingLyric, error: errorLyric, post:lyric } = useFetch(songUrl)


  return (
    <>
      <Header suggestValue={setsuggestValue}/>
      <div className='container'>
        <Songslist songs={songs} error={error} loading={loading} />
      </div>
    </>
  );
}

export default App;
