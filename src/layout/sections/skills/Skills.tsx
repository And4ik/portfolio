import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
               <Skill iconId={"html"} title={"html"} description={"About html"}/>
               <Skill iconId={"css"} title={"css"} description={"About css"}/>
               <Skill iconId={"ts"} title={"ts"} description={"About ts"}/>
               <Skill iconId={"styled-components"} title={"styled-components"} description={"About styled"}/>
               <Skill iconId={"styled-components"} title={"styled-components"} description={"About styled"}/>
               <Skill iconId={"styled-components"} title={"styled-components"} description={"About styled"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #e7d8e1;
    min-height: 100vh;
    
`


