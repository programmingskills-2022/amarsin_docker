import Link from "next/link";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function Dashboard() {
  const temp = Array(4).fill(0);
  return (
    <div className="p-2 md:p-4 w-full flex flex-col gap-2 md:gap-4 md:flex-row items-start justify-start">
      {temp.map((index: number) => (
        <Card>
          <h1> به نرم افزار حسابداری داتیس خوش آمدید</h1>
          <Button onClick={() => {}}>
            <Link href="/">بازگشت</Link>
          </Button>
        </Card>
      ))}
    </div>
  );
}
