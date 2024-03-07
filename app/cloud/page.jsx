"use client"
import React from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { useState, useEffect } from 'react'
export default function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const handleChange = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }
  const handleChangeUser = (e) => {
    setUser(e.target.value)
    console.log(user)
  }
  useEffect(() => {

  }, [])
  return (
    <div className="w-full flex flex-col gap-3 justify-center align-middle items-center">

      <p className={title({ color: 'violet', size: 'md', class: "h-fit py-1" })}>Login to <span className={title({ color: 'blue' })}> Cloud</span> </p>
      <Divider className="my-5" />

      <form method="post" action="https://tfjsmartfactory.online/akatsuki/cloud/index.php">
        <Card classNames={{ base: 'bg-background/25 backdrop-blur-lg ' }} className="flex flex-col gap-1 max-w-lg mt-5 w-full">

          <Input onChange={handleChangeUser} isRequired label="Username" name='fm_usr' placeholder="" type="text" value={user} />
          <Input onChange={handleChange}
            isRequired
            label="Password"
            placeholder="" name='fm_pwd'
            type="password" value={password}
          />
          <input type="hidden" name="token" value="s3cr3t" />
          <div className="flex gap-2 justify-end">
            <Button fullWidth color="primary" type="submit">
              Login
            </Button>
          </div>
        </Card>
      </form>
    </div>
  )
}