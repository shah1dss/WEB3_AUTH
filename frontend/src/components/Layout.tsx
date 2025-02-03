"use client";

import React from "react";
import Header from "./Header/Header";

interface IProps {
  children?: React.ReactNode;
}

export function Layout(props: IProps) {
  return (
    <>
      <Header />
      <div className="w-[1200px] mx-auto">{props.children}</div>
    </>
  );
}
