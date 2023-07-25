import Button from "@/app/ui/Button";
import Card from "@/app/ui/Card";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-4 custom-height">
      <Card>
        <p>صفحه مورد نظر یافت نشد</p>
        <Link href="/">
          <Button onClick={() => {}}>بازگشت</Button>
        </Link>
      </Card>
    </div>
  );
}
