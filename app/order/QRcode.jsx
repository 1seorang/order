

import QRCode from "react-qr-code";

export default function QRcode({ id }) {
    // console.log(document.location.href)
    return (
        <div className="w-full h-auto flex justify-center">

            <QRCode style={{border: '2px solid rgba(100,100,100,0.6)', borderRadius: '20px', padding: '4px', margin: '24px 6px'}} className="align-middle border-spacing-6 py-6 border-foreground-400 rounded-md" value={`${document.location.href}/${id}`} />

        </div>
    )
}