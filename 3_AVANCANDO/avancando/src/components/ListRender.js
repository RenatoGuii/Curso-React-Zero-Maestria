import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(['Renato', '19 Anos', 'Programador'])

    const [users, setUsers] = useState([
      { id: 1, name: 'Renato', age: 19 },
      { id: 2, name: 'João', age: 20 },
      { id: 3, name: 'Júlio', age: 18 },
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }

  return (
    <div>
        <ul>
            {/*Método com ID imbutido*/}
            {list.map((item, i) => (
                <li key={i}>{item}</li>  
            ))}
        </ul>
        <ul>
          {/*Método com ID já feito (RECOMENDADO)*/}
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
          ))}
        </ul>
         <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )

}

export default ListRender