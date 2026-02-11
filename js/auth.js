import { supabase } from './supabaseClient.js'

// Redireciona usuário baseado no papel
export async function redirectBasedOnRole() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    window.location.href = 'login.html'
    return
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (error || !profile) {
    console.error('Perfil não encontrado', error)
    await supabase.auth.signOut()
    window.location.href = 'login.html'
    return
  }

  const role = profile.role
  const currentPath = window.location.pathname.split('/').pop()

  if (role === 'admin' && currentPath !== 'administrador.html') {
    window.location.href = 'administrador.html'
  } else if (role === 'server' && currentPath !== 'servidor.html') {
    window.location.href = 'servidor.html'
  } else if (role === 'sabesp_cpfl' && currentPath !== 'sabesp-cpfl.html') {
    window.location.href = 'sabesp-cpfl.html'
  }
}

// Login com email/senha
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

// Logout
export async function logout() {
  await supabase.auth.signOut()
  window.location.href = 'index.html'
}

// Verifica se usuário está autenticado e tem papel específico
export async function checkRole(allowedRoles) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return false

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  return profile && allowedRoles.includes(profile.role)
}
