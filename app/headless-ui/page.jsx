import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Example() {
  return (
    <Menu>
      <MenuButton>My account</MenuButton>
      <MenuItems anchor="bottom" className="w-96">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}