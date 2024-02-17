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
    <div className="w-full">
      <h1 className={title()}>Kalkulator</h1>
      <div className="w-full  flex flex-col-reverse justify-center">

        <DisplayProvider>
          {/* <AudioProvider> */}
          <FlashDisplayProvider>
            <KalQ />
          </FlashDisplayProvider>
          {/* </AudioProvider> */}
        </DisplayProvider>
      </div>
    </div>
  );
}