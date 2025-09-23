import type { Metadata, Viewport } from "next";
import ProjectsHeader from "@/components/projectsheader";
import BackButton from "@/components/backbutton";
import ContentBlock from "@/components/contentblock";
import BroadImage from "@/components/broadimage";
import EditorBox from "@/components/editorbox";
import GradientHeading from "@/components/gradientheading";
import Image from "next/image";
import ScreenGallery from "@/components/screengallery";
import Button from "@/components/button";
import SingleScreenDisplay from "@/components/singlescreendisplay";
import ImageCarousel from "@/components/imagecarousel";
import ContactForm from "@/components/contactform";
import ImageViewer from "@/components/imageviewer";
import ExpandableImage from "@/components/expandableimage";
import AnimationWrapper from "@/components/animationwrapper";

export const metadata: Metadata = {
  title: "Centsible - Sarah Hägele Portfolio",
  description:
    "Detail page about the UX design project 'Centsible' by Sarah Hägele",
};

export const viewport: Viewport = {
  themeColor: "#322824",
};

const carouselImages = [
  "/centsible/mockups/centsible_main_mockup.png",
  "/centsible/mockups/centsible_main_mockup_2.png",
  "/centsible/mockups/centsible_main_mockup_3.png",
  "/centsible/mockups/centsible_main_mockup_4.png",
];

