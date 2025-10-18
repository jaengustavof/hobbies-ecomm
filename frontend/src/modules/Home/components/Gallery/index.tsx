import styles from "./Gallery.module.scss";
import { Fragment } from "react";
import GalleryControls from "./GalleryControls";

export default function Gallery({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <div className={`${styles.gallery} container`}>
        <div className={`${styles["gallery__inner"]}`}>{children}</div>
        <GalleryControls />
      </div>
    </Fragment>
  );
}
