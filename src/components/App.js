import '../styles/main.scss';
import logoAwesome from '../images/logo-awesome.svg';
import logoAdalab from '../images/logo-adalab.png';
import { useState } from 'react';
import dataApi from '../services/fetch';
import Card from './card/Card';

function App() {

  const [apiData, setApiData] = useState({});

  const [dataCard, setDataCard] = useState({
    palette: 1,
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  // función actualizar valores de los inputs
  const handleInput = (data) => {
    const inputValue = data.value;
    const inputChanged = data.name;

    if (inputChanged === 'name') {
      setDataCard({
        ...dataCard,
        name: inputValue,
      });
    } else if (inputChanged === 'job') {
      setDataCard({
        ...dataCard,
        job: inputValue,
      });
    } else if (inputChanged === 'phone') {
      setDataCard({
        ...dataCard,
        phone: inputValue,
      });
    } else if (inputChanged === 'email') {
      setDataCard({
        ...dataCard,
        email: inputValue,
      });
    } else if (inputChanged === 'linkedin') {
      setDataCard({
        ...dataCard,
        linkedin: inputValue,
      });
    } else if (inputChanged === 'github') {
      setDataCard({
        ...dataCard,
        github: inputValue,
      });
    } else if (inputChanged === 'palette') {
      setDataCard({
        ...dataCard,
        palette: parseInt(inputValue),
      });
    }
  };

  // función reset
  const handleResetButton = (ev) => {
    ev.preventDefault();
    setDataCard({
      palette: 1,
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    });
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then((info) => {
      setApiData(info);
    });
  };


  return (
    <div>
      <header className='header'>
        <a href='./index.html'>
          <img className='header__img' src={logoAwesome} alt='Logo' />
        </a>
      </header>
      <Card
      dataCard={dataCard}
      handleInput={handleInput} 
      handleClickCreateCard={handleClickCreateCard}
      />

      <footer className='footer'>
        <p className='footer__paragraph footer-paragraph'>Sine Nomine © 2022</p>
        <a href='https://adalab.es' target='_blank'>
          <img className='footer__img' src={logoAdalab} alt='Logo Adalab' />
        </a>
      </footer>
    </div>
  );
}

export default App;
