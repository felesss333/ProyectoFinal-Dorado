import React from 'react';
import sello1 from '../../assets/img/sellos/3dotsrecording.png';
import sello2 from '../../assets/img/sellos/epitaph.png';
import sello3 from '../../assets/img/sellos/fearless.png';
import sello4 from '../../assets/img/sellos/napalm.png';
import sello5 from '../../assets/img/sellos/lava.png';
import sello6 from '../../assets/img/sellos//visiblenoise.png';
import sello7 from '../../assets/img/sellos/rca.png';
import sello8 from '../../assets/img/sellos/atlantic.png';
import sello9 from '../../assets/img/sellos/sony.png';
import sello10 from '../../assets/img/sellos/columbia.png';

const sellos = [
  { id: 1, src: sello1, alt: '3dots Recording' },
  { id: 2, src: sello2, alt: 'Epitaph' },
  { id: 3, src: sello3, alt: 'Fearless' },
  { id: 4, src: sello4, alt: 'Napalm' },
  { id: 5, src: sello5, alt: 'Lava' },
  { id: 6, src: sello6, alt: 'Visible Noise' },
  { id: 7, src: sello7, alt: 'RCA' },
  { id: 8, src: sello8, alt: 'Atlantic' },
  { id: 9, src: sello9, alt: 'Sony' },
  { id: 10, src: sello10, alt: 'Columbia' },
];

const Footer = () => {
  const imageStyle = {
    width: '120%',
  };

  return (
    <div className="footer text-center">
        <br/>
      <hr className='linea2'/>
      <div className="sello-container col-12 col-lg-12 row justify-content-around align-items-center pt-4">
        {sellos.map(sello => (
          <div key={sello.id} className="col-2 col-lg-auto mx-auto">
            <img src={sello.src} alt={sello.alt} style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;


