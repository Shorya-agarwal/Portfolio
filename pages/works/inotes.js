import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="iNotes">
    <Container>
      <Title>
        iNotes <Badge>March , 2022</Badge>
      </Title>
      <P>A full stack app where you can store your notes on cloud.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEbApp deployed on Heroku</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MongoDB, ReactJS, Node Js </span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://shorya-notesapp.herokuapp.com/">
            Deployed Version
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Git repo</Meta>
          <Link href="https://github.com/Shorya-agarwal/Notes-IE">
            github.com/Shorya-agarwal
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Divider my={6} />
      <WorkImage src="/images/works/in1.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/in2.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/in3.png" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
