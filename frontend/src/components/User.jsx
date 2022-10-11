const User = ({ user, pk }) => {
  return (
    <div>
      <h4 className="name">{user.pk}</h4>
      <h4 className="name">{pk}</h4>
    </div>
  );
};

export default User;
