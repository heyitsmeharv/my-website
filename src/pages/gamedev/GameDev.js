import React, { Component } from 'react';
import Mcloud from '../../assets/images/gassymcloud.png'
import Cowhhunter from '../../assets/images/cowhunter.png'
import Tikki from '../../assets/images/tikki.png'
import Fable from '../../assets/images/fable.png'
import ListCheckbox from 'react-toolbox/lib/list/ListCheckbox';

import './styles.scss';

class GameDev extends Component {
  constructor(props) {
    super();
    this.state={}
  }

  render() {
    return (
      <div>
        <div className="images">
          <div class="gallery">
            <a>
              <img className="mcloud" alt="GassyMcloud" src={Mcloud}/>
            </a>
            <div class="desc">Flappy Bird Clone</div>
          </div>
          <div class="gallery">
            <a href="https://globalgamejam.org/2016/games/mount-tiki">
              <img className="tikki" alt="MountTikki" src={Tikki}/>
            </a>
            <div class="desc">Multiplayer Brawler</div>
          </div>
          <div class="gallery">
            <a>
              <img className="fable" alt="FableOfPickle" src={Fable}/>
            </a>
            <div class="desc">2D Topdown Dungeon Crawler</div>
          </div>
          <div class="gallery">
            <a>
              <img className="cow" alt="CowHunter" src={Cowhhunter}/>
            </a>
            <div class="desc">Retro Style Grid Based Game</div>
          </div>
        </div>
        <div className="paragraph">
          <span className="intro">
            Above are just some of the games I made during my time at university where I studied Computer Games (Software Development),
            covering a wide range of topics including:
          </span>
          <br></br>
          <div className="column-wrapper">
            <div className="column-one">
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Advanced Games Programming</span>
              </label>
            <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Game Physics</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Object Orientated Development</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Databases</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Mobile Games Fundamentals</span>
              </label>
              <br></br>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}

export default GameDev;