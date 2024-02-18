export default function Account() {
  const username = localStorage.getItem("username");
  return (
    <div className="flex gap-2 items-center">
      <div className="font-bold w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center">
        <p className="uppercase">{username[0]}</p>
      </div>
      <div className="capitalize">{username}</div>
    </div>
  );
}
