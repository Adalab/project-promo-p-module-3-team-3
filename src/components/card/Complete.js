import GetAvatar from "./ImageComponent/GetAvatar";

function Complete(props) {
  const handleLegend = (ev) => {
    props.handleLegendClick({
      legendID: ev.currentTarget.id,
    });
  };

  const handleChangeInput = (ev) => {
    props.handleInput({
      value: ev.target.value,
      name: ev.target.name,
    });
  };

  return (
    <fieldset className='complete'>
      {/* <!------------SECTION LEGEND-------------------> */}

      <legend
        className='complete__legend js_complete_legend'
        id='completeLegend'
        onClick={handleLegend}
      >
        <span>
          <i className='complete__keyboard fa-regular fa-keyboard'></i>
        </span>
        <h2 className='complete__title'>Rellena</h2>
        <span>
          <i
            className={`js_arrow design__up fa-solid fa-chevron-up ${props.arrowC}`}
          ></i>
        </span>
      </legend>

      {/* <!----------------SECTION INPUTS------------------> */}

      <div
        className={`design__container js_design_form ${props.collapsedClassC}`}
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
            value={props.dataCard.name}
            placeholder='Ej: Sally Jill'
            required
            onChange={handleChangeInput}
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
            value={props.dataCard.job}
            placeholder='Ej: Front-end unicorn'
            required
            onChange={handleChangeInput}
          />
          <p className='error__message'></p>
        </div>
        <label className='complete__label' htmlFor='photo'>
          Imagen de perfil
        </label>

        {/* <!-- PARTE AÑADIR IMAGEN / EN FUTURO USAR LIBRERÍA--> */}

        <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />

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
            value={props.dataCard.email}
            placeholder='Ej: sally-hill@gmail.com'
            required
            onChange={handleChangeInput}
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
            value={props.dataCard.phone}
            placeholder='Ej: 555-55-55-55'
            required
            onChange={handleChangeInput}
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
            value={props.dataCard.linkedin}
            placeholder='Ej: sally-hill'
            required
            onChange={handleChangeInput}
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
            value={props.dataCard.github}
            placeholder='Ej: sally-hill'
            required
            onChange={handleChangeInput}
          />
          <p className='error__message'></p>
        </div>
      </div>
    </fieldset>
  );
}

export default Complete;
