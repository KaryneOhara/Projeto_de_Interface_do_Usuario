import './Tema.css';
import { useState } from 'react';

export default function Tema({children}){

    const [tema, atualizarTema] = useState('claro');
        
    const alternarTema = () => {
        atualizarTema((tema) => (tema === 'claro' ? 'escuro' : 'claro'));
        };
    return(
        <>
            <div className={tema}>
                <button className='alternar' onClick={alternarTema}>
                    Alternar Tema ({tema === 'claro' ? 'Claro' : 'Escuro'})
                </button>
                {children}
            </div>
        </>
    )
}