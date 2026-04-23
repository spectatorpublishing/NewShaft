/* Used Material UI Checkbox components: https://v4.mui.com/components/checkboxes/ */

import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { theme } from "../../util/GlobalStyles";

const Item = styled.div`
    padding: 0px 11px;
`;

const OptionLabel = styled(FormControlLabel)`
    margin-top: 0;
    margin-bottom: 0;

    .MuiCheckbox-root {
        padding-top: 3px;
        padding-bottom: 3px;
    }

    .MuiFormControlLabel-label {
        line-height: 1.1;
    }
`;

const UncheckedCircle = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid ${theme.columbiaBlue};
    background: white;
    box-sizing: border-box;
    display: inline-block;
`;

const FilterItem = (props) => {
    const [optionActive, setOptionActive] = useState(false);
    const isCircularFilter =
        props.filterCategory === "School" ||
        props.filterCategory === "Group Size" ||
        props.filterCategory === "Typical Residents" ||
        props.filterCategory === "Room Type";
    const displayLabel = (() => {
        if (props.filterCategory === "Group Size") {
            return props.option.replace(/\s*Person$/, "").trim();
        }
        if (props.filterCategory === "Room Type") {
            return props.option.replace(/\s*Style$/, "").trim();
        }
        return props.option;
    })();

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
            <OptionLabel 
                    value={props.option}
                    control={
                        <Checkbox
                            style={{
                                color: theme.columbiaBlue,
                            }}
                            color="default"
                            onChange={onClick}
                            checked={optionActive}
                            icon={isCircularFilter ? <UncheckedCircle /> : undefined}
                            checkedIcon={isCircularFilter ? <CheckCircleIcon htmlColor={theme.columbiaBlue} /> : undefined}
                        />}
                    label={displayLabel}
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