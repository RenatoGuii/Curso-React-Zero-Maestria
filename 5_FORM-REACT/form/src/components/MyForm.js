import './MyForm.css'

import { useState } from 'react'

const MyForm = ({ user }) => {
    // 6° Controlleds Inputs
    // 3° Gerenciamento de Dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

//    console.log(name)
//    console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log ('Enviando formulário...')
        console.log(name)
        console.log(email)
        console.log(bio)
        console.log(role)

        // 7° Limpar Formulário
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

  return (
    <div>
        {/* 5° Envio de formulário */}
        {/* 1° Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                {/* 4° Simplificação de manipulação de state */}
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} 
                value={name} />
            </div>

        {/* 2° Label envolvendo input */}
        <label>
            <span>E-Mail:</span>
            <input type="email" name="email" placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)} 
            value={email}/>
         </label>
         {/* 8° Textarea */}
        <label>
            <span>Bio:</span>
            <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        {/* 9° Select */}
        <label>
            <span>Função no sistema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
            </select>
        </label>

         <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default MyForm