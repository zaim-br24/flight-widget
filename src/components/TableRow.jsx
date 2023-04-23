
import TableCell from "./TableCell"
export default function TableRow({flight}) {
const words = Object.values(flight)
  return (
       <tr>
            <th>✈︎</th>
            {words?.map((word, index)=> <TableCell key={index} word={word} index={index} /> )}
          
        </tr>
  
  )
} 
