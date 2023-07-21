import NavBar from "./components/navbar";
import styles from "./layout.module.css";
export const metadata = {
  title: "TStore",
  description: "Welcome to the TStore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          // height: "98vh",
          width: "98vw",
        }}
      >
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
