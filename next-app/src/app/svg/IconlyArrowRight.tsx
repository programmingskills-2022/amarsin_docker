import IconlyBase from "./IconlyBase";
type Props = { className: string };

export default function IconlyArrowRight({ className }: Props) {
  return (
    <IconlyBase className={className}>
      <path
        d="M8.5 5.00012L15.5 12.0001L8.5 19.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconlyBase>
  );
}
