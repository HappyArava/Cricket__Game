import React from 'react';
import './Cricket.scss';

class Control extends React.Component { 

  onClickHandler = () => {
    if(this.props.paused)
      this.props.start();

    else
      this.props.stop();
  }
  
	render() {
		return (
			<button onClick={this.onClickHandler}>
        {this.props.paused ? "Start" : "Stop"}
      </button>
		);
	};
};

const runs = [0, 1, 2, 3, 4, 5, 6, 'WD', 'NB', 'OUT'];

const teamAPlayersList = [
  {
    id: 1,
    isEligibleBatsmen: true, 
    name: 'Dhoni',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  },
  {
    id: 2,
    isEligibleBatsmen: true, 
    name: 'Suresh Raina',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  },
  {
    id: 3,
    isEligibleBatsmen: true, 
    name: 'Virat Kohli',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  },
  {
    id: 4,
    isEligibleBatsmen: true, 
    name: 'K L Rahul',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  },
  {
    id: 5,
    isEligibleBatsmen: true, 
    name: 'Hardik Pandya',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  },
  {
    id: 6,
    isEligibleBatsmen: true, 
    name: 'Jadeja',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  }
]

const teamBPlayersList = [
  {
    id: 12,
    isEligibleBatsmen: true, 
    name: 'Malinga',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  },
  {
    id: 13,
    isEligibleBatsmen: true, 
    name: 'Dimuth',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  },
  {
    id: 14,
    isEligibleBatsmen: true, 
    name: 'Mendis',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  },
  {
    id: 15,
    isEligibleBatsmen: true, 
    name: 'Angelo',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  },
  {
    id: 16,
    isEligibleBatsmen: true, 
    name: 'Udana',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  },
  {
    id: 17,
    isEligibleBatsmen: true, 
    name: 'Avishka',
    asBatsmen: {
      fours: 0, 
      sixes: 0,
      strikedRuns: 0,
      ballCount: 0,
      wds: 0,
      nbs: 0
    },
    asBowler: {
      fours: 0, 
      sixes: 0, 
      wds: 0, 
      nbs: 0, 
      givenRuns: 0,
      ballCount: 0,
      wickets: 0,
    }
  }
]

