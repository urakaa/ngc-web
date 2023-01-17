/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function LogoCommon() {
  return (
    <Link href="/">
      <img
        src="/images/logo.png"
        className="w-[155] h-[102px] mb-2"
        alt="visit-bulgan"
      />
    </Link>
  );
}
