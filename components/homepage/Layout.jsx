import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import ServicePageNavBar from "../services-page/service-page-navbar";

export default function Layout({ children }) {
  const router = useRouter();
  console.log(router.asPath)
  return (
    <div>
      {!router.asPath.includes("services") ? (
        <div>
          {/* <Navbar /> */}
          {children}
        </div>
      ) : (
        <div>
          <ServicePageNavBar/>
          {children}
        </div>
      )}
    </div>
  );
}
