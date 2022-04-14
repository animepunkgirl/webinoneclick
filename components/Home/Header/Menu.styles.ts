import styled, {css} from "styled-components";

interface ActiveProp {
  active: boolean
}

export const Burger = styled.button<ActiveProp>`
    position: relative;
    z-index: 5;
    width: 30px;
    height: 18px;
    cursor: pointer;
    span,
    &::before,
    &::after {
        position: absolute;
        left: 0;
        height: 16%;
        width: 100%;
        transition: all 0.3s ease;
        background-color: ${p => p.theme.colors.white};
    }

    &::before,
    &::after {
        content: ""
    }

    &::before {
        top: 0;
    }
    &::after {
        bottom: 0;
    }

    span {
        top: 50%;
        transform: scale(1) translate(0, -50%);
    }

    ${p => p.active && css`
        span {
            transform: scale(0) translate(0, -50%);
        }

        &::before {
            top: 50%;
            transform: rotate(-45deg) translate(0, -50%);
        }

        &::after {
            bottom: 50%;
            transform: rotate(45deg) translate(0, 50%);
        }
    `};

    @media (min-width: 768px) {
        display: none;
    }
`


export const Nav = styled.nav<ActiveProp>`
    display: flex;
    @media (max-width: 767.98px) {
        display: block;
        position: fixed;
        top: ${p => p.active ? 0 : "-100%"};
        z-index: 2;
        left: 0;

        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 100px 30px 30px 30px;
        transition: top 0.3s ease;
        overflow: auto;
    }
`

export const List = styled.ul`
    text-align: center;
    @media (min-width: 768px) {
        display: flex;
    }
`

export const Item = styled.li`
  
`

interface LinkProp {
  active?: boolean
}
export const Link = styled.p<LinkProp>`
    display: inline-block;
    user-select: none;
    font-weight: 400;
    color: ${p => p.theme.colors.white};
    font-size: 30px;
    margin-bottom: 30px;
    text-transform: uppercase;

    @media (min-width: 768px) {
        transition: all 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 4px;
        text-transform: uppercase;
        font-size: 16px;
        height: 40px;
        padding: 0 16px;
        border-radius: 3px;

        &:hover {
            cursor: pointer;
            color: ${p => p.theme.colors.darkOrange};
        }
      
        ${p => p.active && css`
          background-color: ${p => p.theme.colors.darkOrange};
          &:hover {
            cursor: default;
            color: ${p => p.theme.colors.white};
          }
        `}
    }
`