import React, {Component} from 'react';

const pics = [
    "/features2.png",
    "/features3.png",
    "/features4.png"

]

const baseImg = '/features1.png'

export default class Features extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0,//place image for original facebook here
            img: baseImg
        }
        this.handleMove = this.handleMove.bind(this);
    }
    componentDidMount(){
        pics.forEach((pic)=>(new Image().src = pic))
    }
    handleMove(event){
        if (this.state.value===1){
            this.setState({value:0, img:baseImg})
        }
        else{
            this.setState({value:1, img: pics[Math.floor(Math.random() * pics.length)]})
        }
    }

    render(){
        return(

        <div className="features">
            <div className="flex">

                <div id="featurestxt">
                    <h2>Features</h2>
                    <p id="featuredesc"> Whether you're working on FoF or GPS, these features <br></br>are designed to curb your procrastination habits. </p>

                    <div className="flex2">

                        <div>
                        <img className="featureimg" src={process.env.PUBLIC_URL + '/icon1.png'} width="60px" alt="icon"/> <br></br>
                        <img className="featureimg" src={process.env.PUBLIC_URL + '/icon2.png'} width="60px" alt="icon"/> <br></br>
                        <img className="featureimg" src={process.env.PUBLIC_URL + '/icon3.png'} width="60px" alt="icon"/> 

                        <img id="try" src={process.env.PUBLIC_URL + '/tryitout.png'} width="170px"/>

                        </div>

                        <div>
                            <p id="colordescp">Bright, neon colours that are hard to read</p>
                            <p id="timedescp">Color combination worsens with <br></br> longer procrastination time </p>
                            <p id="uxdescp"> Change of placement and layout to <br></br> break habits </p>


                        </div>




                    </div>
                    
                        
                       
                    
                </div>
                <div>

                <img id="featureimg" src={this.state.img} width="900px" alt="facebook"/>
                <label className="switch">
                    <input onChange={this.handleMove} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                
                </div>
                


            </div>

            <img id="testimonials" src={process.env.PUBLIC_URL + '/reviews.png'} width="800px" alt="Our fans"/>

        </div>
        )
    }
    
}