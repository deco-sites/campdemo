import { asset, Head } from "$fresh/runtime.ts";
import { ToastContainer, TypeOptions } from "react-toastify";

const ToastContainerComponent = ToastContainer as any;

const CloseButton = (
  { closeToast }: {
    closeToast: (e: MouseEvent) => void;
  },
) => (
    <span>X</span>
);

const contextClass = {
  success: "bg-positive-900",
  error: "bg-critical-900",
  info: "bg-base-700",
  warning: "bg-warning-900",
  default: "bg-base-700",
  dark: "bg-base-700",
};

export default function ToastStack() {
  return (
    <div>
      <Head>
        <link href={asset("/ReactToastify.minimal.css")} rel="stylesheet" />
      </Head>
      <ToastContainerComponent
        closeButton={CloseButton}
        className="flex flex-col items-center z-50"
        toastClassName={({ type }: { type?: TypeOptions }) =>
          contextClass[type || "default"] +
          `  center 
          flex max-w-lg 
          break-words
          w-fit py-2 px-4 rounded-lg m-3 shadow-lg justify-center items-center overflow-hidden cursor-pointer`}
        bodyClassName="text-base-000 text-body-regular font-body-regular p-0 pr-4"
        icon={false}
        limit={3}
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </div>
  );
}