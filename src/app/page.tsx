"use client";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";

const listings = [
  { id: "1", title: "Modern Ranch Home", address: "123 Oak Street", city: "Austin", state: "TX", price: 425000, bedrooms: 3, bathrooms: 2, sqft: 1850, type: "House", image: "https://via.placeholder.com/400x300/2196f3/fff?text=House+1" },
  { id: "2", title: "Downtown Condo", address: "456 Main Ave", city: "Denver", state: "CO", price: 315000, bedrooms: 2, bathrooms: 2, sqft: 1200, type: "Condo", image: "https://via.placeholder.com/400x300/9c27b0/fff?text=Condo+1" },
  { id: "3", title: "Family Home with Pool", address: "789 Pine Lane", city: "Phoenix", state: "AZ", price: 550000, bedrooms: 4, bathrooms: 3, sqft: 2400, type: "House", image: "https://via.placeholder.com/400x300/4caf50/fff?text=House+2" },
  { id: "4", title: "Cozy Townhouse", address: "321 Elm Drive", city: "Nashville", state: "TN", price: 289000, bedrooms: 3, bathrooms: 2.5, sqft: 1650, type: "Townhouse", image: "https://via.placeholder.com/400x300/ff9800/fff?text=Townhouse" },
  { id: "5", title: "Luxury Penthouse", address: "1 Skyline Blvd", city: "Miami", state: "FL", price: 895000, bedrooms: 3, bathrooms: 3, sqft: 2800, type: "Condo", image: "https://via.placeholder.com/400x300/e91e63/fff?text=Penthouse" },
  { id: "6", title: "Suburban Retreat", address: "555 Maple Court", city: "Charlotte", state: "NC", price: 375000, bedrooms: 4, bathrooms: 2.5, sqft: 2100, type: "House", image: "https://via.placeholder.com/400x300/00bcd4/fff?text=House+3" },
];

export default function Home() {
  const [filter, setFilter] = useState("all");
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Find your next home</h1>
        <div className="flex gap-4 mb-6">
          <input type="text" placeholder="City, neighborhood, or address" className="flex-1 border rounded-lg px-4 py-2" />
          <select className="border rounded-lg px-4 py-2"><option>All</option><option>House</option><option>Condo</option><option>Townhouse</option></select>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Search</button>
        </div>
        <p className="text-gray-600 mb-4">{listings.length} results</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((l) => (
            <div key={l.id} className="border rounded-lg overflow-hidden hover:shadow-lg cursor-pointer">
              <img src={l.image} alt={l.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <p className="text-2xl font-bold text-blue-600"></p>
                <p className="font-medium">{l.bedrooms} bd • {l.bathrooms} ba • {l.sqft.toLocaleString()} sqft</p>
                <p className="text-gray-600">{l.address}</p>
                <p className="text-gray-600">{l.city}, {l.state} {l.zipCode}</p>
                <p className="text-sm text-gray-500 mt-1">{l.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
