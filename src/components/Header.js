import React, { Component, useState } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeConsumer } from '../context/ThemeContext';

const HeaderWrapper = styled.header`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  height: 100%;
  background-color: #121221;
  grid-area: header;
  height: 64px;
  z-index: 10;
`

const NavMenuWrapper = styled.ul`
  display: flex;
  align-items: center;
`

const NavMenuItem = styled.a`
  color: rgb(240, 240, 245) !important;
  text-decoration: none;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  color: #F0F0F5;
  align-items: center;
  position: relative;
  margin-left: 12px;
  margin-right: 12px;
  &:hover, &:focus {
    color: #7E9AFF !important;
    text-decoration: none;
  }
`

const CexDexBox = styled.div`
  border: 1px solid #3B3D59;
  border-radius: 6px;
  height: 32px;
  minWidth: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProvWrapper = styled.div`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: flex;
    position: relative;
    border-radius: 4px;
    margin-left: 4px;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 12px;
    line-height: 16px;
    background-color: #584CEA;
    color: #FFFFFF;
    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: -3px;
      top: 2px;
      border-left: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid;
      border-right-color: #584CEA;
    }
`

const ConnectButton = styled.button`
    margin: 0px;
    appearance: none;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    rgb(240, 240, 245)-space: nowrap;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: inherit;
    text-align: center;
    outline: none;
    padding: 6px 12px;
    min-width: 52px;
    word-break: keep-all;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    min-height: 24px;
    border: none;
    font-size: 14px;
    line-height: 20px;
    background-image: linear-gradient(93.96deg, rgb(224, 95, 187) 0.76%, rgb(66, 80, 244) 100.57%);
    background-color: rgb(107, 120, 238);
    font-weight: 400;
`

const ApxWrapper = styled.div`
  color: rgb(240, 240, 245);
  cursor: pointer;
  margin: 0px 10px;
  &:hover {
    color: #7E9AFF !important;
  }
`

const RightMenuContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SettingContent = styled.div`
  color: rgb(240, 240, 245);
`

function Header() {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  const PopvStyle = {
    display: 'flex', alignItem: 'center', justifyContent: 'center'
  }
  return (
    <>
      <HeaderWrapper>
        <Navbar expand="lg" style={{ width: '100%' }}>
          <Link className="navbar-brand" to="/">
            <ThemeConsumer>
              {() => {
                return (
                  <img style={{ width: 120, height: 30 }} src={'img/logo.svg'} alt="logo" />
                ) 
              }}
            </ThemeConsumer>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mr-auto">
              <NavMenuWrapper>
                <li>
                  <CexDexBox>
                    <Button style={{ width: 47, padding: '0 11px', fontWeight: 500, border: 0, color: '#F0F0F5', fontSize: 14, background: '#121221'}}>CEX</Button>
                    <Button style={{ width: 47, padding: '0 11px', fontWeight: 500, border: 0, color: '#FFFFFF', fontSize: 14, background: 'rgba(255,255,255,0.23)'}}>DEX</Button>
                  </CexDexBox>
                </li>
                <li>
                  <NavMenuItem href='/'>Trade</NavMenuItem>
                </li>
                <li>
                  <NavMenuItem href='/'>Trade Rewards</NavMenuItem>
                </li>
                <li>
                  <NavMenuItem href='/' style={PopvStyle}>
                    Leaderboard
                    <ProvWrapper >
                      Hot
                    </ProvWrapper>
                  </NavMenuItem>
                </li>
                <li>
                  <NavMenuItem href='/' style={PopvStyle}>
                    NFT Lottery Game
                    <ProvWrapper >
                      Win
                    </ProvWrapper>
                  </NavMenuItem>
                </li>
                <li>
                  <NavMenuItem href='/'>Staking</NavMenuItem>
                </li>
                <NavDropdown 
                  title="More" 
                  id="collasible-nav-dropdown" 
                  show={show}
                  onMouseEnter={showDropdown} 
                  onMouseLeave={hideDropdown}
                >
                  <NavDropdown.Item href="/">API Document</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/">Referral</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/">Audit Report</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/">Guide</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/">Buy Crypto</NavDropdown.Item>
                </NavDropdown>
              </NavMenuWrapper>
            </Nav>
            <Nav className="navbar-nav ml-auto">
              <RightMenuContent>
                <ApxWrapper style={{ color: 'rgb(240, 240, 245)' }}>
                  <img style={{ height: 'auto', minWidth: 0, maxWidth: '100%', marginRight: 10 }} src={'img/apx.svg'} alt="apx" />
                  $ 0.0749
                </ApxWrapper>
                <ConnectButton>Connect Wallet</ConnectButton>
              </RightMenuContent>
              <Dropdown className="header-img-icon">
                <Dropdown.Toggle variant="default">
                  <SettingContent>
                    <svg style={{ width: '1em', height: '1em', fontSize: 24 }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="css-1hmjvxk"><path fillRule="evenodd" d="M12 9a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M13.232 22a2 2 0 001.898-1.367l.395-1.187a1.012 1.012 0 011.162-.67l1.228.25a2 2 0 002.132-.96l1.232-2.132a2 2 0 00-.236-2.327l-.821-.926a1.027 1.027 0 010-1.362l.82-.926a2 2 0 00.237-2.327l-1.232-2.133a2 2 0 00-2.132-.96l-1.228.252a1.011 1.011 0 01-1.162-.671l-.396-1.187A2 2 0 0013.232 2h-2.464A2 2 0 008.87 3.367l-.396 1.187a1.012 1.012 0 01-1.162.67l-1.228-.25a2 2 0 00-2.132.96L2.72 8.065a2 2 0 00.236 2.327l.821.926a1.027 1.027 0 010 1.362l-.82.926a2 2 0 00-.237 2.327l1.232 2.133a2 2 0 002.132.96l1.228-.252a1.011 1.011 0 011.162.671l.396 1.187A2 2 0 0010.768 22h2.464zm.396-3.186L13.232 20h-2.464l-.396-1.187a3.012 3.012 0 00-3.46-1.997l-1.227.25-1.232-2.132.821-.925a3.026 3.026 0 000-4.018l-.82-.925 1.23-2.133 1.229.251a3.012 3.012 0 003.46-1.997L10.767 4h2.464l.396 1.187a3.011 3.011 0 003.46 1.997l1.227-.25 1.232 2.132-.821.925a3.026 3.026 0 000 4.018l.82.925-1.23 2.133-1.229-.251a3.012 3.012 0 00-3.459 1.998z" clipRule="evenodd"></path></svg>
                  </SettingContent>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="dropdown-header d-flex flex-column align-items-center">
                    <div className="figure mb-3">
                      <img src={'img/avatar.svg'} alt="" />
                    </div>
                    <div className="info text-center">
                      <p className="name font-weight-bold mb-0">Tony Stark</p>
                      <p className="email text-muted mb-3">
                        tonystark@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="dropdown-body">
                    <ul className="profile-nav">
                      <li className="nav-item">
                        <Link to="/profile" className="nav-link">
                          <i className="icon ion-md-person"></i>
                          <span>Profile</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/wallet" className="nav-link">
                          <i className="icon ion-md-wallet"></i>
                          <span>My Wallet</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/settings" className="nav-link">
                          <i className="icon ion-md-settings"></i>
                          <span>Settings</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className="nav-link red">
                          <i className="icon ion-md-power"></i>
                          <span>Log Out</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </HeaderWrapper>
    </>
  );
}

export default Header;
