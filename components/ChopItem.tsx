const ChopItem = () => {
  return (
    <div className="flex">
      <div className="flex-auto">
        <p>植物園</p>
        <p>ユーザーBが立替え</p>
        <p>(12/08)</p>
      </div>
      <div className="flex items-center">
        <p className="flex-auto">¥1,360</p>
      </div>
      <button className="flex-auto">修正</button>
    </div>
  );
};
export default ChopItem;
