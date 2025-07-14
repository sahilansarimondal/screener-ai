import { Icon } from "@radix-ui/react-select";
import React from "react";

interface Icons {
  [key: string]: () => React.ReactNode;
}

export const Icons = {
  // ... existing icons
  logo: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg {...prop} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3 12l9 10 9-10-9-10zm0 2.8L18.2 12 12 19.2 5.8 12 12 4.8z" />
      <path d="M12 8l-4 4 4 4 4-4-4-4zm0 1.6L14.4 12 12 14.4 9.6 12 12 9.6z" />
    </svg>
  ),
  lineChart: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
  aiAnalysis: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  ),
  screener: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M5 6h14" />
      <path d="M5 18h14" />
    </svg>
  ),
  portfolio: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="m3.27 6.96 8 4.64" />
      <path d="m12.73 6.96-8 4.64" />
      <path d="M12 22.08V12" />
    </svg>
  ),
  hdfcBank: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg {...prop} viewBox="0 0 100 40" className="h-10 w-auto">
      <text
        x="0"
        y="30"
        fontFamily="Arial"
        fontSize="30"
        fontWeight="bold"
        fill="currentColor"
      >
        HDFC
      </text>
    </svg>
  ),
  iciciBank: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg {...prop} viewBox="0 0 100 40" className="h-10 w-auto">
      <text
        x="0"
        y="30"
        fontFamily="Arial"
        fontSize="30"
        fontWeight="bold"
        fill="currentColor"
      >
        ICICI
      </text>
    </svg>
  ),
  sbi: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg {...prop} viewBox="0 0 100 40" className="h-10 w-auto">
      <text
        x="0"
        y="30"
        fontFamily="Arial"
        fontSize="30"
        fontWeight="bold"
        fill="currentColor"
      >
        SBI
      </text>
    </svg>
  ),
  kotakBank: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg {...prop} viewBox="0 0 120 40" className="h-10 w-auto">
      <text
        x="0"
        y="30"
        fontFamily="Arial"
        fontSize="30"
        fontWeight="bold"
        fill="currentColor"
      >
        Kotak
      </text>
    </svg>
  ),
  axisBank: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg {...prop} viewBox="0 0 100 40" className="h-10 w-auto">
      <text
        x="0"
        y="30"
        fontFamily="Arial"
        fontSize="30"
        fontWeight="bold"
        fill="currentColor"
      >
        Axis
      </text>
    </svg>
  ),
  check: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  twitter: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  linkedin: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  youtube: (prop: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  ),
};
