import Skeleton from "./components/Skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  let skeletonCards = Array(1).fill(0);
  return (
    <div className="custom-height max-w-2xl mx-auto flex flex-col justify-center items-center gap-4">
      {skeletonCards.map((index: number) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
}
