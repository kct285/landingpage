import React, {Component} from 'react';

var pics = [

]


export default class Features extends Component{
    constructor(props){
        super(props);
        this.state = {
            img: "default"//place image for original facebook here
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.setState({img:pics[Math.floor(Math.random() * pics.length)]})
    }
    render(){
        return(
        <div className="features">
            <div className="flex">

                <div id="featurestxt">
                    <h2>Features</h2>
                    <p> sample text</p>
                    <img src="https://cdn1.imggmi.com/uploads/2019/11/9/4ea884cfff6734eec9b596688ca534a6-full.png" width="60px" alt="icon"/> <br></br>
                    <img src="https://cdn1.imggmi.com/uploads/2019/11/9/cfb9fdf24c58ca6dd594bef52152627c-full.png" width="60px" alt="icon"/> <br></br>
                    <img src="https://cdn1.imggmi.com/uploads/2019/11/9/dc0fe207d699eb6d9e0bec9f2b3db6d7-full.png"width="60px" alt="icon"/> 
                </div>

                <div>
                    <img id="featureimg" src="https://i.imgur.com/TarlUAm.jpg" width="900px" alt="facebook"/>
                </div>
                <div className="Button">
                    <button onClick={this.handleClick}>
                        Try it out
                    </button>
                </div>
                


            </div>

            <img id="testimonials" src="https://cdn1.imggmi.com/uploads/2019/11/9/b539fdd05ff614f9700e16582a46d17b-full.png" width="800px" alt="Our fans"/>

        </div>
        )
    }
    
}