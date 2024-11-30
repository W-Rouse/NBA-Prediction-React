import React from "react";
import 'semantic-ui-css/semantic.min.css'
import {Header, List} from "semantic-ui-react";
const scoreboardDivStyle = {
    textAlign: "center",
    boxShadow: "1px 1px 5px 1px rgba(255,255,255,0.5)",
    paddingRight: "50px",
    paddingLeft: "50px",
    textColor: "white"

};



export const ScoreboardSections = ({scoreboardJSON,away_scoreboard}) => {

    return (
        <List> {scoreboardJSON.map(scoreboard => {
            return (
                <List.Item key={scoreboard.homeTeam}>
                    <div style={scoreboardDivStyle}>
                        <Header>{scoreboard.awayTeam.teamName} &nbsp; {scoreboard.homeTeam.teamName} </Header>

                        <Header>{scoreboard.awayTeam.score} - {scoreboard.homeTeam.score}</Header>

                    </div>
                </List.Item>
            )
        })}

        </List>

    )
}