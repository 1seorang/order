"use client";
import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { button as buttonStyles } from "@nextui-org/theme";
import { Divider } from "@nextui-org/divider";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/react";
import { Spacer } from "@nextui-org/spacer";
import { FiSearch } from "react-icons/fi";
function SearchApp() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from your API
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1ZJKK2v-8r8FJtMx9hTiYI8YJrjqW0C6KR4gF964UaTs/values/PACK?alt=json&key=AIzaSyBgoFd8Gi1YDUSc6llH9TxMDSpkr7jcavU"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.values);
        setFilteredData(data);
      });
  }, []);
  useEffect(() => {
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
  }, [submittedSearchTerm, data]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmittedSearchTerm(searchTerm.toUpperCase());
  };

  // console.log(`dicari : ${submittedSearchTerm}`);
  // console.log(`hasilna : ${filteredData}`);
  return (
    <>
      <Divider className="my-2 px-8" />
      <div>
        <form
          onSubmit={handleSearchSubmit}
          className="mb-5 justify-center w-full"
        >
          <Input
            variant="faded"
            size="md"
            className={{
              label: [
                "bg-transparent",
                "text-slate-600",
                "dark:text-slate-800",
              ],
              input: [
                "bg-transparent",
                "text-black/70 dark:text-white/50",
                "placeholder:text-slate-700/50 dark:placeholder:text-slate-100/60",
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
            className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-blue-700/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-blue-700/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
            // className={buttonStyles({
            //   color: "primary",
            //   radius: "full",
            //   variant: "shadow",
            // })}
          >
            Cari <FiSearch />
          </Button>
        </form>
        <Divider />
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
              tabContent: "group-data-[selected=true]:text-[#ddf]",
            }}
          >
            {submittedSearchTerm && filteredData
              ? filteredData.map((item, index) => (
                  <Tab key={index} title={item[0]}>
                    <Card className="w-full py-1">
                      <CardHeader className="block gap-1 p-1">
                        <h4 className="text-medium font-medium"> {item[1]} </h4>
                        <p className=" text-default-500">
                          {" "}
                          Status: {item[16]}{" "}
                        </p>
                      </CardHeader>
                      <Divider />
                      <CardBody className="py-1 px-2">
                        <p className="text-default-800"> {item[4]} </p>
                        <p className="text-small text-default-700">
                          {" "}
                          ({item[7] + item[8]})
                        </p>
                        <Spacer y={4} />
                        <Code color="secondary">
                          <p className="text-default-700">
                            No. PR
                            {": "}
                            <Snippet size="sm" symbol=" ">
                              {item[9]}
                            </Snippet>
                          </p>
                        </Code>
                        <Spacer y={2} />
                        <Code>
                          <p className="text-small text-default-700 w-full">
                            No. PO{": "}
                            <Snippet
                              variant="solid"
                              color="secondary"
                              size="sm"
                              symbol=" "
                            >
                              {item[17]}
                            </Snippet>
                          </p>
                        </Code>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <Code>
                          <p className="text-small text-default-700 w-full">
                            Vendor: {item[18]}
                          </p>
                        </Code>
                      </CardFooter>
                    </Card>
                  </Tab>
                  // <li key={index}>{JSON.stringify(item)}</li>
                ))
              : null}
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default SearchApp;
