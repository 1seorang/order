import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function ImageApp({ source }) {
    return (

        <Image as={NextImage}
            isBlurred
            width={800}
            height={600}
            src={source}
            alt="NextUI Album Cover"
            classNames="m-5"
        />
    );
}
