import type { Metadata, Viewport } from "next";
import ProjectsHeader from "@/components/projectsheader";
import BackButton from "@/components/backbutton";
import GradientHeading from "@/components/gradientheading";
import EditorBox from "@/components/editorbox";
import ContactForm from "@/components/contactform";
import Button from "@/components/button";
import Image from "next/image";
import ContentBlock from "@/components/contentblock";
import SingleScreenDisplay from "@/components/singlescreendisplay";
import ScreenGallery from "@/components/screengallery";
import ImageViewer from "@/components/imageviewer";
import AnimationWrapper from "@/components/animationwrapper";

export const metadata: Metadata = {
  title: "Smarti - Sarah Hägele Portfolio",
  description:
    "Detail page about the UX design project 'Smarti' by Sarah Hägele",
};

export const viewport: Viewport = {
  themeColor: "#322824",
};

export default function Smarti() {
  return (
    <main>
      <ProjectsHeader heading="Smarti" />
      <div className="bg-extra-dark-choco -mb-25 overflow-x-hidden">
        <div className="mx-auto container flex flex-col items-center px-4 pt-4 pb-25 lg:px-16">
          <div className="w-full flex flex-col justify-center items-center">
            {/*----------- TAGLINE -----------*/}
            <h3 className="italic text-center">
              Designing an app to reduce domestic energy consumption.
            </h3>
            <BackButton text="Back to case studies" href="/#casestudies" />
          </div>

          {/*----------- OVERVIEW -----------*/}

          <GradientHeading text="overview" colourVariant="green" />

          <AnimationWrapper>
            <div className="max-w-prose space-y-3 mb-10">
              <h3>Disclaimer</h3>
              <p>
                This case study is currently incomplete. For now, it only
                includes the design outputs of the project. The rest of the
                process (discovery, synthesis, ideation, user testing) will be
                added in the near future.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex flex-row flex-wrap justify-center items-center mb-10">
              <Image
                src="/smarti/mockups/home-mockup.png"
                alt="Mockup of the Lausha App"
                width={350}
                height={400}
                priority
                className="-mb-20 lg:-mb-10 lg:-mr-20 -rotate-40 z-0 w-90"
              />
              <div className="max-w-full lg:max-w-150 lg:max-h-300 z-1">
                <EditorBox>
                  <h3 className="font-bold">In a nutshell</h3>
                  <div className="max-w-prose space-y-3">
                    <p>
                      Domestic energy consumption is responsible for a large
                      amount of greenhouse gas emissions in the UK - making it a
                      intriguing topic with large potential for
                      sustainability-focused design interventions. The main
                      question is: who to target and how to really make a
                      difference?
                    </p>
                    <p>
                      Through research, I discovered that family coordinators,
                      often the mothers in a household, are the most likely to
                      influence the whole family to adopt more sustainable
                      habits - if you frame them in a way that makes their
                      incredibly busy life a little easier to manage. This lead
                      me to design a smart scheduling app that lets a user be
                      more organised in their daily life while leveraging AI to
                      smartly schedule tasks. It identifies when to place which
                      tasks along the daily timeline to create a schedule that
                      aligns with the user&apos;s unique situation while being
                      as energy-efficient as possible.
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
                      fillColor="#646756"
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

                  <p className="text-center font-bold">8 weeks</p>
                </div>
                <div className="w-35 lg:w-50 flex flex-col items-center gap-3">
                  <ImageViewer
                    blobType={1}
                    fillColor="#EFD0BC"
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
                  <p className="text-center font-bold">Solo UX Designer</p>
                </div>
              </div>
              <div className="max-w-80 lg:w-50 flex flex-col items-center gap-3 my-5 lg:my-0">
                <ImageViewer
                  blobType={2}
                  fillColor="#C97D43"
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
                  Secondary Research, Personas, Storyboarding, COM-B Behaviour
                  Modelling, Ideation, Wireframing, User Testing
                </p>
              </div>
              <div className="w-full lg:w-106 flex flex-row justify-center flex-wrap gap-3">
                <div className="w-35 lg:w-50 flex flex-col items-center gap-3">
                  <ImageViewer
                    blobType={3}
                    fillColor="#99A369"
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
                    Miro, Figma, Marvel, Pen & Paper
                  </p>
                </div>
                <div className="w-35 lg:w-50 flex flex-col items-center gap-3">
                  <ImageViewer
                    blobType={4}
                    fillColor="#A47864"
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
                    Individual Academic Project
                  </p>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          <GradientHeading text="develop" colourVariant="green" />

          <ContentBlock>
            <div className="maw-w-prose space-y-3">
              <h3 id="wireframing">Low-Fi Wireframing</h3>
              <p>
                Before spending a large amount of time on a high-fidelity Figma
                prototype and getting hung up on small details, I developed a
                low-fidelity wireframe prototype. I focused on the core user
                flow of the app, which means creating tasks and smart-scheduling
                them with the help of AI.
              </p>
              <p>
                These low-fidelity wireframes were used to test the
                concept&apos;s perceived helpfulness and the user flow&apos;s
                clarity at an early stage with a target user in a real use
                context. The basic layout and information architecture were also
                evaluated within this test session.
              </p>
            </div>
            <ScreenGallery
              galleryName="smarti/smarti-low-fi"
              backgroundColour="#646756"
              buttonColour="full-red"
              blobClassName="w-80 h-80"
            />
          </ContentBlock>

          <GradientHeading text="deliver" colourVariant="green" />

          <AnimationWrapper>
            <h3 id="design-system">The Design System</h3>
          </AnimationWrapper>

          <ContentBlock>
            <ImageViewer
              blobType={4}
              fillColor="#646756"
              caption="The SmartI Design System - Core Colour and Typography definitions"
              className="w-90 h-90 lg:w-110 lg:h-110"
            >
              <Image
                src="/smarti/smarti_design_system.png"
                alt="The SmartI Design System"
                width={200}
                height={200}
                priority
                className="w-90 lg:w-110 h-auto rounded-xl"
              />
            </ImageViewer>
            <ImageViewer
              blobType={4}
              fillColor="#C97D43"
              caption="The SmartI Design System - Core Components"
              className="w-90 h-90 lg:w-110 lg:h-110"
            >
              <Image
                src="/smarti/smarti_design_system_components.png"
                alt="The SmartI Design System - Components"
                width={300}
                height={150}
                priority
                className="w-90 h-90 lg:w-110 h-auto rounded-xl"
              />
            </ImageViewer>
          </ContentBlock>

          <AnimationWrapper>
            <div className="flex flex-row flex-wrap-reverse justify-center items-center my-10">
              <div className="max-w-full lg:max-w-150 lg:max-h-300 z-0">
                <EditorBox extraStyles="lg:pr-15">
                  <h3 id="final-design">The Final Design</h3>
                  <p>
                    SmartI is an innovative approach to create more order in the
                    chaos of busy family life - let the app&apos;s AI plan your
                    day out for you in the most time- and energy-efficient way
                    possible.
                  </p>
                  <Button
                    href="https://www.figma.com/proto/r3zv6WM0I1UzpERlpCy9c7/SmartI?page-id=9546%3A123&node-id=2497-4240&p=f&viewport=-4732%2C-454%2C0.34&t=rao4SjcsPss6IqZw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2497%3A4409&show-proto-sidebar=1"
                    colourVariant="green"
                    className="mt-3"
                  >
                    Try SmartI&apos;s flows out for yourself
                  </Button>
                </EditorBox>
              </div>
              <Image
                src="/smarti/mockups/home-mockup.png"
                alt="Mockup of the SmartI App"
                width={350}
                height={400}
                priority
                className="-mb-5 lg:mb-0 lg:-ml-25 z-1 w-80"
              />
            </div>
          </AnimationWrapper>

          <ContentBlock alignCenter={false}>
            <SingleScreenDisplay
              image="/smarti/mockups/daily-timeline-mockup.png"
              alt="Home Screen"
              blobClassName="w-80 h-80"
              imageClassName="h-85 lg:h-100 w-auto"
              backgroundColour="#646756"
              variant="right"
              className="my-5 lg:my-0"
            >
              <h4>Daily Timeline</h4>
              <p>
                The user can expand the upcoming tasks view on the home page to
                reveal a full timeline of the day to keep track of all past and
                upcoming tasks and events of the day. They can also be ticked
                off in this view.
              </p>
            </SingleScreenDisplay>

            <SingleScreenDisplay
              image="/smarti/mockups/full-calendar-view-mockup.png"
              alt="Home Screen"
              blobClassName="w-80 h-80"
              imageClassName="h-85 lg:h-100 w-auto"
              backgroundColour="#EFD0BC"
              variant="left"
              className="my-5 lg:my-0"
            >
              <h4>Calendar View</h4>
              <p>
                The calendar provides an intuitive, appealing detail view of
                everything that is planned for the day or for the future. Tasks
                and events can be dragged to be rearranged and opened in detail
                views by tapping on them.
              </p>
            </SingleScreenDisplay>
          </ContentBlock>

          <ContentBlock alignCenter={false} className="lg:my-20">
            <SingleScreenDisplay
              image="/smarti/mockups/task-pool-mockup.png"
              alt="Home Screen"
              blobClassName="w-80 h-80"
              imageClassName="h-85 lg:h-100 w-auto"
              backgroundColour="#C97D43"
              variant="left"
              className="my-5 lg:my-0"
            >
              <h4>Smart Task Scheduling</h4>
              <p>
                Unlike events, tasks are kept in a task pool without a starting
                time assigned to them. Through Smart Schedule, the app&apos;s AI
                places them at optimal times throughout the day based on peak
                energy usage times, the type of task, and the user&apos;s other
                planned events for the day or week.
              </p>
            </SingleScreenDisplay>

            <SingleScreenDisplay
              image="/smarti/mockups/steps-generated-mockup.png"
              alt="Home Screen"
              blobClassName="w-80 h-80"
              imageClassName="h-85 lg:h-100 w-auto"
              backgroundColour="#99A369"
              variant="right"
              className="my-5 lg:my-0"
            >
              <h4>AI-Powered Tasks</h4>
              <p>
                AI doesn&apos;t just schedule tasks, it also helps create them
                efficiently by suggesting task steps based on the task&apos;s
                given title and description and learned patterns from the user.
                Tasks are always suggested as energy-consciously as possible.
              </p>
            </SingleScreenDisplay>
          </ContentBlock>

          <SingleScreenDisplay
            image="/smarti/mockups/sharing-mockup.png"
            alt="Home Screen"
            blobClassName="w-80 h-80"
            imageClassName="h-85 lg:h-100 w-auto"
            className="mt-3 lg:mt-5 mb-15"
            backgroundColour="#A47864"
            variant="left"
          >
            <h4>Task Details & Sharing</h4>
            <p>
              The task detail view allows the user to share tasks to be
              completed by others while being able to monitor task status from
              within SmartI. Task details also inform the user about AI
              scheduling rationale, keeping maximum transparency.
            </p>
          </SingleScreenDisplay>

          <GradientHeading text="the end" colourVariant="green" />

          <AnimationWrapper>
            <div className="flex justify-center items-center m-5">
              <BackButton
                text="Next Case Study"
                href="/lausha"
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
