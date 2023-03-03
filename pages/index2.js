import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import usewindowsize from "../components/helper/usewindowsize";

const Rimac = dynamic(() => import("../components/rimac/FullHd152"), {
  ssr: false,
});
const RimacMobile = dynamic(() => import("../components/rimac/FullHdMobile"), {
  ssr: false,
});

export default function Index() {
  const size = usewindowsize();
  return <div>{size.width > 600 ? <Rimac /> : <RimacMobile />}</div>;
}
