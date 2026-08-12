import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
};

export default function ContactUs() {
  return (
    <>
      <Topbar />
      <main className="legal-main">
        <div className="legal-wrap">
          <p className="eyebrow">Get in touch</p>
          <h1>Contact Us</h1>
          <p className="sub">
            Questions about the video, your email preferences, or anything else? Reach out below
            and we&rsquo;ll get back to you as soon as we can.
          </p>

          <div className="contact-grid">
            <div className="info-list">
              <div className="info-item">
                <h3>Support email</h3>
                <p>
                  <a href="mailto:support@mindshift8.online">support@mindshift8.online</a>
                </p>
              </div>
              <div className="info-item">
                <h3>Response time</h3>
                <p>We typically reply within 1 to 2 business days.</p>
              </div>
              <div className="info-item">
                <h3>Mailing address</h3>
                <p>
                  Mind Shift 8
                  <br />
                  10801 SW 171st St
                  <br />
                  Miami, FL 33157
                </p>
              </div>
              <div className="info-item">
                <h3>Related pages</h3>
                <p>
                  <a href="/privacy-policy">Privacy Policy</a> &middot;{" "}
                  <a href="/terms-of-service">Terms of Service</a> &middot;{" "}
                  <a href="/medical-disclaimer">FDA / Medical Disclaimer</a>
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
