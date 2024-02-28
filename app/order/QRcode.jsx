

import QRCode from "react-qr-code";

export default function QRcode({ id }) {
    // console.log(document.location.href)
    return (
        <div className="w-full h-auto flex justify-center">

            <QRCode className="align-middle border-spacing-6 p-2 border-foreground-400 rounded-md" value={`${document.location.href}/${id}`} />

        </div>
    )
}