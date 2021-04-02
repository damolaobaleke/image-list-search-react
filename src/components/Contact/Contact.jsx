import React from 'react';
import {Link} from 'react-router-dom';
import LoginModal from '../About/LoginModal';
import {connect} from  'react-redux';


const Contact =(props) =>{
    console.log(props)
    return(
        <div className="container">
            <div className="row mt-5">
                <LoginModal/>
                <div className="col-md-4">
                    <Link to="/profile/123alex">
                        <div className="card">
                            <h3>Alex</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quisquam illo accusantium, eveniet, corrupti ea quibusdam ducimus pariatur fugiat cupiditate ab provident enim, ullam vel! Necessitatibus obcaecati sapiente facilis libero.</p>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <h3><Link to="/profile/675damola">Damola</Link></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quisquam illo accusantium, eveniet, corrupti ea quibusdam ducimus pariatur fugiat cupiditate ab provident enim, ullam vel! Necessitatibus obcaecati sapiente facilis libero.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <h3><Link to="/profile/900">Roland</Link></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quisquam illo accusantium, eveniet, corrupti ea quibusdam ducimus pariatur fugiat cupiditate ab provident enim, ullam vel! Necessitatibus obcaecati sapiente facilis libero.</p>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                {props.cards.map(card =>{ //forach card in cards
                    return(
                        <div className="col-md-4">
                            <div key={card.id}>
                                <h3><Link to={`/profile/${card.title}`}>{card.title}</Link></h3>
                                <p>{card.body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

//map state object to props
const mapStateToProps = (state) =>{
    return{
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Contact);
