import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }
    
    toggleCategories(){
    if(this.state.activeTab === 0){
        return(
        <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#0A0A0A'}}>
                <CardTitle style={{color: '#FFF', height:'176px', background: 'url() center / cover'}}>Portfolio</CardTitle>
                <CardText style={{color: '#FFF'}}>A responsive portfolio I built using MaterialUI on React and Node</CardText>
                <CardActions border>
                     <Button colored ripple>Github</Button>
                     <Button colored ripple>CodePen</Button>
                     <Button colored ripple>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>        
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#0A0A0A'}}>
                <CardTitle style={{color: '#FFF', height:'176px', background: 'url() center / cover'}}>Portfolio</CardTitle>
                <CardText style={{color: '#FFF'}}>A responsive portfolio I built using MaterialUI on React and Node</CardText>
                <CardActions border>
                     <Button colored ripple>Github</Button>
                     <Button colored ripple>CodePen</Button>
                     <Button colored ripple>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>        
            </Card>

             <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#0A0A0A'}}>
                <CardTitle style={{color: '#FFF', height:'176px', background: 'url() center / cover'}}>Portfolio</CardTitle>
                <CardText style={{color: '#FFF'}}>A responsive portfolio I built using MaterialUI on React and Node</CardText>
                <CardActions border>
                     <Button colored ripple>Github</Button>
                     <Button colored ripple>CodePen</Button>
                     <Button colored ripple>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>        
            </Card>
        </div>



        )
    }
    else if(this.state.activeTab === 1){
        return(
            <div><h1>This is React</h1></div>
        )
    }
    else if(this.state.activeTab === 2){
        return(
            <div><h1>This is Arduino</h1></div>
        )
    }   
    else if(this.state.activeTab === 3){
        return(
            <div><h1>This is Creative</h1></div>
        )
    }

    }


    render(){
        return(
            <div className="category-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Python</Tab>
                    <Tab>React</Tab>
                    <Tab>Arduino</Tab>
                    <Tab>Creative</Tab> 
                </Tabs>

                
                
                <div class="area" >
                
                    <ul class="circles">
                    <Grid className="projects-content">
                    <Cell className="cell-content" col={12}>
                        <div className="grid-content">{this.toggleCategories()}</div>
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

export default Projects;