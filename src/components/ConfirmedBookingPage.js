import { Footer } from "./Footer";
import { Header } from "./Header";
import './ConfirmedBookingPage.css';
export function ConfirmedBookingPage() {
  return (
    <>
      <Header />
      <main className="confimration">
          <h1>Your have reserved a table successfully!</h1>
      </main>
      <Footer />
    </>
  );
}
