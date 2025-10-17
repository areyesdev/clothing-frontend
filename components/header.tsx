"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Menu, X, Search, User  } from "lucide-react"
import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input"


export function Header() {
    const [isMenuOpen , setIsMenuOpen] = useState(false)
    return (
        <header className="w-full p-4">
            <div className="container flex items-center justify-between">
                <div className="flex md:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen (!isMenuOpen)}>
                        <Menu className=" h-6 w-6" />
                        <span className="sr-only">Abrir Menú</span>
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl">Clothing</span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary"> 
                        Inicio
                    </Link>
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary"> 
                        Hombre
                    </Link>
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary"> 
                        Mujer
                    </Link>
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary"> 
                        Acesorios
                    </Link>
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary"> 
                        Ofertas
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="hidden md:flex">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Buscar</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="hidden md:flex">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Cuenta</span>
                    </Button>
                    <Button variant="outline" size="icon" className="relative rounded-full">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Carrito</span>
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 text-[10px] font-bold text-white flex items-center justify-center">3</span>
                    </Button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
                    <div className="container pt-4 pb-6">
                        <div className="flex justify-end mb-4">
                            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen (false)}>
                                <X className="h-6 w-6" />
                                <span className="sr-only">Cerrar Menú</span>
                            </Button>
                        </div>

                        <div className="mb-4">
                            <Input type="search" placeholder="Buscar productos..." className="w-full" />
                        </div>

                        <nav className="grid gap-4">
                            <Link href="#" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Inicio
                            </Link>
                        </nav>
                        <nav className="grid gap-4">
                            <Link href="#" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Hombre
                            </Link>
                        </nav>
                        <nav className="grid gap-4">
                            <Link href="#" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Mujer
                            </Link>
                        </nav>
                        <nav className="grid gap-4">
                            <Link href="#" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Accesorios
                            </Link>
                        </nav>
                        <nav className="grid gap-4">
                            <Link href="#" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                            Ofertas
                            </Link>
                        </nav>

                    </div>
                </div>
            )}
        </header>
    )
}