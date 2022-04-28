import '../styles/main.scss';
import logoAwesome from '../images/logo-awesome.svg';
import logoAdalab from '../images/logo-adalab.png';
import { useState } from 'react';
import dataApi from '../services/fetch';

function App() {
  const [collapsedClassD, setCollapsedClassD] = useState('');
  const [collapsedClassC, setCollapsedClassC] = useState('collapsed');
  const [collapsedClassS, setCollapsedClassS] = useState('collapsed');

  const [arrowD, setArrowD] = useState('');
  const [arrowC, setArrowC] = useState('toggle_arrow');
  const [arrowS, setArrowS] = useState('toggle_arrow');

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
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;

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

  // colapsar las secciones
  const handleLegendClick = (ev) => {
    console.log(ev.currentTarget.id);
    let legendID = ev.currentTarget.id;

    if (legendID === 'designLegend') {
      console.log('soy la primera igualdad y me cumplo');
      setCollapsedClassD('');
      setCollapsedClassC('collapsed');
      setCollapsedClassS('collapsed');
      setArrowD('');
      setArrowC('toggle_arrow');
      setArrowS('toggle_arrow');
      if (collapsedClassD === '') {
        setCollapsedClassD('collapsed');
        setArrowD('toggle_arrow');
      }
    } else if (legendID === 'completeLegend') {
      console.log('soy la segunda igualdad y me cumplo');
      setCollapsedClassD('collapsed');
      setCollapsedClassC('');
      setCollapsedClassS('collapsed');
      setArrowD('toggle_arrow');
      setArrowC('');
      setArrowS('toggle_arrow');
      if (collapsedClassC === '') {
        setCollapsedClassC('collapsed');
        setArrowC('toggle_arrow');
      }
    } else if (legendID === 'shareLegend') {
      console.log('soy la tercera igualdad y me cumplo');
      setCollapsedClassD('collapsed');
      setCollapsedClassC('collapsed');
      setCollapsedClassS('');
      setArrowD('toggle_arrow');
      setArrowC('toggle_arrow');
      setArrowS('');
      if (collapsedClassS === '') {
        setCollapsedClassS('collapsed');
        setArrowS('toggle_arrow');
      }
    }
  };

  return (
    <div>
      <header className='header'>
        <a href='./index.html'>
          <img className='header__img' src={logoAwesome} alt='Logo' />
        </a>
      </header>

      <main className='main-create'>
        <section className='main-preview'>
          <div className='main-preview-wrapper'>
            <button
              onClick={handleResetButton}
              className='main-preview__button js-reset-btn'
            >
              <i className='fa-solid fa-trash-can'></i>Reset
            </button>
          </div>
          <article className='profile-card'>
            <div
              className={`main-preview-wrapper js_style_preview style_00${dataCard.palette}`}
            >
              <div className='profile-card-border'>
                <h2 className='profile-card__name js_name'>
                  {dataCard.name || 'Nombre y apellidos'}
                </h2>
                <p className='profile-card__occupation js_ocupation'>
                  {dataCard.job || 'Profesión'}
                </p>
              </div>
              <div className='profile-card__img js__profile-image'></div>
              <ul className='profile-card__social'>
                <li>
                  <a
                    className='social-links js_icon_phone'
                    title='Este es mi número de teléfono'
                    href={`tel: ${dataCard.phone}`}
                  >
                    <i className='fa-solid fa-mobile-screen-button'></i>
                  </a>
                </li>
                <li>
                  <a
                    className='social-links js_icon_email'
                    title='Envíame un email'
                    href={`mailto: ${dataCard.email}`}
                  >
                    <i className='fa-regular fa-envelope'></i>
                  </a>
                </li>
                <li>
                  <a
                    className='social-links js_icon_linkedin'
                    title='Sigueme en LinkedIn'
                    href={`https://www.linkedin.com/in/${dataCard.linkedin}`}
                  >
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>
                <li>
                  <a
                    className='social-links js_icon_github'
                    title='Sigueme en GitHub'
                    href={`https://github.com/${dataCard.github}`}
                  >
                    <i className='fa-brands fa-github-alt'></i>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <form className='wrapper js__form' action='' method='post'>
          <fieldset className='design'>
            {/* <!------------SECTION LEGEND-------------------> */}

            <legend
              className='design__legend js_design_legend'
              id='designLegend'
              onClick={handleLegendClick}
            >
              <span>
                <i className='fa-regular fa-object-ungroup design__square'></i>
              </span>
              <h2 className='design__title'>Diseña</h2>
              <span>
                <i
                  className={`js_arrow design__up fa-solid fa-chevron-up ${arrowD}`}
                ></i>
              </span>
            </legend>

            {/* <!------------SECTION COLOURS--------> */}

            <div
              className={`design__container js_design_form ${collapsedClassD}`}
            >
              <p className='design__subtitle'>Colores</p>

              <div className='design__options'>
                {/* <!--Option 1--> */}

                <div className='design__options--colour' id='style_001'>
                  <input
                    className='design__circle'
                    type='radio'
                    id='firstColour'
                    name='palette'
                    value='1'
                    onChange={handleInput}
                    checked={dataCard.palette === 1}
                  />
                  <div className='design__colour design__colour--1'></div>
                  <div className='design__colour design__colour--2'></div>
                  <div className='design__colour design__colour--3'></div>
                </div>

                {/* <!--Option 2--> */}

                <div className='design__options--colour' id='style_002'>
                  <input
                    className='design__circle'
                    type='radio'
                    id='secondColour'
                    name='palette'
                    value='2'
                    onChange={handleInput}
                    checked={dataCard.palette === 2}
                  />
                  <div className='design__colour design__colour--4'></div>
                  <div className='design__colour design__colour--5'></div>
                  <div className='design__colour design__colour--6'></div>
                </div>

                {/* <!--Option 3--> */}

                <div className='design__options--colour' id='style_003'>
                  <input
                    className='design__circle'
                    type='radio'
                    id='thirdColour'
                    name='palette'
                    value='3'
                    onChange={handleInput}
                    checked={dataCard.palette === 3}
                  />
                  <div className='design__colour design__colour--7'></div>
                  <div className='design__colour design__colour--8'></div>
                  <div className='design__colour design__colour--9'></div>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className='complete'>
            {/* <!------------SECTION LEGEND-------------------> */}

            <legend
              className='complete__legend js_complete_legend'
              id='completeLegend'
              onClick={handleLegendClick}
            >
              <span>
                <i className='complete__keyboard fa-regular fa-keyboard'></i>
              </span>
              <h2 className='complete__title'>Rellena</h2>
              <span>
                <i
                  className={`js_arrow design__up fa-solid fa-chevron-up ${arrowC}`}
                ></i>
              </span>
            </legend>

            {/* <!----------------SECTION INPUTS------------------> */}

            <div
              className={`design__container js_design_form ${collapsedClassC}`}
            >
              <div className='div__complete name js__inputs'>
                <label className='complete__label' htmlFor='name'>
                  Nombre completo
                </label>
                <input
                  className='complete__input js_name_input'
                  type='text'
                  id='name'
                  name='name'
                  value={dataCard.name}
                  placeholder='Ej: Sally Jill'
                  required
                  onChange={handleInput}
                />
                <p className='error__message'></p>
              </div>
              <div className='div__complete job js__inputs'>
                <label className='complete__label' htmlFor='job'>
                  Puesto
                </label>
                <input
                  className='complete__input js_ocupation_input'
                  type='text'
                  id='job'
                  name='job'
                  value={dataCard.job}
                  placeholder='Ej: Front-end unicorn'
                  required
                  onChange={handleInput}
                />
                <p className='error__message'></p>
              </div>
              <label className='complete__label' htmlFor='photo'>
                Imagen de perfil
              </label>

              {/* <!-- PARTE AÑADIR IMAGEN / EN FUTURO USAR LIBRERÍA--> */}

              <div className='complete__photo'>
                <label className='complete__photo__label' htmlFor='photo'>
                  Añadir imagen
                </label>
                <input
                  className='js__profile-upload-btn hidden'
                  type='file'
                  name='photo'
                  value={dataCard.photo}
                  id='photo'
                  required
                />
                {/* <!-- add_image_btn , antes tenía este id--> */}
                <div className='complete__photo__square js__profile-preview profile__preview'></div>
              </div>
              {/* <!--------------FIN AÑADIR IMAGEN------------> */}
              <div className='div__complete email js__inputs'>
                <label className='complete__label' htmlFor='email'>
                  Email
                </label>
                <input
                  className='complete__input js_input_email'
                  type='email'
                  id='email'
                  name='email'
                  value={dataCard.email}
                  placeholder='Ej: sally-hill@gmail.com'
                  required
                  onChange={handleInput}
                />
                <p className='error__message'></p>
              </div>
              <div className='div__complete phone js__inputs'>
                <label className='complete__label' htmlFor='phone'>
                  Teléfono
                </label>
                <input
                  className='complete__input js_input_phone'
                  type='tel'
                  id='phone'
                  name='phone'
                  value={dataCard.phone}
                  placeholder='Ej: 555-55-55-55'
                  required
                  onChange={handleInput}
                />
                <p className='error__message'></p>
              </div>
              <div className='div__complete linkedin js__inputs'>
                <label className='complete__label' htmlFor='linkedin'>
                  Linkedin
                </label>
                <input
                  className='complete__input js_input_linkedin'
                  type='text'
                  id='linkedin'
                  name='linkedin'
                  value={dataCard.linkedin}
                  placeholder='Ej: sally-hill'
                  required
                  onChange={handleInput}
                />
                <p className='error__message'></p>
              </div>
              <div className='div__complete github js__inputs'>
                <label className='complete__label' htmlFor='github'>
                  Github
                </label>
                <input
                  className='complete__input js_input_github'
                  type='text'
                  id='github'
                  name='github'
                  value={dataCard.github}
                  placeholder='Ej: sally-hill'
                  required
                  onChange={handleInput}
                />
                <p className='error__message'></p>
              </div>
            </div>
          </fieldset>

          <fieldset className='share'>
            <legend
              className='share__legend js_share_legend'
              id='shareLegend'
              onClick={handleLegendClick}
            >
              <i className='share__nodes fa-solid fa-share-nodes'></i>
              <h2 className='share__title'>Comparte</h2>
              <i
                className={`js_arrow design__up fa-solid fa-chevron-up ${arrowS}`}
              ></i>
            </legend>

            <div
              className={`design__container js_design_form ${collapsedClassS}`}
            >
              <button
                onClick={handleClickCreateCard}
                type='submit'
                className='share__button js_create_button js_buttonOrange'
              >
                <i className='fa-solid fa-address-card share__card'></i>Crear
                tarjeta
              </button>

              <div className='share__div--title'>
                {/* <!-- En este h3, sale la frase de creada tarjeta o error --> */}
                <h3 className='js_share__title--done share__title--done'></h3>
                {/* <!-- Aquí va la url creada --> */}
                <a target='blank' className='share__link js_url' href=''>
                  {apiData.success ? apiData.cardURL : ''}
                </a>
                <p>{apiData.success === false ? apiData.error : ''}</p>
                <button
                  type='button'
                  className='share__button--in js_shareButtonTwitter'
                >
                  <i className='fa-brands fa-twitter share__twi'></i>Compartir
                  en twitter
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </main>
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
