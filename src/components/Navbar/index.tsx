import React, { useState } from 'react'
import Marquee from 'react-fast-marquee';
import {
    Link,
    IconButton,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    ListItem,
    List,
    Box,
    Modal,
    Typography
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ErrorIcon from '@mui/icons-material/Error';

import LogoImg from '../../assets/image/logo.png';
import './style.scss';

const modal_style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'rgba(7, 23, 96, 0.95)',
    border: 'none',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

const Navbar = () => {
    const [collapseMenu, setCollapseMenu] = useState(true);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className='navbar'>
            <div className='logo'>
                <a className="logo-img" href='/'>
                    <img src={LogoImg} alt="logo" width="50" height="50" />
                </a>
                <a className='brand' href="/">
                    <p>MINERS</p>
                </a>
            </div>

            <div className='moving-text'>
                <div>
                    <Marquee style={{
                        'margin': 0,
                        fontWeight: 600,
                        fontSize: 30,
                        color: '#E8B21E',
                        borderRadius: 4,
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    }} gradient={false} speed={40}>
                        We are giving away $50!! Check TG for details
                    </Marquee>
                </div>
            </div>
            <div className='menu-btn'>
                <IconButton aria-label="delete" size="large" style={{ color: 'white' }} onClick={() => setCollapseMenu(!collapseMenu)} >
                    <DehazeIcon fontSize="large" />
                </IconButton>
                {!collapseMenu &&
                    <div className="dropdown-menu">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleOpen}>
                                    <ListItemIcon style={{ color: 'white' }}>
                                        <ErrorIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Learn More" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon style={{ color: 'white' }}>
                                        <TelegramIcon />
                                    </ListItemIcon>
                                    <ListItemText >
                                        <Link href="https://te.me/GoatMiners" underline="none" style={{ color: 'white' }}>
                                            {'Telegram'}
                                        </Link>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon style={{ color: 'white' }}>
                                        <TwitterIcon />
                                    </ListItemIcon>
                                    <ListItemText >
                                        <Link href="https://twitter.com/GoatMiners" underline="none" style={{ color: 'white' }}>
                                            {'Twitter'}
                                        </Link>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </div>
                }
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal_style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: "#FFF700" }}>
                        What is a Miner?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ color: 'white' }}>
                        Typically, the term miner in crypto refers to nodes doing the computational work required to verify all blockchain transactions in exchange of rewards.
                        The projects listed on GoatMiners are different as there is no mining involved.
                        In these miners, you will deposit tokens in a smart contract in order to receive a daily interest which can be compounded to improve your position and rewards.
                    </Typography>
                    <div className="mt-20" />
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: "#FFF700" }}>
                        Are all miners the same?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ color: 'white' }}>
                        Not at all! More and more developers come up with new ideas: improved formulas, game mechanics, and extra utilities for more sustainable projects.
                        Unfortunately, there are also a lot of scams. Do your research before investing and never invest more that you can afford to lose!
                    </Typography>
                    <div className="mt-20" />
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: "#FFF700" }}>
                        Can I make money with miners?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ color: 'white' }}>
                        Yes. However, it will depend on you choosing the right miner at the right time.
                        Most miners find their success (or misfortune) in their community - either lasting for many months or having their contract depleted in weeks.
                        It's always better invest into innovative projects with trusted teams, good audits and a sustainability model that can last enough time to at least recover your initial investment.
                    </Typography>
                    <div className="mt-20" />
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: "#FFF700" }}>
                        Promotions
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ color: 'white' }}>
                        Please check our Telegram group to know about all current promotions and entry requirements.
                        By using our referral link, you will be eligible to participate in our promotions where you could win BNB!
                    </Typography>
                    <div className="mt-20" />
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: "#FFF700" }}>
                        GoatMiners Insurance
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ color: 'white' }}>
                        Using our referral link will automatically give you access to our insurance plan which, in the event of entering a scam, will cover part of the totality of your investment.
                        Note: Insurance would only be applicable in clear scams with malicious code. There will be no coverage for projects that go to 0 becuase of their sustainability model.
                        Amount refunded will depend on number of affected users and funds available in the insurance fund.
                    </Typography>


                </Box>
            </Modal>
        </div >
    );
}

export default Navbar;