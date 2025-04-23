import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PrizePool from './components/PrizePool.jsx';
import Schedule from './components/Schedule.jsx';
import Sponsors from './components/Sponsors.jsx';
import Contact from './components/Contact.jsx';
import FAQ from './components/FAQ.jsx';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/siteData.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="App">
      <Navbar items={data.navbar} />
      <Hero {...data.hero} />
      <PrizePool pool={data.prizePool} />
      <Schedule {...data.schedule} />
      <Sponsors {...data.sponsors} />
      <Contact {...data.contact} />
      <FAQ {...data.faq} />
    </div>
  );
}

export default App;
