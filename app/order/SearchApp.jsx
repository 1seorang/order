"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
// import { Button } from "@nextui-org/button";
// import { button as buttonStyles } from "@nextui-org/theme";
import { Divider } from "@nextui-org/divider";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/react";
import { Spacer } from "@nextui-org/spacer";
import { FiSearch } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import QRcode from './QRcode'
import { Spinner } from "@nextui-org/spinner";
// import { FaFileDownload, FaPrint } from "react-icons/fa";
import { QRIcon } from '@/components/icons'
import ModalX from "./Modal";
import { useDisclosure } from "@nextui-org/use-disclosure";
import {Tooltip, Button} from "@nextui-org/react";
import { title } from "@/components/primitives";
function SearchApp() {
  const [isiModal, setIsiModal] = useState([])
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    if (loading) {
      // Fetch data from your API
      fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1ZJKK2v-8r8FJtMx9hTiYI8YJrjqW0C6KR4gF964UaTs/values/PACK!A3:Z6000?alt=json&key=AIzaSyBgoFd8Gi1YDUSc6llH9TxMDSpkr7jcavU"
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data.values);
          setFilteredData(data);
          setLoading(false);
        });
    }
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    // Filter data based on the search term
    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        value
          .toString()
          .toLowerCase()
          .includes(submittedSearchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [submittedSearchTerm, data, loading]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm == "") return
    setSubmittedSearchTerm(searchTerm.toUpperCase());
    setLoading(true);
  };
  const Print = () => {
    //console.log('print');
    let printContents = document.getElementById("card1").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  // console.log(`dicari : ${submittedSearchTerm}`);
  console.log(`hasilna : ${filteredData.length}`); 
  return (
    <>
      <Divider className="my-2 px-8 print:hidden" />
      <div>
        <form
          onSubmit={handleSearchSubmit}
          className="mb-5 justify-center w-full print:hidden"
        >
          <Input
            variant="faded"
            size="md"
            className={{
              label: [
                "bg-transparent",
                "underline",
                "text-slate-600",
                "dark:text-slate-800",
              ],
              input: [
                "bg-transparent",
                "text-black/70 dark:text-white/50",
                "placeholder:text-slate-700/50 dark:placeholder:text-slate-100/60",
                "print:hidden"
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "focus-within:!bg-default-200/50",
                "dark:hover:bg-default/70",
                "dark:focus-within:!bg-default/60",
                "!cursor-text",
              ],
            }}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            label="No Tracking / PR / PO"
            labelPlacement="inside"
          />
          {/* <Input
            key="NoPR"
            type="text"
            className="mb-1 cursor-not-allowed"
            label="No PR"
            isDisabled
            labelPlacement="outside"
          />
          <Input
            key="NoPO"
            className="mb-2 disabled"
            type="text"
            label="No PO"
            isDisabled
            labelPlacement="outside"
          /> */}
          <Spacer className="my-1" />
          <Button
            type="submit"
            radius="full"
            className="relative overflow-visible rounded-full hover:translate-y-1 px-12 shadow-xl bg-blue-700/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-blue-700/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 print:hidden"
          // className={buttonStyles({
          //   color: "primary",
          //   radius: "full",
          //   variant: "shadow",
          // })}
          >
            Cari <FiSearch />
          </Button>
        </form>
        <Divider className="print:hidden" />
        <div className="flex w-full flex-col">
          <Tabs
            size="sm"
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider text-[#aaa]",
              cursor: "w-full bg-[#2244ee]",
              tab: "max-w-fit px-0 h-8",
              tabContent: "group-data-[selected=true]:text-[#ddf]", base: "print:hidden"
            }}
          >
            {loading ? (
              <Tab key="load1" title=" ">

                <Spacer className="my-4" />
                <Spinner
                  label="Loading...!"
                  color="secondary"
                  labelColor="secondary"
                  size="xl"
                />
              </Tab>
            ) : // "loading"
              !filteredData ? (
                "loading"
              ) :
              submittedSearchTerm & filteredData.length < 1  ? (
                <Tab key="load1x" title="  ">
  
                  <Spacer className="my-4" />
                  <span className={title({color:"cyan", size: 'sm'})}>Not Found!</span>
                </Tab>
              ) 
              : filteredData.length > 0 ? (filteredData.map((item, index) => (
                <Tab key={index} title={item[0]}>
                  <Card className="w-full py-1 print:bg-red-950/60" id="card1">
                    <CardHeader className="block gap-1 p-1 bg-transparent print:hidden">
                      <h4 className="text-medium font-medium drop-shadow-xl shadow-gray-200">
                        {" "}
                        {item[1]}{" "}
                      </h4>
                      <p className=" text-default-500">
                        {" "}
                        Status: {item[14]}{" "}
                      </p>
                      <Tooltip delay={200} placement="top-start" color="warning" content="Show Details" showArrow defaultOpen className="opacity-70" >

                      <Button
                        onPress={() => {
                          setIsiModal
                            (<><p>
                              Dept : {item[18]} <br />
                              Date : {item[5]}
                            </p>
                              <p>
                                Mat. Code : {item[3]} <br />
                                Mat. Name : {item[4]} <br />
                                Qty : {item[7]} {item[8]}
                              </p>
                              <p>
                                No PR : {item[9]} <br />
                                No PO : {item[15]}
                              </p>
                              <p>
                                Remark : {item[13]}
                                <br />
                                user : {item[12]}
                              </p>
                              <p>
                                Vendor : {item[16]}
                                <br />
                                Tgl. GR : {item[17]}
                              </p></>)
                          onOpen()
                        }} isIconOnly
                        className="absolute top-0 right-0 p-0  m-0 hover:opacity-80 opacity-50 transition-all hover:bg-blue-500/60 hover:backdrop-blur-md" color="primary" variant="shadow"
                        size="sm"
                        title="Lihat Detail"
                      >
                        <FaArrowUpRightFromSquare className="" />
                      </Button>
                      </Tooltip>
                    </CardHeader>
                    <Divider className="print:hidden" />
                    <CardBody className="py-1 px-2">
                      <div>

                        <ModalX item={item} isOpen={isOpen} onOpenChange={onOpenChange} isi={isiModal} />
                      </div>
                      <p className="text-default-800 print:hidden"> {item[4]} </p>
                      <p className="text-small text-default-700 print:hidden">
                 
                        ({item[7] + item[8]})
                      </p>
                      <Spacer y={4} />
                      <Code color="secondary">
                        <p className="text-default-700 print:hidden">
                          No. PR
                          {": "}
                          <Snippet size="sm" symbol=" ">
                            {item[9]}
                          </Snippet>
                        </p>
                      </Code>
                      <Spacer y={2} />
                      <Code>
                        <p className="text-small text-default-700 w-full print:hidden">
                          No. PO{": "}
                          <Snippet
                            variant="solid"
                            color="secondary"
                            size="sm"
                            symbol=" "
                          >
                            {item[15]}
                          </Snippet>
                        </p>
                      </Code>
                    </CardBody>
                    <Divider className="print:hidden" />
                    <CardFooter className=" print:hidden ">
                      <Code>
                        <p className="text-small text-default-700 w-full">
                          Vendor: {item[16]}
                        </p>
                      </Code>
                      <Tooltip placement="bottom-start" delay={100} content="Show QR" showArrow defaultOpen  color="warning"  >
                      <Button isIconOnly size="sm"
                        className="absolute bottom-1 right-1"
                        variant="ghost" title="Lihat QR Code"
                        color="warning"
                        onPress={() => {
                          setIsiModal(<QRcode id={item[2]} />)

                          onOpen()

                        }}
                      ><QRIcon className="p-unit-xs" /></Button>

                      </Tooltip>
                      {/* <Button
                        className="absolute right-0 bottom-0 hover:bg-purple-500/40 bg-purple-300/40 transition-all"
                        title="Print"
                        size="sm"
                        onClick={Print}
                      >
                        <FaFileDownload className="p-0 m-0 text-lg fill-slate-200 stroke-yellow-950" />
                      </Button> */}
                    </CardFooter>
                  </Card>
                </Tab>
                // <li key={index}>{JSON.stringify(item)}</li>
              ))
              ) : null}
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default SearchApp;
