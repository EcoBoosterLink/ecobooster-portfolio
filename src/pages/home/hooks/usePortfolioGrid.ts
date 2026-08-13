import { useState, useEffect } from 'react'
import { mutateRow } from '../helpers/portfolioGrid'

export function usePortfolioGrid() {
  const [rows, setRows] = useState([
    [4, 4, 4], // Row 0
    [4, 4, 4], // Row 1
    [4, 4, 4]  // Row 2
  ])

  // Randomize a localized part of the layout every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRows(prevRows => {
        const newRows = [...prevRows]
        // Pick one random row to mutate so the user isn't overwhelmed
        const rowIndexToMutate = Math.floor(Math.random() * 3)
        newRows[rowIndexToMutate] = mutateRow(newRows[rowIndexToMutate])
        return newRows
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Flatten the rows into an array of 9 col-span classes
  const flatLayout = rows.flatMap(row => row.map(span => `md:col-span-${span}`))

  return { flatLayout }
}
