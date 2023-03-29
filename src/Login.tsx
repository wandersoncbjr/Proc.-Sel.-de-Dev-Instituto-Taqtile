import './Login.css';
import { useState } from 'react';
import React from 'react';

function Login() {
  const [mostraError, setMostraError] = useState(false);
  const [erros, setErros] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    function validacao(email: string, senha: string): string[] {
      const erros: string[] = [];

      if (!email) {
        erros.push('O e-mail é obrigatório.');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        erros.push('E-mail inválido.');
      }

      if (!senha) {
        erros.push('A senha é obrigatória.');
      } else if (senha.length < 7) {
        erros.push('A senha deve ter pelo menos 7 caracteres.');
      } else if (!/[a-zA-Z]/.test(senha) || !/\d/.test(senha)) {
        erros.push('A senha deve ter pelo menos uma letra e um dígito.');
      }

      return erros;
    }
    const erros = validacao(email, senha);
    if (erros.length > 0) {
      setErros(erros);
      setMostraError(true);
    } else {
      setMostraError(false);
    }
  }
  console.log(erros);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'senha') {
      setSenha(event.target.value);
    }
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='form-login'>
        <header>
          <h1>Bem vindo(a) à Taqtile!</h1>
        </header>
        {mostraError && (
          <div className='error-login'>
            <ul>
              {erros.map((erro) => (
                <li>{erro}</li>
              ))}
            </ul>
          </div>
        )}
        <label htmlFor='email'>E-mail</label>
        <input type='email' value={email} onChange={handleInputChange} name='email' placeholder='Digite seu e-mail' />
        <label htmlFor='senha'>Senha</label>
        <input type='password' value={senha} onChange={handleInputChange} name='senha' placeholder='Digite sua senha' />
        <input type='submit' value='Acessar' className='btn-login' />
      </form>
    </div>
  );
}

export default Login;
