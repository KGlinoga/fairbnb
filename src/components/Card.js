import React from "react"
import { AiFillStar } from "react-icons/ai"

export default function Card() {
    return (
        <section className="card">
            <img />

            <div className="card--stats">
                <AiFillStar color="hotpink"/>
                <p>5 • </p>
                <p>Online</p>
            </div>
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