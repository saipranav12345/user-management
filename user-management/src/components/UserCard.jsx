const UserCard = ({ user, onEdit, onDelete }) => (
    <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow relative group">
      <p className="font-bold text-lg">Firstname:{user.firstname}</p>
      <p className="text-gray-600">Lastname: {user.lastname}</p>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Department: {user.department}</p>
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100">
        <button
          onClick={onEdit}
          className="p-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
  
  export default UserCard;
  