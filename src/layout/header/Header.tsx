import React from 'react';
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

const items = ["Home","Skills","Work","About me","Contact"]


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    background-color: #cfe8b3;
    display: flex;
    justify-content: space-between;
`
 