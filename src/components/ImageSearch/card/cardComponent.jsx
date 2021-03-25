import React from 'react'
import './card.css'

const imageCard = (props) =>{
    var cardStyle ={
        width:'300px',height:'280px'
    }


    const images = props.images.map((image)=>{ //forEach
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card my-1">
                        <div className="card-body">
                            <img key={image.id} style={cardStyle} className="img-fluid img-responsive" src={image.webformatURL} alt="image_item"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card my-1">
                        <div className="card-body">
                            <img key={image.id} style={cardStyle} className="img-fluid img-responsive" src={image.webformatURL} alt="image_item"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card my-1">
                        <div className="card-body">
                            <img key={image.id} style={cardStyle} className="img-fluid img-responsive" src={image.webformatURL} alt="image_item"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="">
            {images}
        </div>
    )
}

export default imageCard;