'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { forwardRef } from 'react'

let MyCustomButton = forwardRef(function (props, ref) {
  return <button className="..." ref={ref} {...props} />
})

export default function Example() {
  return (
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
  )
}