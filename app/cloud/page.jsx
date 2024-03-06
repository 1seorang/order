import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";

export default function App() {

return(
    <form className="flex flex-col gap-4" action="https://tfjsmartfactory.online/akatsuki/cloud/index.php">
    <Input isRequired label="Username" name='fm_usr' placeholder="" type="text" />
    <Input
      isRequired
      label="Password"
      placeholder="" name='fm_pwd'
      type="password"
    />
    {/* <p className="text-center text-small">
      Need to create an account?{" "}
      <Link size="sm" onPress={() => setSelected("sign-up")}>
        Sign up
      </Link>
    </p> */}
    <div className="flex gap-2 justify-end">
      <Button fullWidth color="primary">
        Login
      </Button>
    </div>
  </form>
)
}