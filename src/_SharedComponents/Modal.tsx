"use client";

import Link from "next/link";

interface IProps {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

export default function Modal({ children, className, isOpen, setIsOpen }: IProps) {

  const handleClose = (): void => {
    if (isOpen && setIsOpen) setIsOpen(false);
  }

  if (isOpen) {
    return (
      <Link href={{ query: { modalOpen: false }}} onClick={() => handleClose()} className="h-screen w-screen fixed top-0 left-0 bg-indigo-900/20 overflow-hidden">
        <div onClick={(e) => {e.preventDefault(); e.stopPropagation()}} className={`absolute overscroll-none top-0 bottom-0 my-auto max-h-[80vh] left-0 right-0 mx-auto w-[90%] shadow-indigo-900/40 shadow-2xl ${className}`}>
          <Link href={{ query: { modalOpen: false }}} onClick={() => handleClose()} className="absolute top-4 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>
          {children}
        </div>
      </Link>
    )
  }
}