import NavBar from "./components/navbar";

export const metadata = {
  title: "TStore",
  description: "Welcome to the TStore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
