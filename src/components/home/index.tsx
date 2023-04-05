import { useNavigate } from 'react-router-dom';
import './index.css';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query Users {
    users {
      nodes {
        id
        name
        phone
        email
        birthDate
      }
    }
  }
`;
interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  birthDate: string;
}
function Logado() {
  const token = localStorage.getItem('token');

  const navigate = useNavigate();
  const { data } = useQuery(GET_USERS, {
    variables: {},
    context: {
      headers: {
        Authorization: `${token}`,
      },
    },
  });

  if (!token) {
    navigate('/login');
  }

  return (
    <div className='container-logado'>
      {data?.users?.nodes?.map((data: User) => (
        <div className='item-logado'>
          <p>Nome: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>ID: {data.id}</p>
          <p>Telefone: {data.phone}</p>
          <p>data de nascimento: {data.birthDate}</p>
        </div>
      ))}
    </div>
  );
}
export default Logado;
