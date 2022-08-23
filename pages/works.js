import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Ilogo from '../public/images/internlogo.jpg'
import thumbrov from '../public/images/works/rovc4.jpeg'
import thumbnote from '../public/images/inotes.png'
import thumbface from '../public/images/face.jpg'
import thumbtime from '../public/images/ttg.png'

const Works = () => (
  <Layout title="Works">
    <Container maxW  = 'container.sm'>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="aptcoder" title="Internship" thumbnail={Ilogo}>
            Works as a Full Stack Developer Intern there. Started in May-2022 to Present.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="amurov"
            title="AMUROVc"
            thumbnail={thumbrov}
          >
            A National Level Underwater Robotics Challenge
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="timetable"
            title="Time Table Generator"
            thumbnail={thumbtime}
          >
            Automatic Time table generator Using Genetic Algorithm.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="facerecognizer" thumbnail={thumbface} title="Face-Detector">
          A Web app using react for live face detection
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="inotes"
            title="iNotes"
            thumbnail={thumbnote}
          >
            A Notes app where you can store your notes on the cloud developed on MERN Stack.
          </WorkGridItem>
          </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

      </Section>

     
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
