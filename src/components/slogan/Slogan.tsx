import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Button} from "../Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle> I`m finding new job</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: gold;
    text-align: center
`