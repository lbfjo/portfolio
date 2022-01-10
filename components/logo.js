import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
  const rugbyBallImg = `/images/rugbyball${useColorModeValue('-dark', '')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={rugbyBallImg} width={18} height={18} alt="logo" />
          <Text
            ml={2}
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
          >
            Francisco Bruno
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo