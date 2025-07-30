import React, { useState, useEffect } from 'react';

export default function LoginForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        setLogin(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', login, 'Palavra-passe:', password);
        // Deixei essa parte de enviar para o log pq reutilizei o meu código da atividade que vc passou
        setLogin('');
        setPassword('');
    };

    function handleColor(){
        if (password === 'AlunoIFRN'){
        const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
        const randomColor = cor[Math.floor(Math.random() * cor.length)];
        document.body.style.backgroundColor = randomColor;
        }
    }

    useEffect(() => {
        handleColor()
    },[{password}])

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>Login:</span>
                        <input type="text" name="login" onChange={handleLogin} value={login} placeholder='Digite seu login:'/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Palavra-passe:</span>
                        <input type="password" name="password" onChange={handlePassword} value={password} placeholder='Digite a palavra-passe:'/>
                    </label>
                </div>
                <input type="submit" value='Enviar' />
            </form>
        </div>
    );
}