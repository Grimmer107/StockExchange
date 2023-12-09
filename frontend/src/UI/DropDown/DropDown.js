import * as React from 'react';
import {useHistory} from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import Classes from './DropDown.css';
import UserPreference from '../../containers/UserInfo/UserPreference/UserPreference';
import jwtDecode from 'jwt-decode';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(names, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(names) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
};

const MultipleSelectChip = (props) => {

    const theme = useTheme();
    const history = useHistory();
    const [personName, setPersonName] = React.useState([]);

    const sendPreference = (e) => {
        e.preventDefault();
        const jwt = localStorage.getItem('token');
        const user = jwtDecode(jwt);
        axios.put('http://localhost:5000/api/users/preferences/' + user._id, {preferences:personName})
            .then(res => {
                console.log(personName);
            })
            .catch(err => {
                console.log("The data was not sent!");
            })
        history.push('/UserInfo');
    }


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {(props.datanames).map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div><input className={Classes.btn} type={"Submit"} onClick={sendPreference} /></div>
        </div>
    );
};

export default MultipleSelectChip;