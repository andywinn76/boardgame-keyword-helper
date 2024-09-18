import { useState, useEffect } from 'react'
import PublicGoogleSheetsParser from 'public-google-sheets-parser'

const SpreadsheetData = ({gameName}) => {
  const [items, setItems] = useState([])
  const options = { sheetName: {gameName} }

  useEffect(() => {
    const parser = new PublicGoogleSheetsParser('1wbzNWDCoTutlL0fcyua12CL2MgkwT8a3JD6Oh-HqJ-U', options)
    parser.parse().then(data => {
      setItems(data)
    })
  }, [])
  console.log(items)
  return items
  
}

export default SpreadsheetData
