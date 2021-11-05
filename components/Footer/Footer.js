// import Link from "next/link"
import styles from "@/components/Footer/Footer.module.css";
import NextLink from "next/link";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className="grid items-start justify-start w-full mx-auto text-left footer max-w-7xl md:grid-cols-4">
        <div className="col-span-3">
          <NextLink href="/">
            <a className="block mt-1 font-serif text-4xl hover:opacity-80">mfetchegaray</a>
          </NextLink>
          <p className="max-w-2xl mt-2 font-sans text-lg">
          Motion is a production-ready motion library for React from Framer. It brings declarative animations, effortless layout transitions and gestures while maintaining HTML and SVG semantics.
          </p>
        </div>
        <div className="flex items-end justify-end w-full">
          <div className="font-mono text-xl tracking-wider text-white uppercase border-white btn hover:bg-white hover:text-primary btn-outline">
            Connect wallet
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} mfetchegaray. All rights reserved.</p>
      </div>
    </footer>
  );
}
