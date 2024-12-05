import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type Props = {
    iconId: string
    title: string
    description: string
}
export const Skill = ({iconId,title,description}:Props) => {
    return (
        <StyledSkill>
            <Icon iconId={iconId}/>
            <SkillTitle>{title}</SkillTitle>
            <SkillText>{description}</SkillText>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    width: 30%;
    background-color: rgba(228, 238, 236, 0.54);
    margin: 10px;
`
const SkillTitle = styled.h3`

`
const SkillText = styled.p`

`