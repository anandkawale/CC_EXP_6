import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-sans">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">🚀 My First React Page</h1>
        <p className="text-lg mb-6">
          This page is built with <span className="font-semibold">React</span>  
          and deployed using <span className="font-semibold">AWS Amplify</span>.
        </p>
        <p className="italic text-sm text-gray-200">
          "A small start towards bigger projects!"
        </p>
      </div>
      <footer className="mt-8 text-sm text-gray-200">
        © {new Date().getFullYear()} | Built with ❤️ and Amplify
      </footer>
    </div>
  );
}
