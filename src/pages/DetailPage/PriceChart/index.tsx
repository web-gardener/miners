import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts';
import Typography from '@mui/material/Typography';
import axios from 'axios';

import './style.scss';

const PriceChart = (props: PriceChartDataProps) => {
    const options: ApexOptions = {
        chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
                autoScaleYaxis: true
            }
        },
        theme: {
            mode: 'dark'
        },
        annotations: {
            yaxis: [{
                y: 30,
                borderColor: '#999',
                label: {
                    // show: true,
                    // text: 'Support',
                    style: {
                        color: "#fff",
                        background: '#00E396'
                    }
                }
            }],
            xaxis: [{
                // x: new Date('14 Nov 2012').getTime(),
                borderColor: '#999',
                // yAxisIndex: 0,
                label: {
                    // show: true,
                    // text: 'Rally',
                    style: {
                        color: "#fff",
                        background: '#775DD0'
                    }
                }
            }]
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            // style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            // min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        fill: {

            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [0, 100]
            }
        },
    };

    const [series, setSeries] = useState<ChartData[]>([{
        name: "Tvl",
        data: []
    }]);

    useEffect(() => {
        let dappName = localStorage.getItem("name");
        axios
            .post("https://api.goatminers.com/json_data_details_chart", { name: dappName })
            .then(response => {
                let data: ChartAPIResponseData[] = response.data;
                let chartData: number[][] = [];
                data.map((dataItem: ChartAPIResponseData) => {
                    let date = new Date(dataItem.date);
                    chartData.push([date.getTime(), dataItem.tvl]);
                })
                setSeries([{
                    name: "Tvl",
                    data: chartData,
                }]);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <div className='price-chart' style={{ textAlign: "center", height: 465 }}>
            <Typography variant={'h4'} component={'h1'} style={{ color: 'rgb(210, 167, 36)' }}>{props.name}</Typography>
            <ReactApexChart options={options} series={series} type="area" height="400" width="100%" />
        </div>
    );
}

export default PriceChart;