import Header from "@/components/Header";
import { fetchUserTable } from "@/lib/supabaseFunctions";
import { useEffect, useState } from "react";

const NewGroup = () => {
  // fetchUserTable();
  const [userTable, setUserTable] = useState<object[]>([]);
  const [groupName, setGroupName] = useState("");
  const [userNames, setUserNames] = useState<string[]>([]);
  const [currentName, setCurrentName] = useState("");
  useEffect(() => {
    (async () => {
      const result = await fetchUserTable();
      console.log(result);
      console.log(typeof result);
      // setUserTable(result);
    })();
  }, []);
  const addUserName = (name: string) => {
    if (userNames.length) {
      setUserNames([...userNames, currentName]);
    } else {
      setUserNames([currentName]);
    }
  };
  const handleClick = () => {
    setUserNames(
      userNames.filter((name) => name !== userNames[userNames.length - 1])
    );
  };

  return (
    <>
      <Header />
      <div className="flex flex-col p-3">
        <p className="p-3">グループ名</p>
        <input
          onChange={(e) => setGroupName(e.target.value)}
          type="text"
          placeholder="北海道旅行"
          className="input input-bordered w-full max-w-xs flex-auto p-3"
        />
        <p className="p-3">メンバー名</p>
        <div className="flex ">
          <input
            onChange={(e) => setCurrentName(e.target.value)}
            type="text"
            placeholder="こたろう"
            className="input input-bordered w-full max-w-xs flex-auto"
          />
          <button className="btn" onClick={(e) => addUserName(currentName)}>
            追加
          </button>
        </div>
        <button
          className="btn btn-circle btn-outline m-1 "
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>{" "}
        {userNames.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
        <button className="btn w-full mt-5">グループを作成</button>
      </div>
    </>
  );
};
export default NewGroup;
