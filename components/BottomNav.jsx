import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  IconSearchengin,
  IconHome2,
  IconMessageText,
  IconBxsCalculator,
  IconBxEdit, NotificationIcon
} from "./icons";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { Badge } from "@nextui-org/react";
function BottomNav() {
  return (
    <div className="fixed bottom-0 flex al sm:hidden w-full z-50">
      <Navbar className="flex justify-center w-full z-49">
        <NavbarContent className="w-full flex justify-center text-center  h-full z-48 ">
          <NavbarItem className="w-full flex justify-center">
            <NextLink href="/" color="primary" variant="light">
              <IconHome2 className="stroke-cyan-500 hover:stroke-cyan-700 text-3xl" />
              <small className="text-cyan-500">Home</small>
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="w-full flex justify-center text-center  h-full z-48 ">
          <NavbarItem className="w-full flex justify-center">
            <NextLink href="/note" color="primary" variant="light">
              <IconBxEdit className="stroke-cyan-500 hover:stroke-cyan-700 text-3xl" />
              <small className="text-cyan-500">Note</small>
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="text-center">
          <NavbarItem className="w-full flex justify-center">
            <NextLink href="/order">
              <Button
                isIconOnly
                aria-label="cari"
                className=""
                variant="light"
                color="primary"
              >
                <IconSearchengin className="stroke-cyan-500 hover:stroke-cyan-700 text-5xl" />
                <small className="text-cyan-500"></small>
              </Button>
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        {/* <NavbarContent>
					<NavbarItem className="w-full flex justify-center">
						<NextLink href="/calculator"  color="primary"  variant="light">
							<Button isIconOnly  aria-label="sos">
								<IconBxsCalculator className="stroke-cyan-500 hover:stroke-cyan-700 text-3xl" />
							<small className="text-cyan-500">Kalkulator</small>
							</Button>
						</NextLink>
					</NavbarItem>
				</NavbarContent> */}
        <NavbarContent className="w-full flex justify-center text-center  h-full z-48 ">
          <NavbarItem className="w-full flex justify-center">
            <NextLink
              href="/kalkulator"
              color="primary"
              className="justify-center  "
              variant="light"
            >
              <IconBxsCalculator className="stroke-cyan-500 hover:stroke-cyan-700 text-3xl justify-self-center " />
              <small className="text-cyan-500">Calc</small>
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="w-full flex justify-center text-center  h-full z-48 ">
          <Badge isOneChar
            content={<NotificationIcon size={12} className="animate-pulse" />}
            color="danger"
            shape="circle"
            placement="top-right">
            <NavbarItem className="w-full flex justify-center">

              <NextLink href="/docs" color="primary" variant="light">
                <IconMessageText className="stroke-cyan-500 hover:stroke-cyan-700 text-3xl " />
                <small className="text-cyan-500">Pesan</small>
              </NextLink>
            </NavbarItem>
          </Badge>
        </NavbarContent>
      </Navbar>
    </div>
  );
}

export default BottomNav;
