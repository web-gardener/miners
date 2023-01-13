import React, { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { AiFillStar } from 'react-icons/ai'
import axios from 'axios';
import './style.scss';

const NewsCarousel = () => {
    const [items, setItems] = useState([
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
    ]);

    useEffect(() => {
        axios
            .get("https://api.goatminers.com/json_data_top_gainers")
            .then(response => {
                let data = response.data;
                setItems([
                    {
                        heading: "Recently Added",
                        list: [
                            { title: data[6].nameRecently, content: "$" + data[6].tvlUsdRecently },
                            { title: data[7].nameRecently, content: "$" + data[7].tvlUsdRecently },
                            { title: data[8].nameRecently, content: "$" + data[8].tvlUsdRecently },
                        ]
                    },
                    {
                        heading: "Top TVL",
                        list: [
                            { title: data[9].nameTopTvl, content: "$" + data[9].tvlUsdTopTvl },
                            { title: data[10].nameTopTvl, content: "$" + data[10].tvlUsdTopTvl },
                            { title: data[11].nameTopTvl, content: "$" + data[11].tvlUsdTopTvl },
                        ]
                    },
                    {
                        heading: "Top 24h",
                        list: [
                            { title: data[3].nameTvl24h, content: "$" + data[3].tvl24h },
                            { title: data[4].nameTvl24h, content: "$" + data[4].tvl24h },
                            { title: data[5].nameTvl24h, content: "$" + data[5].tvl24h },
                        ]
                    },
                    {
                        heading: "Top 7 days",
                        list: [
                            { title: data[0].nameTvl7d, content: "$" + data[0].tvl7d },
                            { title: data[1].nameTvl7d, content: "$" + data[1].tvl7d },
                            { title: data[2].nameTvl7d, content: "$" + data[2].tvl7d },
                        ]
                    },
                ])
            })
            .catch(err => { console.log(err) })
    }, [])

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