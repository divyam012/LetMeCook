import React, { useState } from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import styled from 'styled-components';
import Search from './components/Search';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>LET_HIM_COOK</Logo>
      </Nav>
          <Search />
          <Category />
          <Pages />
        </div>
  )}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
