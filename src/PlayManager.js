import React from "react"
import styles from "./PlayManager.module.css"

const PlayManager = () => {
     return(
        <div className={styles.PlayManager}>
            <button className={styles.btnPlay}>PLAY</button>
        </div>
     )
}

export default PlayManager;