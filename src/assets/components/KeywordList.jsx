import KeywordItem from "./KeywordItem"
// import SpreadsheetData from "./SpreadSheetData";
import React, { useState, useEffect } from 'react'
import PublicGoogleSheetsParser from 'public-google-sheets-parser'

function KeywordList({gameName}) {

  const [items, setItems] = useState([])
  

  useEffect(() => {
    const options = { sheetName: `${gameName}` }
    const parser = new PublicGoogleSheetsParser('1wbzNWDCoTutlL0fcyua12CL2MgkwT8a3JD6Oh-HqJ-U', options)
    parser.parse().then(data => {
      setItems(data)
      // return items;
    })
  }, [gameName])

  return (
    <>
    <ul className='keyword-list'>
      {items.map(function(keyword) {
        const newKey = self.crypto.randomUUID(); 
        return (        
          <KeywordItem key={newKey} type={keyword.type} data={keyword.data} title={keyword.title} />
        )
      }
      )}
        
    </ul>
    
    </>
  )
}

export default KeywordList
