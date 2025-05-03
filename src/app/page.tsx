import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Aion Data Platform</h1>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Aion Data Platform</h2>
          <p className="text-gray-600 mb-4">
            This is a secure platform for managing and analyzing your data.
          </p>
          <div className="space-x-4">
            <Link
              href="/dashboard"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}