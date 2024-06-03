import { User } from '../interfaces';

interface Props {
  user: User;
}

const UserRow = ({ user }: Props) => {
  const { avatar, first_name, last_name, email } = user;

  return (
    <tr>
      <td><img style={{ width: '66px' }} src={avatar} alt="User avatar" /></td>
      <td>{first_name} {last_name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UserRow;
