// app/not-found.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button' // Optional: Using shadcn/ui button

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-200 rounded-full opacity-75 animate-pulse"></div>
              <div className="relative bg-red-500 text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold">
                404
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
          
          <p className="text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild variant="outline">
              <Link href="/" className="w-full sm:w-auto">
                Return Home
              </Link>
            </Button>
            
            <Button asChild>
              <Link href="/contact" className="w-full sm:w-auto">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}