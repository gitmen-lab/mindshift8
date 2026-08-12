"use client";

import { useEffect } from "react";

export default function Redirector({ url }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return null;
}
