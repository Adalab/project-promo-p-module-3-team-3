function Share(props) {
  const handleClick=(ev)=>{
    ev.preventDefault();
    props.handleClickCreateCard();
  };


  const handleLegend = (ev) => {
    props.handleLegendClick({
      legendID: ev.currentTarget.id,
    });
  };
  return (
    <fieldset className='share'>
      <legend
        className='share__legend js_share_legend'
        id='shareLegend'
        onClick={handleLegend}
      >
        <i className='share__nodes fa-solid fa-share-nodes'></i>
        <h2 className='share__title'>Comparte</h2>
        <i
          className={`js_arrow design__up fa-solid fa-chevron-up ${props.arrowS}`}
        ></i>
      </legend>

      <div
        className={`design__container js_design_form ${props.collapsedClassS}`}
      >
        <button
          onClick={handleClick}
          type='submit'
          className='share__button js_create_button js_buttonOrange'
        >
          <i className='fa-solid fa-address-card share__card'></i>Crear tarjeta
        </button>

        <div className='share__div--title'>
          {/* <!-- En este h3, sale la frase de creada tarjeta o error --> */}
          <h3 className='js_share__title--done share__title--done'></h3>
          {/* <!-- Aquí va la url creada --> */}
          <a target='blank' className='share__link js_url' href={props.apiData.cardURL}>

            {props.apiData.success ? props.apiData.cardURL : ''}

          </a>
          <p>{props.apiData.success === false ? props.apiData.error : ''}</p>
          <button
            type='button'
            className='share__button--in js_shareButtonTwitter'
          >
            <i className='fa-brands fa-twitter share__twi'></i>Compartir en
            twitter
          </button>
        </div>
      </div>
    </fieldset>
  );
}

export default Share;
