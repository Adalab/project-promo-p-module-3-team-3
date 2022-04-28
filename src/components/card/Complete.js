
function Complete () {
  return (
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
  )
}

export default Complete;