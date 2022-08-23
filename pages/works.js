import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Ilogo from '../public/images/internlogo.jpg'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbrov from '../public/images/works/rovc4.jpeg'
import thumbnote from '../public/images/inotes.png'
import thumbface from '../public/images/face.jpg'

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
            thumbnail={thumbFourPainters}
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
{/* 
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      <Section delay={0.4}>
        <Divider my={6} />

        {/* <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading> */}
      </Section>

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
