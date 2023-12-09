import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Preference from '../../components/Preference/Preference';
import Modal from '../Modal/Modal';
import { NavLink, useHistory } from 'react-router-dom';
import Classes from './SideMenu.css';


const SideMenu = (props) => {

    const history = useHistory();

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [modalShow, setModalShow] = React.useState(false);


    const modalHandler = props => {
        if (modalShow === false) {
            setModalShow(true);
        } else {
            setModalShow(false);
        }
    }

    const list = (anchor) => (
        <Box
            sx={{ width: 250, height: 1200, backgroundColor: 'black' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Settings'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <div className={Classes.UserInfo}>
                            <div className={Classes.Name}><p><i className="fas fa-user"></i> {props.user.name}</p></div>
                        </div>
                    </ListItem>
                ))}
            </List>
            <List>
                {['Settings'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <div>{props.user && <div><button className={Classes.btn0} onClick={() => history.push('/UserInfo')}>User Info</button></div>}</div>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List>
                {['Settings'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <div>{props.user && <div><button className={Classes.btn0} onClick={modalHandler}>Settings</button></div>}</div>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List>
                {['Settings'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <div>{props.user && <div><button className={Classes.btn} onClick={() => history.push('/Logout')}>Log Out</button></div>}</div>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{' My Account'}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                    <Modal show={modalShow} modalClosed={modalHandler}>
                        <Preference />
                    </Modal>
                </React.Fragment>
            ))}
        </div>
    );
};

export default SideMenu;
