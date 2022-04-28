import CardPreview from './CardPreview';
import Complete from './Complete';
import Design from './Design';
import Share from './Share';
import { useState } from 'react';

function Card(props) {

  const [collapsedClassD, setCollapsedClassD] = useState('');
  const [collapsedClassC, setCollapsedClassC] = useState('collapsed');
  const [collapsedClassS, setCollapsedClassS] = useState('collapsed');

  const [arrowD, setArrowD] = useState('');
  const [arrowC, setArrowC] = useState('toggle_arrow');
  const [arrowS, setArrowS] = useState('toggle_arrow');

    // colapsar las secciones
    const handleLegendClick = (data) => {
      const legendID = data.legendID;
  
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
    <main className='main-create'>
      <CardPreview />

      <form className='wrapper js__form' action='' method='post'>
        <Design 
        dataCard={props.dataCard} 
        handleInput={props.handleInput}
        
        handleLegendClick={handleLegendClick}
        collapsedClassD={collapsedClassD}
        arrowD={arrowD}
        />
        <Complete 
        dataCard={props.dataCard} 
        handleInput={props.handleInput} />
        <Share 
         dataCard={props.datacard} 
         handleClickCreateCard={props.handleClickCreateCard}/>
      </form>
    </main>
  );
}

export default Card;
