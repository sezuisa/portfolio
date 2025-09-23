import type { Metadata, Viewport } from "next";
import ProjectsHeader from "@/components/projectsheader";
import BackButton from "@/components/backbutton";
import ContentBlock from "@/components/contentblock";
import EditorBox from "@/components/editorbox";
import GradientHeading from "@/components/gradientheading";
import Image from "next/image";
import ContactForm from "@/components/contactform";
import ImageViewer from "@/components/imageviewer";
import Button from "@/components/button";
import ImageCarousel from "@/components/imagecarousel";
import SingleScreenDisplay from "@/components/singlescreendisplay";
import AnimationWrapper from "@/components/animationwrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Memento - Sarah Hägele Portfolio",
  description:
    "Detail page about the UX design project 'Memento' by Sarah Hägele",
};

export const viewport: Viewport = {
  themeColor: "#322824",
};

const carouselImages = [
  "/memento/mockups/splash-screen-mockup-right.png",
  "/memento/mockups/mockup-2-journey-example.png",
];

const carouselImagesMementoCapture = [
  "/memento/mockups/mockup-capture-step-1.png",
  "/memento/mockups/mockup-capture-step-2.png",
  "/memento/mockups/mockup-memento-edit.png",
  "/memento/mockups/mockup-confirmation-screen-saved.png",
];

const carouselImagesSmartPrompt = [
  "/memento/mockups/mockup-notification.png",
  "/memento/mockups/mockup-care-times.png",
  "/memento/mockups/mockup-smart-prompts.png",
];

const carouselImagesJourneyRoad = [
  "/memento/mockups/mockup-journey-example.png",
  "/memento/mockups/mockup-detail-view.png",
];

const carouselImagesCompass = [
  "/memento/mockups/mockup-affirmation-1.png",
  "/memento/mockups/mockup-compass-1.png",
  "/memento/mockups/mockup-compass-2.png",
  "/memento/mockups/mockup-support-chat.png",
];

const carouselImagesReview = [
  "/memento/mockups/mockup-review-options.png",
  "/memento/mockups/mockup-photo-collection.png",
  "/memento/mockups/mockup-highlight-reel.png",
  "/memento/mockups/mockup-adventure-story.png",
  "/memento/mockups/mockup-journal-entry.png",
  "/memento/mockups/mockup-day-rating.png",
];

const carouselImagesSharing = [
  "/memento/mockups/mockup-sharing-options.png",
  "/memento/mockups/mockup-everyone.png",
  "/memento/mockups/mockup-friends.png",
  "/memento/mockups/mockup-other-user-profile.png",
];

