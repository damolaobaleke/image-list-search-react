import React from 'react'

class UserCard extends React.Component{

    state = {userId:''}

    componentDidMount(){
        //getting the params
        let user = this.props.match.params.userid
        console.log(this.props)

        this.setState({userId:user})
    }

    render(){
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="px-4">userId: {this.state.userId}</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;