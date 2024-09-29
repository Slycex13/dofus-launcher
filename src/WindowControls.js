import React, { useEffect, useState } from "react";
import styles from "./WindowControls.module.css";

const WindowControls = () => {

    const minimizeWindow = () => {
        window.electron.window.minimize();
    }
    
  const closeWindow = () => {
    window.electron.window.close();
  };

  return (
    <div className={styles.windowControls}>
      <h1 className={styles.title}>Naeris launcher</h1>

      <div>
      <button className={styles.btnMinimize} onClick={minimizeWindow}>
        _
      </button><button className={styles.btnClose} onClick={closeWindow}>
        X
      </button>
      </div>
    </div>
  );
};

export default WindowControls;
