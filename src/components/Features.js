import React, {Component} from 'react';

var pics = [
    "https://previews.dropbox.com/p/thumb/AAldrR2nvH9vW8DOEXpfltlZCKMk52WDQnivu-V-bfeyYC-DUUyFw9-d0y14qnDXqQDCD_pZyk7wvXkoPlPAD5drWML5a_gAVcdJAZXQK-0dISCBEmEM2kO5O0_Lfhe187dffoYJbLGfuT_NWvbf4TDeCk8_0Mc5rZ5YjdwFt3hvsqJKGarnJcd90fgU8Qb24dYwhB2zhwfcBgkVRdfmMbGYxZFl8h6djZXqtdcl8aS8uYTvCizN8N_ySa4R9Fmx2f76PbrT_jwrU2tgJyE1sDDNrkfm21h80tk3FZA451-LODBWvOLa8aGKMp3kLZKsVnzifV-JRnF_uoDBNnjLLFGL/p.png?fv_content=true&size_mode=5",
    "https://i.imgur.com/TarlUAm.jpg",
    "https://cdn1.imggmi.com/uploads/2019/11/11/59d7809f42c00aec5e2805a594da427c-full.png",
    "https://cdn1.imggmi.com/uploads/2019/11/11/9ec2bf6102f2282597138e8e9da3d728-full.png",
    "https://cdn1.imggmi.com/uploads/2019/11/11/241c34ec5cd0e5699454aba147ba99cf-full.png",

]


export default class Features extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0//place image for original facebook here
        }
        this.handleMove = this.handleMove.bind(this);
    }

    handleMove(event){
        this.setState({value:event.target.value})
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


                        </div>

                        <div>
                            <p id="colordescp">Bright, neon colours that are hard to read</p>
                            <p id="timedescp">Color combination worsens with <br></br> longer procrastination time </p>
                            <p id="uxdescp"> Change of placement and layout to <br></br> break habits </p>


                        </div>




                    </div>

                    <img id="try" src="https://cdn1.imggmi.com/uploads/2019/11/10/2864dbe500a946c35c4e2559e315e416-full.png" width="150px"/>

                    
                        
                       
                    
                </div>

                <div>
                    <img id="featureimg" src={pics[this.state.value]} width="900px" alt="facebook"/>
                    <div>
                        <input type="range" min="0" max="4" value={this.state.value} className="slider" onChange={this.handleMove}/>
                    </div>
                </div>
                
                {/* change max  */}


            </div>

            <img id="testimonials" src="https://cdn1.imggmi.com/uploads/2019/11/9/b539fdd05ff614f9700e16582a46d17b-full.png" width="800px" alt="Our fans"/>

        </div>
        )
    }
    
}