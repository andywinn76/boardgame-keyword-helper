function SelectGame({selectedGame, setSelectedGame}) {

  function handleChange(e) {setSelectedGame(e.target.value)}

  return (
    <div style={{textAlign: 'center'}}>
      <select className="game-select-dropdown" name="games" id="games" default={selectedGame} onChange={(e) => handleChange(e)}>
        <option value="dungeon degenerates">Dungeon Degenerates</option>
        <option value="magic: the gathering">Magic: The Gathering</option>
        <option value="marvel champions">Marvel Champions</option>
      </select>               
    </div>
  )
}

export default SelectGame
