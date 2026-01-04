export const metadata = {
  title: "Petscream",
  description: "Extra. On purpose. Not essential. Intentional.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
