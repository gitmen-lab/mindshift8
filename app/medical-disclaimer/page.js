import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FDA & Medical Disclaimer",
};

export default function MedicalDisclaimer() {
  return (
    <>
      <Topbar />
      <main className="legal-main">
        <div className="legal-wrap">
          <p className="eyebrow">Legal</p>
          <h1>FDA &amp; Medical Disclaimer</h1>
          <p className="meta">Effective date: August 10, 2026</p>

          <div className="callout">
            These statements have not been evaluated by the FDA. This product/method is not
            intended to diagnose, treat, cure, or prevent any disease. Results may vary from
            person to person.
          </div>

          <div className="prose">
            <section>
              <p>
                This page provides important information about the educational content offered
                by <strong>Mind Shift 8</strong>, including our free 8-minute neuroplasticity
                video walkthrough. Please read this disclaimer carefully before using our
                content.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Not evaluated by the FDA</h2>
              <p>
                The statements made on this website and in our video content have not been
                evaluated by the U.S. Food and Drug Administration (FDA). Our routine, method,
                and any related materials are not products or drugs regulated by the FDA, and
                are not intended to diagnose, treat, cure, or prevent any disease or medical
                condition.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Educational purpose only</h2>
              <p>
                All content, including the free video walkthrough, is provided for general
                educational and informational purposes only. It is not, and should not be
                treated as, a substitute for professional medical advice, diagnosis, or
                treatment from a licensed physician or qualified healthcare provider.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Consult a healthcare provider</h2>
              <p>
                Always speak with a qualified healthcare provider before beginning any new
                health, wellness, or cognitive routine, especially if you:
              </p>
              <ul>
                <li>Are pregnant or nursing</li>
                <li>Have a diagnosed medical, neurological, or psychiatric condition</li>
                <li>Are currently taking prescription medication</li>
                <li>Are under the age of 18</li>
                <li>Have a history of seizures or other neurological sensitivity</li>
              </ul>
              <p>
                Never disregard professional medical advice or delay seeking it because of
                something you encountered on this site.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Individual results vary</h2>
              <p>
                Any results, timelines, or outcomes described, including references to
                noticeable changes within 7 to 14 days, reflect general expectations shaped by
                informal user feedback and are not guarantees. Individual results depend on
                consistency of use, personal circumstances, and other factors outside our
                control.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Discontinue use if needed</h2>
              <p>
                If you experience any discomfort, adverse reaction, or symptoms of concern while
                following this routine, discontinue use immediately and consult a healthcare
                provider.
              </p>
            </section>

            <hr className="rule" />

            <section>
              <h2>Questions</h2>
              <p>
                If you have questions about this disclaimer, please visit our{" "}
                <a href="/contact-us">Contact page</a> or email{" "}
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
