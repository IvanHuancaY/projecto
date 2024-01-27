import Image from "next/image";
import styles from "./page.module.css";
import Portafolio from "./componentes/portafolio";

export default function Home() {
  return (
    <div className={styles.main}>
    <Portafolio />
  </div>
  );
}