export default function Expenses() {
  return (
    <main>
      <ProjectsHeader heading="Centsible" />

      <div className="bg-extra-dark-choco -mb-25 overflow-x-hidden">
        <div className="mx-auto container flex flex-col items-center px-4 pt-4 pb-25 lg:px-16">
          <div className="w-full flex flex-col justify-center items-center">
            {/*----------- TAGLINE -----------*/}
            <h3 className="italic text-center">
              Improving the end-to-end expense management process by being bold
              and creative - leveraging the power of automation and AI.
            </h3>
            <BackButton text="Back to case studies" href="/#casestudies" />
          </div>

          {/*----------- OVERVIEW -----------*/}

          <GradientHeading text="overview" colourVariant="blue" />

          <AnimationWrapper>
            <div className="flex flex-row flex-wrap justify-center items-center mb-10">
              <Image
                src="/centsible/mockups/centsible_overview_mockup.png"
                alt="Illustration of a dementia carer"
                width={350}
                height={400}
                priority
                className="-mb-20 lg:-mb-10 lg:-mr-20 z-0 w-60 md:w-70 -rotate-15"
              />
              <div className="max-w-full lg:max-w-150 lg:max-h-300 z-1">
                <EditorBox>
                  <h3 className="font-bold">In a nutshell</h3>
                  <div className="max-w-prose space-y-3">
                    <p>
                      Between March and June 2025, I led a six-week group
                      project as part of my UX Design Master&apos;s at
                      Loughborough University. Partnered with MHR, a leading HR
                      and payroll solutions provider from Nottingham, our brief
                      was:
                    </p>
                    <h4>
                      &quot;Improve the end-to-end expense management process by
                      being bold and creative - leveraging the power of
                      automation and AI.&quot;
                    </h4>
                    <p>
                      Working in an agile team of six, I took on the role of
                      team leader, co-ordinator, and main client communicator. I
                      organised meetings, delegated tasks, and led all client
                      presentations, while also contributing to research
                      synthesis, ideation, and design development to create a
                      user-centred solution within a tight timeframe.
                    </p>
                  </div>
                </EditorBox>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex flex-col lg:flex-row flex-wrap justify-center items-start py-8">
              <div className="w-full lg:w-106 flex flex-row justify-center flex-wrap gap-3">
                <div className="w-35 lg:w-50 flex flex-col items-center gap-3">
                  <div className="relative flex justify-center items-center">
                    <ImageViewer
                      blobType={0}
                      fillColor="#6270D1"
                      disableExpand={true}
                      className="w-25 h-25"
                    >
                      <Image
                        src="/icons/schedule.png"
                        alt="Icon displaying a calendar"
                        width={90}
                        height={90}
                        priority
                        className=""
                      />
                    </ImageViewer>
                  </div>

                  <p className="text-center font-bold">6 weeks</p>
                </div>
                <div className="w-35 lg:w-50 flex flex-col items-center gap-3">
                  <ImageViewer
                    blobType={1}
                    fillColor="#DB6368"
                    disableExpand={true}
                    className="w-25 h-25"
                  >
                    <Image
                      src="/icons/businesswoman.png"
                      alt="Icon displaying a woman"
                      width={90}
                      height={90}
                      priority
                      className=""
                    />
                  </ImageViewer>
                  <p className="text-center font-bold">
                    Lead of a 6-person UX Team
                  </p>
                </div>
              </div>
              <div className="max-w-80 lg:w-50 flex flex-col items-center gap-3 my-5 lg:my-0">
                <ImageViewer
                  blobType={2}
                  fillColor="#6270D1"
                  disableExpand={true}
                  className="w-25 h-25"
                >
                  <Image
                    src="/icons/methods.png"
                    alt="Icon displaying half a lightbulb, where the other half is small gears and boxes"
                    width={90}
                    height={90}
                    priority
                    className=""
                  />
                </ImageViewer>
                <p className="text-center font-bold">
                  Secondary Research, Interviews, Affinity Mapping, Personas,
                  User Journey Maps, Prototyping, User Testing
                </p>
              </div>
              <div className="w-full lg:w-106 flex flex-row justify-center flex-wrap gap-3">
                <div className="w-35 lg:w-50 flex flex-col items-center gap-3">
                  <ImageViewer
                    blobType={3}
                    fillColor="#DB6368"
                    disableExpand={true}
                    className="w-25 h-25"
                  >
                    <Image
                      src="/icons/toolkit.png"
                      alt="Icon displaying a toolkit"
                      width={90}
                      height={90}
                      priority
                      className=""
                    />
                  </ImageViewer>
                  <p className="text-center font-bold">
                    Pen & Paper, Figjam, Figma, Miro, Microsoft Teams
                  </p>
                </div>
                <div className="w-35 lg:w-50 flex flex-col items-center gap-3">
                  <ImageViewer
                    blobType={4}
                    fillColor="#6270D1"
                    disableExpand={true}
                    className="w-25 h-25"
                  >
                    <Image
                      src="/icons/brief.png"
                      alt="Icon displaying a clipboard with 'Brief' written on it"
                      width={90}
                      height={90}
                      priority
                      className=""
                    />
                  </ImageViewer>
                  <p className="text-center font-bold">
                    Group Academic/Client Project
                  </p>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          {/*----------- INTRODUCTION -----------*/}

          <GradientHeading text="introduction" colourVariant="blue" />

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
              <h3 id="challenge">The Challenge</h3>
              <p>
                MHR tasked us with reimagining the expense management process
                from the ground up. Rather than improving existing software,
                they encouraged us to create a completely new solution,
                exploring how AI and automation could transform the experience
                for users.
              </p>
              <p>We focused on three key user groups:</p>
              <ul className="list-disc pl-5">
                <li className="text-[#6270D1]">
                  Employees who create and submit expense claims
                </li>
                <li className="text-[#6270D1]">
                  Managers who review and approve claims
                </li>
                <li className="text-[#6270D1]">
                  Finance teams who oversee policy adherence and report on
                  company expenses
                </li>
              </ul>
            </div>
            <EditorBox extraStyles="max-w-full lg:max-w-110">
              <h4>
                How might we improve the end-to-end expense management process
                by being bold and creative - leveraging the power of automation
                and AI?
              </h4>
            </EditorBox>
          </ContentBlock>

          <ContentBlock reverse={true} flipOnMobile={true}>
            <div className="max-w-prose space-y-3">
              <h3 id="approach">The Approach</h3>
              <p>
                We adopted an agile approach throughout this six-week project to
                ensure continuous progress and alignment with MHR&apos;s
                expectations. Each week, we held:
              </p>
              <ul className="list-disc pl-5">
                <li className="text-[#6270D1]">
                  Team meetings with ice breaker activities and retrospectives
                  to reflect on achievements, identify blockers, and plan
                  priorities for the next sprint.
                </li>
                <li className="text-[#6270D1]">
                  Progress meetings with the client, which I prepared and where
                  I presented our work, gathered feedback, and discussed the
                  best way forward.
                </li>
              </ul>
              <p>
                Our team, which we named OneDesign, used a range of
                collaborative tools including Figma, FigJam, Miro, Microsoft
                Teams, OneNote, and WhatsApp to support remote and in-person
                collaboration efficiently.
              </p>
              <p>
                As team leader, I facilitated meetings, maintained our project
                plan and timeline, and ensured tasks were delegated effectively
                based on individual strengths. I also put a big focus on good
                team morale by organising weekly emotional check-ins, two team
                socials, and peer evaluations to maintain a supportive,
                motivated working environment.
              </p>
            </div>
            <ImageViewer
              blobType={2}
              src="/centsible/photo_team.png"
              alt="Photo showing the OneDesign team"
              caption="The OneDesign team and their roles (photo taken at a team social that I organised)"
              className="w-70 h-70 lg:w-90 lg:h-90"
            />
          </ContentBlock>

          {/*----------- DISCOVER -----------*/}

          <GradientHeading text="discover" colourVariant="blue" />

          <ContentBlock reverse={false} alignCenter={false}>
            <div className="max-w-prose space-y-3">
              <h3 id="secondary-research">Secondary Research</h3>
              <p>
                To ensure our design decisions were grounded in real user needs,
                we began with secondary research, which allowed us to build
                foundational knowledge efficiently by dividing multiple research
                topics across the team.
              </p>
              <div className="flex flex-wrap justify-center items-start gap-5 mt-10">
                <div className="flex flex-col items-center gap-3 md:max-w-60">
                  <ImageViewer
                    blobType={1}
                    fillColor="#6270D1"
                    disableExpand={true}
                    className="w-35 h-35"
                  >
                    <Image
                      src="/icons/research.png"
                      alt="Icon displaying a a magnifying glass with some documents"
                      width={90}
                      height={90}
                      priority
                      className="w-25 h-25"
                    />
                  </ImageViewer>
                  <EditorBox>
                    <div className="space-y-3">
                      <h4 className="font-bold">Background Research</h4>
                      <p>
                        Understanding the expense management process, from the
                        point at which the expense occurs to the reimbursement,
                        with key stakeholders involved throughout process.
                      </p>
                    </div>
                  </EditorBox>
                </div>

                <div className="flex flex-col items-center gap-3 md:max-w-60">
                  <ImageViewer
                    blobType={2}
                    fillColor="#DB6368"
                    disableExpand={true}
                    className="w-35 h-35"
                  >
                    <Image
                      src="/icons/pain.png"
                      alt="Icon displaying a a magnifying glass with some documents"
                      width={90}
                      height={90}
                      priority
                      className="w-25 h-25"
                    />
                  </ImageViewer>
                  <EditorBox>
                    <div className="space-y-3">
                      <h4 className="font-bold">Common Pain Points</h4>
                      <p>
                        We started to see some key problem areas emerge around
                        lack of automation, long reimbursement processes and
                        heavy reliance on paper receipts.
                      </p>
                    </div>
                  </EditorBox>
                </div>
                <div className="flex flex-col items-center gap-3 md:max-w-60">
                  <ImageViewer
                    blobType={3}
                    fillColor="#6270D1"
                    disableExpand={true}
                    className="w-35 h-35"
                  >
                    <Image
                      src="/icons/competition.png"
                      alt="Icon displaying a a magnifying glass with some documents"
                      width={90}
                      height={90}
                      priority
                      className="w-25 h-25"
                    />
                  </ImageViewer>
                  <EditorBox>
                    <div className="space-y-3">
                      <h4 className="font-bold">Competitor Analysis</h4>
                      <p>
                        We analysed SAP Concur, Expensify, Zoho Expense, and
                        Rydoo and found them to have cluttered interfaces, steep
                        learning curves, minimal utilisation of AI and a lack of
                        a chat-first approach.
                      </p>
                    </div>
                  </EditorBox>
                </div>
                <div className="flex flex-col items-center gap-3 md:max-w-60">
                  <ImageViewer
                    blobType={4}
                    fillColor="#DB6368"
                    disableExpand={true}
                    className="w-35 h-35"
                  >
                    <Image
                      src="/icons/trend.png"
                      alt="Icon displaying a a magnifying glass with some documents"
                      width={90}
                      height={90}
                      priority
                      className="w-25 h-25"
                    />
                  </ImageViewer>
                  <EditorBox>
                    <div className="space-y-3">
                      <h4 className="font-bold">Technology and Trends</h4>
                      <p>
                        We saw potential for artificial intelligence and machine
                        learning to automate the expense management process and
                        to identify spending patterns and provide personalised
                        insights.
                      </p>
                    </div>
                  </EditorBox>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-prose space-y-3">
                <h3 id="primary-research">Primary Research</h3>
                <p>
                  The knowledge from our secondary research helped us plan what
                  we wanted to talk about with real target users. Considering
                  the short project timeframe, we opted for semi-structured
                  interviews only as they allowed us to explore predefined
                  topics that built upon our existing knowledge and assumptions
                  in greater detail, making the most out of the limited number
                  of participants and their availability as busy working
                  professionals. We ran eight semi-structured interviews in
                  total, splitting it up across two rounds.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-start gap-5 mt-10">
                <div className="flex flex-col items-center gap-3 md:max-w-60">
                  <ImageViewer
                    blobType={5}
                    fillColor="#6270D1"
                    disableExpand={true}
                    className="w-35 h-35"
                  >
                    <Image
                      src="/icons/interview.png"
                      alt="Icon displaying a a magnifying glass with some documents"
                      width={90}
                      height={90}
                      priority
                      className="w-25 h-25"
                    />
                  </ImageViewer>
                  <EditorBox>
                    <div className="space-y-3">
                      <h4 className="font-bold">Round 1</h4>
                      <p className="font-bold">
                        4 employees and 1 participant with both managerial and
                        finance team experience.
                      </p>
                      <p>
                        These interviews validated our secondary research
                        findings and gave us deeper insights into first-hand
                        challenges.
                      </p>
                    </div>
                  </EditorBox>
                </div>
                <div className="flex flex-col items-center gap-3 md:max-w-60">
                  <ImageViewer
                    blobType={1}
                    fillColor="#DB6368"
                    disableExpand={true}
                    className="w-35 h-35"
                  >
                    <Image
                      src="/icons/feedback_picker.png"
                      alt="Icon displaying a a magnifying glass with some documents"
                      width={90}
                      height={90}
                      priority
                      className="w-25 h-25"
                    />
                  </ImageViewer>
                  <EditorBox>
                    <div className="space-y-3">
                      <h4 className="font-bold">Round 2</h4>
                      <p className="font-bold">3 additional employees.</p>
                      <p>
                        By this stage, we had begun developing early concepts,
                        so we used these interviews to gather targeted feedback
                        on our initial ideas alongside exploring further user
                        needs.
                      </p>
                    </div>
                  </EditorBox>
                </div>
              </div>
            </div>
          </ContentBlock>

          {/*----------- DEFINE -----------*/}

          <GradientHeading text="define" colourVariant="blue" />

          <AnimationWrapper>
            <div className="flex items-center justify-center my-10">
              <div className="max-w-prose space-y-3">
                <h3 id="synthesis">Insight Synthesis</h3>
                <p>
                  To make sense of all our data from secondary and primary
                  research, we first utilised affinity diagramming to extract
                  key insights from all our different research findings.
                </p>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <ExpandableImage caption="Excerpt of the Affinity Diagram for the Centsible project">
              <BroadImage
                src="/centsible/affinity_diagram.png"
                alt="Excerpt of Affinity Diagram for the Centsible project"
              />
            </ExpandableImage>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex flex-row flex-wrap items-center justify-center">
              <div className="flex flex-col items-center gap-5 w-full md:w-1/2 py-10 md:px-10">
                <ImageViewer
                  blobType={1}
                  fillColor="#6270D1"
                  disableExpand={true}
                  className="w-50 h-50 lg:w-40 lg:h-40"
                >
                  <Image
                    src="/icons/patchwork.png"
                    alt="Icon showing some patchwork"
                    width={100}
                    height={100}
                    priority
                    className="z-0 w-30 h-auto"
                  />
                </ImageViewer>
                <div className="w-full px-4 lg:px-0">
                  <EditorBox extraStyles="max-w-prose">
                    <p className="font-bold">Patchwork of tools</p>
                    <p>
                      Organisations rely on multiple disconnected tools with
                      minimal integration, leading to inefficient, manual
                      processes.
                    </p>
                  </EditorBox>
                </div>
              </div>

              <div className="flex flex-col items-center gap-5 w-full md:w-1/2 py-10 md:px-10">
                <ImageViewer
                  blobType={2}
                  fillColor="#DB6368"
                  disableExpand={true}
                  className="w-50 h-50 lg:w-40 lg:h-40"
                >
                  <Image
                    src="/icons/hammer.png"
                    alt="Icon showing a hand holding a hammer"
                    width={100}
                    height={100}
                    priority
                    className="z-0 w-30 h-auto"
                  />
                </ImageViewer>
                <div className="w-full px-4 lg:px-0">
                  <EditorBox extraStyles="max-w-prose">
                    <p className="font-bold">No automation</p>
                    <p>
                      A lack of automation leads to expense tasks being
                      repetitive, time-consuming, and prone to human error.
                    </p>
                  </EditorBox>
                </div>
              </div>

              <div className="flex flex-col items-center gap-5 w-full md:w-1/2 py-10 md:px-10">
                <ImageViewer
                  blobType={3}
                  fillColor="#6270D1"
                  disableExpand={true}
                  className="w-50 h-50 lg:w-40 lg:h-40"
                >
                  <Image
                    src="/icons/confused.png"
                    alt="Icon showing a confused person"
                    width={100}
                    height={100}
                    priority
                    className="z-0 w-30 h-auto"
                  />
                </ImageViewer>
                <div className="w-full px-4 lg:px-0">
                  <EditorBox extraStyles="max-w-prose">
                    <p className="font-bold">Unclear process</p>
                    <p>
                      Employees often lack clear guidance on company policies,
                      resulting in unclaimed expenses or incorrect submissions
                      that complicate approvals.
                    </p>
                  </EditorBox>
                </div>
              </div>

              <div className="flex flex-col items-center gap-5 w-full md:w-1/2 py-10 md:px-10">
                <ImageViewer
                  blobType={4}
                  fillColor="#DB6368"
                  disableExpand={true}
                  className="w-50 h-50 lg:w-40 lg:h-40"
                >
                  <Image
                    src="/icons/solution.png"
                    alt="Icon showing a magnifying glass with a light bulb inside of it"
                    width={100}
                    height={100}
                    priority
                    className="z-0 w-30 h-auto"
                  />
                </ImageViewer>
                <div className="w-full px-4 lg:px-0">
                  <EditorBox extraStyles="max-w-prose">
                    <p className="font-bold">Nothing quite fits</p>
                    <p>
                      Existing solutions are inflexible, have a steep learning
                      curve, and fail to harness AI to its full potential,
                      highlighting an opportunity for a more intelligent,
                      user-friendly alternative.
                    </p>
                  </EditorBox>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex items-center justify-center my-10">
              <div className="max-w-prose space-y-3">
                <h3 id="target-users">Defining Our Target Users</h3>
                <p>
                  From our research, we developed personas representing each
                  target user group: employees, managers, and finance teams. To
                  build empathy and map out pain points clearly, we also created
                  &quot;as-is&quot; user journey maps for each persona,
                  visualising their experiences throughout the current expense
                  management process.
                </p>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex flex-row flex-wrap justify-center items-center mb-5">
              <div className="flex flex-col w-full lg:w-1/3 lg:p-10 justify-center items-center gap-5">
                <div className="text-center max-w-70 bg-cent-blue rounded-3xl p-2 mt-5">
                  <h4>The Employee</h4>
                </div>
                <ImageViewer
                  blobType={5}
                  fillColor="#6270D1"
                  caption="Employee Persona"
                  className="w-60 h-60 xl:w-90 xl:h-90"
                >
                  <Image
                    src="/centsible/employee_persona.png"
                    alt="Image of the persona for the employee user group"
                    width={200}
                    height={300}
                    priority
                    className="rounded-xl w-40 xl:w-60"
                  />
                </ImageViewer>

                <ImageViewer
                  blobType={1}
                  fillColor="#6270D1"
                  caption="Employee as-is User Journey"
                  className="w-60 h-60 xl:w-90 xl:h-90"
                >
                  <Image
                    src="/centsible/user_journey_employee.png"
                    alt="Image of the user journey for the employee user group"
                    width={300}
                    height={150}
                    priority
                    className="rounded-xl w-60 xl:w-90"
                  />
                </ImageViewer>
              </div>

              <div className="flex flex-col w-full lg:w-1/3 lg:p-10 justify-center items-center gap-5">
                <div className="text-center max-w-70 bg-black rounded-3xl p-2 mt-5">
                  <h4>The Manager</h4>
                </div>
                <ImageViewer
                  blobType={2}
                  fillColor="#000000"
                  caption="Manager Persona"
                  className="w-60 h-60 xl:w-90 xl:h-90"
                >
                  <Image
                    src="/centsible/manager_persona.png"
                    alt="Image of the persona for the manager user group"
                    width={200}
                    height={300}
                    priority
                    className="rounded-xl w-40 xl:w-60"
                  />
                </ImageViewer>

                <ImageViewer
                  blobType={3}
                  fillColor="#000000"
                  caption="Manager as-is User Journey"
                  className="w-60 h-60 xl:w-90 xl:h-90"
                >
                  <Image
                    src="/centsible/user_journey_manager.png"
                    alt="Image of the user journey for the manager user group"
                    width={300}
                    height={150}
                    priority
                    className="rounded-xl w-60 xl:w-90"
                  />
                </ImageViewer>
              </div>

              <div className="flex flex-col w-full lg:w-1/3 lg:p-10 justify-center items-center gap-5">
                <div className="text-center max-w-70 bg-cent-red rounded-3xl p-2 mt-5">
                  <h4>The Finance Team</h4>
                </div>
                <ImageViewer
                  blobType={4}
                  fillColor="#DB6368"
                  caption="Finance Team Persona"
                  className="w-60 h-60 xl:w-90 xl:h-90"
                >
                  <Image
                    src="/centsible/finance_persona.png"
                    alt="Image of the persona for the finance team user group"
                    width={200}
                    height={300}
                    priority
                    className="rounded-xl w-40 xl:w-60"
                  />
                </ImageViewer>

                <ImageViewer
                  blobType={5}
                  fillColor="#DB6368"
                  caption="Finance Team as-is User Journey"
                  className="w-60 h-60 xl:w-90 xl:h-90"
                >
                  <Image
                    src="/centsible/user_journey_finance.png"
                    alt="Image of the user journey for the finance team user group"
                    width={300}
                    height={150}
                    priority
                    className="rounded-xl w-60 xl:w-90"
                  />
                </ImageViewer>
              </div>
            </div>
          </AnimationWrapper>

          {/*----------- DEVELOP -----------*/}

          <GradientHeading text="develop" colourVariant="blue" />

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
              <h3 id="ideation">Ideation</h3>
              <p>
                Building on our research insights, personas, and user journey
                maps, we began ideating solutions with a strong user-centred
                foundation.
              </p>
              <p>
                We ran a rapid ideation sprint as a team, starting by generating
                as many &quot;How might we?&quot; questions as possible in
                response to our research findings. We then ranked these in a
                Feasibility vs. Potential matrix, prioritising bold and creative
                ideas over feasibility, as encouraged by MHR&apos;s brief. We
                then combined our most promising HMWs to arrive at a guiding
                question to frame our ideation activities:
              </p>
              <EditorBox extraStyles="max-w-prose my-5">
                <p className="font-bold">
                  &quot;How might we design an AI-powered expense tool that
                  integrates effortlessly with the tools people already use,
                  takes away the hassle of scanning receipts, and feels like
                  having a friendly personal expenses officer who&apos;s always
                  there to keep things on track and provide insights when
                  asked?&quot;
                </p>
              </EditorBox>
            </div>
            <ImageViewer
              blobType={1}
              fillColor="#000000"
              caption="HMW Ranking Matrix and refined HMWs before combining them into the final HMW"
              className="w-70 h-70 lg:w-90 lg:h-90 xl:w-110 xl:h-110"
            >
              <Image
                src="/centsible/hmw.png"
                alt="Image of a matrix ranking HMW statements"
                width={300}
                height={300}
                priority
                className="rounded-xl w-70 lg:w-90 xl:w-110"
              />
            </ImageViewer>
          </ContentBlock>

          <ContentBlock reverse={true} flipOnMobile={true}>
            <div className="max-w-prose space-y-3">
              <p>
                We continued with a &quot;What if?&quot; activity to spark
                creativity through coming up with bold imaginative scenarios
                that could support our guiding HMW statement, before moving into
                Crazy 8s sketching, rapidly exploring divergent ideas
                individually before discussing them as a team. Some of the
                initial ideas included:
              </p>
              <ul className="list-disc pl-5">
                <li className="text-[#6270D1]">
                  An AI assistant capable of logging, creating, submitting, and
                  reviewing expenses while offering real-time policy guidance
                </li>
                <li className="text-[#6270D1]">
                  Automatic detection of expenses through calendar events, card
                  feeds, and bookings
                </li>
                <li className="text-[#6270D1]">
                  A digital expenses wallet akin to Apple Wallet, where expenses
                  are stored as wallet items
                </li>
                <li className="text-[#6270D1]">
                  Intelligent integrations that can analyse output from or
                  generate input for other tools
                </li>
              </ul>
              <p>
                We discussed, voted on, and combined the strongest aspects from
                our ideas to shape an initial concept, ready for low-fidelity
                prototyping and iterative development.
              </p>
            </div>
            <ImageViewer
              blobType={2}
              src="/centsible/crazy_8.png"
              alt="Photo showing the OneDesign team working on ideation activities"
              caption="Team Ideation Session - completed 'Crazy 8' sheets"
              className="w-70 h-70 lg:w-90 lg:h-90 xl:w-110 xl:h-110"
            />
          </ContentBlock>

          <ContentBlock>
            <div className="max-w-prose space-y-3">
              <h3 id="prototyping">Prototyping</h3>
              <p>
                With our initial concept in place, we moved quickly into
                prototyping to bring our ideas to life and gather user feedback
                early.
              </p>
              <p>
                We began with hand-drawn sketches, translating them into
                low-fidelity digital interactive prototypes to facilitate easy
                testing with our participants, who were only available remotely.
                For employees, we created two alternative user flows to evaluate
                different approaches. Our prototyping process included two
                rounds of user testing focused on qualitative feedback, in line
                with MHR&apos;s brief to focus on ideas over polished designs.
              </p>
              <p>
                Throughout this stage, we iterated collaboratively, integrating
                team feedback and client input to ensure our solution remained
                both innovative and grounded in user needs.
              </p>
            </div>
            <ImageViewer
              blobType={2}
              src="/centsible/prototyping.png"
              alt="Screenshot showing a moment from a remote prototyping session with a participant"
              caption="Remote user testing with an employee participant and our low-fidelity digital prototype"
              className="w-70 h-70 lg:w-90 lg:h-90"
            />
          </ContentBlock>

          <ContentBlock alignCenter={false}>
            <div className="flex flex-col items-center justify-start gap-5">
              <div className="flex flex-col items-start">
                <h4>Round 1: Low-Fi</h4>
                <p className="font-bold">Three employees.</p>
                <p>
                  Based on their feedback, we combined the best elements of our
                  two alternative designs into a unified, refined concept which
                  also guided the refinement of the design for the other user
                  groups. You can see some of our low-fi prototype screens from
                  this round of testing below.
                </p>
              </div>

              <ScreenGallery
                galleryName="centsible/centsible-low-fi"
                backgroundColour="#6875C6"
                buttonColour="full-red"
                blobClassName="w-80 h-80"
                captionClassName="text-center"
              />
            </div>

            <div className="flex flex-col items-center justify-start gap-5">
              <div className="flex flex-col items-start">
                <h4>Round 2: Low/Mid-Fi</h4>
                <p className="font-bold">
                  One employee and one participant with managerial and finance
                  experience.
                </p>
                <p>
                  This round focused on refining features and aligning better
                  with user expectations for not only employees, but also our
                  other two user groups. Participants highlighted areas such as
                  decluttering dashboards and allowing expense tracking to be
                  switched off when not needed (e.g. at weekends), which we
                  incorporated into our final designs later on. See some of our
                  prototype screens from this stage below.
                </p>
              </div>

              <ScreenGallery
                galleryName="centsible/centsible-low-mid-fi"
                backgroundColour="#DB6368"
                buttonColour="full-red"
                blobClassName="w-80 h-80"
                captionClassName="text-center"
              />
            </div>
          </ContentBlock>

          <AnimationWrapper>
            <div className="max-w-prose space-y-3 py-10">
              <p>
                Throughout this stage, we iterated collaboratively, integrating
                team feedback and client input to ensure our solution remained
                both innovative and grounded in user needs.
              </p>
              <h4 className="font-bold">
                At the core, each refinement was guided by our validated belief
                in a concept that focused on an AI- and chat-first approach,
                setting ourselves the goal of creating not just another expense
                management solution, but something that feels like your personal
                expenses officer.
              </h4>
              <p>
                In line with these refinements, we also reworked our
                &quot;as-is&quot; user journey maps into one unified,
                &quot;to-be&quot; user journey map going across all three user
                groups in a scenario enabled by our developed concept, capturing
                how our &quot;personal expenses officer&quot; would help our
                target users.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <ImageViewer
              blobType={1}
              fillColor="#000000"
              caption="The unified to-be User Journey combining all three personas"
              className="w-70 h-70 md:w-100 md:h-100 lg:w-150 lg:h-150 xl:w-200 xl:h-200 mb-10"
            >
              <Image
                src="/centsible/user_journey_unified.png"
                alt="Image of the unified user journey"
                width={300}
                height={300}
                priority
                className="rounded-xl w-70 md:w-100 lg:w-150 xl:w-200"
              />
            </ImageViewer>
          </AnimationWrapper>

          {/*----------- DELIVER -----------*/}

          <GradientHeading text="deliver" colourVariant="blue" />

          <AnimationWrapper>
            <div className="flex flex-row flex-wrap-reverse justify-center items-center my-10">
              <div className="max-w-full lg:max-w-150 lg:max-h-300 z-0">
                <EditorBox extraStyles="pt-6 lg:pt-0 lg:pr-10">
                  <h3 className="font-bold" id="final-idea">
                    The Final Idea
                  </h3>
                  <p>
                    Centsible reimagines expense management as a chat-first
                    intelligent, AI-powered experience. At its core is
                    &quot;Penny&quot;, an AI assistant designed to feel like a
                    friendly, personal expenses officer who does most of the
                    work in the background for you.
                  </p>
                  <p>
                    In line with MHR&apos;s brief, Centsible&apos;s design is
                    purposefully simple and the colour palette neutral, focusing
                    more on seamless flows and meaningful ideas and allowing our
                    client to easily adopt the underlying concept and turn it
                    into MHR&apos;s next game-changing product.
                  </p>
                  <Button
                    href="https://www.figma.com/proto/n8FiJncNHX5EOIiktbQtGT/-DSP811--Team1_Final-Prototype?page-id=0%3A1&node-id=1-2343&viewport=158%2C285%2C0.05&t=jfBbywEShNVfB45r-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2343&show-proto-sidebar=1"
                    colourVariant="blue"
                    className="mt-3"
                  >
                    Try Centsible&apos;s flows out for yourself
                  </Button>
                </EditorBox>
              </div>
              <ImageCarousel
                images={carouselImages}
                width={1304}
                height={2163}
                className="-mb-10 lg:mb-0 lg:-ml-20 z-1 w-70 h-115"
              />
            </div>
          </AnimationWrapper>

          <ContentBlock alignCenter={false}>
            <SingleScreenDisplay
              image="/centsible/mockups/mockup_ai_chat.png"
              alt="AI Chat Screen"
              blobClassName="w-80 h-80"
              imageClassName="h-90 lg:h-100 w-auto"
              backgroundColour="#6270D1"
              variant="right"
              className="my-5 lg:my-0"
            >
              <h4>AI-Chat with Penny</h4>
              <p>
                Users can control the entire app through text or voice, from
                creating expense claims and generating visual reports to asking
                policy questions and getting real-time budget insights.
              </p>
            </SingleScreenDisplay>

            <SingleScreenDisplay
              image="/centsible/mockups/mockup_group_chat.png"
              alt="Expense Chat Screen"
              blobClassName="w-80 h-80"
              imageClassName="h-90 lg:h-100 w-auto"
              backgroundColour="#DB6368"
              variant="left"
              className="my-5 lg:my-0"
            >
              <h4>Expense Chat</h4>
              <p>
                Every submitted expense creates a real-time group chat with
                involved employees, managers, and finance teams, with Penny
                assisting discussions, suggesting adjustments, and automating
                approvals.
              </p>
            </SingleScreenDisplay>
          </ContentBlock>

          <ContentBlock alignCenter={false}>
            <SingleScreenDisplay
              image="/centsible/mockups/mockup_expense_creation.png"
              alt="Automatic Expense Creation Screen"
              blobClassName="w-80 h-80"
              imageClassName="h-85 lg:h-90 w-auto"
              backgroundColour="#6270D1"
              variant="left"
              className="my-5 lg:my-0"
            >
              <h4>Automatic Expense Creation</h4>
              <p>
                The system gathers data from calendars, bookings, card feeds,
                and location information to detect and draft expenses
                automatically.
              </p>
            </SingleScreenDisplay>

            <SingleScreenDisplay
              image="/centsible/mockups/mockup_wallet.png"
              alt="Expenses Wallet Screen"
              blobClassName="w-80 h-80"
              imageClassName="h-85 lg:h-90 w-auto"
              backgroundColour="#DB6368"
              variant="right"
              className="my-5 lg:my-0"
            >
              <h4>Digital Expenses Wallet</h4>
              <p>
                Similar to Apple Wallet, expenses and receipts are stored as
                individual cards, ready to be submitted with a single tap.
              </p>
            </SingleScreenDisplay>
          </ContentBlock>

          <ContentBlock alignCenter={false}>
            <SingleScreenDisplay
              image="/centsible/mockups/mockup_workflows.png"
              alt="Workflow Management Screen"
              blobClassName="w-80 h-80"
              imageClassName="h-90 lg:h-100 w-auto"
              backgroundColour="#6270D1"
              variant="right"
              className="my-5 lg:my-0"
            >
              <h4>Flexible Policies & Workflows</h4>
              <p>
                Finance teams can create custom workflows using simple “If this,
                then that” logic blocks, adapting processes to organisational
                needs.
              </p>
            </SingleScreenDisplay>

            <SingleScreenDisplay
              image="/centsible/mockups/mockup_integration.png"
              alt="AI Output Screen"
              blobClassName="w-80 h-80"
              imageClassName="h-90 lg:h-100 w-auto"
              backgroundColour="#DB6368"
              variant="left"
              className="my-5 lg:my-0"
            >
              <h4>Smart Integrations</h4>
              <p>
                Leveraging AI to read and export data to other tools without
                requiring custom-coded integrations.
              </p>
            </SingleScreenDisplay>
          </ContentBlock>

          <SingleScreenDisplay
            image="/centsible/mockups/mockup_receipt.png"
            alt="Paperless Receipts Screen"
            blobClassName="w-80 h-80"
            imageClassName="h-85 lg:h-90 w-auto"
            backgroundColour="#6270D1"
            variant="left"
            className="my-5 lg:my-0"
          >
            <h4>Support for Paperless Receipts</h4>
            <p>
              Including QR codes, NFC, and digital booking confirmations, with
              scanning capabilities for paper receipts if needed.
            </p>
          </SingleScreenDisplay>

          {/*----------- OUTCOMES -----------*/}

          <GradientHeading text="outcomes" colourVariant="blue" />

          <AnimationWrapper>
            <div className="max-w-prose space-y-3 my-10">
              <p>
                Our final presentation to MHR was received with enthusiastic
                praise. The client highlighted the originality and real-world
                potential of our concept:
              </p>
            </div>
            <EditorBox extraStyles="max-w-prose">
              <h4 className="font-bold">
                &quot;Centsible is a strong concept with real-world potential.
                You’ve clearly identified a gap in the market and responded with
                original, user-focused thinking. The combination of AI support,
                conversational UI, and seamless workflows makes this a highly
                promising idea for enterprise adoption.&quot;
              </h4>
              <p>Sean Lynch, Head of UX, MHR</p>
            </EditorBox>

            <div className="max-w-prose space-y-3 my-10">
              <p>
                They also commended our professionalism and deep understanding
                of user needs, adding:
              </p>
            </div>

            <EditorBox extraStyles="max-w-prose">
              <h4 className="font-bold">
                &quot;We genuinely enjoyed working with you and will reflect and
                share the design ideas across the organisation.&quot;
              </h4>
              <p>Sean Lynch, Head of UX, MHR</p>
            </EditorBox>

            <div className="max-w-prose space-y-3 my-10">
              <p>
                This positive feedback validated our approach and demonstrated
                the impact that bold, user-centred, and AI-integrated design can
                have in addressing organisational challenges.
              </p>
            </div>
          </AnimationWrapper>

          {/*----------- REFLECTIONS -----------*/}

          <GradientHeading text="reflections" colourVariant="blue" />

          <AnimationWrapper>
            <div className="max-w-prose space-y-3 my-10">
              <p>
                This project was a defining experience in my development as a UX
                designer and team leader.
              </p>
              <h3 id="leadership">My Leadership & Teamwork</h3>
              <p>As team leader, I:</p>
              <ul className="list-disc pl-5">
                <li className="text-[#6270D1]">
                  Facilitated weekly meetings, retrospectives, and check-ins to
                  keep the team aligned and motivated
                </li>
                <li className="text-[#6270D1]">
                  Managed all client communications and presentations, ensuring
                  our work met MHR&apos;s expectations
                </li>
                <li className="text-[#6270D1]">
                  Delegated tasks effectively based on individual strengths and
                  maintained our project plan and timeline
                </li>
                <li className="text-[#6270D1]">
                  Fostered a supportive team culture by organising peer
                  evaluations and team socials to build trust and morale
                </li>
              </ul>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex flex-row flex-wrap items-center justify-center gap-5">
              <ImageViewer
                blobType={2}
                src="/centsible/team_social.png"
                alt="Photo showing the OneDesign team at a pizza social"
                caption="Going out on a team pizza social that I suggested and organised"
                className="w-70 h-70 lg:w-90 lg:h-90"
              />
              <ImageViewer
                blobType={1}
                fillColor="#000000"
                caption="Example of a completed weekly team retrospective"
                className="w-70 h-70 lg:w-90 lg:h-90"
              >
                <Image
                  src="/centsible/retrospective.png"
                  alt="Image of a team retrospective"
                  width={300}
                  height={200}
                  priority
                  className="rounded-xl w-70 lg:w-90"
                />
              </ImageViewer>
              <ImageViewer
                blobType={3}
                fillColor="#000000"
                caption="Example of a completed weekly team check-in"
                className="w-70 h-70 lg:w-90 lg:h-90"
              >
                <Image
                  src="/centsible/team_check_in.png"
                  alt="Image of a team check-in"
                  width={200}
                  height={500}
                  priority
                  className="rounded-xl w-40 lg:w-60"
                />
              </ImageViewer>
            </div>
          </AnimationWrapper>
          {/* PUT PEER EVAL IN HERE TOO?? */}

          <AnimationWrapper>
            <div className="max-w-prose space-y-3 my-10">
              <h3 id="contributions">My UX Design Contributions</h3>
              <p>Beyond leadership, I contributed to:</p>
              <ul className="list-disc pl-5">
                <li className="text-[#6270D1]">
                  Synthesising research insights into personas and user journeys
                </li>
                <li className="text-[#6270D1]">
                  Facilitating ideation activities to drive bold, user-centred
                  concepts
                </li>
                <li className="text-[#6270D1]">
                  Developing prototypes and incorporating user feedback to
                  refine our designs iteratively
                </li>
              </ul>
            </div>

            <div className="max-w-prose space-y-3 mb-10">
              <h3 id="learnings">What I learned</h3>
              <p>
                My biggest success was embracing and developing my professional
                identity and values: human-centredness, making a difference, and
                leadership. This project showed me I can thrive under pressure,
                unite a team around a shared vision, and deliver impactful
                solutions within tight timeframes.
              </p>
              <p>
                I also learned the importance of balancing leadership with
                openness. While my team viewed me as a competent and inspiring
                leader, I became aware that I can sometimes focus too strongly
                on my own ideas. Moving forward, I will continue to actively
                create space for every team member&apos;s voice to strengthen
                collaboration and outcomes.
              </p>
            </div>
          </AnimationWrapper>

          <GradientHeading text="the end" colourVariant="lilac" />

          <AnimationWrapper>
            <div className="flex justify-center items-center m-5">
              <BackButton
                text="Next Case Study"
                href="/smarti"
                forward={true}
              />
            </div>
          </AnimationWrapper>

          <div className="px-4 lg:px-16 mt-5 mb-5 w-full">
            <AnimationWrapper>
              <EditorBox extraStyles="w-full max-w-xl mx-auto">
                <ContactForm />
              </EditorBox>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </main>
  );
}
