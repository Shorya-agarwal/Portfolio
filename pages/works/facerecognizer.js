import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Face recognizer">
    <Container>
      <Title>
      Face Detector <Badge>July , 2022</Badge>
      </Title>
      <P>
       Face Detector is a web app based on react. Here the motive was to integrate tensorflow model or Python with React or any other frontend.<br/>
       I used tensorflowJs Library of Javascript to access the face recognition model of it than display it on the webPage after that i deployed it on Heroku.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, tensorflowJs, Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://facerecoganisation.herokuapp.com/">
          Face recognizer <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Git Repo Link</Meta>
          <Link href="https://github.com/Shorya-agarwal/facedetector-react">
            Source Code
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
