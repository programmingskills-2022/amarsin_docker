import IconlyBase from "./IconlyBase";

type Props = {
  className: string;
};

export default function IconlyTickSquare({ className }: Props) {
  return (
    <IconlyBase className={className}>
      <g id="Iconly/Regular/Light/Tick Square">
        <g id="Tick Square">
          <path
            id="Stroke 1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.3344 2.75034H7.66537C4.64437 2.75034 2.75037 4.88934 2.75037 7.91634V16.0843C2.75037 19.1113 4.63537 21.2503 7.66537 21.2503H16.3334C19.3644 21.2503 21.2504 19.1113 21.2504 16.0843V7.91634C21.2504 4.88934 19.3644 2.75034 16.3344 2.75034Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3"
            d="M8.43982 12.0003L10.8138 14.3733L15.5598 9.62735"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </IconlyBase>
  );
}
