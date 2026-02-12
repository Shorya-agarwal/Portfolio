import { Container, Heading, Divider, Box, Text, Badge, Stack, UnorderedList, ListItem } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const ExperienceItem = ({ company, role, timeline, vibe, narrative, details }) => (
  <Box mb={10}>
    <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="baseline" mb={2}>
      <Heading as="h3" variant="section-title" fontSize="xl" mb={0}>
        {company}
      </Heading>
      <Badge colorScheme="teal" fontSize="0.9em">{timeline}</Badge>
    </Stack>
    <Text fontSize="lg" fontWeight="bold" color="teal.300" mb={2}>
      {role}
    </Text>

    <Box p={4} bg="whiteAlpha.100" borderRadius="lg" mb={4}>
      <Text fontStyle="italic" mb={2} color="gray.400">&quot;{vibe}&quot;</Text>
      <Text fontWeight="semibold" mb={2}>{narrative}</Text>
    </Box>

    <Box pl={4} borderLeft="4px" borderColor="teal.500">
      <Heading as="h4" fontSize="md" mb={2}>Deep Dive Details:</Heading>
      <UnorderedList spacing={2}>
        {details.map((detail, index) => (
          <ListItem key={index}>
            <Text as="span" fontWeight="bold">{detail.title}:</Text> {detail.content}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  </Box>
)

const Experience = () => (
  <Layout title="Professional Experience">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={6}>
        Professional Experience
      </Heading>

      <Section delay={0.1}>
        <ExperienceItem
          company="Texas A&M University"
          role="Graduate Research Assistant (Technical Lead)"
          timeline="Sep 2024 – Present"
          vibe="High-stakes cybersecurity research for the Navy. Managing scale, AI, and critical infrastructure."
          narrative="Serving as Technical Lead for a $600k Office of Naval Research grant. Developing an automated framework using LLMs (Llama-based) to detect Zero-Day vulnerabilities in Programmable Logic Controllers (PLCs)."
          details={[
            { title: "Project 'OpsGuard' (The ONR Grant)", content: "Developing an automated framework using LLMs (Llama-based) to detect Zero-Day vulnerabilities in Programmable Logic Controllers (PLCs)." },
            { title: "Infrastructure", content: "Architected the AWS data pipeline that ingests 1 million+ legacy logs daily. Replaced manual CSV parsing with automated Python ETL scripts, reducing data lag by 40%." },
            { title: "Fine-Tuning", content: "Implemented LoRA adapters to fine-tune open-source models on industrial code (Structured Text/Ladder Logic), improving detection accuracy for SCADA systems." }
          ]}
        />
      </Section>

      <Divider my={6} />

      <Section delay={0.2}>
        <ExperienceItem
          company="Sofyrus Technologies"
          role="Software Developer"
          timeline="Jan 2024 – Aug 2024"
          vibe="Fast-paced B2B SaaS startup. Shipping features daily. Full-stack responsibility."
          narrative="You built 'Robonito,' an RPA (Robotic Process Automation) platform that helps businesses automate boring tasks."
          details={[
            { title: "Frontend Architecture", content: "Migrated a legacy dashboard to React + TypeScript. Established the ESLint/Prettier standard for a 50k+ LOC codebase." },
            { title: "Performance", content: "Implemented code-splitting and lazy loading which improved Time-to-Interactive (TTI) by 200ms." },
            { title: "Backend Integration", content: "Built the integration layer connecting 5+ external vendor APIs (Salesforce, HubSpot, etc.) into the main platform." },
            { title: "Impact", content: "Your automated testing scripts increased the entire engineering team's deployment velocity by 20%." }
          ]}
        />
      </Section>

      <Divider my={6} />

      <Section delay={0.3}>
        <ExperienceItem
          company="Engineering & Environmental Solutions"
          role="Software Integration Developer"
          timeline="Dec 2022 – Nov 2023"
          vibe="IoT, Hardware, and Data Security."
          narrative="Connecting the physical world (sensors) to the cloud (SQL Server)."
          details={[
            { title: "IoT Ingestion", content: "Built the backend to ingest real-time data from 500+ remote environmental sensors directly into SQL Server." },
            { title: "Security", content: "Implemented Role-Based Access Control (RBAC) at the database level to ensure data compliance for government clients." },
            { title: "Visualization", content: "Created real-time dashboards that allowed field engineers to monitor air quality remotely, reducing site visits by 40%." }
          ]}
        />
      </Section>

    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../components/chakra'
