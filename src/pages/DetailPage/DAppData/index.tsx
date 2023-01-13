import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import { Stack, Button, Grid, Tooltip } from '@mui/material';
import TelegramIcon from '../../../assets/image/telegram-icon.svg';
import DAppIcon from '../../../assets/image/dapp.png';
import './style.scss';

const DAppData = (props: DAppDataProps) => {
    return (
        <div className="dapp-data">
            <div>
                <Stack direction="row" justifyContent={"space-between"}>
                    <Tooltip title="Back to ROI Dapps" placement="right" arrow>
                        <a href="/">
                            <IconButton aria-label="back" style={{ backgroundColor: 'rgb(210, 167, 36)', color: 'white' }}>
                                <ArrowBackIcon />
                            </IconButton>
                        </a>
                    </Tooltip>
                    <Typography variant={'h4'} component={'h1'} style={{ color: 'rgb(210, 167, 36)' }}>{props.data.name}</Typography>
                    <Tooltip title="Share this project" placement="left" arrow>
                        <IconButton aria-label="back" style={{ backgroundColor: 'rgb(210, 167, 36)', color: 'white' }}>
                            <ShareIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </div>
            <div>
                <hr />
            </div>
            <div>
                <Stack spacing={2} style={{ padding: 20 }}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Chain:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>{props.data.chain}</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Token:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>{props.data.token}</Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Tvl:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>{props.data.tvl}</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>$Tvl:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>${props.data.tvl_usd}</Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Fees:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>{props.data.fees}</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Daily rate:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>{props.data.daily_rate}</Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Age:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>{props.data.age}</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Audit:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>{props.data.audit === "Pending" ? "Yes" : "No"}</Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Ref:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>{props.data.ref}</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Updated:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>{props.data.update}</Typography>
                    </Stack>
                </Stack>
            </div>
            <div>
                <hr />
            </div>
            <div className="buttons">
                <Grid container spacing={2}>
                    <Grid xs={6} md={4} style={{ marginTop: 5 }} display={'flex'} justifyContent={"center"}>
                        <a className="data-btn" href={props.data.links.dapp}>
                            <Button variant="contained" endIcon={<img src={DAppIcon} alt="telegram-icon" width={30} height={30} />} style={{ width: 150 }}>
                                <p>DAPP</p>
                            </Button>
                        </a>
                    </Grid>
                    <Grid xs={6} md={4} style={{ marginTop: 5 }} display={'flex'} justifyContent={"center"}>
                        <a className="data-btn" href={props.data.links.contract}>
                            <Button variant="contained" endIcon={<img src={`${props.data.chain}_CHAIN.png`} alt="telegram-icon" width={30} height={30} />} style={{ width: 150 }}>
                                <p>CONTRACT</p>
                            </Button>
                        </a>
                    </Grid>
                    <Grid xs={6} md={4} style={{ marginTop: 5 }} display={'flex'} justifyContent={"center"}>
                        <a className="data-btn" href={props.data.links.chart}>
                            <Button variant="contained" endIcon={<img src={`${props.data.token}_TOKEN.png`} alt="telegram-icon" width={30} height={30} />} style={{ width: 150 }}>
                                <p>TOKEN</p>
                            </Button>
                        </a>
                    </Grid>
                    <Grid xs={6} md={12} style={{ marginTop: 5 }} display={'flex'} justifyContent={"center"}>
                        <a className="data-btn" href={props.data.links.telegram}>
                            <Button variant="contained" endIcon={<img src={TelegramIcon} alt="telegram-icon" width={30} height={30} />} style={{ width: 150 }}>
                                <p>TELEGRAM</p>
                            </Button>
                        </a>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default DAppData;