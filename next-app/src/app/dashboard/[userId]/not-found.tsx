import Button from "@/app/ui/Button";
import Card from "@/app/ui/Card";
import Link from "next/link";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <div className="p-4 h-screen">
      <Card>
        <p>صفحه پروفایل کاربر یافت نشد</p>
        <Link href="/">
          <Button onClick={() => {}}>بازگشت</Button>
        </Link>
      </Card>
    </div>
  );
}
