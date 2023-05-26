import { BookingForm } from "./BookingForm";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
