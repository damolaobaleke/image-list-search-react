import React from 'react';
import './SearchInput.css'

class SearchInput extends React.Component{

    //input state starts off as an empty string
    state = {
        textEntry:''
    }

    componentDidMount(){}

    //when input changes
    onInputChanged(event){
        console.log(event.target.value)
    }

    onFormSubmit = (event) => { //arrow function automatically makes sure the value of 'this' is always equal to search input, makes sure this refers to the component
        //form element default it reloads the page
        event.preventDefault()
        console.log(`searched: ${this.state.textEntry}`)

        this.props.onSearchSubmit(this.state.textEntry)
    }

    render(){
        return(
            <div className="col-md-8">
                <form onSubmit={this.onFormSubmit} action="" method="get">
                    {/* On input changed update the state on the component to the entered value */}
                    <input className="form-control mt-4 search-input" type="text" name="plane" id="" placeholder="Search..." 
                    onChange={(event) =>this.setState({textEntry:event.target.value})}  
                    value={this.state.textEntry}/>
                    <span className="search-icon"><i className="search icon"></i></span>

                    {/*(event) =>this.setState({textEntry:event.target.value})*/}
                    
                    <input className="btn btn-primary mt-4" type="button" value="Search"/>
                </form>
            </div>     
        )
    }
}


export default SearchInput;
