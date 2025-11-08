import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulamos login por ahora - luego conectaremos con backend
    setTimeout(() => {
      if (email === 'admin@sanse.com' && password === 'admin123') {
        localStorage.setItem('user', JSON.stringify({
          id: '1',
          email: 'admin@sanse.com',
          role: 'admin',
          fullName: 'Administrador Principal'
        }));
       
        window.location.reload();
      } else if (email === 'preparador@sanse.com' && password === 'preparador123') {
        localStorage.setItem('user', JSON.stringify({
          id: '2',
          email: 'preparador@sanse.com',
          role: 'preparador',
          fullName: 'Preparador Físico'
        }));
        
        window.location.reload();
      } else {
        setError('Credenciales incorrectas');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
       
    {/* Logo real */}
<div className="flex justify-center mb-6">
  <div className="flex flex-col items-center">
    <img 
      src="/images/logosanse2.png" 
      alt="Sanse Complutense" 
      className="h-20 w-20 object-contain mb-4"
    />
    <h2 className="text-2xl font-bold text-center text-sanse-blue mb-2">
      Sanse Complutense
    </h2>
    <p className="text-center text-gray-600">
      Planificador de Entrenamientos
    </p>
  </div>
</div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanse-blue"
              required
              disabled={loading}
              placeholder="tu@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanse-blue"
              required
              disabled={loading}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sanse-red text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;