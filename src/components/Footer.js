import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    margin: 0;
    min-width: 0;
    display: flex;
    justify-content: space-between;
    height: 24px;
    width: 100vw;
    background-color: #121221;
    position: fixed;
    bottom: 0px;
    z-index: 100;
    border-top: 1px solid;
    border-color: #26283C;
    margin-top: -10px;
`
const FooterContent = styled.div`
    margin: 0;
    min-width: 0;
    display: flex;
    margin-left: 10px;
    align-items: center;
    width: 100%;
`
const FooterBanner = styled.div`
    font-size: 12px;
    margin-left: 10px;
    letter-spacing: 0.32px;
    color: #2BBDB5;
`
export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContent>
                <svg style={{ width: 16, height: 12, fill: 'none' }} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="9.667" width="1.67" height="2.5" fill="#1DB1A8"></rect><rect x="4.44446" y="5.667" width="1.66667" height="6.67" fill="#1DB1A8"></rect><rect x="8.88892" y="3" width="1.66667" height="10.83" fill="#1DB1A8"></rect><rect x="13.3333" width="1.66667" height="15" fill="#1DB1A8"></rect></svg>
                <FooterBanner>Stable connection</FooterBanner>
            </FooterContent>
        </FooterWrapper>
    )
}

