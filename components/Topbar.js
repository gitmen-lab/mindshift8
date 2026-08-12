import Link from "next/link";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="wrap">
        <Link className="wordmark" href="/">
          Neuroplasticity Method
        </Link>
        <Link className="back-link" href="/">
          &larr; Back to home
        </Link>
      </div>
    </header>
  );
}
