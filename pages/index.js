import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="container.lg">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Software Engineer & Distributed Systems Researcher!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Shorya Agarwal
          </Heading>
          <p>Software Engineer | Full-Stack Development & Distributed Systems</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="180px"
            h="180px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/341_2.jpg"
              alt="Profile image"
              borderRadius="full"
              width="200%"
              height="200%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I&apos;ma Master&apos;s student in Computer Engineering at Texas A&M University with a strong focus on Distributed Systems, High-Performance Computing, and AI.
          I have experience in full-stack development, having built scalable applications and critical infrastructure.
          Currently, I&apos;m conducting high-stakes cybersecurity research for the Navy and for my thesis, developing automated frameworks to detect Zero-Day vulnerabilities in industrial control systems.
          He has a knack for solving real-life problems with code, from robotics to enterprise data pipelines.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/experience" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" mr={4}>
              Professional Experience
            </Button>
          </NextLink>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} variant="outline" colorScheme="teal">
              View Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2026</BioYear>
          (Expected) Master of Science in Computer Engineering from Texas A&M University (Current GPA: 3.65/4.00).
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Completed Bachelor of Technology in Computer Science and Engineering from Aligarh Muslim University (GPA: 3.65/4.00).
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Won National Level Underwate Robotics Challenge competing among 12 teams coming from different Universities Nationwide
        </BioSection>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Aligarh, Uttar Pradesh, India.
        </BioSection>
        
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Distributed Systems, Robotics, Machine Learning, Photography, Movies, Music.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Shorya-agarwal" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Shorya-agarwal
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/shoryaag" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @shoryaag
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/shorya_agarwal_/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @shorya_agarwal_
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
