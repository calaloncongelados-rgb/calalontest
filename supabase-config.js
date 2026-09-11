// ============================================================
// Configuración de Supabase — usada por productos.html y admin.html
//
// Reemplaza los dos valores de abajo con los de tu proyecto:
// Supabase → tu proyecto → Settings (ícono de engranaje) → API
//   - "Project URL"        → SUPABASE_URL
//   - "anon public" key    → SUPABASE_ANON_KEY
//
// Esta clave "anon" está diseñada para ser pública (vive en el
// navegador de cualquier visitante) — la seguridad real la dan
// las políticas RLS que creaste en supabase-schema.sql, no el
// hecho de que esta clave esté oculta.
// ============================================================

const SUPABASE_URL = 'https://yiaqcofvtzaduvsbrmuh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpYXFjb2Z2dHphZHV2c2JybXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNTEwNjAsImV4cCI6MjA5NTkyNzA2MH0.kJrnUxuBOjTUCipiiKiVelxnB0y0c6HHE_qcjjWTKTU';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