class Cricket extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
      ballCount: 1, 
      paused: true, 
      shot: 0, 
      score: 0, 
      matchStatus: 'firstInnings', 
      inningsCount: 1,
      overs: 0, 
      balls: 0,
      currentPlayers: [teamAPlayersList[0].id, teamAPlayersList[1].id],
      currentPlayer: teamAPlayersList[0].id,
      currentBowler: teamBPlayersList[0].id,
      teamAPlayers: teamAPlayersList,
      teamBPlayers: teamBPlayersList,
      target: 0
    };
  };
  
  tick = () => {
    const hit =  runs[Math.floor(Math.random() * runs.length)];
    this.setState(({ballCount, score, inningsCount, balls, overs, currentPlayers, currentPlayer, availAPlayers, availBPlayers, teamAPlayers, teamBPlayers, unavailAPlayers, unavailBPlayers, currentBowler}) => {

      if( ( teamAPlayers.filter(player => player.isEligibleBatsmen === true).length === 1 ) || ( ballCount === 6 && inningsCount === 1 ) ) { /** second innings start */
        console.log('start seccond innings')

        return {
          matchStatus: 'secondInnings', 
          ballCount: 0, 
          score: 0, 
          shot: 0, 
          inningsCount: inningsCount + 1, 
          teamAScore: score,
          currentPlayers: [teamBPlayers[0].id, teamBPlayers[1].id],
          currentPlayer: teamBPlayers[0].id,
          overs: 0,
          balls: 0,
          teamA: score,
          target: score + 1,
          currentBowler: teamAPlayers[0].id
        }
      }

      else if( ( teamBPlayers.filter(player => player.isEligibleBatsmen === true).length === 1 ) || ( ballCount === 6 && inningsCount === 2 ) ) {
        clearInterval(this.interval);

        return {
          inningsCount: inningsCount + 1, 
          matchStatus: 'over', 
          teamBScore: score,
          score: score,
          paused: true,
          teamBPlayers: teamBPlayers.map(player => {
            if ( player.id === currentPlayer) return {
              ...player,
              asBatsmen: {
                ...player.asBatsmen,
                wds: hit === 'WD' ? player.asBatsmen.wds + 1 : player.asBatsmen.wds,
                nbs: hit === 'NB' ? player.asBatsmen.nbs + 1 : player.asBatsmen.nbs,
                ballCount: ballCount + 1
              }
            }
            return player;
          }),
          teamAPlayers: teamAPlayers.map(player => {
            if ( player.id === currentBowler) return {
              ...player,
              asBowler: {
                ...player.asBowler,
                wds: hit === 'WD' ? player.asBowler.wds + 1 : player.asBowler.wds,
                nbs: hit === 'NB' ? player.asBowler.nbs + 1 : player.asBowler.nbs,
                ballCount: ballCount + 1
              }
            }
            return player;
          })
        }
      }

      else if ( hit === 'OUT') {

        if( inningsCount === 1) {

          const newCurrentPlayerId = teamAPlayers.filter(player => player.isEligibleBatsmen === true && player.id !== currentPlayer)[0].id;

          return {
            ballCount: ballCount + 1,
            shot: hit,
            balls: (ballCount) % 6,
            overs: Math.floor(ballCount /6),
            currentPlayers: [currentPlayers[1], newCurrentPlayerId ],
            currentPlayer: newCurrentPlayerId,
            teamAPlayers: teamAPlayers.map(player => {
              if ( player.id === currentPlayer) {
                return {
                  ...player,
                  isEligibleBatsmen: false
                }
              }
              return player;
            }),
            teamBPlayers: teamBPlayers.map(player => {
              if ( player.id === currentBowler) {
                return {
                  ...player,
                  asBowler : {
                    ...player.asBowler,
                    wickets: player.asBowler.wickets + 1
                  }
                }
              }
              return player;
            })
          }
        }

        if( inningsCount === 2) { 

          const newCurrentPlayerId = teamBPlayers.filter(player => player.isEligibleBatsmen === true && player.id !== currentPlayer)[0].id;

          return {
            ballCount: ballCount + 1,
            shot: hit,
            balls: (ballCount) % 6,
            overs: Math.floor(ballCount /6),
            currentPlayers: [currentPlayers[1], newCurrentPlayerId ],
            currentPlayer: newCurrentPlayerId,
            teamBPlayers: teamBPlayers.map(player => {
              if ( player.id === currentPlayer) {
                return {
                  ...player,
                  isEligibleBatsmen: false
                }
              }
              return player;
            }),
            teamAPlayers: teamAPlayers.map(player => {
              if ( player.id === currentBowler) {
                return {
                  ...player,
                  asBowler : {
                    ...player.asBowler,
                    wickets: player.asBowler.wickets + 1
                  }
                }
              }
              return player;
            })
          }
        }
      }

      else if(hit === 'WD' || hit === 'NB') {
          if ( inningsCount === 1) {

            console.log(teamAPlayers[0].asBatsmen, typeof teamAPlayers[0].asBatsmen.wds, teamAPlayers[0].asBatsmen.wds )
            return { 
              balls: (ballCount) % 6,
              overs: Math.floor(ballCount /6),
              shot: hit, 
              score: score + 1,
              teamAPlayers: teamAPlayers.map(player => {
                if ( player.id === currentPlayer) return {
                  ...player,
                  asBatsmen: {
                    ...player.asBatsmen,
                    strikedRuns: player.asBatsmen.strikedRuns + 1,
                    wds: hit === 'WD' ? player.asBatsmen.wds + 1 : player.asBatsmen.wds,
                    nbs: hit === 'NB' ? player.asBatsmen.nbs + 1 : player.asBatsmen.nbs,
                    ballCount: ballCount + 1
                  }
                }
                return player;
              }),
              teamBPlayers: teamBPlayers.map(player => {
                if ( player.id === currentBowler) return {
                  ...player,
                  asBowler: {
                    ...player.asBowler,
                    givenRuns: player.asBowler.givenRuns + 1,
                    wds: hit === 'WD' ? player.asBowler.wds + 1 : player.asBowler.wds,
                    nbs: hit === 'NB' ? player.asBowler.nbs + 1 : player.asBowler.nbs,
                    ballCount: ballCount + 1
                  }
                }
                return player;
              })
            }
          }
          

          return { 
            balls: (ballCount) % 6,
            overs: Math.floor(ballCount /6),
            shot: hit, 
            score: score + 1,
            teamAPlayers: teamAPlayers.map(player => {
              if ( player.id === currentBowler) return {
                ...player,
                asBowler: {
                  ...player.asBowler,
                  givenRuns: player.asBowler.givenRuns + 1,
                  wds: hit === 'WD' ? player.asBowler.wds + 1 : player.asBowler.wds,
                  nbs: hit === 'NB' ? player.asBowler.nbs + 1 : player.asBowler.nbs,
                  ballCount: ballCount + 1
                }
              }
              return player;
            }),
            teamBPlayers: teamBPlayers.map(player => {
              if ( player.id === currentPlayer) return {
                ...player,
                asBatsmen: {
                  ...player.asBatsmen,
                  strikedRuns: player.asBatsmen.strikedRuns + 1,
                  wds: hit === 'WD' ? player.asBatsmen.wds + 1 : player.asBatsmen.wds,
                  nbs: hit === 'NB' ? player.asBatsmen.nbs + 1 : player.asBatsmen.nbs,
                  ballCount: ballCount + 1
                }
              }
              return player;
            })
          }
      }

      else if ( hit >= 0 && hit <= 6 ) {

        if ( inningsCount === 1)
        return { 
          ballCount : ballCount + 1,
          balls: (ballCount) % 6,
          overs: Math.floor(ballCount /6),
          shot: hit, 
          score: score + hit,
          teamAPlayers: teamAPlayers.map(player => {
            if ( player.id === currentPlayer) return {
              ...player,
              asBatsmen: {
                ...player.asBatsmen,
                strikedRuns: player.asBatsmen.strikedRuns + hit,
                fours: hit === 4 ? player.asBatsmen.fours + 1 : player.asBatsmen.fours,
                sixes: hit === 6 ? player.asBatsmen.sixes + 1 : player.asBatsmen.sixes,
                ballCount: ballCount + 1
              }
            }
            return player;
          }),
          teamBPlayers: teamBPlayers.map(player => {
            if ( player.id === currentBowler) return {
              ...player,
              asBowler: {
                ...player.asBowler,
                givenRuns: player.asBowler.givenRuns + hit,
                fours: hit === 4 ? player.asBowler.fours + 1 : player.asBowler.fours,
                sixes: hit === 6 ? player.asBowler.sixes + 1 : player.asBowler.sixes,
                ballCount: ballCount + 1
              }
            }
            return player;
          })
        }

        return { 
          ballCount : ballCount + 1,
          balls: (ballCount) % 6,
          overs: Math.floor(ballCount /6),
          shot: hit, 
          score: score + hit,
          teamAPlayers: teamAPlayers.map(player => {
            if ( player.id === currentBowler) return {
              ...player,
              asBowler: {
                ...player.asBowler,
                strikedRuns: player.asBowler.givenRuns + hit,
                fours: hit === 4 ? player.asBowler.fours + 1 : player.asBowler.fours,
                sixes: hit === 6 ? player.asBowler.sixes + 1 : player.asBowler.sixes,
                ballCount: ballCount + 1
              }
            }
            return player;
          }),
          teamBPlayers: teamBPlayers.map(player => {
            if ( player.id === currentPlayer) return {
              ...player,
              asBatsmen: {
                ...player.asBatsmen,
                strikedRuns: player.asBatsmen.strikedRuns + hit,
                fours: hit === 4 ? player.asBatsmen.fours + 1 : player.asBatsmen.fours,
                sixes: hit === 6 ? player.asBatsmen.sixes + 1 : player.asBatsmen.sixes,
                ballCount: ballCount + 1
              }
            }
            return player;
          })
        }
      }
    });

    if(this.state.inningsCount === 3)  window.open('https://www.youtube.com/watch?v=R0alThHNb0Y');

  }
  
	startTimer = () =>{
		this.interval = setInterval(this.tick,1000);
    this.setState({ paused : false });
	}
  
  stopTimer = () => {
    clearInterval( this.interval );
    this.setState({ paused : true });
	}
  
  renderView = () => {

    return (
      <div className="TablesContainer">
        <table border="1">
        <thead >
          <th> Batsmen / Bowler </th>
          <th> Striked Runs </th>
          <th> Given Runs </th>
          <th> 4's </th>
          <th> 6's </th>
          <th> WD's </th>
          <th> NB's </th>
          <th> Wickets </th>
        </thead>
        {
          this.state.teamAPlayers.map(player => {
            return (
              <tr>
                <td>{player.name}</td>
                <td>{player.asBatsmen.strikedRuns}</td>
                <td>{player.asBowler.givenRuns}</td>
                <td>{`${player.asBatsmen.fours} - AB, ${player.asBowler.fours} - ABW`}</td>
                <td>{`${player.asBatsmen.sixes} - AB, ${player.asBowler.sixes} - ABW`}</td>
                <td>{`${player.asBatsmen.wds} - AB, ${player.asBowler.wds} - ABW`}</td>
                <td>{`${player.asBatsmen.nbs} - AB, ${player.asBowler.nbs} - ABW`}</td>
                <td>{player.asBowler.wickets}</td>
              </tr>
            )
          })
        }
        </table>
        <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
          Team A Score: {this.state['teamAScore']}
        </div>
        <table border="1">
        <thead >
          <th> Batsmen / Bowler </th>
          <th> Striked Runs </th>
          <th> Given Runs </th>
          <th> 4's </th>
          <th> 6's </th>
          <th> WD's </th>
          <th> NB's </th>
          <th> Wickets </th>
        </thead>
        {
          this.state.teamBPlayers.map(player => {
            return (
              <tr>
                <td>{player.name}</td>
                <td>{player.asBatsmen.strikedRuns}</td>
                <td>{player.asBowler.givenRuns}</td> 
                <td>{`${player.asBatsmen.fours} - AB, ${player.asBowler.fours} - ABW`}</td>
                <td>{`${player.asBatsmen.sixes} - AB, ${player.asBowler.sixes} - ABW`}</td>
                <td>{`${player.asBatsmen.wds} - AB, ${player.asBowler.wds} - ABW`}</td>
                <td>{`${player.asBatsmen.nbs} - AB, ${player.asBowler.nbs} - ABW`}</td>
                <td>{player.asBowler.wickets}</td>
              </tr>
            )
          })
        }
        </table>
        <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
          Team B Score: {this.state['teamBScore']}
        </div>
      </div>
    )
  }

	render() {

    const { inningsCount, shot, score, overs, balls, currentPlayer, currentBowler } = this.state;

    console.log(inningsCount, 'inningscount')

		return (
			<div className={inningsCount !== 3 ? "CardContainer" : "CardContainer CardContainer--FinalScore"}>
        <h1> Cricket Game </h1>
        {
          inningsCount !== 3 &&
          (
            <div className="CC__ScoreDetailsContainer">
              <div className="Block">
                <div className="label">
                  Batting Team:
                </div> 
                <div className="Data"> { inningsCount === 1 ? 'A' : 'B' } </div>
              </div>
              <div className="Block">
                <div className="label">
                Strike: 
                </div>
                <div className="Data">{ shot } </div>
              </div>
              <div className="Block">
                <div className="label">
                Score: 
                </div>
                <div className="Data">{score} </div>
              </div>
              <div className="Block">
                <div className="label"> 
                  Overs: 
                </div>
                <div className="Data">{`${overs}.${balls}`} </div>
              </div>
            </div>
          )
        }
        {
          inningsCount !== 3 &&
          <div className="CC__ControlContainer">
            <Control 
              paused={this.state.paused} 
              start={this.startTimer} 
              stop={this.stopTimer} 
            />
          </div>
        }
        {
          inningsCount === 3 && (
            <div className="SummaryContainer">
              <div style={{paddingBottom: '1rem', paddingTop: '1rem'}}> Summary:</div>
              {
                this.renderView()
              }
              <div>
                {
                  this.state.teamAScore === this.state.teamBScore ? (
                    <div style={{fontSize: '18px', color: "#CEFF03", display: "flex", justifyContent: "center"}}> This Match is a Draw </div>
                  ) : 
                  (
                    this.state.teamAScore > this.state.teamBScore ? (
                      <div style={{fontSize: '18px', color: "#CEFF03", display: "flex", justifyContent: "center"}}> Team A Won the Match </div>
                    ) :
                    (
                      <div style={{fontSize: '18px', color: "#CEFF03", display: "flex", justifyContent: "center"}}> Team B Won the Match </div>
                    )
                  )
                }
              </div>
            </div>
          )
        }
			</div>
		);
	};
}

export default Cricket;