/* Used Material UI Checkbox components: https://v4.mui.com/components/checkboxes/ */

import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { theme } from "../util/GlobalStyles";
import { makeStyles } from '@material-ui/core/styles';

const Item = styled.div`
    padding: 0px 11px;
`;

const BlueCheckbox = withStyles({
    root: {
      color: theme.columbiaBlue,
      '&$checked': {
        color: theme.columbiaBlue,
      },
    }
})((props) => <Checkbox onClick={props.handleChange} checked={props.checked} color="default" {...props} />);

const FilterItem2022 = (props) => {
    const [optionActive, setOptionActive] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        setOptionActive(props.isActive)
    }, [props.isActive]);

    useEffect(() => {
        props.handleChange(Number(optionActive), props.option);
    }, [optionActive]);

    const onClick = () => {
        setOptionActive(!optionActive);
    }

    return (
        <Item>
            <FormControlLabel 
                    value={props.option}
                    control={<BlueCheckbox handleChange={onClick} checked={optionActive}/>}
                    label={props.option}
                    classes={{ label: classes.checkboxLabelA }}
                />
        </Item>
    );
}

const useStyles = makeStyles({
    checkboxLabelA: {
      fontWeight: 400,
      fontFamily: 'Raleway',
      color: 'black',
      whiteSpace: 'nowrap'
    }
});

export default FilterItem2022;