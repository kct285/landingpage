import React from 'react';

export default function Home(props){
    return(
        <div className="home">

            <div className="flex">
                <div>
                    <img src={process.env.PUBLIC_URL + '/home.png'} width="750px" alt="demo"/>
                </div>

                <div id="home_text"> 
                    <h1 className="quotation"> Disrupting <br></br> Disruption.  </h1>
                    <p id="home_desc">Stop spending your nights and <br></br> weekends at the AB. <br></br>Procrastinate from social media.</p>

                    <button className="download1"> FREE DOWNLOAD</button> 
                </div>
            </div>
        </div>
    )
}