"use client";
import Link from "next/link";
import { Shield, FileText, Map, BarChart2, AlertCircle } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: <Shield className="h-5 w-5" /> },
  { name: "KYC Verification", href: "/kyc", icon: <FileText className="h-5 w-5" /> },
  { name: "Blockchain Records", href: "/blockchain-records", icon: <FileText className="h-5 w-5" /> },
  { name: "Geo-fencing", href: "/geofencing", icon: <Map className="h-5 w-5" /> },
  { name: "Analytics", href: "/analytics", icon: <BarChart2 className="h-5 w-5" /> },
  { name: "Alerts", href: "/alerts", icon: <AlertCircle className="h-5 w-5" /> },
];

export function Navigation() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-full w-72 bg-white border-r border-border flex flex-col">
      <div className="flex items-center gap-2 px-6 py-6 border-b border-border">
        <Shield className="h-8 w-8 text-accent" />
        <span className="text-xl font-bold">SecureID</span>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="px-6 py-4 border-t border-border text-xs text-muted-foreground">
        System Status: <span className="text-green-600 font-semibold">Active</span>
      </div>
    </aside>
  );
}
