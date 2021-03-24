import React from 'react';
import axios from 'axios'
import SearchInput from './SearchInputCompnent'
import ImageCard from './card/cardComponent'

class App extends React.Component{

    state = {images: [], entryName:''}

    componentDidMount(){}

    onSearchSubmit = async (entry) =>{
        console.log(entry);

        const resp  = await axios.get(`https://pixabay.com/api/?key=20825867-2a5487c6461ff7eb9fb210e93&q=${entry}&image_type=photo`)
        console.log(resp.data.total);

        resp.data.hits.forEach((hit)=>{
            console.log(hit)
        })

        //set images to the array of images
        this.setState({images: resp.data.hits, entryName: entry})
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                </div>

                <div className="row mt-4 justify-content-center">
                    {/* <div className="col-md-8">
                        <div>
                            We have {this.state.images.length} images of {this.state.entryName}
                        </div>
                    </div> */}

                    <ImageCard images={this.state.images}/>
                </div>
            </div>
        )
    }
}

export default App;