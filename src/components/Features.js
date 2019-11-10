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

                    <div class="flex2">

                        <div>
                        <img class="featureimg" src="https://cdn1.imggmi.com/uploads/2019/11/9/4ea884cfff6734eec9b596688ca534a6-full.png" width="60px" alt="icon"/> <br></br>
                        <img class="featureimg" src="https://cdn1.imggmi.com/uploads/2019/11/9/cfb9fdf24c58ca6dd594bef52152627c-full.png" width="60px" alt="icon"/> <br></br>
                        <img class="featureimg" src="https://cdn1.imggmi.com/uploads/2019/11/9/dc0fe207d699eb6d9e0bec9f2b3db6d7-full.png"width="60px" alt="icon"/> 

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