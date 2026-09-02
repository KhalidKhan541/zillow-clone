"use client";
export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <span className="text-2xl font-bold text-blue-600">zillow</span>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-blue-600">Buy</a><a href="#" className="hover:text-blue-600">Rent</a><a href="#" className="hover:text-blue-600">Sell</a><a href="#" className="hover:text-blue-600">Mortgage</a><a href="#" className="hover:text-blue-600">Agents</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:text-blue-600">Saved</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold">Sign In</button>
        </div>
      </div>
    </nav>
  );
}
