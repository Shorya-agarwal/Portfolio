import { Container, Heading, SimpleGrid, Divider, Box, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { worksData } from '../lib/works-data'

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {worksData.map((work, index) => (
          <Section delay={index * 0.1} key={work.id}>
            <WorkGridItem id={work.id} title={work.title} thumbnail={work.thumbnail}>
              {work.description}
            </WorkGridItem>
            <Box mt={2}>
              {work.highlights?.map(highlights => (
                <Text key={highlights} as="span" fontSize="xs" color="gray.500" mr={2}>
                  {highlights}
                </Text> 
              ))}
            </Box>
            <Box mt={2}>
              {work.stack.map(tech => (
                <Text key={tech} as="span" fontSize="xs" color="gray.500" mr={2}>
                  #{tech}
                </Text>
              ))}
            </Box>
          </Section>
        ))}
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
