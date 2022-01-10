import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Link,
  Container,
  Button,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
const Page = () => {
  return (
    <Container pt={14}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, i&apos;m a Software developer based in Portugal!
        <Box flexGrow={{ md: 'flex' }}></Box>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Francisco Bruno
          </Heading>
          <p>Software Developer and Rugby Player</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/franciscoBruno.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Francisco is a software engineer from Portugal who enjoys creating
          digital products. He holds a Bachelor's and Master's degree in
          Computer Science and Management, respectively, which led to a career
          as a software developer. He spends his free time playing rugby or
          learning to play the electric guitar.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Setúbal, Portugal.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at Kweeder, as a Software Developer Intern
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Bachelor&apos;s Program in Computer Science and
          Management at ISCTE - Lisboa
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started working at Accenture Portugal, as a Software Developer
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Master&apos;s Program in Computer Science and Management
          at ISCTE - Lisboa
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          <Link
            href="https://www.instagram.com/franciscobrunoxv/"
            target="_blank"
          >
            Rugby
          </Link>
          , Music, Gaming, Guitar
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
