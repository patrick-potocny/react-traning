import { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import Header from "./Header";
import Scoreboard from "./Scoreboard";
import updateImgLinks from "./helpers";
function App() {

  const [cScore, setcScore] = useState(0)
  const [bScore, setbScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [imgLinks, setImgLinks] = useState([])

  useEffect(() => {
    setImgLinks(updateImgLinks())
  }, [])  

  const handleClick = (e) => {
    const imgSrc = e.target.src
    if (clicked.includes(imgSrc)) {
      console.log('In clikced');
      setbScore(cScore > bScore ? cScore : bScore) 
      setcScore(0)
      setClicked([])
      setImgLinks(updateImgLinks())
    } else {
      console.log('Not in clicked');
      setcScore(cScore + 1)
      setClicked([...clicked, imgSrc])
      setImgLinks(updateImgLinks())
    }
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard cScore={cScore} bScore={bScore}/>
      <GameBoard imgLinks={imgLinks} handleClick={handleClick}/>
    </div>
  );
}

export default App;
