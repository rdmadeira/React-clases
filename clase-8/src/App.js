import React, {useState} from 'react';
import useFetch from './hooks/useFetch';
import './App.css';

import Header from './components/header/Header';
import Songslist from './components/songslist/Songs-list';
import Lyric from './components/lyric/Lyric';

const API_URL = 'https://api.lyrics.ovh';

function App() {
  /* Como el formulario está en el header y el resultado en Songslist, y ambos no tienen relación padre-hijo,
  el fetch tiene que ser el el componente App que es el padre de ambos. */
  const [songsUrl, setSongsUrl] = useState('');
  const {loading, error, post: songs} = useFetch(songsUrl);

  /* Para manejar valores de artista y titulo para mostrar la letra, vamos a crear otros estados */
  const [artist, setArtist] = useState('')
  const [songTitle, setsongTitle] = useState('')
  const [songUrl, setsongUrl] = useState('')
  const {loading: loadingLyric, error: errorLyric, post:lyric } = useFetch(songUrl)
  const [showLyric, setShowLyric] = useState(false);
  

  const handlerSong = (artist, song) => {
    setArtist(artist);
    setsongTitle(song);
    setsongUrl(`${API_URL}/v1/${artist}/${song}`);
    setShowLyric(true)
  }
  
  return (
    <>
      <Header fetchSongs={setSongsUrl} showLyric={setShowLyric}/>
      <div className='container'>
        {!showLyric && <Songslist songs={songs} error={error} loading={loading} displaySong={handlerSong} fetchSongs={setSongsUrl}/>}
        {showLyric && lyric?.lyrics ?
          <Lyric artist={artist} songTitle={songTitle} lyric={lyric.lyrics}/>
        : null
      }
      </div>
    </>
  );
}

export default App;
