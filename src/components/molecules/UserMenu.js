import { Text, MenuItem } from 'components/atoms'
import { Avatar, Flex, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { BsBookmarkHeart } from 'react-icons/bs'
import { LiaUser } from 'react-icons/lia'
import { GoShieldCheck } from 'react-icons/go'
import {
  HiOutlineClipboardList,
  HiOutlineDocumentText,
  HiOutlineLogout
} from 'react-icons/hi'

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user)

  const menuOprtions = [
    {
      id: 0,
      icon: BsBookmarkHeart,
      text: 'Favoritos',
      divider: false
    },
    {
      id: 1,
      icon: LiaUser,
      text: 'Dados Pessoais',
      divider: false
    },
    {
      id: 2,
      icon: GoShieldCheck,
      text: 'Alterar Senha',
      divider: true
    },
    {
      id: 3,
      icon: HiOutlineDocumentText,
      text: 'Termo de Uso',
      divider: false
    },
    {
      id: 4,
      icon: HiOutlineClipboardList,
      text: 'Política de Privacidade',
      divider: true
    },
    {
      id: 5,
      icon: HiOutlineLogout,
      text: 'Logout',
      divider: false
    }
  ]

  return (
    <Menu>
      <MenuButton>
        <Flex flexDir="row" alignItems="center" justifyContent="center">
          <Avatar
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            size="md"
            borderWidth="2px"
            borderColor="brand.primary"
            bg="brand.greyLigth"
            mr="12px"
          />
          <Text fontWeigth="bold" maxLength="40px">
            {userStore?.user?.name}
          </Text>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList>
        {menuOprtions.map((item) => (
          <MenuItem key={`menu_item_${item.id}`} {...item} />
        ))}
      </MenuList>
    </Menu>
  )
}
