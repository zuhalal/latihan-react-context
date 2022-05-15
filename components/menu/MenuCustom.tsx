import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'

export const MenuCustom = ({
  label,
  items
}:any) => {
    return (
        <Menu>
        <MenuButton as={Button}>
          {label}
        </MenuButton>
        <MenuList>
          {items.map((item: any, index: number)=> {
            return(
              <div key={index}>
                <MenuItem>{item.item}</MenuItem>
              </div>
            )
          })}
        </MenuList>
      </Menu>
    )
}

