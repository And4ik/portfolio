import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Andrei</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21 px"} iconId={"instagram"}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21 px"} iconId={"telegram"}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21 px"} iconId={"vk"}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21 px"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright> @ 2025 Andrei Khanko, All rights Reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #edc8dd;
    min-height: 20vh;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex; 
    gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`

