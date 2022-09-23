import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export default createClient(
  'https://fuaxophepfoyoabgnbal.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1YXhvcGhlcGZveW9hYmduYmFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM4OTkyOTgsImV4cCI6MTk3OTQ3NTI5OH0.iCndD_FAWGsGJmLkXTXDngCQAGl_BMA2BkFye1ui6QU',
)
