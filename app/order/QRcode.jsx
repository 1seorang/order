
import {Button} from "@nextui-org/react";
import QRCode from "react-qr-code";
import { HiMiniInboxArrowDown } from "react-icons/hi2"
import Link from "next/link";

export default function QRcode({ id }) {
   const onImageCownload = () => {
        const svg = document.getElementById("QRCode");
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = `DocX${id}`;
            downloadLink.href = `${pngFile}`;
            downloadLink.click();
        };
        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
        console.log(img.height)
        console.log(canvas)
        console.log(img.width)
        console.log(canvas.width)
      };
    
    return (
      <div className="w-full h-auto grid  place-content-center gap-1 mx-auto ">
        <QRCode
          id="QRCode"
          size={256}
          style={{
            // border: "1px solid ",
            borderRadius: "10px",
            // padding: "4px",
            // margin: "1px 14px",
            maxWidth: "100%", 
            height:"auto"
          }} viewBox="0 0 256 256" title={id}
          className="border-slate-400/90 border-2 p-2 rounded-xl border-spacing-6"
          value={`${document.location.href}/${id}`}
        />
        <Button
          variant="shadow"
          radius="sm"
          size="sm"
          color="secondary" className="text-base font-semibold shadow-lg border-t-rose-700"
          startContent={<HiMiniInboxArrowDown />}
          onClick={() => onImageCownload()}>
          Download
        </Button>
      </div>
    );
}