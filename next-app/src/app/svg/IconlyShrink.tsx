import IconlyBase from "./IconlyBase";

type Props = {
  className: string;
};

export default function IconlyShrink({ className }: Props) {
  return (
    <IconlyBase className={className}>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>i</title>
        <g id="Complete">
          <g id="shrink">
            <g>
              <polyline
                id="Right-2"
                data-name="Right"
                points="10 17.7 10 14 6.3 14"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polyline>
              <line
                x1="3"
                y1="21"
                x2="9.2"
                y2="14.8"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></line>
              <polyline
                id="Right-3"
                data-name="Right"
                points="14 6.3 14 10 17.7 10"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polyline>
              <line
                x1="21"
                y1="3"
                x2="14.8"
                y2="9.2"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></line>
            </g>
          </g>
        </g>
      </g>
    </IconlyBase>
  );
}
