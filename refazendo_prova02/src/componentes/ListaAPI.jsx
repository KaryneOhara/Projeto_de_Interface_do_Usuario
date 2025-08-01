
import { useEffect, useState } from 'react';

export default function ListaAPI() {

    const [albuns, setAlbuns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setId] = useState('');
    const [error, setError] = useState('');

    const handleId = (e) => {
        setId(e.target.value);
        setError('');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('id:', userId);
        const idNumber = Number(userId);

        // Validação do ID
        if (idNumber < 1 || idNumber > 10 || isNaN(idNumber)) {
            setError('Por favor, digite um ID válido entre 1 e 10.');
            return;
        }

    };

    useEffect(() => {
        const fetchAlbuns = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
                const data = await response.json();
                const albumIdUser = data.filter(album => album.userId === Number(userId));
                setAlbuns(albumIdUser);
            }   catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }   finally {
                setLoading(false);
            }
        };

        fetchAlbuns();
    }, [userId]);

    if (loading) {
        return <div>Carregando...</div>;
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleId} type="text" name='userId' placeholder='Digite o Id do usuário: '/>
                <input type="submit"/>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <h2>Álbuns do usuário selecionado</h2>
            <ul>
                {albuns.map(album => (
                    <li key={album.id}>
                        {album.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
