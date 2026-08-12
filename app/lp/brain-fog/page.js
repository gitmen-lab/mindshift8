import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How to Get Rid of Brain Fog | Free 8-Minute Method",
  description:
    "A neuroscience-informed 8-minute daily routine designed to help clear brain fog and support sharper memory, focus, and mental clarity. Watch the free video.",
  robots: { index: false, follow: true },
};

const CTA_LABEL = "Watch The Free Brain Fog Relief Video Now";

export default function BrainFogLandingPage() {
  return (
    <div className="page">
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">How To Get Rid Of Brain Fog &middot; 50,000+ Users</p>
            <h1>
              How to get rid of brain fog in just <em>8 minutes</em> a day
            </h1>
            <p className="hero-sub">
              A neuroscience-informed daily routine designed to help clear brain fog and support
              sharper memory, steadier focus, and clearer thinking, without drugs or supplements.
            </p>
            <div className="cta-row">
              <Link className="btn" href="/go">
                {CTA_LABEL}
              </Link>
            </div>
            <p style={{ marginTop: 12, fontSize: ".78rem", color: "var(--hero-ink-soft)" }}>
              Mind Shift 8 is an independent publisher. We may earn a commission from the product
              featured in this video, at no extra cost to you.
            </p>
            <a className="learn-more" href="#pain">
              &gt;&gt; See how the method works
            </a>
            <div className="hero-copy">
              <p>
                If brain fog has been slowing you down, you&rsquo;re not alone. This method is
                designed to help support memory, focus, and mental clarity through
                neuroplasticity, your brain&rsquo;s natural ability to build new pathways.
              </p>
              <p>No expensive treatments. No time consuming programs. Just 8 focused minutes a day.</p>
            </div>
          </div>
          <div>
            <Link
              className="video-card"
              href="/go"
              aria-label="Watch the free brain fog relief video"
            >
              <img
                src="/images/neuro-energizer-yt.png"
                alt="How to get rid of brain fog"
              />
              <div className="video-caption">
                <span>Free walkthrough</span>
                <strong>08:00</strong>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <section className="stats">
        <div className="wrap stats-grid">
          <div className="stat">
            <div className="stat-num">50,000+</div>
            <div className="stat-label">High performers trust this method</div>
          </div>
          <div className="stat">
            <div className="stat-num">8 min</div>
            <div className="stat-label">Daily routine, that&rsquo;s it</div>
          </div>
          <div className="stat">
            <div className="stat-num">100%</div>
            <div className="stat-label">Drug free &amp; non invasive</div>
          </div>
          <div className="stat">
            <div className="stat-num">Backed</div>
            <div className="stat-label">By neuroscience research</div>
          </div>
        </div>
      </section>

      <main>
        <section className="pas" id="pain">
          <div className="wrap">
            <p className="eyebrow">The problem</p>
            <h2>Struggling with persistent brain fog &amp; daily burnout? It&rsquo;s not a lack of willpower.</h2>

            <div className="letter">
              <p className="salutation">Dear High Performer,</p>
              <div>
                <ul className="pain-list">
                  <li>
                    <span className="pain-mark">01</span>
                    <span>Do you find yourself rereading the same email three times before it makes sense?</span>
                  </li>
                  <li>
                    <span className="pain-mark">02</span>
                    <span>Are you relying on a third cup of coffee just to feel &ldquo;normal&rdquo; by 2pm?</span>
                  </li>
                  <li>
                    <span className="pain-mark">03</span>
                    <span>Have you noticed your memory slipping during meetings that used to be easy?</span>
                  </li>
                </ul>

                <div className="agitate">
                  <p>
                    <strong>You&rsquo;re not broken. You&rsquo;re not lazy.</strong> Your brain is simply overworked.
                  </p>
                  <p>Maybe you&rsquo;ve tried powering through with more caffeine. It works for an hour, then the crash hits harder.</p>
                  <p>Maybe you&rsquo;ve spent hundreds on biohacking supplements. The bottles pile up, but the fog doesn&rsquo;t lift.</p>
                  <p>Maybe you&rsquo;ve tried grueling discipline hacks like 4am wake ups. They drain you before the workday even starts.</p>
                  <p>The real cost isn&rsquo;t just missed deadlines. It&rsquo;s the quiet fear that your sharpest years are behind you.</p>
                </div>

                <div className="compare">
                  <div className="compare-col no">
                    <h3>You do not need</h3>
                    <ul>
                      <li>
                        <svg className="icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 5l14 14M19 5L5 19" />
                        </svg>
                        <span>More stimulants that spike and crash your energy</span>
                      </li>
                      <li>
                        <svg className="icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 5l14 14M19 5L5 19" />
                        </svg>
                        <span>Expensive supplements with no real mechanism behind them</span>
                      </li>
                      <li>
                        <svg className="icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 5l14 14M19 5L5 19" />
                        </svg>
                        <span>To overhaul your entire lifestyle overnight</span>
                      </li>
                    </ul>
                  </div>
                  <div className="compare-col yes">
                    <h3>You do need</h3>
                    <ul>
                      <li>
                        <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 12l5 5L20 6" />
                        </svg>
                        <span>A focused, 8 minute daily routine designed to help clear brain fog naturally</span>
                      </li>
                      <li>
                        <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 12l5 5L20 6" />
                        </svg>
                        <span>An approach shaped by neuroscience research, not guesswork</span>
                      </li>
                      <li>
                        <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 12l5 5L20 6" />
                        </svg>
                        <span>A method that targets the root of mental fatigue instead of masking it</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="benefits">
                  <div className="benefit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <circle cx="12" cy="12" r="8" />
                      <circle cx="12" cy="12" r="3.2" />
                    </svg>
                    <h4>Focus</h4>
                    <p>Designed to help hold steady through long, demanding days.</p>
                  </div>
                  <div className="benefit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 4a5 5 0 0 0-5 5c0 2 1 3 1 5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3c0-2 1-3 1-5a5 5 0 0 0-5-5z" />
                      <path d="M10 20h4" />
                    </svg>
                    <h4>Memory</h4>
                    <p>Supports recall that feels sharp and reliable again.</p>
                  </div>
                  <div className="benefit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
                    </svg>
                    <h4>Clean energy</h4>
                    <p>No jittery crash, unlike caffeine or stimulants.</p>
                  </div>
                </div>

                <div className="section-cta">
                  <Link className="btn" href="/go">
                    {CTA_LABEL}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="rule" />

        <section className="uvp">
          <div className="wrap">
            <p className="eyebrow">The method</p>
            <h2>Why high performers choose this method over everything else</h2>
            <p className="uvp-sub">Six reasons this approach holds up where caffeine, supplements, and willpower fall short.</p>

            <div className="uvp-grid">
              <div className="uvp-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
                <h3>Commit just 8 minutes daily for effortless consistency</h3>
                <p>No hour long routines or complicated schedules. Just 8 focused minutes, designed to fit even the busiest calendar.</p>
              </div>
              <div className="uvp-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 12c3 0 3-6 6-6s3 12 6 12 3-6 6-6" />
                </svg>
                <h3>Trigger neuroplasticity re-wiring for lasting mental sharpness</h3>
                <p>Designed to help support cortical pathway re-mapping, the natural process your brain uses to learn and adapt.</p>
              </div>
              <div className="uvp-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="7" y="3" width="10" height="6" rx="1" />
                  <path d="M9 9v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9" />
                  <path d="M5 21l14-18" />
                </svg>
                <h3>Skip the pills with a non-invasive, drug-free approach</h3>
                <p>No prescriptions and nothing to swallow. Just a simple, natural technique you do on your own.</p>
              </div>
              <div className="uvp-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="16" rx="1" />
                  <path d="M3 10h18M8 3v4M16 3v4" />
                  <path d="M8 15l2.5 2.5L16 12" />
                </svg>
                <h3>Many notice a difference within 7 to 14 days</h3>
                <p>Many users report noticing initial changes within the first two weeks of consistent practice.</p>
              </div>
              <div className="uvp-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3l8 4-8 4-8-4 8-4z" />
                  <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
                </svg>
                <h3>Trust a method backed by neuroscience experts</h3>
                <p>Built on principles supported by neuroscience research and reviewed by experts in the field.</p>
              </div>
              <div className="uvp-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="8" cy="9" r="3" />
                  <circle cx="17" cy="10" r="2.4" />
                  <path d="M2.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
                  <path d="M14.5 20c0-2.3 1.7-4 4-4s4 1.7 4 4" />
                </svg>
                <h3>Join 50,000+ verified users already seeing results</h3>
                <p>You&rsquo;re not testing something unproven. Tens of thousands of high performers already use this daily.</p>
              </div>
            </div>

            <div className="section-cta">
              <Link className="btn" href="/go">
                {CTA_LABEL}
              </Link>
            </div>
          </div>
        </section>

        <hr className="rule" />

        <section className="how">
          <div className="wrap">
            <p className="eyebrow">The process</p>
            <h2>How to get rid of brain fog in 3 steps</h2>
            <div className="steps">
              <div className="step" data-step="01">
                <div className="step-rule">
                  <h3>Stream the 8-minute daily routine</h3>
                  <p>Watch a simple, guided video walkthrough. No equipment and no experience needed.</p>
                </div>
              </div>
              <div className="step" data-step="02">
                <div className="step-rule">
                  <h3>Trigger cortical pathway re-mapping</h3>
                  <p>The routine is designed to help stimulate your brain&rsquo;s natural neuroplasticity process.</p>
                </div>
              </div>
              <div className="step" data-step="03">
                <div className="step-rule">
                  <h3>Experience peak daily cognitive performance</h3>
                  <p>Many users report sharper memory, calmer focus, and steady energy, without the crash.</p>
                </div>
              </div>
            </div>

            <div className="section-cta">
              <Link className="btn" href="/go">
                {CTA_LABEL}
              </Link>
            </div>
          </div>
        </section>

        <hr className="rule" />

        <section className="faq">
          <div className="wrap">
            <p className="eyebrow">Questions</p>
            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              <details open>
                <summary>
                  Is this safe and drug-free?<span className="sym">+</span>
                </summary>
                <p>Yes. This method is 100% non-invasive and does not involve any drugs, pills, or supplements. It&rsquo;s designed as a simple, natural daily routine anyone can follow.</p>
              </details>
              <details>
                <summary>
                  How is this different from brain training games or supplements?<span className="sym">+</span>
                </summary>
                <p>Unlike games that test your brain or supplements that mask fatigue, this method is designed to help target the underlying neural pathways directly through a guided daily practice.</p>
              </details>
              <details>
                <summary>
                  How long before I notice my brain fog lifting?<span className="sym">+</span>
                </summary>
                <p>Timelines vary by individual. Many users report noticing initial changes within 7 to 14 days of consistent daily practice.</p>
              </details>
              <details>
                <summary>
                  What if I don&rsquo;t have a lot of free time?<span className="sym">+</span>
                </summary>
                <p>The entire routine takes just 8 minutes a day. It&rsquo;s designed for people with demanding schedules who still want to prioritize their cognitive health.</p>
              </details>
              <details>
                <summary>
                  Is there any financial commitment to watch the video?<span className="sym">+</span>
                </summary>
                <p>No. The video walkthrough is completely free to watch, with no obligation.</p>
              </details>
            </div>

            <div className="section-cta">
              <Link className="btn" href="/go">
                {CTA_LABEL}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <section className="final-cta">
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Start today
          </p>
          <h2>Clear the fog. Your sharpest thinking is still ahead of you.</h2>
          <div className="cta-row">
            <Link className="btn" href="/go">
              {CTA_LABEL}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
