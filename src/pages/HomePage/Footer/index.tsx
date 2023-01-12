import React, { useState } from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import TelegramIcon from '../../../assets/image/telegram-icon.svg';
import BinanceImg from '../../../assets/image/binance.png';
import EthereumImg from '../../../assets/image/ethereum.png';
import AvalancheImg from '../../../assets/image/avalanche.png';
import PolygonImg from '../../../assets/image/polygon.png';
import PoochainImg from '../../../assets/image/poochain.png';
import './style.scss';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#02377a',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

const Footer = () => {
    const [showDialog, setShowDialog] = useState(false);
    const handleOpen = () => {
        setShowDialog(true);
    }
    const handleClose = () => {
        setShowDialog(false);
    }
    return (
        <div className="footer">
            <a className="join-us-telegram-btn" href="https://t.me/GoatMiners">
                <Button variant="contained" endIcon={<img src={TelegramIcon} alt="telegram-icon" width={30} height={30} />} >
                    <p>Join us Telegram</p>
                </Button>
            </a>
            <div className="partners">
                <div className="partner-brand">
                    <img src={BinanceImg} alt="biannce-img" width={100} height={28} />
                </div>
                <div className="partner-brand">
                    <img src={EthereumImg} alt="ethereum-img" width={105} height={27} />
                </div>
                <div className="partner-brand">
                    <img src={AvalancheImg} alt="avalanche-img" width={109} height={22} />
                </div>
                <div className="partner-brand">
                    <img src={PolygonImg} alt="polygon-img" width={105} height={23} />
                </div>
                <div className="partner-brand">
                    <img src={PoochainImg} alt="poochain-img" width={108} height={28} />
                </div>
            </div>
            <div className="brand-title">
                <p>
                    GoatMiners the tool to find the best ROI Dapps.
                </p>
            </div>
            <div className="disclaimer">
                <div className="title">
                    <p>Disclaimer</p>
                </div>
                <div className="btn">
                    <IconButton style={{ color: "#fff700" }} onClick={handleOpen}>
                        <ErrorRoundedIcon />
                    </IconButton>
                </div>
            </div>
            <Modal
                open={showDialog}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: '#FFF700' }}>
                        Disclaimer
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ color: 'white' }}>
                        All projects listed on this website are unrelated to GoatMiners. The information provided should never be considered as financial advice.
                        Miners are considered as a high-risk investment. Always do your own research and never invest more than you can afford to lose.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default Footer;