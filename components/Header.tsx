const Header = () => {
  //className="absolute top-0 left-0"
  return (
    <header className="bg-blue-400 text-blue-50 h-36 flex flex-col justify-between pb-3 w-full">
      <h1 className="text-3xl">chop money</h1>
      <div className="flex flex-col gap-2">
        <div className="flex pl-4">
          <p className="text-2xl">グループ名</p>
        </div>
        <div className="flex pl-4">
          <p className="text-base">ユーザーA・ユーザーB</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
