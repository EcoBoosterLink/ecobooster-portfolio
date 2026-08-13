export function mutateRow(row: number[]) {
  const newRow = [...row]
  // Pick a random adjacent pair in this row (0 or 1 since row length is 3)
  const i = Math.floor(Math.random() * 2)
  const sum = newRow[i] + newRow[i + 1]

  // Valid bounds: min width 3, max width 9
  const minA = Math.max(3, sum - 9)
  const maxA = Math.min(9, sum - 3)

  // If no valid mutation possible, just return
  if (minA > maxA) return newRow

  // Pick a new A that is DIFFERENT from the current A
  const possibleA = []
  for (let a = minA; a <= maxA; a++) {
    if (a !== newRow[i]) possibleA.push(a)
  }

  if (possibleA.length === 0) return newRow

  const pickedA = possibleA[Math.floor(Math.random() * possibleA.length)]
  newRow[i] = pickedA
  newRow[i + 1] = sum - pickedA

  return newRow
}
