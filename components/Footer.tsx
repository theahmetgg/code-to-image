"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        href="https://ahmetgulmez.com.tr/"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made by</span>
        <span className="pl-1 font-medium text-slate-200">Ahmet Gülmez</span>
      </Link>
      <Link
        href="https://github.com/theahmetgg"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        Source Code Here &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;
