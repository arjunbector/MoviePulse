import { useLockBodyScroll } from "@uidotdev/usehooks";
import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  useLockBodyScroll();

  return (
    <div
      className={`fixed z-50 inset-0 overflow-hidden flex justify-center items-center`}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
      <div className="z-50">
        <InfinitySpin
          visible={true}
          width="200"
          color="#EF4444"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    </div>
  );
}
