import Redirector from "@/components/Redirector";

const OFFER_URL = "https://946617wdsorxizbkphxafclqrq.hop.clickbank.net/?tid=mindshift8site";

export const metadata = {
  title: "Redirecting",
  robots: { index: false, follow: false },
};

export default function Go() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${OFFER_URL}`} />
      <div className="redirect-body">
        <div className="redirect-box">
          <div className="spinner" aria-hidden="true" />
          <p>
            Redirecting you to your offer now.
            <br />
            If nothing happens, <a href={OFFER_URL}>click here</a>.
          </p>
        </div>
      </div>
      <Redirector url={OFFER_URL} />
    </>
  );
}
