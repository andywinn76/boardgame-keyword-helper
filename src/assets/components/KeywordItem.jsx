import { useState } from 'react'

function KeywordItem({title, newKey, data, type}) {
  const [isSelected, setIsSelected] = useState(false);
  function handleSetSelected() {
    setIsSelected(!isSelected);
    console.log("Clicked");
  };

  return (
    <li key={newKey} onClick={() => handleSetSelected()}>
      <h2 className='keyword-title'>{title}</h2>
      <h3 className="subheading">{type}</h3>
      <div className={`keyword-text ${isSelected === true ? '' : 'keyword-text-hidden'}`} >
        {console.log(data)}
        <div dangerouslySetInnerHTML={{ __html: data }} />         
      </div>
    </li>
  )
};

export default KeywordItem
