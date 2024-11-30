import './App.css';
import React, {useState, useEffect} from "react";
import {ScoreboardSections} from "./Components/Scoreboard";


function App() {
  const [homeScoreboards, sethomeData] = useState([]);
    useEffect(() => {
       fetch('/home_team_scoreboard').then(res=>res.json()).then(data => {sethomeData(data.homeScoreboards)});
    }, [])
    const [awayScoreboards, setawayData] = useState([]);
    useEffect(() => {
       fetch('/away_team_scoreboard').then(res=>res.json()).then(data => {setawayData(data.awayScoreboards)});
    }, [])
     const [allScoreboards, setAllScoreData] = useState([]);
    useEffect(() => {
       fetch('/scoreboard').then(res=>res.json()).then(data => {setAllScoreData(data.scoreboard)});
    }, [])



  return (
    <div className="App">
      <header className="App-header">
        <h1>Scores</h1>
          <ScoreboardSections scoreboardJSON={allScoreboards}/>
      </header>
    </div>
  );
}

function ScoreSection(){
    return(
        <div>
            <p>Team 1: </p>
            <p>Team 2: </p>

        </div>
    );
}

export default App;
