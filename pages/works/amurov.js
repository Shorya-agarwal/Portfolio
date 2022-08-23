import {
  Container,
  Badge,
  Link,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage} from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="AMUROVc">
    <Container>
      <Title>
        AMUROVc <Badge>April , 2022</Badge>
      </Title>
      <P>
        It was national level underwater robotics challenge organized by Marine Technology Society , AUV - ZHCET 
        collaboration with IEEE student Branch AMU. I with a team of 5 participated in it and got rank 1 competing against more than 10 teams comes across India. 
      </P>
      <P>
        I was the team lead and working on the control, network and computer part.
        There were two people in the computer team including me , 2 in mechanical team and 1 in electronics team.
        Uses Raspberry Pi as a microcontroller for controlling the thrusters and various sensors.
      </P>


      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.mtsauvzhcet.com/index.html">
            <Badge mr={2}>Website</Badge>
            AUV - ZHCET
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>Detailed Report of my work in team</Badge>
            Computer team Work Report. 
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://twitter.com/AMUofficialPRO/status/1522196859594305537?t=DKkgsMjjvsfHKAQ4urlrDQ&s=08">
            <Badge mr={2}>Twitter</Badge>
            Twitter News
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>AMU News</Badge>
          <Link href="https://www.amu.ac.in/news/2022/05/05/team-pluz-ultraz-and-team-hustlers-win-rov-challenge">
            Media
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/works/rovc1.jpg" alt="walknote" />
      <WorkImage src="/images/works/rovc2.jpg" alt="walknote" />
      <WorkImage src="/images/works/rovc3.jpg" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
