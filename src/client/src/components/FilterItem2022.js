import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Dropdown } from 'react-bootstrap';

const FilterItem2022 = (props) => {
    const [optionActive, setOptionActive] = useState(false);

    useEffect(() => {
        props.handleChange(Number(optionActive), props.option);
    }, [optionActive]);

    const onClick = () => {
        setOptionActive(!optionActive);
    }

    return (
        <Dropdown.Item eventKey={props.key} onClick={() => onClick()} active={optionActive}>{props.option}</Dropdown.Item>
    );
}

export default FilterItem2022;