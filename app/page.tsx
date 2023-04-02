"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Rive from "@rive-app/react-canvas";
//
import RiveContainer from "@/components/RiveContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Blasting Off!</h1>
      </div>
      <div>
        <RiveContainer></RiveContainer>
      </div>
    </main>
  );
}
