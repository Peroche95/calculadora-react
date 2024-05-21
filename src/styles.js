import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(1,0,36);
    background: linear-gradient(90deg, rgba(1,0,36,0.7091211484593838) 0%, rgba(58,26,102,1) 35%, rgba(162,0,255,1) 100%); ;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #000;
    width: 50%;
    box-shadow: 0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`



