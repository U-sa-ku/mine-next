import { Barlow } from "next/font/google";
import styles from "@/app/components/elements/SectionTitle/SectionTitle.module.scss";

const barlow = Barlow({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

const SectionTitle = ({ title }) => {
  return (
    <h2 className={`${barlow.className} ${styles.wrapper}`}>{ title }</h2>
  );
};

export default SectionTitle;
