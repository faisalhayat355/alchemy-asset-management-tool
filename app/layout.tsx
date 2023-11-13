"use client";
import React from "react";
import LayoutComponent from "./component/common/layout.component";

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <div>
            <LayoutComponent>{children}</LayoutComponent>
          </div>
        </main>
      </body>
    </html>
  );
}
