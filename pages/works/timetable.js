import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="TTG ">
    <Container>
      <Title>
        Time Table Generator <Badge>Aug , 2020</Badge>
      </Title>
      <P>
        An automatic time table generator in Python. Where there are some real constraints including no two teachers can take the same class or different class in the same room. A teacher can't be in two classes at the same time etc ... <br/>
        It's a terminal Python program which prints the most optimized time table.
        I have started working it to take it next level by adding user interface to it and probably putting it on web and deploying it.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python , Genetic Algorithm</span>
        </ListItem>
        <ListItem>
          <Meta>Git - repo link</Meta>
          <Link href="https://github.com/Shorya-agarwal/timetablegenerator">
            Source code <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
 
      </List>

      {/* <Box>
        <iframe
          src="https://player.vimeo.com/video/146373709"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box> */}
   <Divider my={6} />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
