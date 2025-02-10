import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"html"} title={"HTML"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat!"}/>
                    <Skill iconId={"css"} title={"CSS3"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat!"}/>
                    <Skill iconId={"ts"} title={"TS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat!"}/>
                    <Skill iconId={"react"} title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat!"}/>
                    <Skill iconId={"styled-components"} title={"STYLED-COMPONENTS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat!"}/>
                    <Skill iconId={"figma"} title={"FIGMA"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat!"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #e7d8e1;
    min-height: 100vh;
`


