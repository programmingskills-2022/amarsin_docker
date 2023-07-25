import IconlyBase from "./IconlyBase";

type Props = {
  className: string;
};

export default function IconlyMoon({ className }: Props) {
  return (
    <IconlyBase className={className}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.50009 12.0008C7.49604 10.6271 7.87712 9.2798 8.60009 8.11177C9.30106 6.97733 10.3262 6.07929 11.5431 5.53377C12.7306 5.00425 14.0552 4.86422 15.3271 5.13377L15.5091 5.17577C14.7053 5.71232 14.0258 6.41473 13.5161 7.23577C12.7931 8.4038 12.412 9.7511 12.4161 11.1248C12.4068 12.9579 13.0921 14.7265 14.3341 16.0748C15.1848 16.9942 16.285 17.6458 17.5001 17.9498C16.4784 18.6323 15.2778 18.9979 14.0491 19.0008C12.2877 18.9902 10.6101 18.2475 9.41809 16.9508C8.17612 15.6025 7.49083 13.8339 7.50009 12.0008Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </IconlyBase>
  );
}
