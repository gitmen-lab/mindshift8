import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Topbar />
      <main className="legal-main">
        <div className="legal-wrap">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="meta">Effective date: August 10, 2026</p>

          <div className="prose">
            <section>
              <p>
                This Privacy Policy explains how <strong>Mind Shift 8</strong> (&ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects information
                when you visit this website or request our free video walkthrough. By using this
                site, you agree to the practices described below.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Information we collect</h2>
              <p>We collect information in the following ways:</p>
              <ul>
                <li>
                  <strong>Information you provide.</strong> When you submit the opt-in form to
                  watch the free video, we collect your email address.
                </li>
                <li>
                  <strong>Usage data.</strong> We automatically collect information such as your
                  browser type, device type, pages viewed, and time spent on the site.
                </li>
                <li>
                  <strong>Cookies and similar technologies.</strong> We use cookies and
                  comparable tools to remember your preferences and understand how visitors use
                  the site.
                </li>
              </ul>
            </section>

            <hr className="rule" />

            <section>
              <h2>How we use your information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Deliver the free video walkthrough you requested</li>
                <li>Send related emails, updates, and occasional offers</li>
                <li>Understand how visitors use the site so we can improve it</li>
                <li>Maintain the security and proper functioning of the site</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <hr className="rule" />

            <section>
              <h2>Email communications &amp; unsubscribe</h2>
              <p>
                When you submit your email address, you consent to receive messages from us
                related to the video walkthrough and occasional related content. Every email
                includes an unsubscribe link, and you may opt out at any time. Opting out of
                marketing emails does not remove you from transactional messages necessary to
                deliver a product or service you requested.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Cookies &amp; tracking technologies</h2>
              <p>
                We and our service providers may use cookies, pixels, and similar technologies
                for analytics and advertising purposes, including measuring the performance of
                ad campaigns. You can control cookies through your browser settings, though
                disabling them may affect site functionality.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Third-party services</h2>
              <p>
                We may share limited information with trusted third-party service providers who
                help us operate this site, including email delivery platforms, analytics
                providers, and advertising platforms. These providers are only permitted to use
                your information to perform services on our behalf.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Data retention &amp; security</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes
                described in this policy, unless a longer retention period is required by law.
                We use reasonable administrative, technical, and physical safeguards to protect
                your information, though no method of transmission or storage is 100% secure.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Children&rsquo;s privacy</h2>
              <p>
                This site is not directed at individuals under the age of 18, and we do not
                knowingly collect personal information from children. If you believe a child has
                provided us with personal information, please contact us so we can remove it.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Your rights &amp; choices</h2>
              <p>
                Depending on where you live, you may have the right to access, correct, delete,
                or restrict the use of your personal information, and to opt out of certain data
                sharing. To exercise any of these rights, contact us using the details below.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be
                reflected by updating the effective date at the top of this page. Continued use
                of the site after changes are posted constitutes acceptance of the revised
                policy.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Contact us</h2>
              <p>
                Questions about this Privacy Policy can be directed to us via our{" "}
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
