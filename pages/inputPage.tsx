import Header from "@/components/Header";

export default function inputPage() {
  const users = ["ユーザーA", "ユーザーB"]; 

  return (
    <div className="flex flex-col p-2 ">
      <Header />
      <div className="flex-auto p-2">
        <select className="select select-bordered w-40 max-w-xs">
          {users.map((user) => {
            return <option key={user}>{user}</option>;
          })}
        </select>
        <span>が</span>
      </div>
      <div className="flex p-2">
        <div className="flex-auto">
          <input type="checkbox" className="checkbox" />
          <span>ユーザーA</span>
        </div>
        <div className="flex-auto">
          <input type="checkbox" className="checkbox" />
          <span>ユーザーB</span>
        </div>
      </div>
      <div className="flex items-center p-2">
        <p className="flex-initial p-2">の</p>
        <input
          type="text"
          placeholder="居酒屋"
          className="input input-bordered w-40 max-w-xs flex-auto"
        />
        <p className="flex-auto p-2">を払って、</p>
      </div>
      <div className="flex items-center p-2">
        <input
          type="text"
          placeholder="金額"
          className="input input-bordered w-40 max-w-xs"
        />{" "}
        <p className="p-2">かかった。</p>
      </div>
      <button className="btn btn-neutral m-2">登録</button>{" "}
      <button className="btn btn-neutral m-2">戻る</button>{" "}
    </div>
  );
}
