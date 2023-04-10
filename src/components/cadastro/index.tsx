import React from 'react';
import './index.css';

function Cadastro() {
  return (
    <div className='container-cadastro'>
      <form className='form-cadastro'>
        <label htmlFor='email'>E-mail:</label>
        <input type='email' name='email' placeholder='Digite seu e-mail' />
        <label htmlFor='nome'>Nome:</label>
        <input type='text' name='nome' placeholder='Digite seu nome e sobrenome' />
        <label htmlFor='telefone'>Telefone:</label>
        <input type='text' name='telefone' placeholder='Digite seu número de telefone' />
        <label htmlFor='senha'>Senha:</label>
        <input type='password' name='senha' placeholder='Digite sua senha' />
        <label htmlFor='data'>Data de nascimento:</label>
        <input type='date' name='data' />
        <label htmlFor='role'>Função:</label>
        <select name='role'>
          <option value='admin'>Administrador</option>
          <option value='user'>Usuário</option>
        </select>
        <div className='container-botao'>
          <button type='submit' className='cadastro-btn'>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
export default Cadastro;
