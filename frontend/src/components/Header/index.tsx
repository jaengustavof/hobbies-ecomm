import styles from "./Header.module.scss";

import NavigationDesktop from "./components/NavigationDesktop";
import NavigationMobile from "./components/NavigationMobile";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={`container ${styles["header__container"]}`}>
        <Image
          className={`${styles["header__logo"]}`}
          src={logo}
          alt="My time logo"
          width={50}
          height={50}
        />
        <NavigationDesktop className={styles["header__nav--desktop"]} />
        <NavigationMobile className={styles["header__nav--mobile"]} />
      </div>
    </header>
  );
}
