import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
`;

export const Buttons = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

Buttons.button = styled.button`
    margin: 5px;
    border-style: none;
    background-color: darkblue;
    color: #fff;
    border-radius: 5px;
    
    &:hover {
        background-color: cornflowerblue;
    }
    
    &:active {
        background-color: blue;
    }
`;

Wrapper.Buttons = Buttons;

export const Info = styled.div``;

Info.paragraph = styled.p``;

Info.image = styled.img``;

Wrapper.Info = Info;