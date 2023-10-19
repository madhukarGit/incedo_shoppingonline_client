import React from "react";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>You can shop here, best place to encrich your wardrobe</h1>
      </section>
    </main>
  );
}
