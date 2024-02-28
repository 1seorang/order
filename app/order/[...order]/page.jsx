'use client'
import React, { useEffect, useState } from "react";
import { title } from "@/components/primitives";
// import { usePathname, useParams } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Input } from "@nextui-org/react";
import { FaBookBookmark } from "react-icons/fa6";
import { Metadata, ResolvingMetadata } from 'next'
export const viewport = {
    themeColor: 'black',
}


export default function PageQR({ params }) {
    // console.log(params)
    // const path = usePathname()
    const noPR = params.order[0]
    // const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (loading) {
            // Fetch data from your API
            fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1ZJKK2v-8r8FJtMx9hTiYI8YJrjqW0C6KR4gF964UaTs/values/PACK!A3:Z6000?alt=json&key=AIzaSyBgoFd8Gi1YDUSc6llH9TxMDSpkr7jcavU"
            )
                .then((response) => response.json())
                .then((data) => {
                    // setData(data.values)

                    const filter = data.values.filter((item) =>
                        Object.values(item).some((value) =>
                            value.includes(noPR)
                        ))
                    setFilteredData(filter)

                    setLoading(false);
                });
        }
    }, [loading]);
    // console.log(filteredData[0])
    return (
        <div className="h-full">

            <Card className="w-full max-w-xl bg-transparent backdrop-blur-lg sticky top-16  z-20">
                <CardHeader className="flex gap-3">

                    <div className="flex flex-col ">
                        <div className="align-middle flex justify-center">
                            <FaBookBookmark height={'100%'} className="inline-flex h-full items-center m-1 text-violet-300" /><h3 className={title({ color: 'pink', class: 'inline-flex w-fit' })}>  {noPR}</h3>
                        </div>
                        <p className="text-md"></p>

                    </div>
                </CardHeader>
                <Divider />
                <CardBody className="" key={1}>

                    {filteredData?.map((item, key) => {
                        return (
                            <div key={key} className=" grid gap-1 in-range:cursor-pointer read-only:pl-2">
                                <Input className="-inset-px" type="text" color="default" variant="flat" label='Dept' isReadOnly value={item[18]} />
                                <Input type="text" color="default" variant="flat" label='Date' isReadOnly value={item[5]} />
                                <Input type="text" color="default" variant="flat" label='Mat. Code' isReadOnly value={item[3]} />
                                <Input type="text" color="default" variant="flat" label='Mat. Name' isReadOnly value={item[4]} />
                                <Input type="text" color="default" variant="flat" label=' Qty' isReadOnly value={item[7] + item[8]} />
                                <Input type="text" color="default" variant="flat" label='No PR' isReadOnly value={item[9]} placeholder={item[9] || "-"} />
                                <Input type="text" color="default" variant="flat" label='No PO' isReadOnly value={item[15]} placeholder={item[15] || "-"} />
                                <Input type="text" color="default" variant="flat" label='Remark' isReadOnly value={item[13]} />
                                <Input type="text" color="default" variant="flat" label='user' isReadOnly value={item[12]} />
                                <Input type="text" color="default" variant="flat" label='Vendor' isReadOnly value={item[16]} />
                                <Input type="text" color="default" variant="flat" label='Tgl. GR' isReadOnly value={item[17]} />


                            </div>)

                    })}
                </CardBody>
                <Divider />
                <CardFooter>

                </CardFooter>
            </Card>
        </div>
    )
}