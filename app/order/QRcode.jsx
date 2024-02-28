
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
      };
    
    return (
      <div className="w-full h-auto grid  place-content-center gap-1 ">
        <QRCode
          id="QRCode"
          style={{
            border: "2px solid rgba(100,100,100,0.6)",
            borderRadius: "20px",
            padding: "4px",
            margin: "4px",
          }}
          className="w-fit border-spacing-6 pt-6 border-foreground-400 rounded-md"
          value={`${document.location.href}/${id}`}
        />
        <Button
          variant="shadow"
          radius="sm"
          size="sm"
          color="secondary"
          startContent={<HiMiniInboxArrowDown />}
          onClick={() => onImageCownload()}
        >
          Download
        </Button>
      </div>
    );
}