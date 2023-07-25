import Image from "next/image";

export default function LogoAmarsin() {
  const appName: string = "آمارسین";
  const appDescription: string = "نرم افزار جامع حسابداری داتیس";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between ">
        <label className="text-2xl">{appName}</label>
        <Image src="/images/operators.svg" alt="Logo" width={40} height={40} />
      </div>
      <label className="text-[10px]">{appDescription}</label>
    </div>
  );
}
