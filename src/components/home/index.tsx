import './index.css';

const usuarios = [
  { nome: 'Lara', email: 'lara@example.com' },
  { nome: 'Renato', email: 'renato@example.com' },
  { nome: 'Bianca', email: 'bianca@example.com' },
  { nome: 'Thiago', email: 'thiago@example.com' },
  { nome: 'Camila', email: 'camila@example.com' },
  { nome: 'Rafael', email: 'rafael@example.com' },
  { nome: 'Bruna', email: 'bruna@example.com' },
  { nome: 'Felipe', email: 'felipe@example.com' },
  { nome: 'Larissa', email: 'larissa@example.com' },
  { nome: 'Marcelo', email: 'marcelo@example.com' },
  { nome: 'Amanda', email: 'amanda@example.com' },
  { nome: 'Giovanni', email: 'giovanni@example.com' },
  { nome: 'Mariana', email: 'mariana@example.com' },
  { nome: 'Alexandre', email: 'alexandre@example.com' },
  { nome: 'Viviane', email: 'viviane@example.com' },
  { nome: 'Leonardo', email: 'leonardo@example.com' },
  { nome: 'Tatiana', email: 'tatiana@example.com' },
  { nome: 'Matheus', email: 'matheus@example.com' },
  { nome: 'Gabriela', email: 'gabriela@example.com' },
  { nome: 'Luiz', email: 'luiz@example.com' },
  { nome: 'Renata', email: 'renata@example.com' },
  { nome: 'Daniel', email: 'daniel@example.com' },
  { nome: 'Helena', email: 'helena@example.com' },
  { nome: 'Luciana', email: 'luciana@example.com' },
  { nome: 'Antônio', email: 'antonio@example.com' },
  { nome: 'Natália', email: 'natalia@example.com' },
  { nome: 'Roberto', email: 'roberto@example.com' },
  { nome: 'Márcia', email: 'marcia@example.com' },
  { nome: 'Diego', email: 'diego@example.com' },
  { nome: 'Fabiana', email: 'fabiana@example.com' },
  { nome: 'Daniel', email: 'daniel@example.com' },
  { nome: 'Helena', email: 'helena@example.com' },
  { nome: 'Luciana', email: 'luciana@example.com' },
  { nome: 'Antônio', email: 'antonio@example.com' },
  { nome: 'Natália', email: 'natalia@example.com' },
  { nome: 'Roberto', email: 'roberto@example.com' },
  { nome: 'Márcia', email: 'marcia@example.com' },
  { nome: 'Diego', email: 'diego@example.com' },
  { nome: 'Fabiana', email: 'fabiana@example.com' },
  { nome: 'Daniel', email: 'daniel@example.com' },
  { nome: 'Helena', email: 'helena@example.com' },
  { nome: 'Luciana', email: 'luciana@example.com' },
  { nome: 'Antônio', email: 'antonio@example.com' },
  { nome: 'Natália', email: 'natalia@example.com' },
  { nome: 'Roberto', email: 'roberto@example.com' },
  { nome: 'Márcia', email: 'marcia@example.com' },
  { nome: 'Diego', email: 'diego@example.com' },
  { nome: 'Fabiana', email: 'fabiana@example.com' },
];

function Logado() {
  return (
    <div className='container-logado'>
      {usuarios.map((usuario) => (
        <div className='item-logado'>
          <p>Nome: {usuario.nome}</p>
          <p>Email: {usuario.email}</p>
        </div>
      ))}
    </div>
  );
}
export default Logado;
