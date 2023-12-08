interface Props{
    add : string;
}
const Button = ({add}: Props) => {
  return <button  className="text-xl border-blue-400 border-2 text-blue-400 rounded m-4 p-4 w-56">{add}</button>;
};
export default Button;
