import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Counter from "./Counter";

const headerMenuItems = [
  {
    text: 'Home',
    link: 'home-page'
  },
  {
    text: 'Products',
    link: 'prod-page'
  },
  {
    text: 'Services',
    link: 'serv-page'
  },
  {
    text: 'Prices',
    link: 'price-page',
  }
];

const footerMenuItems = [
  {
    text: 'Facebook',
    link: 'facebook'
  },
  {
    text: 'Twitter',
    link: 'twitter'
  },
  {
    text: 'Instagram',
    link: 'instagram'
  }
];

const footerText = 'Re-project';

const startCounter1 = 2;
const startCounter2 = 3;
const totalStart = startCounter1 + startCounter2;

function App() {

  const [totalCount, setTotalCount] = useState(totalStart);
  function buttonClicked(name){
    console.log('CLICKED!!' + name);
  }

  function countChanges(value){
    console.log('changed!!' + value);
    setTotalCount(totalCount + value);
  }

  return (
      <div className='App'>
        <Header menuItems={headerMenuItems}/>
        <Content bc={buttonClicked}/>
        <hr/>
        Total: {totalCount}
        <hr/>
        <Counter countChanges={countChanges} start={startCounter1}/>
        <hr/>
        <Counter countChanges={countChanges} start={startCounter2}/>
        <Footer footerMenuItems={footerMenuItems} headerMenuItems={headerMenuItems} text={footerText}/>
      </div>
  );
}

export default App;
