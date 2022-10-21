import React, {useState, useEffect} from 'react';
import useFetch from './hooks/useFetch';
import './App.css';

import Header from './components/header/Header';
import Songslist from './components/songslist/Songs-list';
import Lyric from './components/lyric/Lyric';
import $ from "jquery";

function App() {
  /* Como el formulario está en el header y el resultado en Songslist, y ambos no tienen relación padre-hijo,
  el fetch tiene que ser el el componente App que es el padre de ambos. */
  const [songsUrl, setSongsUrl] = useState('');
  const {loading, error, post: songs} = useFetch(songsUrl);

  /* Para manejar valores de artista y titulo para mostrar la letra, vamos a crear otros estados */
  const [artist, setArtist] = useState('')
  const [songTitle, setsongTitle] = useState('')
  const [songUrl, setsongUrl] = useState('')
  const [showLyric, setShowLyric] = useState(false);
  const [lyric,setLyric] = useState(null)

  useEffect(() => {
    getLyric(songUrl);
      
  }, [songUrl]);
  
  const getLyric = (url) => {
    const data = null;

    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        const datos = this
        let $xml = $( $.parseXML( datos.responseText ) );
        
        $xml.find("Lyric").each(function(index,elem){
          const lyric = elem.firstChild.nodeValue;
          console.log(lyric);
          setLyric((lyric));
      });
      }
    });

    xhr.open("GET", url);
    
    xhr.send(data); 
  }

  const handlerSong = (artist, song) => {
    setArtist(artist);
    setsongTitle(song);
    // Se usó cors-anywhere para no tener problema de cors, porque no es https:
    setsongUrl(`https://cors-anywhere.herokuapp.com/http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${song}`);
    
    
    setShowLyric(true);
  }
  
  return (
    <>
      <Header fetchSongs={setSongsUrl} showLyric={setShowLyric}/>
      <div className='container'>
        {!showLyric && <Songslist songs={songs} error={error} loading={loading} displaySong={handlerSong} fetchSongs={setSongsUrl} />}
        {showLyric && lyric ?
          <Lyric artist={artist} songTitle={songTitle} lyric={lyric}/>
        : null
      }
      </div>
    </>
  );
}

export default App;
