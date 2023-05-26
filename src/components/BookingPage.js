import { BookingForm } from "./BookingForm";
import { BookingTable } from "./BookingTable";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <BookingForm />
        <BookingTable />
      </main>
      <Footer />
    </>
  );
}
