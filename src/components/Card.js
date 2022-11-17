import React from "react"
import { AiFillStar } from "react-icons/ai"

export default function Card(props) {
  
    return (
        <section className="card">
           
            
            <img src={`./images/${props.img}`} alt="lady" className="thumbnail" />
            

            <div className="card--stats">
                <AiFillStar color="hotpink" className="card--star" />
                <p id="rating">{props.item.stats.rating}</p>
                <p id="review-count">({props.item.stats.reviewCount}) • </p>
                <p id="location">Online</p>
            </div>
            <p id="title">{props.title}</p>
            <p id="price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </section>
    )
}
//         <div className="card">
//                 badgeText && <div className="card--badge">{badgeText}</div>
//             {/* {
//             } */}

// export default function Card(props) {
    //     // let badgeText
    //     // if (props.openSpots === 0) {
        //     //     badgeText = "SOLD OUT"
        //     // } else if (props.location === "Online") {
            //     //     badgeText = "ONLINE"
            //     // }



//     return (

//             <img
//                 src={`../images/${props.coverImg}`}
//                 className="card--image"
//                 alt="talk about it"
//             />
//             <div className="card--stats">
//                 <AiFillStar color="hotpink" className="card--star" />
//                 <span>{props.stats.rating}</span>
//                 <span className="gray">({props.stats.reviewCount}) :: </span>
//                 <span className="gray">{props.location}</span>
//             </div>
//             <p className="card--title">{props.title}</p>
//             <p className="card--price">
//                 <span className="bold">From ${props.price}</span> / person
//             </p>
//         </div>
//     )

// }