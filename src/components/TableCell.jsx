import TableLetter from "./TableLetter"
export default function TableCell({word}) {

return (
  <td>{Array.from(word).map((letter, index)=> <TableLetter key={index} letter={letter} index={index}/>)}</td>
  )
}
