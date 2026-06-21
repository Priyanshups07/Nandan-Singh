import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  console.log("Checking contacts...");
  const { data: d1, error: e1 } = await supabase.from('contacts').select('*').limit(1);
  console.log("contacts:", e1 ? e1.message : "exists");

  console.log("Checking contact_inquiries...");
  const { data: d2, error: e2 } = await supabase.from('contact_inquiries').select('*').limit(1);
  console.log("contact_inquiries:", e2 ? e2.message : "exists");

  console.log("Checking bookings...");
  const { data: d3, error: e3 } = await supabase.from('bookings').select('*').limit(1);
  console.log("bookings:", e3 ? e3.message : "exists");
}

check();
