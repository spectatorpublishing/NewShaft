/* Used Material UI Checkbox components: https://v4.mui.com/components/checkboxes/ */

import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { theme } from "../../util/GlobalStyles";

const Item = styled.div`
    padding: 0px 11px;
`;

const FilterItem = (props) => {
    const [optionActive, setOptionActive] = useState(false);

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
                    control={
                        <Checkbox
                            style={{
                                color: theme.columbiaBlue,
                                '&$checked': {
                                color: theme.columbiaBlue,
                                },
                            }}
                            color="default"
                            onChange={onClick}
                            checked={optionActive}
                        />}
                    label={props.option}
                    root={
                        {fontWeight: 400,
                        fontFamily: 'Raleway',
                        color: 'black',
                        whiteSpace: 'nowrap'}
                      }
                />
        </Item>
    );
}

export default FilterItem;