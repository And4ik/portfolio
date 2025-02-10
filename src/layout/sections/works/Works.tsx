import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/img/proj-1.webp"
import timerImg from "../../../assets/img/proj-2.webp"
import {Container} from "../../../components/Container";


const worksItems = ["all","landing page","react","spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <Menu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"}>
                    <Work title={"Social Network"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at autem ipsum saepe, sint veritatis?"}
                          src={socialImg}/>
                    <Work title={"Second project"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at autem ipsum saepe, sint veritatis?"}
                          src={timerImg}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #a2b692;
`
