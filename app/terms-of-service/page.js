import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsOfService() {
  return (
    <>
      <Topbar />
      <main className="legal-main">
        <div className="legal-wrap">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p className="meta">Effective date: August 10, 2026</p>

          <div className="prose">
            <section>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
                this website and the free video walkthrough offered by{" "}
                <strong>Mind Shift 8</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;). By accessing this site or submitting your email to watch the
                video, you agree to these Terms. If you do not agree, please do not use this
                site.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Description of service</h2>
              <p>
                This site provides a free educational video walkthrough describing an 8-minute
                daily neuroplasticity routine, along with related informational content. The
                content is provided for general educational and informational purposes only.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Eligibility</h2>
              <p>
                You must be at least 18 years old to submit your information or use this site.
                By using the site, you represent that you meet this requirement.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Not medical advice</h2>
              <p>
                Nothing on this site constitutes medical advice, diagnosis, or treatment. The
                content is not intended to replace consultation with a qualified healthcare
                provider. Always speak with a physician before beginning any new health or
                wellness routine, particularly if you have an existing medical condition. See our{" "}
                <a href="/medical-disclaimer">FDA / Medical Disclaimer</a> for further detail.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Intellectual property</h2>
              <p>
                All content on this site, including text, graphics, video, and design, is owned
                by or licensed to us and is protected by applicable intellectual property laws.
                You may not reproduce, distribute, or create derivative works from this content
                without our prior written permission.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Acceptable use</h2>
              <p>
                You agree not to misuse this site, including by attempting unauthorized access
                to our systems, submitting false information, or using automated tools to scrape
                or interfere with site functionality.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Email opt-in</h2>
              <p>
                Submitting your email address to watch the free video means you consent to
                receive related emails from us, as described in our{" "}
                <a href="/privacy-policy">Privacy Policy</a>. You may unsubscribe at any time.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Third-party links</h2>
              <p>
                This site may contain links to third-party websites. We do not control and are
                not responsible for the content, policies, or practices of those sites.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Disclaimer of warranties</h2>
              <p>
                This site and its content are provided &ldquo;as is&rdquo; without warranties of
                any kind, express or implied. We do not guarantee that the site will be
                error-free, uninterrupted, or that results described will apply to any specific
                individual.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, we are not liable for any indirect,
                incidental, or consequential damages arising from your use of this site or
                reliance on its content.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Changes to these terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the site after
                changes are posted constitutes acceptance of the revised Terms.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Contact us</h2>
              <p>
                Questions about these Terms can be directed to us via our{" "}
                <a href="/contact-us">Contact page</a> or by emailing{" "}
                <a href="mailto:support@mindshift8.online">support@mindshift8.online</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
