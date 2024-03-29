import { useSelector } from "react-redux";

function Username({ children }) {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block md:text-3xl">
      {username}
    </div>
  );
}

export default Username;
