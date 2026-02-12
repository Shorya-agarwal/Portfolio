import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Button,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { worksData } from '../../lib/works-data'
import { IoLogoGithub } from 'react-icons/io5'

const Work = ({ work }) => {
  if (!work) return null

  return (
    <Layout title={work.title}>
      <Container maxW="container.lg">
        <Title>
          {work.title} <Badge>{work.year}</Badge>
        </Title>
        <P>
          {work.description}
        </P>
        <P>
          {work.details}
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>{work.stack.join(', ')}</span>
          </ListItem>
          {work.repo && (
            <ListItem>
              <Meta>Source</Meta>
              <Link href={work.repo} target="_blank">
                {work.repo} <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          )}
        </List>

        {work.repo && (
            <Box align="center" my={6}>
                <Link href={work.repo} target="_blank">
                    <Button leftIcon={<IoLogoGithub />} colorScheme="teal">
                        View on GitHub
                    </Button>
                </Link>
            </Box>
        )}

        <WorkImage src={work.thumbnail} alt={work.title} />
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = worksData.map(work => ({
    params: { slug: work.id }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const work = worksData.find(w => w.id === params.slug)
  return { props: { work } }
}

export default Work
