'use client';

import ReactPopover from "@/components/ReactPopover";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

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
      <Popover className="relative ">
        <PopoverButton className="bg-blue-500 text-white px-4 py-2">Services</PopoverButton>
        <PopoverPanel anchor="bottom" className="absolute z-10 mt-2 bg-white border p-3 shadow-lg">
          <a href="/consulting">Consulting</a>
          <a href="/design">Design</a>
          <a href="/development">Development</a>
          <a href="/training">Training</a>
        </PopoverPanel>
      </Popover>
      <Dialog open={isOpen} onClose={()=> {}} className="relative z-50">
        <div className="fixed inset-0 bg-black/30"></div>
        <div className="fixed inset-0 flex justify-center items-center">
          <DialogPanel className="bg-white p-6 rounded">
            <DialogTitle>Dialog Title</DialogTitle>
            <p>Modal content here ...</p>
            <button onClick={closeModal} >Close</button>  
          </DialogPanel>
        </div>
      </Dialog>
      <button onClick={() => setIsOpen(true)} className="bg-red-500 px-4 py-2 text-white rounded">
        Open Modal
      </button>
    </div>
  );
};

export default Page;