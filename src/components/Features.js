import React, {Component} from 'react';

const pics = [
    "https://i.imgur.com/umOwFSM.jpg",
    "https://i.imgur.com/8akcS4l.jpg",
    "https://i.imgur.com/2yyaKRu.jpg"

]

const baseImg = "https://i.imgur.com/eMWeUca.jpg"

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
                    <p> Whether you're working on FoF or GPS, these features <br></br>are designed to curb your procrastination habits. </p>

                    <div className="flex2">

                        <div>
                        <img className="featureimg" src="https://cdn1.imggmi.com/uploads/2019/11/9/4ea884cfff6734eec9b596688ca534a6-full.png" width="60px" alt="icon"/> <br></br>
                        <img className="featureimg" src="https://cdn1.imggmi.com/uploads/2019/11/9/cfb9fdf24c58ca6dd594bef52152627c-full.png" width="60px" alt="icon"/> <br></br>
                        <img className="featureimg" src="https://cdn1.imggmi.com/uploads/2019/11/9/dc0fe207d699eb6d9e0bec9f2b3db6d7-full.png"width="60px" alt="icon"/> 

                        <img id="try" src="https://cdn1.imggmi.com/uploads/2019/11/10/2864dbe500a946c35c4e2559e315e416-full.png" width="100px"/>

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

            <img id="testimonials" src="https://cdn1.imggmi.com/uploads/2019/11/9/b539fdd05ff614f9700e16582a46d17b-full.png" width="800px" alt="Our fans"/>

        </div>
        )
    }
    
}