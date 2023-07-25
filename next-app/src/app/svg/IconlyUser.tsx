import IconlyBase from "./IconlyBase";

type Props = {
  className: string;
};

export default function IconlyUser({ className }: Props) {
  return (
    <IconlyBase className={className}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="12" cy="6" r="4" fill="currentColor"></circle>
        <path
          opacity="0.5"
          d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
          color="currentColor"
        ></path>
      </g>
    </IconlyBase>
  );
}
