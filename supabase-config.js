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

const SUPABASE_URL = 'https://rcgqwxmxhqbqxsdhnrkm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZ3F3eG14aHFicXhzZGhucmttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyMTAxMzEsImV4cCI6MjEwMDc4NjEzMX0.E0rofOrvBFyZ_sntfPkqHhJfcWHitFeJw2DG9DdYEvY';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
