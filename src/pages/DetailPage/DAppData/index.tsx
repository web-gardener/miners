import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import { Stack, Button, Grid, Tooltip } from '@mui/material';
import TelegramIcon from '../../../assets/image/telegram-icon.svg';
import DAppIcon from '../../../assets/image/dapp.png';
import './style.scss';

const DAppData = () => {
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
                    <Typography variant={'h4'} component={'h1'} style={{ color: 'rgb(210, 167, 36)' }}>Green Grower</Typography>
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
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>POOCHAIN</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Token:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>POOP</Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Tvl:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>10,689,158.07</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>$Tvl:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>$11,367</Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Fees:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>10% / 10%</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Daily rate:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>10%</Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Age:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>20 days</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Audit:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>Yes</Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Ref:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>10%</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'white' }}>Updated:</Typography>
                        <Typography variant={"h5"} component={"h2"} style={{ color: 'green' }}>a min. ago</Typography>
                    </Stack>
                </Stack>
            </div>
            <div>
                <hr />
            </div>
            <div className="buttons">
                <Grid container spacing={2}>
                    <Grid xs={6} md={4} style={{ marginTop: 5 }} display={'flex'} justifyContent={"center"}>
                        <a className="data-btn" href="https://t.me/GoatMiners">
                            <Button variant="contained" endIcon={<img src={DAppIcon} alt="telegram-icon" width={30} height={30} />} style={{ width: 150 }}>
                                <p>DAPP</p>
                            </Button>
                        </a>
                    </Grid>
                    <Grid xs={6} md={4} style={{ marginTop: 5 }} display={'flex'} justifyContent={"center"}>
                        <a className="data-btn" href="https://t.me/GoatMiners">
                            <Button variant="contained" endIcon={<img src={`BSC_CHAIN.png`} alt="telegram-icon" width={30} height={30} />} style={{ width: 150 }}>
                                <p>CONTRACT</p>
                            </Button>
                        </a>
                    </Grid>
                    <Grid xs={6} md={4} style={{ marginTop: 5 }} display={'flex'} justifyContent={"center"}>
                        <a className="data-btn" href="https://t.me/GoatMiners">
                            <Button variant="contained" endIcon={<img src={`BUSD_TOKEN.png`} alt="telegram-icon" width={30} height={30} />} style={{ width: 150 }}>
                                <p>TOKEN</p>
                            </Button>
                        </a>
                    </Grid>
                    <Grid xs={6} md={12} style={{ marginTop: 5 }} display={'flex'} justifyContent={"center"}>
                        <a className="data-btn" href="https://t.me/GoatMiners">
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