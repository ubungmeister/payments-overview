"use client";

 import "../globals.css";
 
export default function CoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
       <div className="flex flex-row">
        <main className="core-layout">{children}</main>
      </div>
    </div>
  );
}
