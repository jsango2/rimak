import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import usewindowsize from "../components/helper/usewindowsize";

const Rimac = dynamic(() => import("../components/rimac/videoDesk"), {
  ssr: false,
});
const RimacMobile = dynamic(() => import("../components/rimac/videoMobile"), {
  ssr: false,
});

export default function Index() {
  const size = usewindowsize();
  return <div>{size.width < 600 ? <RimacMobile /> : <Rimac />}</div>;
}
