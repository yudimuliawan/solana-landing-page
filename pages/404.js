import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

export default function NotFoundPage() {
  return (
    <div className="mx-auto w-11/12">
      <Head>
        <title>Halaman tidak tersedia</title>
        <meta
          name="description"
          content="Untung Terus adalah Perusahaan Solusi Pembayaran Terbaik di Indonesia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="h-full mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-20">
          <span>
            <ExclamationCircleIcon />
          </span>{" "}
          404 - Apakah anda tersesat?
        </h1>
        <Link href="/" passHref>
          <a className="bg-yellow-400 rounded-lg shadow-lg text-gray-700 py-2 px-4">
            SEGERA KEMBALI
          </a>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
