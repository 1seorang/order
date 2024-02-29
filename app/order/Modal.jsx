'use client'
import { Link } from "@nextui-org/react";
import Watermark from "@uiw/react-watermark";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { title } from "@/components/primitives";
import { FaFileDownload, FaPrint } from "react-icons/fa";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
export default function ModalX({ item, isOpen, onOpenChange, isi }) {
    // const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (

        <Modal className="z-[99999]"
            size="md"
            backdrop="blur"
            isOpen={isOpen}
            isDismissable={false}
            placement="center"
            onOpenChange={onOpenChange}
            radius="3xl"
            classNames={{
                backdrop:'backdrop-blur-xl',
                body: "py-3",
            
                // backdrop: "bg-[#292f46]/70 backdrop-opacity-60",
                base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c]/20 text-[#a8b0d3] backdrop-blur dark:text-white/90 print:bg-slate-100 overflow-hidden",
                header: "border-b-[1px] border-[#292f46] w-full py-1 md:py-2",
                footer: "border-t-[1px] border-[#292f46]",
                closeButton:
                    "hover:bg-white/5 text-red-500/70 hover:text-red-500/90 active:bg-white/10 z-10 print:hidden", wrapper: "print:w-screen h-full"
            }}
        >
            <ModalContent className="print:w-full print:text-foreground-700">
                {(onClose) => (
                    <  >
                        <Watermark
                            content="Aby"
                            rotate={-45}
                            fontFamily="FontSans"
                            width={70}
                            height={15}
                            fontSize={22}
                            fontColor="rgb(255 0 0 / 25%)"
                        >
                            <Watermark
                                content="© 2023"
                                rotate={-45}
                                offsetTop={117}
                                offsetLeft={117}
                                width={70}
                                height={15}
                                fontSize={8}
                                fontColor="rgb(255 0 0 / 25%)"
                            >
                                <ModalHeader >
                                 <Link href={`order/${item[2]}`} className={title({ color: 'violet', size: 'sm', class: "text-base md:text-lg bg-slate-700/70 py-2 w-full pl-2", fullWidth: 'true' })} >   {item[2] || item[0]}</Link>
                                </ModalHeader>
                                <ModalBody className="text-sm text-foreground-800 uppercase py-6 print:text-blue-900/80" id="modal1">
                                    {isi}

                                </ModalBody>
                                <ModalFooter className="py-2 print:hidden">
                                    <Button
                                        color="danger"
                                        variant="ghost"
                                        onPress={onClose}
                                    >
                                        Close
                                    </Button>
                                    <Button startContent={<FaPrint />} variant="shadow" color="warning"
                                        className="dark:shadow-[#6f4ef2] shadow-lg shadow-indigo-500/20 hover:backdrop-blur-lg hover:bg-red-500/70 transition duration-500"
                                        onPress={() => window.print()}
                                    >
                                        Print
                                    </Button>
                                </ModalFooter>
                            </Watermark>
                        </Watermark>
                    </>
                )}
            </ModalContent>
        </Modal>

    )
}