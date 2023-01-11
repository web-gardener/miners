import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { AiFillStar } from 'react-icons/ai'
import './style.scss';

const NewsCarousel = () => {
    var items = [
        {
            heading: "Recently Added",
            list: [
                { title: "ETH Machine", content: "$51,296" },
                { title: "BSC Miner", content: "$16,189" },
                { title: "Top G Beans", content: "$183" },
            ]
        },
        {
            heading: "Top TVL",
            list: [
                { title: "Banked Beans 2", content: "$1,217,360" },
                { title: "Bean Machine", content: "$290,425" },
                { title: "BUSD Oracle", content: "$116,491" },
            ]
        },
        {
            heading: "Top 24h",
            list: [
                { title: "Dynasty BUSD", content: "80.11%" },
                { title: "Farm of Fortune", content: "+28.86%" },
                { title: "BSC Miner", content: "+7.86%" },
            ]
        },
        {
            heading: "Top 7 days",
            list: [
                { title: "Green Machine BSC", content: "+50.06%" },
                { title: "CARRETH Miner", content: "+44.67%" },
                { title: "Backed Beans 2", content: "+31.53%" },
            ]
        },

    ]

    return (
        // <Carousel>
        //     {
        //         items.map((item, i) => (
        //             <div key={i}>
        //                 <h2>item.name</h2>
        //                 <p>item.descrption</p>
        //             </div>
        //         ))
        //     }
        // </Carousel>
        <div className="carousel">
            <Carousel>
                {items.map((item, key) => (
                    <div className="carousel-item" key={key}>
                        <div className="heading">
                            <div className="star-icon">
                                <AiFillStar />
                            </div>
                            <div className="content">
                                <p>{item.heading}</p>
                            </div>
                        </div>
                        <div className="list">
                            {item.list.map((listItem, key) => (
                                <div className="list-item" key={key}>
                                    <div className="title">
                                        <p>
                                            {listItem.title}
                                        </p>
                                    </div>
                                    <div className="content">
                                        <p>{listItem.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div >
    )
}

export default NewsCarousel;