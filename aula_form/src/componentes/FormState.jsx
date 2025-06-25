import './FirstForm'
import { useState } from 'react'

// Aqui utilizaremos useState para armanezar o valor dos inputs. Os eventos para formulários será o onChange

export default function FormState(){

    const[name,setName] = useState('')
    const[idade,setIdade] = useState('')
    const[bio,setBio] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, idade, bio);

    }

    return(
        <div>

            <h2>Formulário com useState e onChange</h2>

            <form>
                <div>

                    <label>
                        <span>Nome:</span>
                        <input type="text" name="nome" onChange={handleName} value={name} placeholder='Digite seu nome:' />
                    </label>

                </div>

                <div>

                    <label>
                        <span>Idade:</span>
                        <input type="number" name="idade" onChange={(e) => setIdade(e.target.value)} value={idade} placeholder='Digite sua idade:' />
                    </label>

                    <label>

                        <span>Descrição:</span>
                        <textarea onChange={(e) => setBio(e.target.value)} value={bio}>Faça sua descrição...</textarea>
                        
                    </label>

                    <input type="submit" value='Enviar' />

                </div>
            </form>

            <p>O seu nome é: {name}</p>
            <p>Sua idade é: {idade}</p>
            <p>Sua descrição: {bio}</p>

        </div>

    )
} 