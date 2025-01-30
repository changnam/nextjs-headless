import ReactPopover from "@/components/ReactPopover";

const Page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-4">
      <ReactPopover
        content={
          <p>This Content Will be render in Popover.</p>
        }
      >
        <button className="bg-indigo-500 px-4 py-1.5 border rounded text-white">
          Click me
        </button>
      </ReactPopover>
      <ReactPopover
        trigger="hover"
        content={
          <p>This Content Will be render in Popover.</p>
        }
      >
        <button className="bg-indigo-500 px-4 py-1.5 border rounded text-white">
          Hover me
        </button>
      </ReactPopover>
    </div>
  );
};

export default Page;