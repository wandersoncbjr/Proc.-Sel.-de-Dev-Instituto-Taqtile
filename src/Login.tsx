import './Login.css';

function Login() {
  return (
    <div className='login-container'>
      <form method='POST' className='form-login'>
        <header>
          <h1>Bem vindo(a) à Taqtile!</h1>
        </header>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='Digite seu e-mail' />
        <label htmlFor='password'>Senha</label>
        <input type='password' placeholder='Digite seu e-mail' />
        <input type='submit' value='Acessar' className='btn-login' />
      </form>
    </div>
  );
}

export default Login;
