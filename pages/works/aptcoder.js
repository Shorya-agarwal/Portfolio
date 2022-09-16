import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Aptcoder">
      <Container>
        <Title>
          Full Stack Developer Intern <Badge>May 2022 - Present</Badge>
        </Title>
        <P>
          It&apos;s an Ed-Tech StartUp by IIT Bombay and IIM Lucknow Alumunus.They Focus on teaching coding to school students with a staff of around 15-30 people.
        </P>
        <P>
<br/>• Created and Maintained a LMS website for 500+ registered students. <br/>
          • Using Django to connect with SQL back‑end with SQL Server.<br/>
• The web‑page is made out of ReactJS with UI elements from
Materialize.<br/>
• Working with the data science team , implemented different machine learning models and algorithms for integrating in the website.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://aptcoder.com/">
            https://aptcoder.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Technologies Used</Meta>
            <span>Django , Python , Wordpress , React Js , Node JS</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/apt1.png" alt="Inkdrop" />
        <WorkImage src="/images/works/apt2.png" alt="Inkdrop" />
        <WorkImage src="/images/works/apt3.png" alt="Inkdrop" />
        {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  