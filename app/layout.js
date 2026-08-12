import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mindshift8.online"),
  title: {
    default: "Mind Shift 8, 8-Minute Neuroplasticity Method",
    template: "%s, Mind Shift 8",
  },
  description:
    "An 8-minute daily neuroplasticity method for high performers dealing with brain fog, memory lapses, and mental fatigue.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
