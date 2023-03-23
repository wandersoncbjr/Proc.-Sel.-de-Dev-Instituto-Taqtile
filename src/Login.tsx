import './Login.css';

function Login() {
  return (
    <div className='Login'>
      <form method='POST' className='formLogin'>
        <header className='Login-header'>
          <h1>Bem vindo(a) à Taqtile!</h1>
        </header>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='Digite seu e-mail' />
        <label htmlFor='password'>Senha</label>
        <input type='password' placeholder='Digite seu e-mail' />
        <input type='submit' value='Acessar' className='btn' />
      </form>
    </div>
  );
}

export default Login;
