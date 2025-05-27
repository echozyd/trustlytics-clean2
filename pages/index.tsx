import React from "react";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import { Rocket, ShieldCheck, LineChart } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Rocket className="text-blue-500 w-6 h-6" />,
    title: "No-Code AI Tools",
    description: "Empower SMBs with easy-to-use, code-free AI solutions across CRM, marketing, and analytics."
  },
  {
    icon: <ShieldCheck className="text-blue-500 w-6 h-6" />,
    title: "Secure Fraud Detection",
    description: "Flat-fee APIs for real-time fraud prevention tailored for small business workflows."
  },
  {
    icon: <LineChart className="text-blue-500 w-6 h-6" />,
    title: "Data-Driven Growth",
    description: "AI-powered insights and predictive automation to unlock smarter business decisions."
  }
];

function Header() {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
        <Image src="/trustlytic_logo.png" alt="Trustlytics Logo" width={40} height={40} unoptimized />
        <span className="text-xl font-bold text-gray-800">Trustlytics</span>
      </div>
      <Button variant="ghost" onClick={() => router.push("/products")}>Explore Products</Button>
    </header>
  );
}

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">Empowering SMBs with Smart, Simple AI</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Trustlytics delivers scalable, no-code tools to supercharge customer engagement, prevent fraud, and forecast demand—without a data team.
        </p>
        <Button className="text-lg px-6 py-3" onClick={() => window.location.href='/products'}>Explore Products</Button>
      </section>
      <section className="py-20 px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
