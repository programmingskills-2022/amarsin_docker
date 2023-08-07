import SkeletonTable from "@/app/general/SkeletonTable";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="custom-height max-w-2xl mx-auto flex flex-col justify-start items-start p-8 gap-4">
      <SkeletonTable />
    </div>
  );
}
