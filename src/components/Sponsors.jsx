import React from 'react';
import './Sponsors.css';

const Sponsors = ({ titleSponsors, communityPartners, energyPartners }) => (
  <section id="sponsors">
    <div className="pixel-section-title">TITLE SPONSORS</div>
    <div className="sponsor-row">
      {titleSponsors.map((src, idx) => (
        <div className="sponsor-box" key={idx}>
          <img src={src} alt="Sponsor" style={{maxWidth:'100%',maxHeight:'60px'}} />
        </div>
      ))}
    </div>
    <div className="pixel-section-title">COMMUNITY PARTNER</div>
    <div className="sponsor-row">
      {communityPartners.map((src, idx) => (
        <div className="sponsor-box" key={idx}>
          <img src={src} alt="Community Partner" style={{maxWidth:'100%',maxHeight:'60px'}} />
        </div>
      ))}
    </div>
    <div className="pixel-section-title">ENERGY PARTNER</div>
    <div className="sponsor-row">
      {energyPartners.map((src, idx) => (
        <div className="sponsor-box" key={idx}>
          <img src={src} alt="Energy Partner" style={{maxWidth:'100%',maxHeight:'60px'}} />
        </div>
      ))}
    </div>
  </section>
);

export default Sponsors;
