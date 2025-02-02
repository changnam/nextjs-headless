'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Transition, TransitionChild } from '@headlessui/react'
import { forwardRef,useState } from 'react'

let MyCustomButton = forwardRef(function (props, ref) {
  return <button className="..." ref={ref} {...props} />
})

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <div>
    <Menu>
      <MenuButton as={MyCustomButton}>My account</MenuButton>
      <MenuItems anchor="bottom" as="section">
        <MenuItem as="a" className="block data-[focus]:bg-blue-100" href="/settings">
          Settings
        </MenuItem>
        <MenuItem as="a" className="block data-[focus]:bg-blue-100" href="/support">
          Support
        </MenuItem>
        <MenuItem as="a" className="block data-[focus]:bg-blue-100" href="/license">
          License
        </MenuItem>
      </MenuItems>
    </Menu>
    </div>
    <button onClick={() => setOpen(true)}>Sidebar Open</button>
      {/* The `show` prop controls all nested `TransitionChild` components. */}
      <Transition show={open}>
        {/* Backdrop */}
        <TransitionChild>
          <div
            className="fixed inset-0 bg-black/30 transition duration-300 data-[closed]:opacity-0"
            onClick={() => setOpen(false)}
          />
        </TransitionChild>

        {/* Slide-in sidebar */}
        <TransitionChild>
          <div className="fixed inset-y-0 left-0 w-64 bg-white transition duration-300 data-[closed]:-translate-x-full">
            {/* ... */}
          </div>
        </TransitionChild>
      </Transition>
    </>
  )
}