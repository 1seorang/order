"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import Watermark from "@uiw/react-watermark";
export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <Watermark
        content="Aby"
        rotate={-45}
        // gapY={80}
        // gapX={10}
        fontFamily="FontSans"
        width={120}
        height={15}
        fontSize={22}
        fontColor="rgb(255 0 0 / 25%)"
      >
        <Watermark
          content="© 2023"
          rotate={-45}
          //   gapY={10}
          //   gapX={10}
          offsetTop={117}
          offsetLeft={117}
          width={120}
          height={15}
          fontSize={8}
          fontColor="rgb(255 0 0 / 25%)"
        >
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </Watermark>
      </Watermark>
    </NextUIProvider>
  );
}
