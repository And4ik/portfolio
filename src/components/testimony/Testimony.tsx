import React from 'react';
import {SectionTitle} from "../SectionTitle";
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {Slider} from "../slider/Slider";
import {FlexWrapper} from "../FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId="css"/>
                <Slider/>
            </FlexWrapper>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.div`
    min-height: 50vh;
    background-color: darkolivegreen;
`