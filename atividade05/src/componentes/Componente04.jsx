import React, { useEffect, useState } from 'react';

export default function Componente04() {

    //esse código pega fotos

    // const [photos, setPhotos] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchPhotos = async () => {
    //         try {
    //             const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             // Limita a 10 fotos
    //             setPhotos(data.slice(0, 10));
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchPhotos();
    // }, []);

    // if (loading) {
    //     return <div>Carregando...</div>;
    // }

    // if (error) {
    //     return <div>Erro: {error}</div>;
    // }

    // return (
    //     <div>
    //         <h2>Galeria de Fotos</h2>
    //         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    //             {photos.map(photo => (
    //                 <div key={photo.id} style={{ margin: '10px' }}>
    //                     <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '100px', height: '100px' }} />
    //                     <p>{photo.title}</p>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );


    //esse código pega usuários com id ímpar

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Filtrando usuários com id ímpar
                const oddIdUsers = data.filter(user => user.id % 2 !== 0);
                setUsers(oddIdUsers);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div>
            <h2>Usuários com ID Ímpar</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.address.street}
                    </li>
                ))}
            </ul>
        </div>
    );
}