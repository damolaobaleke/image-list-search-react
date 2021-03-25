import React from 'react';

const About  = (props) =>{
    //programmatic redirect -- after 5 seconds goes to image search page
    setTimeout(()=>{
        props.history.push('/image-search'
    )},5000)

return(
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae veritatis quis incidunt blanditiis adipisci nihil possimus deserunt voluptates libero excepturi sint necessitatibus, dolore quo impedit tenetur inventore fugiat vitae at.</p>
            </div>
        </div>
    </div>
)

}

export default About;