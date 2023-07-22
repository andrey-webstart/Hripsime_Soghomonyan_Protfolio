import React, { useState } from "react";
import KondPhotos from "./KondPhotos.json";
import styles from "./KondPhotosslide.css"

export default function Kondphotosslide() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  let currentPhoto = KondPhotos[currentPhotoIndex];
  return (
    <div className={styles.h1}>
      <button className={styles.button}>Kond Photostorys</button>
      <div className={styles.nkar1}>
        <div className={styles.dflex}>
          <button
            onClick={() => setCurrentPhotoIndex(currentPhotoIndex - 1 - 1)}
          >
            &lt;
          </button>
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className={styles.nkar}
          />
          <button onClick={() => setCurrentPhotoIndex(currentPhotoIndex + 1)}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
