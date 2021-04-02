import React from 'react';
import {Link} from 'react-router-dom'

const About  = (props) =>{
    //programmatic redirect -- after 5 seconds goes to image search page
    // setTimeout(()=>{
    //     props.history.push('/image-search'
    // )},5000)

return(
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae veritatis quis incidunt blanditiis adipisci nihil possimus deserunt voluptates libero excepturi sint necessitatibus, dolore quo impedit tenetur inventore fugiat vitae at.</p>
                <a href="#" data-toggle="modal" data-target="#modal-test">Click to view modal</a>
            </div>
        </div>

        <div class="modal fade show" id="modal-test" tabindex="-1" role="dialog" aria-modal="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><img class="closeModal" src="https://res.cloudinary.com/https-eazifunds-com/image/upload/v1590442330/Fundstrtr/Group_1193_ogdtn0.png" alt="closeModal"/></button>
                    </div>

                    <div class="modal-body">
                        <div className="row">
                            <h1>Modal</h1>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
   
    </div>
)

}

export default About;