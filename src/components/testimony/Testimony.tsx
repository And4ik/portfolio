import React from 'react';
import {SectionTitle} from "../SectionTitle";
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {Slider} from "../slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <Icon iconId="css"/>
            <Slider/>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.div`
    min-height: 100vh;
    background-color: darkolivegreen;
`