import React from 'react'
import {connect } from 'react-redux';
import {deleteCard, fetchUsers} from '../../../actions/cardAction'

class UserCard extends React.Component{

    state = {userId:''}

    componentDidMount(){
        //getting the params
        let user = this.props.match.params.userid
        console.log(this.props)

        this.setState({userId:user})

        this.props.fetchUsers()
    }

    deleteCardBtn =()=>{
        this.props.deleteCard(this.props.card.id)
        //go back to the contact page(redirect)
        this.props.history.push('/contact')
    }

    render(){
       console.log(this.props.users)
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="px-4">userId: {this.state.userId}</h3>
                            <p>{this.props.card.body}</p>
                            <p>{this.props.card.title}</p>

                            <div className="btn btn-danger" onClick={this.deleteCardBtn}>delete</div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    {this.props.users.map(user=>{
                        return(
                            <div className="col-md-12">
                                <p key={user.id}>{user.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

//showing independent item SHOW
const mapStateToProps =(state, uniqueProps)=>{
    let title = uniqueProps.match.params.userid; //get unique route parameter e.g req.params.id

    //card title represents id in this case
    return{
        card: state.cards.find((card) => { //cycle through state object using find method, check if card title = title(userid)
            return card.title === title
        }) ,
        users: state.users
    }
}

const mapDispatchToProps =(dispatch)=>{  //mapping the function store.dispatch() inside the props, so can call dispatch straight
return{
        deleteCard:(id)=>{
            dispatch(deleteCard(id))
        },
        
        fetchUsers:()=>{
            dispatch(fetchUsers())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserCard); //the actual LINK