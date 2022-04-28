
function Design (props) {

  const handleLegend = (ev) => {
    props.handleLegendClick({
      legendID: ev.currentTarget.id
    }
    )
  }

  const handleChangeInput = (ev) => {
    props.handleInput({
      value:ev.target.value,
      name:ev.target.name,
    })
  }

  return (
    <fieldset className='design'>
    {/* <!------------SECTION LEGEND-------------------> */}

    <legend
      className='design__legend js_design_legend'
      id='designLegend'
      onClick={handleLegend}
    >
      <span>
        <i className='fa-regular fa-object-ungroup design__square'></i>
      </span>
      <h2 className='design__title'>Diseña</h2>
      <span>
        <i
          className={`js_arrow design__up fa-solid fa-chevron-up ${props.arrowD}`}
        ></i>
      </span>
    </legend>

    {/* <!------------SECTION COLOURS--------> */}

    <div
      className={`design__container js_design_form ${props.collapsedClassD}`}
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
            onChange={handleChangeInput}
            checked={props.dataCard.palette === 1}
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
            onChange={handleChangeInput}
            checked={props.dataCard.palette === 2}
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
            onChange={handleChangeInput}
            checked={props.dataCard.palette === 3}
          />
          <div className='design__colour design__colour--7'></div>
          <div className='design__colour design__colour--8'></div>
          <div className='design__colour design__colour--9'></div>
        </div>
      </div>
    </div>
  </fieldset>
  )
}
export default Design;