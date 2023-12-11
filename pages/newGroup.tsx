import Header from "@/components/Header";

const NewGroup = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col p-3">
        <p className="p-3">グループ名</p>
        <input
          type="text"
          placeholder="北海道旅行"
          className="input input-bordered w-full max-w-xs flex-auto p-3"
        />
        <p className="p-3">メンバー名</p>
        <div className="flex ">
          <input
            type="text"
            placeholder="こたろう"
            className="input input-bordered w-full max-w-xs flex-auto"
          />
          <button className="btn">追加</button>
        </div>
        <button className="btn btn-circle btn-outline m-1 ">
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
        <button className="btn w-full mt-5">グループを作成</button>
      </div>
    </>
  );
};
export default NewGroup;
