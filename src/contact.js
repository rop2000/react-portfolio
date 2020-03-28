import React, { Component } from 'react';
import {Grid, Cell, Button} from 'react-mdl';
import PhotoId from './rohan_parikh_circle.png';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
              
              <div class="area-contact" >
                <ul class="circles">
                
                <Grid className="contact-grid">
                    <Cell col={3}> {/*First Half*/}
                        <img src={PhotoId} alt="" className="contact-photo"/>
                        <h1 className="contact-name">ROHAN PARIKH</h1>
                        <h3 className="contact-email">ROHAN@UCONN.EDU</h3>
                        <hr/>
                        <h2>ABOUT</h2>
                        <p>Hi, I'm Rohan, I make web things. I am a sophomore at the 
                            <a href="https://uconn.edu/"> University of Connecticut </a>
                            with a passion for MERN development, data analytics and anything creative. Catch me
                            at your local hackathon trying to make the world a better place.
                        </p>
                       <div className="contact-button"><Button raised ripplec >Learn More</Button></div> 
                        <hr/>
                        <p>for fonts</p>
                    </Cell>
                    
          
                    <Cell col={9} className="form-content">half page YEEHAW</Cell>
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

export default Contact;