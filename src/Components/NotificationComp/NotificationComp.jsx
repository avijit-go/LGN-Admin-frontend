import React from 'react'
import {
    Box,
    Tr,
    Td,
    Img,Button, 
    Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';


const NotificationComp = ({data, index}) => {
  return (
    <>
        <Tr>
            <Td className='td'>{index + 1}</Td>
            <Td className='td'>{data.name}</Td>
            <Td className='td notification_decription'>{data.description}</Td>
        </Tr>
    </>
  )
}

export default NotificationComp