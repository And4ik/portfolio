import React from 'react';
import styled from "styled-components";
import myPhoto from "../../../assets/img/myPhoto.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hello</span>
                    <Name>I am Andrei Khanko</Name>
                    <MainTitle>A frontend Developer</MainTitle>
                </div>
                <Photo src={myPhoto} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #e1f5ce;
`
const MainTitle = styled.h1`

`
const Name = styled.h2`

`