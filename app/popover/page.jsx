import ReactPopover from "@/components/ReactPopover";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

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
      <Popover className="relative bg-indigo-500 px-4 py-1.5 border rounded text-white">
        <PopoverButton>Solutions</PopoverButton>
        <PopoverPanel anchor="bottom" className="flex flex-col">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default Page;