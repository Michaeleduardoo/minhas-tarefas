import { useState } from "react"
import {Item , Caixa , TodoList , Input , Button , List } from "./StyApp"

function App() {


const [lestarray , setlestarray] = useState([])
    const [inputVakue , setinputVakue] = useState("")

 

   
    function inchange(event) {

        setinputVakue( event.target.value)
       
    }

    function clicando() {
       setlestarray([...lestarray , inputVakue])
    }

    return (
        <Caixa>

            <TodoList>
            <Input type="text" placeholder="Digita a sua tarefa...." onChange={inchange} />
            <Button onClick={clicando}>Adiciona</Button>

            <List>
              
                    {
                        lestarray.map((item , index) => (
                            <Item key={index}>{ item}</Item>
                        ))
                    }

                

            </List>

            </TodoList>

           
        </Caixa>




    )
}



export default App