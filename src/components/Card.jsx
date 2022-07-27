import React from "react"

export default function Card(props) {

    return (
        <div className="card">
          <img  src={`${props.coverImg}`}  alt="" srcset="" />
          <div className="info">
            <p className="destination"><img className="icon" src="https://img.icons8.com/ios-filled/50/000000/marker.png"/> {props.country}   <u>  View on Google Maps</u></p>
            <h3 className="destinationTitle">{props.destination}</h3>
            <span className="date">{props.date}</span>
            <p className="description">{props.description}</p>
            
          </div>
        </div>
        
    )
}