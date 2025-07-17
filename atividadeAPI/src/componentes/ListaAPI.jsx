import { useState, useEffect } from 'react';

export default function TabelaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fetchData) {
      fetchUsuarios();
      setFetchData(false);
    }
  }, [fetchData]);

  const handleFetchClick = () => {
    setLoading(true);
    setFetchData(true);
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Nomes</h2>
        <button onClick={handleFetchClick}>Atualizar Nomes</button>
        {loading ? <p>Carregando...</p> : (
          <table style={{ border: '1px solid black', marginTop: '10px', backgroundColor: '#f8d7da' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Usuários</h2>
        <button onClick={handleFetchClick}>Atualizar Usuários</button>
        {loading ? <p>Carregando...</p> : (
          <table style={{ border: '1px solid black', marginTop: '10px', backgroundColor: '#d1ecf1' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuário</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Cidades</h2>
        <button onClick={handleFetchClick}>Atualizar Cidades</button>
        {loading ? <p>Carregando...</p> : (
          <table style={{ border: '1px solid black', marginTop: '10px', backgroundColor: '#c3e6cb' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cidade</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}