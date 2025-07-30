import { useState, useEffect } from 'react';


export default function AlterarTema(){

    const [tema, setTema] = useState('light')

    function handleTema(){;
        if (tema === 'light') {
        document.body.style.backgroundColor = '#FFFFFF';
        } 
        else {
        document.body.style.backgroundColor = '#000000';
        }

    }

    useEffect(() => {
        handleTema()
    },[{tema}])

    return (
        <>
        <div>
            <button onClick={() => setTema((tema) => (tema === 'light' ? 'dark' : 'light'))}>
            Alterar tema
            </button>
        </div>
        </>
    )
}