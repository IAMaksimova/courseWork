import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MenuItems} from "./MenuItems";

export const Menu = () => {

    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen)
    }

    return (
        <div>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            {menuIsOpen && <MenuItems setMenuIsOpen={setmenuIsOpen}/>}
        </div>
    );
};

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 999999999999;
  //outline: 1px solid red;

  span {
    display: block;
    width: 30px;
    height: 1px;
    background-color: white;
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 30px;
      height: 1px;
      background-color: white;
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
    
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 30px;
      height: 1px;
      background-color: white;
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 30px;
      `}
    }
  }
`
