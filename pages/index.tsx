import Button from "@/components/Button";
import ChopItem from "@/components/ChopItem";
import Header from "@/components/Header";
import Results from "@/components/Results";

export default function Home() {
  return (
    <div className=" text-center font-mono">
    <Header />
    <Button href = "/inputPage" add ="立替え記録を追加"/>
    <ChopItem />
    <Button href = "" add ="明細を見る"/>
    <Results/>
    </div>
  )
}