export default function Carers() {
  return (
    <main>
      <ProjectsHeader heading="Memento" />

      <div className="bg-extra-dark-choco -mb-25 overflow-x-hidden">
        <div className="mx-auto container flex flex-col items-center px-4 pt-4 pb-25 lg:px-16">
          <div className="w-full flex flex-col justify-center items-center">
            {/*----------- TAGLINE -----------*/}
            <h3 className="italic text-center">Moments matter.</h3>
            <BackButton text="Back to case studies" href="/#casestudies" />
          </div>

          {/*----------- OVERVIEW -----------*/}

          <GradientHeading text="overview" colourVariant="purple" />

          <AnimationWrapper>
            <div className="flex flex-row flex-wrap justify-center items-center mb-10">
              <Image
                src="/memento/mockups/mockup-2-journey-example.png"
                alt="Mockup of the Memento app"
                width={350}
                height={400}
                priority
                className="-mb-20 lg:-mb-10 lg:-mr-20 z-0 w-60 md:w-70 -rotate-50"
              />
              <div className="max-w-full lg:max-w-150 lg:max-h-300 z-1">
                <EditorBox>
                  <h3 className="font-bold">In a nutshell</h3>
                  <div className="max-w-prose space-y-3">
                    <p>
                      Informal carers are the backbone of many health care
                      systems in the world, yet they are routinely undervalued,
                      overworked, and they feel unsupported and isolated.
                    </p>
                    <p>
                      Leveraging insights from extensive research in&nbsp;
                      <Link href="/carers" className="cursor-pointer underline">
                        first half of my major project,
                      </Link>
                      &nbsp;I ideated and storyboarded different possible
                      concepts to address some of the biggest pain points
                      informal carers face.
                    </p>
                    <p>
                      I then took the best concept forward, developing it into a
                      tangible design through a rigorous iterative prototyping
                      and user testing process, and presenting it alongside an
                      engaging&nbsp;
                      <a
                        href="https://youtu.be/y_0fTAhkpqU"
                        className="cursor-pointer underline"
                        target="_blank"
                      >
                        video prototype
                      </a>
                      &nbsp;to bring the design to life.
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
                      fillColor="#572B7B"
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
                    fillColor="#FE9F40"
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
                  fillColor="#B373A2"
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
                  How Might We?, Frantic Fives, Brainwriting, Storyboarding,
                  Bodystorming, Experience Prototyping, Assumptions Mapping,
                  MoSCoW, Wireframing, Proto-Personas, User Testing, Video
                  Prototyping
                </p>
              </div>
              <div className="w-full lg:w-106 flex flex-row justify-center flex-wrap gap-3">
                <div className="w-35 lg:w-50 flex flex-col items-center gap-3">
                  <ImageViewer
                    blobType={3}
                    fillColor="#7A81B7"
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
                    Figjam, Figma, Maze, Pen & Paper
                  </p>
                </div>
                <div className="w-35 lg:w-50 flex flex-col items-center gap-3">
                  <ImageViewer
                    blobType={4}
                    fillColor="#5D7B64"
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
                    Individual Academic Major Project
                  </p>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          {/*----------- INTRODUCTION -----------*/}

          <GradientHeading text="introduction" colourVariant="purple" />

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
              <h3 id="challenge">The Challenge</h3>
              <p>
                Informal carers for people with dementia often carry an
                overwhelming emotional and physical burden. Many feel isolated,
                unsupported, and even guilty when trying to take time for
                themselves. As a result, these carers feel stretched, like they
                have to be always &apos;on-call&apos;, and struggle to
                prioritise their own wellbeing in a society that seems to mostly
                care about the cared for, not the carer.
              </p>
              <p>
                The challenge was to build upon the UX Vision Statement I had
                developed out of the research in the&nbsp;
                <Link href="/carers" className="cursor-pointer underline">
                  first half of my major project,
                </Link>
                &nbsp;ideating, prototyping, and testing a tangible design for
                my target user group, informal carers for people with dementia,
                that follows the UX Vision, meets their needs, and addresses
                some of their pain points.
              </p>
            </div>
            <EditorBox extraStyles="max-w-full lg:max-w-110">
              <h4>
                There is an opportunity for a product/service for informal
                carers for someone with dementia who want to be able to
                occasionally take time for themselves to prioritise their own
                wellbeing but feel stretched by the constant demands of caring
                and feel unsupported in their community.
              </h4>
            </EditorBox>
          </ContentBlock>

          <ContentBlock reverse={true}>
            <div className="max-w-prose space-y-3">
              <h3 id="approach">The Approach</h3>
              <p>
                This is the second phase of my major project, which therefore
                focuses on the second half of the Double Diamond process:
                Develop and Deliver. I went through an extensive ideation
                process to come up with several concept ideas, evaluating them
                with the help of target users to move the best idea forward.
                This idea was then rigorously prototyped, evaluated, and tested
                with participants over many iterations to arrive at a final
                design I believe to be meaningful and impactful for my target
                users.
              </p>
              <p>
                I followed an agile project approach, conducting a retrospective
                at the start of each new week to reflect on the previous week
                and to plan and prioritise the next steps for the project. This
                allowed me to stay very flexible yet alway prepared and on top
                of everything, and combined with a &apos;9-5&apos; working
                approach, I could balance my time on the project really well
                with my private life.
              </p>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center max-w-full gap-5">
              <ImageViewer
                blobType={1}
                fillColor="#FCF7F1"
                className="w-50 h-50 lg:w-70 lg:h-70"
                caption="The double diamond (illustration by me)"
              >
                <Image
                  src="/memento/double_diamond.png"
                  alt="Illustration of the Double Diamond"
                  width={300}
                  height={200}
                  priority
                  className="w-full lg:w-70 h-auto"
                />
              </ImageViewer>
              <ImageViewer
                blobType={0}
                fillColor="#FCF7F1"
                className="w-50 h-50 lg:w-70 lg:h-70"
                caption="Example of a completed weekly retrospective"
              >
                <Image
                  src="/memento/retro.png"
                  alt="Image depicting an example of a completed weekly retrospective"
                  width={300}
                  height={200}
                  priority
                  className="w-full lg:w-70 h-auto rounded-xl"
                />
              </ImageViewer>
            </div>
          </ContentBlock>

          {/*----------- DEVELOP -----------*/}

          <GradientHeading text="develop" colourVariant="purple" />

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
              <h3 id="hmw">How Might We?</h3>
              <p>
                To lay a strong foundation for ideation, I began by revisiting
                my research insights and reframing them into User Needs
                Statements based on different fundamental human needs to ensure
                I remained as human-centred as possible.
              </p>
              <p>
                I then came up with as many &quot;How might we?&quot;s as
                possible for each of them, sparking my creativity through
                different thought prompts like &quot;focus on emotions&quot; or
                &quot;take it to an extreme&quot;. I ranked the HMWs, clustered
                them into topics, and extracted five promising HMWs that formed
                the basis for my ideation.
              </p>
            </div>
            <ImageViewer
              blobType={2}
              src="/memento/hmw.png"
              alt="Graphic showing the process of going from insights to How Might We statements"
              caption="Going from research insights to five final 'How Might We's"
              className="w-70 h-70 lg:w-90 lg:h-90 xl:w-110 xl:h-110"
            />
          </ContentBlock>

          <ContentBlock reverse={true} flipOnMobile={true}>
            <div className="max-w-prose space-y-3">
              <h3 id="ideation">Ideation</h3>
              <p>
                I combined creative activities like &quot;What if?&quot;
                scenarios, Frantic Five, Brainwriting, and even some quickfire
                ideation from AI to generate a wide spectrum of ideas.
              </p>
              <p>
                I then clustered these ideas into related topics, which then
                formed some very rough basic concept ideas that I could
                evaluate. For this, I chose a &quot;How? Now. Wow!&quot; matrix
                to spot which ideas hit that sweet spot of being original and
                exciting while still being feasible for my project context and
                scope.
              </p>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-5">
              <ImageViewer
                blobType={3}
                src="/memento/ideation-methods.png"
                alt="Graphic showing the different ideation methods used"
                caption="Ideation Methods"
                className="w-40 h-40 lg:w-60 lg:h-60"
              />
              <ImageViewer
                blobType={4}
                src="/memento/idea-clustering.png"
                alt="Graphic showing the clustering and formation of rough concept ideas"
                caption="Clustering ideas and forming rough concepts"
                className="w-40 h-40 lg:w-60 lg:h-60"
              />
              <ImageViewer
                blobType={5}
                src="/memento/how-now-wow.png"
                alt="Graphic showing the 'How? Now. Wow!' matrix for concept evaluation"
                caption="'How? Now. Wow!' matrix for concept evaluation"
                className="w-40 h-40 lg:w-60 lg:h-60"
              />
            </div>
          </ContentBlock>

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
              <h4 id="walkthroughs">Concept Walkthroughs with Carers</h4>
              <p>
                Three concepts were chosen to be storyboarded. This made them
                more tangible for concept walkthroughs with 5 participants from
                my target user group. I also utilised AI, letting it assume 3
                personas of potential users based on my research and review the
                three concepts from their point of view to enrich my real user
                feedback.
              </p>
              <p>
                As a result of these concept walkthroughs, I chose the concept
                around shared memory capture to be taken forward, as it was
                favourited by my participants.
              </p>
            </div>
            <ImageViewer
              blobType={2}
              src="/memento/concept-walkthroughs.png"
              alt="Graphic showing the storyboards for three concepts walked through with carers"
              caption="Storyboards for concept walkthroughs (without their supplementary story text in this illustration)"
              className="w-70 h-70 lg:w-90 lg:h-90 xl:w-110 xl:h-110"
            />
          </ContentBlock>

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
              <h4 id="pivot">UX Vision Pivot</h4>
              <p>
                Choosing the memory capture concept left me with a decision to
                make about the project direction because it didn&apos;t really
                fit the original UX Vision.
              </p>
              <p>
                When I created my initial UX Vision, its direction was
                influenced by an early concept idea spark for a
                &quot;neighbourhood help&quot; service that I got already during
                the research phase. However, as I reminded myself to embrace
                divergent ideas during the ideation process, I came up with
                concepts going in other directions too, leading to the memory
                capture concept idea.
              </p>
              <p>
                The concept walkthroughs made me realise that this concept was
                seen as more meaningful and creative to my target users than the
                neighbourhood help service, and that memories were an incredibly
                powerful thing for carers. Together with concerns about trust
                and safeguarding in a neighbourhood help service, I was
                confident in my decision to choose the memory capture concept
                and pivot my UX Vision to a new one with new Experience Design
                Principles.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <EditorBox extraStyles="max-w-full lg:max-w-110">
                <h4>
                  There is an opportunity for a product/service for informal
                  carers for someone with dementia who want to feel emotionally
                  supported and connected to their loved one through everyday
                  care but feel stretched and overwhelmed by the constant
                  demands and the emotional weight of caregiving.
                </h4>
              </EditorBox>
              <div className="flex flex-row flex-wrap gap-2 justify-center">
                <ImageViewer
                  blobType={4}
                  fillColor="#572B7B"
                  className="w-35 h-35"
                  disableExpand={true}
                >
                  <div className="flex flex-col items-center max-w-prose space-y-3 text-center">
                    <h4 className="font-bold">Supportive</h4>
                    <p>Carers feel emotionally understood & guided.</p>
                  </div>
                </ImageViewer>
                <ImageViewer
                  blobType={3}
                  fillColor="#C56E17"
                  className="w-35 h-35"
                  disableExpand={true}
                >
                  <div className="flex flex-col items-center max-w-prose space-y-3 text-center">
                    <h4 className="font-bold">Empowering</h4>
                    <p>
                      Carers feel empowered to take on the challenges of
                      caregiving.
                    </p>
                  </div>
                </ImageViewer>
                <ImageViewer
                  blobType={2}
                  fillColor="#7A81B7"
                  className="w-35 h-35"
                  disableExpand={true}
                >
                  <div className="flex flex-col items-center max-w-prose space-y-3 text-center">
                    <h4 className="font-bold">Connecting</h4>
                    <p>
                      Carers nurture a sense of closeness with those around
                      them.
                    </p>
                  </div>
                </ImageViewer>
              </div>
            </div>
          </ContentBlock>

          <AnimationWrapper>
            <div className="max-w-prose space-y-3 my-5">
              <h3 id="low-fi">Low-Fidelity Prototyping</h3>

              <p>
                With a clear project direction and a user-endorsed concept idea
                at the ready, I began the process of constant iterative concept
                development and refinement through prototyping. This entire
                process was guided by an ongoing evolving risk-uncertainty
                assumptions matrix and the MoSCoW method for requirement
                analysis and prioritisation, ensuring that every prototype
                answered an important question about my concept to move it
                forward.
              </p>
              <div className="flex flex-row flex-wrap items-center justify-center gap-5 mt-5">
                <ImageViewer
                  blobType={4}
                  fillColor="#572B7B"
                  caption="Risk-Uncertainty Assumptions Matrix for prototyping"
                  className="w-40 h-40 xl:w-60 xl:h-60"
                >
                  <Image
                    src="/memento/assumptions-1.png"
                    alt="Image of a risk-uncertainty matrix containing assumptions to be de-risked through prototyping"
                    width={300}
                    height={300}
                    priority
                    className="w-40 xl:w-60"
                  />
                </ImageViewer>
                <ImageViewer
                  blobType={5}
                  fillColor="#FE9F40"
                  caption="Requirements prioritisation via the MoSCoW framework"
                  className="w-40 h-40 xl:w-60 xl:h-60"
                >
                  <Image
                    src="/memento/moscow-1.png"
                    alt="Image of the MoSCoW framework"
                    width={300}
                    height={300}
                    priority
                    className="w-40 xl:w-60"
                  />
                </ImageViewer>
              </div>
            </div>
          </AnimationWrapper>

          <ContentBlock reverse={false} alignCenter={false}>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="max-w-prose space-y-3">
                <h4>Bodystorming</h4>
              </div>
              <ImageViewer
                blobType={0}
                src="/memento/bodystorming.png"
                alt="Photo collage of Sarah Hägele doing bodystorming"
                caption="Acting out care scenarios during bodystorming"
                className="w-60 h-60 xl:w-80 xl:h-80"
              />
              <EditorBox extraStyles="max-w-full lg:max-w-110">
                <div className="max-w-prose space-y-3">
                  <p>
                    Bodystorming helped me to explore how my concept could
                    prompt carers at the optimal time to capture a moment, to
                    avoid prompts feeling like disturbances. I found that that I
                    could infer many receptive moments with simple phone data -
                    detecting that picking up the phone after a period of not
                    using it often meant the carer was having a small
                    micro-break where they could be receptive to a prompt.
                  </p>
                </div>
              </EditorBox>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <div className="max-w-prose space-y-3">
                <h4>Peer Experience Prototyping</h4>
              </div>
              <ImageViewer
                blobType={1}
                src="/memento/peer-experience-prototyping.png"
                alt="Photo collage showing Sarah Hägele and peers conducting an experience prototyping session"
                caption="Enacting the basic concept with peers"
                className="w-60 h-60 xl:w-80 xl:h-80"
              />
              <EditorBox extraStyles="max-w-full lg:max-w-110">
                <div className="max-w-prose space-y-3">
                  <p>
                    Participants acted out care scenarios and I simulated
                    prompts by playing a sound and reading out a notification
                    text, to which the participant acting as the carer could
                    respond to with &quot;Yes&quot;, &quot;No&quot;, or
                    &quot;Later&quot;. In the evening, I sent the captured
                    photos back to the participants to simulate a review of the
                    day.
                  </p>
                  <p>
                    Overall, the concept was received very positively, and I
                    found that gentle prompt sounds and phrasings were
                    consistently received the best by all participants.
                  </p>
                </div>
              </EditorBox>
            </div>
          </ContentBlock>

          <ContentBlock reverse={false} alignCenter={false}>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="max-w-prose space-y-3">
                <h4>Wireframing & User Testing with Maze</h4>
              </div>
              <div className="flex flex-row flex-wrap justify-center items-center gap-2 xl:max-w-2/3 max-h-60 xl:max-h-80">
                <ImageViewer
                  blobType={2}
                  src="/memento/user-flow-1.png"
                  alt="Graphic showing an example user flow for capturing a Memento"
                  caption="User Flow: Capturing a Memento"
                  className="w-29 h-29 xl:w-39 xl:h-39"
                />
                <ImageViewer
                  blobType={3}
                  src="/memento/sitemap-1.png"
                  alt="Graphic showing the sitemap for Memento"
                  caption="Memento Initial Sitemap"
                  className="w-29 h-29 xl:w-39 xl:h-39"
                />
                <ImageViewer
                  blobType={4}
                  src="/memento/maze-test.png"
                  alt="Photo showing impressions from the Maze wireframe test"
                  caption="Excerpts from the unmoderated Maze wireframe test"
                  className="w-29 h-29 xl:w-39 xl:h-39"
                />
              </div>
              <EditorBox extraStyles="max-w-full lg:max-w-110">
                <div className="max-w-prose space-y-3">
                  <p>
                    I created key user flows, an initial sitemap, and then
                    sketched wireframes on paper. After a carer participant
                    cancelled an in-person user testing session, I took that as
                    an opportunity to set up a unmoderated online wireframe test
                    with Maze, enabling both the original participant and an
                    additional 3 peers to complete the test.
                  </p>
                  <p>
                    I could validate the intuitiveness of my basic user flows,
                    compared layout options, and developed a new review option
                    (Photo Collection) in response to user feedback.
                  </p>
                </div>
              </EditorBox>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <div className="max-w-prose space-y-3">
                <h4>Google Photos Case Study</h4>
              </div>
              <ImageViewer
                blobType={5}
                src="/memento/case-study.png"
                alt="Graphic showing an overview of AI-powered memory features in Google Photos"
                caption="Findings from the Google Photos case study"
                className="w-60 h-60 xl:w-80 xl:h-80"
              />
              <EditorBox extraStyles="max-w-full lg:max-w-110">
                <div className="max-w-prose space-y-3">
                  <p>
                    To explore how AI could be leveraged for Memento&apos;s
                    review features, I conducted research around
                    &quot;AI-powered reminiscing&quot; by reviewing a case study
                    from Google Photos.
                  </p>
                  <p>
                    I also learned about and incorporated key rules and patterns
                    for designing with AI into Memento - for example
                    &quot;Letting users supervise automation&quot; by making AI
                    features optional and by giving users the option to hide
                    mementos from view based on faces, pets, or dates.
                  </p>
                </div>
              </EditorBox>
            </div>
          </ContentBlock>

          <ContentBlock reverse={false} alignCenter={false}>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="max-w-prose space-y-3">
                <h4>Proof of Concept Adventure Stories</h4>
              </div>
              <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full h-60 xl:h-80">
                <ImageViewer
                  blobType={2}
                  src="/memento/luna.png"
                  alt="Graphic showing sample screenshots from the Luna app"
                  caption="Screenshots from the Luna app for AI story generation"
                  className="w-35 h-35 xl:w-50 xl:h-50"
                />
                <ImageViewer
                  blobType={3}
                  src="/memento/poc-adventure-story.png"
                  alt="Graphic showing inputs and outputs from ChatGPT for an adventure story"
                  caption="Results from experimenting with ChatGPT for adventure story generation"
                  className="w-35 h-35 xl:w-50 xl:h-50"
                />
              </div>
              <EditorBox extraStyles="max-w-full lg:max-w-110">
                <div className="max-w-prose space-y-3">
                  <p>
                    To explore if current AI tools could create engaging stories
                    with just Mementos as input, I first analysed an existing
                    app, Luna, that generates illustrated children&apos;s
                    bedtime stories based on a few words of user input. This
                    gave me confidence that AI-based story generation was
                    feasible in general.
                  </p>
                  <p>
                    Then, I got to work with ChatGPT to create my own adventure
                    stories with just some sample Mementos I had created from my
                    own life as input. The results were surprisingly engaging
                    stories and illustrations, allowing me to fully validate the
                    feasibility of my adventure story review idea.
                  </p>
                </div>
              </EditorBox>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <div className="max-w-prose space-y-3">
                <h4>Experience Prototyping with a Carer</h4>
              </div>
              <ImageViewer
                blobType={4}
                src="/memento/experience-prototyping-carer.png"
                alt="Photo showing a WhatsApp interaction simulating a Memento capture prompt"
                caption="Simulated Memento capture prompt via WhatsApp"
                className="w-60 h-60 xl:w-80 xl:h-80"
              />
              <EditorBox extraStyles="max-w-full lg:max-w-110">
                <div className="max-w-prose space-y-3">
                  <p>
                    I conducted one more experience prototyping session with a
                    carer, where I simulated app prompts by sending them text
                    messages throughout a real day in their life. Before that,
                    they told me the approximate times when they would be with
                    their loved one, like they would also do when setting up the
                    Memento app.
                  </p>
                  <p>
                    I sent the participant three prompts throughout the day and
                    they responded positively to each of them, finally
                    validating my core assumption.
                  </p>
                </div>
              </EditorBox>
            </div>
          </ContentBlock>

          <AnimationWrapper>
            <div className="max-w-prose space-y-3 my-5">
              <h3 id="persona-eval">Persona-Based Concept Evaluation</h3>

              <p>
                To ensure that Memento remained user-centred and provided value
                to different kinds of target users, I developed three
                proto-personas based on a broader dementia carer archetype
                created during the first project half.
              </p>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-5">
              <ImageViewer
                blobType={0}
                fillColor="#572B7B"
                caption="Proto-Persona: Maggie Marshall"
                className="w-50 h-50 xl:w-70 xl:h-70"
              >
                <Image
                  src="/memento/proto-persona-maggie.png"
                  alt="Proto-persona for Maggie Marshall"
                  width={300}
                  height={300}
                  priority
                  className="w-50 xl:w-70 rounded-xl"
                />
              </ImageViewer>
              <ImageViewer
                blobType={1}
                fillColor="#7A81B7"
                caption="Proto-Persona: David Duffy"
                className="w-50 h-50 xl:w-70 xl:h-70"
              >
                <Image
                  src="/memento/proto-persona-david.png"
                  alt="Proto-persona for David Duffy"
                  width={300}
                  height={300}
                  priority
                  className="w-50 xl:w-70 rounded-xl"
                />
              </ImageViewer>
              <ImageViewer
                blobType={2}
                fillColor="#FFC387"
                caption="Proto-Persona: Tara Tompson"
                className="w-50 h-50 xl:w-70 xl:h-70"
              >
                <Image
                  src="/memento/proto-persona-tara.png"
                  alt="Proto-persona for Tara Tompson"
                  width={300}
                  height={300}
                  priority
                  className="w-50 xl:w-70 rounded-xl"
                />
              </ImageViewer>
            </div>
          </AnimationWrapper>

          <ContentBlock reverse={true} flipOnMobile={true}>
            <div className="max-w-prose space-y-3">
              <p>
                I then evaluated the concept using a reworked version of my
                storyboard, where I walked through each step from David and
                Tara&apos;s point of view as well.
              </p>
              <p>
                Overall, this allowed me to see that Memento could provide value
                to different kinds of target users through its variety of
                different feature options. Even if not every feature would
                resonate fully with every person due to every carer&apos;s
                unique situations - the basic concept of capturing memories
                works for all of them, as long as the experience is kept very
                simple, intuitive, and flexible.
              </p>
            </div>
            <ImageViewer
              blobType={3}
              src="/memento/persona-concept-evaluation.png"
              alt="Photo showing the OneDesign team working on ideation activities"
              caption="Team Ideation Session - completed 'Crazy 8' sheets"
              className="w-70 h-70 lg:w-90 lg:h-90 xl:w-110 xl:h-110"
            />
          </ContentBlock>

          {/*----------- DELIVER -----------*/}

          <GradientHeading text="deliver" colourVariant="purple" />

          <AnimationWrapper>
            <div className="max-w-prose space-y-3 my-5">
              <h3 id="high-fi">High-Fidelity Prototyping</h3>

              <p>
                At this point, I was very confident in Memento as a refined
                concept, so I developed a first high-fidelity prototype in Figma
                based on a refined sitemap and user flows and set up another
                user test with a participant as well as conducting a usability
                analysis of the design myself as an expert user.
              </p>
            </div>
          </AnimationWrapper>

          <ContentBlock reverse={false} alignCenter={false}>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="max-w-prose space-y-3">
                <h4>User Testing</h4>
              </div>
              <ImageViewer
                blobType={0}
                src="/memento/high-fi-user-testing.png"
                alt="Photo collage of Sarah Hägele doing bodystorming"
                caption="Acting out care scenarios during bodystorming"
                className="w-60 h-60 xl:w-80 xl:h-80"
              />
              <EditorBox extraStyles="max-w-full lg:max-w-110">
                <div className="max-w-prose space-y-3">
                  <p>
                    I conducted the user test with a participant who had no
                    prior knowledge of the concept. This allowed me to get very
                    positive experiential feedback and I could validate that the
                    design was easy to use, intuitive, and conveyed its
                    intentions effectively to a novice user.
                  </p>
                </div>
              </EditorBox>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <div className="max-w-prose space-y-3">
                <h4>Expert Usability Analysis</h4>
              </div>
              <ImageViewer
                blobType={1}
                src="/memento/usability-analysis.png"
                alt="Collection of screenshots showing usability improvements made to the design of the app"
                caption="Changes made as a result of my usability analysis"
                className="w-60 h-60 xl:w-80 xl:h-80"
              />
              <EditorBox extraStyles="max-w-full lg:max-w-110">
                <div className="max-w-prose space-y-3">
                  <p>
                    I realised that I needed to make some refinements of the
                    design to increase contrasts and readability for better
                    accessibility. This is very relevant for Memento, as its
                    target users can be older and struggle with over the top
                    designs - the proto-persona David being a good example of
                    that.
                  </p>
                  <p>
                    My use of gradients in the app was such an over-the top
                    design, so I changed it to rely more on simple drop shadows
                    as well as increasing the opacity of elements like the nav
                    bar. I also changed the text colour in orange buttons from
                    white to dark purple, improving button readability.
                  </p>
                </div>
              </EditorBox>
            </div>
          </ContentBlock>

          <ContentBlock reverse={true} flipOnMobile={true}>
            <div className="max-w-prose space-y-3">
              <h4 id="outcomes">Outcomes Evaluation</h4>
              <p>
                After all these iterations, the final Memento seems like a
                pretty good concept. However, one of my core beliefs as a
                designer is that any design can only be considered good if it is
                also ethically sound - and that includes considering not just
                its desirable, but also undesirable outcomes and how to overcome
                them.
              </p>
              <p>
                This gave me further confidence in Memento, as I found that some
                unintended outcomes even offered positive opportunities for the
                future of the concept.
              </p>
            </div>
            <ImageViewer
              blobType={3}
              src="/memento/outcomes-evaluation.png"
              alt="Graphic showing the evaluation of desirable and undesirable outcomes"
              caption="Evaluation of Desirable and Undesirable Outcomes"
              className="w-70 h-70 lg:w-90 lg:h-90 xl:w-110 xl:h-110"
            />
          </ContentBlock>

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
              <h3 id="design-system">Design System</h3>
              <p>
                I chose a colour theme of purples and orange reminiscent of
                images of &quot;purple sunsets&quot;, inspired by the scenario
                of standing amongst such a sunset, experiencing feelings of
                calm, but also somberness for a topic like caring, which can be
                joyful, calm, but also difficult.
              </p>
              <p>
                The combination of a playful serif and a more grounded
                sans-serif font continue this dual motif in the design&apos;s
                typography.
              </p>
            </div>
            <ImageViewer
              blobType={3}
              src="/memento/design-system.png"
              alt="Graphic showing the Memento design system"
              caption="The Colours and Typography of the Memento Design System"
              className="w-70 h-70 lg:w-90 lg:h-90 xl:w-110 xl:h-110"
            />
          </ContentBlock>

          <AnimationWrapper>
            <div className="flex flex-row flex-wrap-reverse justify-center items-center my-10">
              <div className="max-w-full lg:max-w-150 lg:max-h-300 z-0">
                <EditorBox extraStyles="lg:pr-15">
                  <h3 id="final-design">The Final Design</h3>
                  <div className="max-w-prose space-y-3">
                    <p>
                      Memento gently prompts informal carers to capture photo
                      memories, Mementos, with their loved one, and it allows
                      the carers to reminisce and reflect in their own unique
                      visual journey - or to share their Mementos and connect
                      with others.
                    </p>
                    <p>
                      Click on the button below to see a video prototype of
                      Memento in action and the impact it can have on an
                      informal carer&apos;s daily life.
                    </p>
                  </div>
                  <Button
                    href="https://youtu.be/y_0fTAhkpqU"
                    colourVariant="purple"
                    className="mt-3"
                  >
                    Memento Video Prototype
                  </Button>
                </EditorBox>
              </div>

              <ImageCarousel
                images={carouselImages}
                width={1304}
                height={2163}
                className="-mb-15 lg:mb-0 lg:-ml-20 z-1 w-70 h-115"
              />
            </div>
          </AnimationWrapper>

          <ContentBlock alignCenter={false}>
            <SingleScreenDisplay
              image={carouselImagesMementoCapture}
              alt="AI Chat Screen"
              blobClassName="w-80 h-80"
              imageClassName="w-42 h-90 lg:w-45 lg:h-93"
              backgroundColour="#572B7B"
              variant="right"
              className="my-5 lg:my-0"
            >
              <h4>Memento Capture</h4>
              <p>
                The user is guided through capturing Mementos with simple,
                intuitive steps. The front and back cameras of the phone are
                used to capture not just the faces but also the environment
                around the carer and cared-for during a shared moment.
              </p>
            </SingleScreenDisplay>

            <SingleScreenDisplay
              image={carouselImagesSmartPrompt}
              alt="Expense Chat Screen"
              blobClassName="w-80 h-80"
              imageClassName="w-42 h-90 lg:w-45 lg:h-93"
              backgroundColour="#FE9F40"
              variant="left"
              className="my-5 lg:my-0"
            >
              <h4>Smart Prompting</h4>
              <p>
                If opted in, Memento sends out gentle prompts to capture
                Mementos when receptive moments are recognised that don&apos;t
                feel like disturbances. Pre-defined care times are combined with
                detection of the phone being picked up after some down time or
                the carer being in a special place like a café, and the app
                learns from the user&apos;s responses to prompts.
              </p>
            </SingleScreenDisplay>
          </ContentBlock>

          <ContentBlock alignCenter={false}>
            <SingleScreenDisplay
              image={carouselImagesJourneyRoad}
              alt="Automatic Expense Creation Screen"
              blobClassName="w-80 h-80"
              imageClassName="w-42 h-90 lg:w-45 lg:h-93"
              backgroundColour="#B373A2"
              variant="left"
              className="my-5 lg:my-0"
            >
              <h4>Visual Journey Road</h4>
              <p>
                The user collects Mementos as well as reviews and day ratings on
                a unique, personal journey road. They can scroll through their
                past moments and look at them again in detail at any time.
              </p>
            </SingleScreenDisplay>

            <SingleScreenDisplay
              image={carouselImagesCompass}
              alt="Expenses Wallet Screen"
              blobClassName="w-80 h-80"
              imageClassName="w-42 h-90 lg:w-45 lg:h-93"
              backgroundColour="#7A81B7"
              variant="right"
              className="my-5 lg:my-0"
            >
              <h4>Support Options</h4>
              <p>
                A variety of different support options are offered - ranging
                from in-app affirmational popups, tips from other carers, an
                FAQ, and local support contacts to an AI chat as a calm,
                non-judgemental friend who is always there to support you and to
                gently point out the positive.
              </p>
            </SingleScreenDisplay>
          </ContentBlock>

          <ContentBlock alignCenter={false}>
            <SingleScreenDisplay
              image={carouselImagesReview}
              alt="Workflow Management Screen"
              blobClassName="w-80 h-80"
              imageClassName="w-42 h-90 lg:w-45 lg:h-93"
              backgroundColour="#5D7B64"
              variant="right"
              className="my-5 lg:my-0"
            >
              <h4>Reviews & Day Ratings</h4>
              <p>
                Reviews and day ratings invite the carer to reminisce, with
                various options that suit different carers. Reviews are simple
                printable photo collections, highlight reels with fitting audio,
                engaging AI-generated adventure stories, or more quiet and
                private journal entries.
              </p>
            </SingleScreenDisplay>

            <SingleScreenDisplay
              image={carouselImagesSharing}
              alt="AI Output Screen"
              blobClassName="w-80 h-80"
              imageClassName="w-42 h-90 lg:w-45 lg:h-93"
              backgroundColour="#895737"
              variant="left"
              className="my-5 lg:my-0"
            >
              <h4>Community & Sharing</h4>
              <p>
                Users have the option to share Mementos, fostering connections
                to others around them. Sharing can be done by exporting Mementos
                and sending them on social apps, or directly via an in-app
                community with all users or just a group of friends.
              </p>
            </SingleScreenDisplay>
          </ContentBlock>

          {/*----------- REFLECTIONS -----------*/}

          <GradientHeading text="reflections" colourVariant="purple" />

          <AnimationWrapper>
            <div className="max-w-prose space-y-3 my-5">
              <p>
                I have to be honest - this felt like the best and smoothest
                running project I have ever done, as I was able to manage my
                time very well very consistently, and I am happy with how almost
                everything went. However, looking back, I do recognise some
                things I would do differently in the future.
              </p>
              <p>
                Most importantly, I would have liked to do more prototyping in a
                real context and optimally in-person with carers. My small
                participant sample and their limited availability, especially
                later on for the wireframe and high-fi prototype, meant that I
                had to rely on peers and overall very small sample sizes, which
                can skew results. For future projects, I will try to ensure to
                get more participants that fall into the target user group to
                get more real user feedback for every step of the way.
              </p>
              <p>
                Despite smaller shortcomings, overall, creating Memento has
                shown me how far I have come as a UX Designer - both in skills
                and mindset. In past projects, I struggled repeatedly with my
                logical, solution-oriented mindset as a former software
                developer. I found it difficult and scary to keep an open mind
                and embrace the &quot;tangled web&quot; of the design process,
                often questioning myself in the process. However, this time
                around, I felt a lot more confident making decisions, making
                rough plans but staying spontaneous, and being more open to
                different ideas.
              </p>
              <p>
                The prime example for this being my ideation process, where I
                reminded myself to stay open-minded and consider divergent
                ideas. Ultimately, this lead to me even discarding a concept I
                had previously silently favoured for a new one that I recognised
                to be better and more meaningful, and embracing a pivot in
                project direction alongside this.
              </p>
              <h4>
                I believe this project has been a milestone of me really coming
                into my own as a UX Designer.
              </h4>
            </div>
          </AnimationWrapper>

          {/*----------- WHAT'S NEXT -----------*/}

          <GradientHeading text="what's next?" colourVariant="purple" />

          <AnimationWrapper>
            <div className="max-w-prose space-y-3 my-5">
              <p>
                After very positive feedback to my presentation of the project
                from Loughborough University, I have been encouraged to try and
                take the concept further and realise it as an actual app. Given
                my experience with software development, I am open to starting
                an implementation of the app in the future - which I intend to
                keep fully open source to allow for contributions of whoever
                developer or designer wants to do their little part in creating
                something that truly cares about the carers.
              </p>
            </div>
          </AnimationWrapper>

          <GradientHeading text="the end" colourVariant="purple" />

          <AnimationWrapper>
            <div className="flex justify-center items-center m-5">
              <BackButton
                text="Next Case Study"
                href="/expenses"
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
