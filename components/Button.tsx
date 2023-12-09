import { useRouter } from "next/router";

interface Props {
  add: string;
  href: string;
}

const Button = ({ add, href }: Props) => {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className="text-xl border-blue-400 border-2 text-blue-400 rounded m-4 p-4 w-56"
    >
      {add}
    </button>
  );
};
export default Button;
