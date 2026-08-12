import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="disclaimer">
          These statements have not been evaluated by the FDA. This product/method is not
          intended to diagnose, treat, cure, or prevent any disease. Results may vary from
          person to person, and depend on consistency of use and other personal factors. This
          content is for informational and educational purposes only and is not a substitute
          for professional medical advice, diagnosis, or treatment. Always consult a qualified
          healthcare provider before beginning any new health or wellness routine.
        </p>
        <div className="footer-links">
          <Link href="/blog">Blog</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/medical-disclaimer">FDA / Medical Disclaimer</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <p className="footer-meta">&copy; 2026 Mind Shift 8. All rights reserved.</p>
      </div>
    </footer>
  );
}
