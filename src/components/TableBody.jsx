import { useEffect, useState} from 'react'
import TableRow from './TableRow'

export default function TableBody() {

    const [flights, setFlights] = useState(null)

    const getFlights = () => {
        fetch('http://localhost:5000/flights')
        .then(response => response.json())
        .then(flights => setFlights(Object.values(flights.data) ))
        .catch(error => console.log(error))
    }

   useEffect(()=> getFlights(), [])

  return (
    <tbody>
        {flights?.map((flight, _index )=> <TableRow key={_index} flight={flight} /> )}
    </tbody>
  )
}
