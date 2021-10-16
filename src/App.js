import { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currSong, setCurrSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libActive, setLibActive] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
    });
  };

  return (
    <div className={`App ${libActive ? "library-active" : ""}`}>
      <Nav setLibActive={setLibActive} libActive={libActive} />
      <Song currSong={currSong} />
      <Player
        currSong={currSong}
        setCurrSong={setCurrSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrSong={setCurrSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libActive={libActive}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currSong.audio}
      ></audio>
    </div>
  );
}

export default App;
