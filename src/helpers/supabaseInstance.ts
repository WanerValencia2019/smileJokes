import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export default createClient(
  'https://tjnmhtumhyawziflqzso.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqbm1odHVtaHlhd3ppZmxxenNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5NzI5NjQsImV4cCI6MTk3OTU0ODk2NH0.uEnkQpKqTZUY6zmDb7o3NDjk08dgQZAYy7M47siDU2Y',
)
