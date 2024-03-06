"use client"
import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";

export default function App() {

return(
    <form method="post" className="flex flex-col gap-4 max-w-md mt-5" action="https://tfjsmartfactory.online/akatsuki/cloud/index.php">
    <Input isRequired label="Username" name='fm_usr' placeholder="" type="text" />
    <Input
      isRequired
      label="Password"
      placeholder="" name='fm_pwd'
      type="password"
    />

    <div className="flex gap-2 justify-end">
      <Button fullWidth color="primary" type="submit">
        Login
      </Button>
    </div>
  </form>
)
}