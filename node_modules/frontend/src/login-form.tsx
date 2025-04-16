"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log({ email, senha })
  }

  return (
    <div className="flex w-full">
      {/* Left side with gradient and logo */}
      <div className="hidden md:flex md:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-blue-600" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-light">VitaBox</h1>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">Seja Bem-Vindo ao VitaBox</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-base font-medium">Entrar na Conta</h3>
            </div>

            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: { target: { value: React.SetStateAction<string> } }) => setEmail(e.target.value)}
                className="bg-gray-100"
              />

              <Input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="bg-gray-100"
              />
            </div>

            <Button type="submit" className="w-full bg-sky-400 hover:bg-sky-500">
              Login
            </Button>

            <div className="text-center text-sm mt-4">
              <p>
                Não tem uma conta?{" "}
                <a href="#" className="text-sky-500 hover:underline">
                  Cadastre-se
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
