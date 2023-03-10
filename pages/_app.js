import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/styles.css";

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined" && !localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, [setTheme]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}
