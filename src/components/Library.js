import LibrarySong from "./LibrarySong";

const Library = ({
  setSongs,
  songs,
  setCurrSong,
  isPlaying,
  audioRef,
  libActive,
}) => {
  return (
    <div className={`library ${libActive ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            key={song.id}
            setCurrSong={setCurrSong}
            isPlaying={isPlaying}
            audioRef={audioRef}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
