import React from 'react'
import { createClient } from '@supabase/supabase-js'
import './App.css'

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// We'll use this later when we implement Supabase features
// const supabase = createClient(supabaseUrl, supabaseAnonKey)

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>{import.meta.env.VITE_APP_NAME}</h1>
      <p>React + Supabase App</p>
      <p>We'll build our Zendesk clone here soon!</p>
    </div>
  )
}

export default App
