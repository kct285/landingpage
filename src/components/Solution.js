import React from 'react';

export default function Solution(props){
    return(
        <div className="solutiontoprob" >

            <div className="flex">
                <div>
                <p className="solutiontext1">Are you a student who procrastinates like Harrison? </p>
                <p className="solutiontext"> Are you a student who is easily distracted like Harrison?  </p>
                <p className="solutiontext"> Are you a student who lacks self-control like Harrison?</p>
                <p className="highlight"> By tampering user interface and experience, <br></br> we make procrastination and distraction <br></br> <strong>uncomfortable.</strong> </p>

                </div>

                <div>
                <img id="harrison" src={process.env.PUBLIC_URL + '/solution.png'} width="600px" alt="demo"/>


                </div>

            </div>

                



            </div>
    )
}