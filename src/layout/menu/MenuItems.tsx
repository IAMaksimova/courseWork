import React from 'react';
import styled from "styled-components";
import {MenuItem} from "@mui/material";
import {FlexWrapper} from "../../components/FlexWrapper";
import {NavLink} from "react-router-dom";

export const MenuItems: React.FC<{setMenuIsOpen: (isOpen: boolean) => void}> = ({setMenuIsOpen}) => {

    const menuItems = [
        {title: 'Главная', path: '/'},
        {title: 'О проектах', path: 'projects'},
        {title: 'Таблица', path: 'table'},
        {title: 'Контакты', path: 'contact'},
    ]
    const onClickHandler = () => {setMenuIsOpen(false)}

    return (
        <StyledMenu>
            <FlexWrapper direction={'column'} justify={'center'} style={{height: '100vh'}}>
                <ListOfMenuItems>
                    {menuItems.map(el => {
                        return(
                            <NavLink  to={el.path} key={el.title} style={{color: 'white'}} onClick={onClickHandler}>
                                <MenuItem sx={{fontFamily: 'Montserrat', fontSize: '24px', letterSpacing: '2px'}}>
                                    {el.title}
                                </MenuItem>
                            </NavLink>
                        )
                    })}
                </ListOfMenuItems>
            </FlexWrapper>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  height: 100vh;
  width: 26vw;
  background: rgb(0, 0, 0);
  position: fixed;
  z-index: 5555;
  //outline: 1px solid white;
  right: 0;
`

const ListOfMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  
`

