import { createClient }
	from '@supabase/supabase-js'

const supabaseUrl =
	'https://vvdrdzonanhxygaiviid.supabase.co'

const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2ZHJkem9uYW5oeHlnYWl2aWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNjU1MjEsImV4cCI6MjA5NDk0MTUyMX0.rX97Rt41Hj5SLBQe6d1WqWddShgQ0lMZzIR1q9gUQ6M'

export const supabase =
	createClient(
		supabaseUrl,
		supabaseKey
	)