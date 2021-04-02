import React from 'react';
import ReactDom from 'react-dom';
//import $ from 'jquery';
import './modal.css';

// Creating a react portal
class LModal extends React.Component{

    state ={}

    componentDidMount(){ 
        // $(window).on('load', function() {
        //     $('#modal-test').modal('show');
        // });
    }

    submitClicked(){

    }

    render(){
    return ReactDom.createPortal(

        <div class="modal fade hide" id="modal-test" tabindex="-1" role="dialog" aria-modal="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><img class="closeModal" src="https://res.cloudinary.com/https-eazifunds-com/image/upload/v1590442330/Fundstrtr/Group_1193_ogdtn0.png" alt="closeModal"/></button>
                    </div>

                    <div class="modal-body">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <h1>I am a Modal</h1>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary">Submit</button>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    )
    }
}



export default LModal;