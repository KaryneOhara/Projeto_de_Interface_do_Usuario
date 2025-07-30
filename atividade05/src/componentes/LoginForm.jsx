import React, { useState } from 'react';

export default function LoginForm() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    // Para renderizar os emails na tela, é só descomentar as linhas de código
    // const [emails, setEmails] = useState([]);

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', login, 'Senha:', senha);
        
        // Adiciona o login ao estado de emails
        // setEmails((prevEmails) => [...prevEmails, login]);
        
        // Resetar os campos após o envio
        setLogin('');
        setSenha('');
    };

    return (
        <div>
            <h2>Tela de Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>Login:</span>
                        <input type="text" name="login" onChange={handleLoginChange} value={login} placeholder='Digite seu login:'/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Senha:</span>
                        <input type="password" name="senha" onChange={handleSenhaChange} value={senha} placeholder='Digite sua senha:'/>
                    </label>
                </div>
                <input type="submit" value='Enviar' />
            </form>

            {/* <h3>Emails Enviados:</h3>
            <ul>
                {emails.map((email, index) => (
                    <li key={index}>{email}</li>
                ))}
            </ul> */}
        </div>
    );
}