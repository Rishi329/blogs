import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"


const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 top-0 border-b sticky backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Rishi Garad</span>
            </div>
          </Link>
          <div className="hidden sm:flex sm:space-x-8 pt-3 items-center">
            
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Me</Link>
            {/* <ModeToggle/> */}
            <div className="">
              <Button variant="outline" className="mx-1">
                Signup
              </Button>
              <Button variant="outline" className="mx-1">
                Login
              </Button>

            </div>
          </div>
          <div className=" md:hidden">
        {/* <Sheet>
  <SheetTrigger> */}
<div className="items-center">
              <svg
                className="block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              </div>
         
            {/* </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="font-bold"><h2>Rishi Garad</h2></SheetTitle>
      <SheetDescription> */}
      <div className=" flex flex-col items-center gap-5">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Me</Link>

            <div className="flex">
              {/* <Button variant="outline" className="mx-1 text-xs">
                Signup
              </Button>
              <Button variant="outline" className="mx-1 text-xs">
                Login
              </Button>
               */}
            </div>
          </div>
      {/* </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet> */}
          
        </div>
      
      
        </div>
      </div>

   

        
    </nav>
  );
};

export default Navbar;
