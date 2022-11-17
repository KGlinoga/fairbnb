import React from "react"
import { AiFillStar } from "react-icons/ai"

export default function Card(props) {
    

    return (
        <section className="card">
            <img src="./images/pic.jpg" alt="lady" className="thumbnail"/>

            <div className="card--stats">
                <AiFillStar color="hotpink" className="card--star" />
                <p id="rating">5</p>
                <p id="review-count">(10) • </p>
                <p id="location">Online</p>
            </div>
            <p id="title">Life Lessons with Kassian Andor</p>
            <p id="price">
                <span className="bold">From $123</span> / person
            </p>
        </section>
    )
}



// export default function Card(props) {
//     // let badgeText
//     // if (props.openSpots === 0) {
//     //     badgeText = "SOLD OUT"
//     // } else if (props.location === "Online") {
//     //     badgeText = "ONLINE"
//     // }

//     return (
//         <div className="card">
//             {/* {
//                 badgeText && <div className="card--badge">{badgeText}</div>
//             } */}

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