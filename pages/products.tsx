import React from "react";
import { useRouter } from "next/router";
import { CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

const products = [
  {
    title: "CRM & Customer Database Templates",
    description:
      "No-code CRM builder with industry-specific templates to help SMBs manage customer relationships easily. Free to use."
  },
  {
    title: "Predictive Marketing & Automation",
    description:
      "Tools for LTV prediction, personalized campaigns, and A/B testing. Priced from $49 to $149/month."
  },
  {
    title: "Loyalty Program Engine",
    description:
      "Reward system to incentivize repeat purchases. Free version plus advanced add-on at $29/month."
  },
  {
    title: "BI Dashboard",
    description:
      "AI-powered analytics to track metrics, visualize KPIs, and generate predictive insights. Pro version from $49 to $129/month."
  },
  {
    title: "Smart Chatbot",
    description:
      "Automate customer interaction and data collection with customizable AI chatbot. $59 to $119/month."
  },
  {
    title: "Fraud Detection API",
    description:
      "Score transactions based on IP, device, and email metadata. Flat fee of $79/month for 500 calls; $0.20 per extra call."
  },
  {
    title: "Demand Forecasting",
    description:
      "Forecast inventory needs using historical and trend data. Pricing from $49 to $99/month."
  }
];

function Header() {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}> 
        <Image src="/trustlytic_logo.png" alt="Trustlytics Logo" width={40} height={40} />
        <span className="text-xl font-bold text-gray-800">Trustlytics</span>
      </div>
      <Button variant="ghost" onClick={() => router.push("/products")}>Explore Products</Button>
    </header>
  );
}

export default function ProductsPage() {
  return (
    <div className="p-10 bg-white min-h-screen">
      <Header />
      <h1 className="text-4xl font-bold mb-6 text-center">Our AI-Powered Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <Card key={idx} className="hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="text-green-500 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
