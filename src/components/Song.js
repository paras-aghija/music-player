const Song = ({ currSong }) => {
  return (
    <div className="song-container">
      <img src={currSong.cover} alt={currSong.cover} />
      <h2>{currSong.name}</h2>
      <h3>{currSong.artist}</h3>
    </div>
  );
};

export default Song;
