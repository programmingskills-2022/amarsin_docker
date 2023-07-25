"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="p-4 custom-height">
      <Card>
        <h2 className="">سرور پاسخ نمی دهد</h2>
        <div>
          <Button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            تلاش مجدد
          </Button>
        </div>
        <p className="pt-8">
          <Link href="/" className="underline">
            بازگشت به خانه
          </Link>
        </p>
      </Card>
    </div>
  );
}
