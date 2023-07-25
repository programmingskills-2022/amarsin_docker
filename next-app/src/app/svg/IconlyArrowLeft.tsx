import IconlyBase from "./IconlyBase";

type Props = {
  className: string;
};

export default function IconlyArrrowLeft({ className }: Props) {
  return (
    <IconlyBase className={className}>
      <path
        d="M15.5 19.0001L8.5 12.0001L15.5 5.00012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconlyBase>
  );
}
