"use client";
import { title } from "@/components/primitives";

import React from "react";
import "./index.css";
import { DisplayProvider } from "./providers/DisplayProvider/index";
import { FlashDisplayProvider } from "./providers/FlashDisplayProvider/index";
import { AudioProvider } from "./providers/AudioProvider/index";

import KalQ from "./KalQ";
export default function KalkulatoPage() {
  return (
    <div className="transition ease-soft-spring duration-500 w-full grid place-content-center max-w-[600] mx-1 md:mx-3 px-2">
      <h1 className={title({ color: "foreground", className: "bg-transparent bg-clip-text shadow-md shadow-fuchsia-700/50 py-1" })}>Kalkulator</h1>


      <DisplayProvider>
        {/* <AudioProvider> */}
        <FlashDisplayProvider>
          <KalQ />
        </FlashDisplayProvider>
        {/* </AudioProvider> */}
      </DisplayProvider>

    </div>
  );
}
