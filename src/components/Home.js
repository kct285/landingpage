import React from 'react';

export default function Home(props){
    return(
        <div className="home">

            <div className="flex">
                <div>
                    <img src="https://cdn1.imggmi.com/uploads/2019/11/8/4355c1bd8f5fa324f432ff462963d76f-full.png" width="750px" alt="demo"/>
                </div>

                <div id="home_text"> 
                    <h1 className="quotation"> Disrupting <br></br> Disruption.  </h1>
                    <p id="home_desc">Stop spending your nights and weekends at the AB. <br></br>Procrastinate from social media.</p>

                    <button className="download1"> FREE DOWNLOAD</button> 
                </div>
            </div>
        </div>
    )
}