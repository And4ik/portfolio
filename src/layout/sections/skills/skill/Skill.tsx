import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type Props = {
    iconId: string
    title: string
    description: string
}
export const Skill = ({iconId,title,description}:Props) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={iconId}/>
                </IconWrapper>
                <SkillTitle>{title}</SkillTitle>
                <SkillText>{description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};
const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(71, 34, 34, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`
const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    font-family: 'Josefin Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
`
const SkillText = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
`