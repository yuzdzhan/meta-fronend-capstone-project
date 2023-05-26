import { useReservatinons } from "../state/ContextReservationsProvider";
import './BookginTable.css';

export function BookingTable() {
  const [reservations] = useReservatinons();

  if (reservations.length === 0) return null;
  console.log(reservations);

  return (
    <>
      <table className="bookingTable">
        <thead>
          <tr>
            <th>Occasion</th>
            <th>Number of guests</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.occasion}</td>
              <td>{reservation.guests}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
