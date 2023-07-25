"use client";

import Button from "./ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex flex-col justify-center items-center gap-4 p-4">
        <h2 className="text-2xl">سرور پاسخ نمی دهد</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}
