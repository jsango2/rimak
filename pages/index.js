import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import usewindowsize from "../components/helper/usewindowsize";

const Rimac = dynamic(() => import("../components/rimac/maxCompDesk"), {
  ssr: false,
});
const RimacMobile = dynamic(() => import("../components/rimac/maxCompMobile"), {
  ssr: false,
});

export default function Index() {
  const size = usewindowsize();
  return (
    <div>
      <Rimac />{" "}
    </div>
  );
}
