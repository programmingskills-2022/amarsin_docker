import IconlyBase from "./IconlyBase";

type Props = {
  className: string;
};

export default function IconlyClose({ className }: Props) {
  return (
    <IconlyBase className={className}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.7062 10.1294L9.85351 15.982L8.79285 14.9214L14.6455 9.06873L15.7062 10.1294Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.84971 9.06677L15.7063 14.9245L14.6455 15.9851L8.78894 10.1273L9.84971 9.06677Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.25 12.5347C2.25 7.01182 6.72715 2.53467 12.25 2.53467C17.7728 2.53467 22.25 7.01182 22.25 12.5347C22.25 18.0575 17.7728 22.5347 12.25 22.5347C6.72715 22.5347 2.25 18.0575 2.25 12.5347ZM12.25 4.03467C7.55558 4.03467 3.75 7.84025 3.75 12.5347C3.75 17.2291 7.55558 21.0347 12.25 21.0347C16.9444 21.0347 20.75 17.2291 20.75 12.5347C20.75 7.84025 16.9444 4.03467 12.25 4.03467Z"
        fill="currentColor"
      />
    </IconlyBase>
  );
}
