import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import myAvatar from './myAvatar.png';
import PhotoId from './rohan_parikh_circle.png';
import Typist from 'react-typist';
import Typical from 'react-typical';

{/*UI gradients website - https://uigradients.com/#SublimeVivid */}

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                
                <div class="area" >
                
                    <ul class="circles">
                    <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={PhotoId} alt="" className="avatar-img"/>
                        <div className="banner-text">
{/*insert typing animation*/}<h1>Hi, I'm Rohan</h1>
                             
                             <h3>I'm a {' '} 
                                <Typical 
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        'developer💻',
                                        1000,
                                        'student👨🏽‍🎓',
                                        1000,
                                        'animator✏️',
                                        1000,
                                        'tiktok enthusiast🎵',
                                        1000,
                                        'person trying to work at SpaceX🚀',
                                        1000
                                    ]} 
                                
                                />
                             </h3>

                             <hr/>
                             <p>Python | Arduino C | HTML/CSS | JavaScript | ReactJS | MongoDB | NodeJS </p>
                             <div className="social-links">
                                {/* LinkedIn logo */}
                                <a href="http://google.com" target="_blank">
                                    <i id = "linkedin" className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="http://google.com" target="_blank">
                                    <i id="github" className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true" />
                                </a>
                             
                                {/* Instagram */}
                                <a href="http://google.com" target="_blank">
                                    <i  id="instagram" color="#2867b2" className="fa fa-instagram" rel="noopener noreferrer" aria-hidden="true" />
                                </a>

                             </div>
                        </div>
                    </Cell> 
                </Grid>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default LandingPage;