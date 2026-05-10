import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ghvmubrcmhlujquqpzuf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdodm11YnJjbWhsdWpxdXFwenVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzOTA1NzQsImV4cCI6MjA5Mzk2NjU3NH0.6jIxPwq1g5jK_fpTYcFVNQHJBohr6DWBuZtjrbo-bic'
)