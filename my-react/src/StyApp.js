import styled from 'styled-components';


export const Caixa = styled.div`

  width: 100vw;
  height: 100vh;
  background: linear-gradient(#e66465, #9198e5);
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

export const TodoList = styled.div`
  background:#EE82EE;
  padding: 25px;
  border-radius: 10px;
  width: 300px;


`;

export const List = styled.ul`

padding: 0;
margin-top: 30px;

`;



export const Item = styled.li`
  color: white;
  font-size: 20px;
  background: #DA6B77 ;
  font-weight: 400;
  box-shadow: 1px 4px 10px black;
  border-radius: 8px;
  list-style: none;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  border: 2px solid gray;
  border-radius: 10px;
  height: 40px;
  font-weight: 400;
  font-size: 15px;
  outline:none;
  padding-left: 10px;
  width: 285px;
  
`;

export const Button = styled.button`
  border-radius: 5px;
  background:black;
  display: block;
  margin-top: 15px;
  width: 100%;
  height: 40px;
  border: none;
  color: #DA6B77;
  font-size: 20px;
  cursor: pointer;
  
  &:hover{
    opacity: 0.7;
  }

  &:active{
    opacity: 0.6;
  }
`;





