import { useEffect } from 'react'
import { supabase, initStorage } from './lib/supabase'

function App() {
  useEffect(() => {
    // Initialize storage bucket on app start
    initStorage().catch(console.error)
  }, [])

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            AutoCRM
          </h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Content will go here */}
      </div>
    </main>
  )
}

export default App
