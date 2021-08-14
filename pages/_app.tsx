import "../styles/globals.scss";
import type { AppProps } from "next/app";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <strong>Where in the world?</strong>
          </li>
          <li>
            <div>
              <FontAwesomeIcon icon={faMoon} />
              <p>Dark mode </p>
            </div>
          </li>
        </ul>
      </nav>

      <Component {...pageProps} />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
export default App;
