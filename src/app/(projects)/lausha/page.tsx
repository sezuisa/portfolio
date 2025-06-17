import type { Metadata } from "next";
import StaticBlob from "@/components/staticblob";
import ProjectsHeader from "@/components/projectsheader";
import BackButton from "@/components/backbutton";
import Button from "@/components/button";
import GradientHeading from "@/components/gradientheading";
import EditorBox from "@/components/editorbox";
import BroadImage from "@/components/broadimage";
import ContentBlock from "@/components/contentblock";
import TripleContentBlock from "@/components/triplecontentblock";
import Image from "next/image";
import VerticalBlob from "@/components/verticalblob";
import ScreenGallery from "@/components/screengallery";
import { IoIosArrowBack } from "react-icons/io";

export const metadata: Metadata = {
  title: "Lausha - Sarah Hägele Portfolio",
  description:
    "Detail page about the UX design project 'Lausha' by Sarah Hägele",
};

export default function Lausha() {
  return (
    <main>
      <ProjectsHeader heading="Lausha" />

      <div className="bg-extra-dark-choco -mb-25 overflow-x-hidden">
        <div className="mx-auto container flex flex-col items-center px-4 pt-4 pb-25 lg:px-16">
          <div className="w-full flex flex-col justify-center items-center">
            {/*----------- TAGLINE -----------*/}
            <h3 className="italic text-center">
              It&apos;s simple: Sharing laundry to save the planet.
            </h3>
            <BackButton text="Back to projects" href="/#anchor_projects" />
          </div>

          {/*----------- OVERVIEW -----------*/}

          <GradientHeading text="overview" colourVariant="teal" />

          <div className="flex flex-row flex-wrap justify-center items-center mb-2">
            <Image
              src="/mockup-placeholder-3.png"
              alt="Mockup of the Lausha App"
              width={350}
              height={400}
              priority
              className="-mb-20 lg:mb-0 lg:-mr-20 z-0 max-w-full"
            />
            <div className="max-w-full lg:max-w-150 lg:max-h-300 z-1">
              <EditorBox>
                <h3 className="font-bold">In a nutshell</h3>
                <p>
                  Laundry isn&apos;t exactly something many people would consider as
                  a particularly exciting topic. However, it is a very
                  worthwhile one to look at when considering potential for
                  improvements in both the overall experience of this
                  &quot;unexciting&quot; chore - and also in resource use.
                </p>
                <p>
                  Through primary research, I discovered that university
                  students in shared housing often underfill laundry machines,
                  leading to unnecessary water and energy waste. Lausha is a
                  mobile app designed to encourage more sustainable laundry
                  practices by helping students share loads, track impact, and
                  stay motivated through behavioural nudges and gamification.
                </p>
              </EditorBox>
            </div>
          </div>

          <div className="w-full py-8 flex flex-row justify-center flex-wrap">
            <div className="min-w-35 max-w-55 flex flex-col items-center mx-2 lg:mx-4 gap-3">
              <div className="relative flex justify-center items-center">
                <StaticBlob
                  blobType={0}
                  fillColor="#4B8482"
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
                </StaticBlob>
              </div>

              <p className="text-center font-bold">8 weeks</p>
            </div>
            <div className="min-w-35 max-w-55 flex flex-col items-center mx-2 lg:mx-4 gap-3">
              <StaticBlob
                blobType={1}
                fillColor="#ACDEDC"
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
              </StaticBlob>
              <p className="text-center font-bold">Solo UX Designer</p>
            </div>
            <div className="min-w-35 max-w-55 flex flex-col items-center mx-2 lg:mx-4 gap-3">
              <StaticBlob
                blobType={2}
                fillColor="#EBFCFB"
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
              </StaticBlob>
              <p className="text-center font-bold">
                Interviews, Observations, Autoethnography, Affinity Mapping,
                Ideation, Wireframing, User Testing
              </p>
            </div>
            <div className="w-35 lg:w-55 flex flex-col items-center mx-2 lg:mx-4 gap-3">
              <StaticBlob
                blobType={3}
                fillColor="#E87F64"
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
              </StaticBlob>
              <p className="text-center font-bold">
                Miro, Figma, Marvel, Pen & Paper, AEIOU
              </p>
            </div>
            <div className="w-35 lg:w-55 flex flex-col items-center mx-2 lg:mx-4 gap-3">
              <StaticBlob
                blobType={4}
                fillColor="#EC6344"
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
              </StaticBlob>
              <p className="text-center font-bold">
                Individual Academic Project
              </p>
            </div>
          </div>

          {/*----------- INTRODUCTION -----------*/}

          <GradientHeading text="introduction" colourVariant="teal" />

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
              <p>
                Doing laundry is often an individual, mindless task. It&apos;s a
                chore - not really something most people think about too much or
                immerse themselves into; it just needs to get done. This is
                especially true for university students, who are often busy day
                and night or have moved away from home for the first time,
                making laundry a task where convenience and speed are the major
                factors shaping their opinions and habits.
              </p>
              <p>
                What this means? Sustainability is one of the last things on
                students&apos; minds when doing their laundry, leading to wasteful,
                resource-heavy laundry practices - this should be addressed.
              </p>
            </div>
            <EditorBox extraStyles="max-w-full lg:max-w-110">
              <h4>
                How might we encourage more sustainable laundry habits among
                university students living in shared accommodations — without
                making laundry even more of a chore?
              </h4>
            </EditorBox>
          </ContentBlock>

          <ContentBlock reverse={true}>
            <div className="max-w-prose space-y-3">
              <p>
                Lausha was my first ever end-to-end UX project, which meant I
                used many of the methods and tools within the project for the
                first time, rapidly learning and constantly evaluating myself
                and my design practice throughout the process.
              </p>
              <p>
                I followed the Double Diamond design process for this project,
                which helped me get myself into the UX Designer mindset,
                structure my thinking and stay user-focused throughout without
                losing sight of milestones and goals.
              </p>
              <p>
                Throughout the different stages of the Double Diamond, I slowly
                consolidated my learnings into a validated and higher fidelity
                concept that not only addressed the sustainability issue but
                also responded to real user needs - culminating in Lausha, a
                behavioral intervention designed to make sustainable laundry
                easy, social, and rewarding.
              </p>
            </div>
            <Image
              src="/double_diamond_teal.png"
              alt="Illustration of the Double Diamond"
              width={0}
              height={0}
              priority
              className="w-full h-auto"
            />
          </ContentBlock>

          {/*----------- DISCOVER -----------*/}

          <GradientHeading text="discover" colourVariant="teal" />

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
              <p>
                To really understand how university students in shared
                accommodations approach laundry and where sustainability
                challenges arise, I employed a combination of qualitative
                research methods that allowed me to capture both explicit
                behaviors and unspoken habits.
              </p>
              <p>
                I started out with some semi-structured interviews in
                participants&apos; laundry rooms to learn about my participants&apos;
                unique experiences. Placing the interviews in-context in the
                participants&apos; usual laundry environment allowed for them to
                supplement their answers with gestures and demonstrations, which
                I found helped them remember details and enhanced the overall
                quality of my findings.
              </p>
              <p>
                To supplement this, I carried out video-recorded participant
                observations during several full student laundry cycles,
                allowing me to witness natural behaviors and workarounds that
                might not surface in interviews - think &quot;what people say vs.
                what people do&quot;. I lived in shared accommodation as a student
                myself during this project, which meant I could consider myself
                as part of my target user group. I recognised this as an unique
                opportunity for an autoethnographic session - I could gather my
                own experiences to enlarge my participant sample while also
                considering and reflecting upon my own biases and habits within
                the laundry process.
              </p>
              <EditorBox extraStyles="max-w-full my-5">
                <h3 className="font-bold leading-7">
                  What I realised throughout these sessions was that laundry is
                  a personal and often very habitual and automatic task, where
                  convenience and efficiency (both time- and cost-wise) are key
                  above all else.
                </h3>
              </EditorBox>
              <p>
                While all these different sessions were happening, I maintained
                an online graffiti wall on Padlet, which was shared in student
                chat groups and provided a more anonymous and informal way for
                students to share attitudes, frustrations, and cultural
                perceptions around laundry. This allowed me to expand my
                participant sample significantly and I also saw its potential as
                a way to mitigate bias within my findings - I could validate
                that my findings from my small-sample-size interviews and
                observations were also reflected in a broader, more diverse user
                group.
              </p>
              <p>
                These diverse methods were chosen to complement each other -
                balancing observed behavior with personal reflection and broader
                sentiment - to form a well-rounded understanding of the problem
                space before moving on to synthesis in the Define stage.
              </p>
            </div>
            <div>
              <div className="flex flex-row flex-nowrap items-center justify-center -mb-10 gap-3">
                <StaticBlob
                  blobType={4}
                  fillColor="#4B8482"
                  className="w-50 h-50 lg:w-70 lg:h-70"
                >
                  <Image
                    src="/icons/interview.png"
                    alt="Icon displaying two microphones with speech bubbles"
                    width={200}
                    height={200}
                    priority
                    className="w-35 h-35 lg:w-50 lg:h-50"
                  />
                </StaticBlob>
                <h4>Interviews</h4>
              </div>
              <div className="flex flex-row flex-nowrap items-center justify-center mb-3 gap-3">
                <h4>Observations</h4>
                <StaticBlob
                  blobType={5}
                  src="/lausha_observation.png"
                  className="w-50 h-50 lg:w-70 lg:h-70"
                />
              </div>
              <div className="flex flex-row flex-nowrap items-center justify-center -mb-10 gap-3">
                <StaticBlob
                  blobType={6}
                  src="/lausha_autoethnography.png"
                  className="w-50 h-50 lg:w-70 lg:h-70"
                />
                <h4>Autoethnography</h4>
              </div>
              <div className="flex flex-row flex-nowrap items-center justify-center gap-3">
                <h4>Graffiti Wall</h4>
                <StaticBlob
                  blobType={7}
                  src="/lausha_graffiti_wall.png"
                  className="w-50 h-50 lg:w-70 lg:h-70"
                />
              </div>
            </div>
          </ContentBlock>

          {/*----------- DEFINE -----------*/}

          <GradientHeading text="define" colourVariant="teal" />

          <BroadImage
            src="/lausha-affinity-diagram.jpg"
            alt="Affinity Diagram for the Lausha project"
          />

          <TripleContentBlock>
            <StaticBlob blobType={6} fillColor="#ACDEDC" className="w-90 h-90">
              <Image
                src="/aeiou_1.png"
                alt="Image of an AEIOU worksheet"
                width={300}
                height={400}
                priority
                className="rounded-xl"
              />
            </StaticBlob>
            <div className="max-w-prose space-y-3">
              <p>
                I came out of my primary research with loads and loads of raw
                data in different formats and it all had one thing in common -
                it didn&apos;t tell me much. So I had to make sense of it.
              </p>
              <p>
                I started by converting quotes from cleaned-up interview
                transcripts into digital sticky notes on a Miro board that I
                used as a central place for data analysis and synthesis. The
                same went for relevant quotes from the graffiti wall. To analyse
                all my raw video recordings, including from my autoethnographic
                session, I first followed the AEIOU framework (see example AEIOU
                worksheets on the side) to help me structure findings and write
                down relevant quotes from the footage. I then added these quotes
                and findings to the sticky notes on the board as well.
              </p>
              <p>
                From all these unorganised sticky notes, I began forming theme
                clusters and finally created an expansive affinity diagram (see
                the image at the top). As I synthesised the individual quotes
                and observations into findings for each theme and finally into
                insights (taking a finding and asking myself &quot;What does it mean
                and why does it matter?&quot;), my understanding of the laundry
                process and its underlying challenges and perceptions from
                students deepened steadily, and after ranking all my insights in
                a prioritisation matrix, there were two things that particularly
                stood out to me:
              </p>
            </div>
            <StaticBlob blobType={1} fillColor="#E87F64" className="w-90 h-90">
              <Image
                src="/aeiou_2.png"
                alt="Image of an AEIOU worksheet"
                width={300}
                height={400}
                priority
                className="rounded-xl"
              />
            </StaticBlob>
          </TripleContentBlock>

          <ContentBlock>
            <div className="flex flex-col items-center gap-5">
              <StaticBlob
                blobType={1}
                src="/lausha-laundry-pods.png"
                className="w-70 h-70 lg:w-100 lg:h-100"
              >
                <div className="text-center max-w-70 bg-full-teal rounded-3xl p-2 -mt-40 md:-ml-40">
                  <p>
                  &quot;I use pods. Don&apos;t know if that&apos;s good, with plastic and
                    all, but it&apos;s just the most convenient.&quot; (Participant 1)
                  </p>
                </div>
              </StaticBlob>
              <div className="w-full px-4 lg:px-0">
                <EditorBox extraStyles="max-w-full">
                  <p className="font-bold">
                    Students don&apos;t really care about sustainability when doing
                    their laundry.
                  </p>
                  <p>
                    They want to get laundry over with as quickly and
                    work-efficiently as possible, as it is seen as a boring,
                    unavoidable chore. This leads to unsustainable habits being
                    accepted for the sake of convenience.
                  </p>
                </EditorBox>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5">
              <StaticBlob
                blobType={3}
                src="/lausha-insight-fill-level.png"
                className="w-70 h-70 lg:w-100 lg:h-100"
              >
                <div className="text-center max-w-70 bg-dark-red rounded-3xl p-2 mt-50 md:ml-40">
                  <p>
                  &quot;Yeah, two weeks worth of laundry right there, just about
                    reaches the minimum line.&quot; (Participant 3)
                  </p>
                </div>
              </StaticBlob>
              <div className="w-full px-4 lg:px-0">
                <EditorBox extraStyles="max-w-full">
                  <p className="font-bold">
                    Students routinely underfill the washing machines.
                  </p>
                  <p>
                    They either haven&apos;t collected enough laundry by the time
                    they decide to or need to do a wash, or they do have enough
                    - but the load they choose to wash is small because they
                    believe larger loads won&apos;t get washed as thoroughly. Running
                    an underfilled washing machine is a lot less
                    energy-efficient than running it with a full load.
                  </p>
                </EditorBox>
              </div>
            </div>
          </ContentBlock>

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
              <p>
                The first insight validated the realisation and major assumption
                I had made already throughout the discovery phase. The second
                insight, however, was something I was surprised to find as a
                recurring theme within almost all of my participants.
                Personally, I had experienced not having enough laundry for a
                full load by the time I really needed to run a wash multiple
                times, but I hadn&apos;t expected this to also be an issue for many
                other students. And especially the discovery I made that
                students still underfilled the washing machine even when they
                could gather enough laundry for a full load was surprising and
                showed that running underfilled washing machines was a
                widespread issue caused both by necessity and deep-rooted habit.
              </p>
              <p>
                I decided that these two core insights about the student laundry
                process could form the basis for a design opportunity - one that
                is expressed within this &apos;How Might We?&apos; statement:
              </p>
            </div>
            <StaticBlob
              blobType={0}
              fillColor="#4B8482"
              className="w-100 h-100"
            >
              <h3 className="font-bold text-center">
                How might we create a design intervention for university
                students with shared laundry access who don&apos;t concern themselves
                much with sustainability issues and often underfill the washing
                machine in order for them to wash full loads most of the time?
              </h3>
            </StaticBlob>
          </ContentBlock>

          {/*----------- DEVELOP -----------*/}

          <GradientHeading text="develop" colourVariant="teal" />

          <ContentBlock reverse={true}>
            <div className="max-w-prose space-y-3">
              <h4 className="font-bold">Ideation</h4>
              <p>
                With a clearly defined problem and opportunity space and
                well-grounded user insights, I moved into the ideation phase. To
                encourage creative thinking and move beyond obvious solutions, I
                began with a &quot;What if?&quot; activity, using imaginative prompts to
                challenge assumptions and explore alternative perspectives. This
                was followed by a Crazy 8s sketching session, which enabled me
                to quickly generate a wide variety of concepts through rapid
                visual thinking.
              </p>
              <p>
                From this pool of ideas, I identified several promising
                directions that responded directly to the user behaviours and
                challenges uncovered during my research. At first, it seemed as
                if it would become necessary to focus only on one of my two core
                problem areas - either improving awareness and willingness to
                make conscious choices for sustainability within the laundry
                process or making it easy or even mandatory for students to wash
                full loads. However, I realised that combining aspects from my
                different ideas would form one concept that could address both -
                this meant deliberately blending social interaction with
                behaviour change strategies to make the laundry experience more
                fun while also nudging users towards more sustainable practices
                and informing them about the impact of their actions.
              </p>
            </div>
            <StaticBlob
              blobType={3}
              src="/lausha-what-if.png"
              className="w-70 h-70 lg:w-100 lg:h-100"
            />
          </ContentBlock>

          <div className="grow-1 flex flex-row place-content-center mt-10">
            <EditorBox extraStyles="max-w-full lg:max-w-200">
              <h4>The final idea:</h4>
              <p>
                An app enables users to share laundry loads with other users to
                achieve larger loads together. Before every wash, the user takes
                a photo of the filled-up washing machine and is given a score
                depending on how close they got to the optimal fill level of the
                washing machine, encouraging the formation of sustainable
                laundry habits. The score directly translates into points that
                the user collects and that result in awards like a free wash or
                a free coffee. All this makes the laundry process more social
                and rewarding, improving the experience and with that also
                increasing the willingness of students to pay more attention to
                sustainability within their laundry process.
              </p>
            </EditorBox>
          </div>

          <div className="w-full flex flex-row flex-wrap gap-5 justify-around mt-15">
            <div className="flex flex-col items-center gap-3 w-40 lg:w-70">
              <StaticBlob
                blobType={1}
                fillColor="#4B8482"
                className="w-35 h-35"
              >
                <Image
                  src="/icons/game-controller.png"
                  alt="Icon displaying a game controller"
                  width={120}
                  height={120}
                  priority
                  className=""
                />
              </StaticBlob>
              <h4 className="font-bold">Gamification</h4>
              <p className="text-center">
                Points, Milestones & Rewards encourage users to aim for optimal
                fill levels to get more points and to keep using the app to earn
                rewards like free washes, free drinks, etc.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 w-40 lg:w-70">
              <StaticBlob
                blobType={2}
                fillColor="#EBFCFB"
                className="w-35 h-35"
              >
                <Image
                  src="/icons/feedback.png"
                  alt="Icon displaying a happy, neutral and sad emoji"
                  width={120}
                  height={120}
                  priority
                  className=""
                />
              </StaticBlob>
              <h4 className="font-bold">Feedback</h4>
              <p className="text-center">
                Fill level scoring with higher scores for optimal fill levels
                and the use of corresponding positive and negative messaging
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 w-40 lg:w-70">
              <StaticBlob
                blobType={4}
                fillColor="#EC6344"
                className="w-35 h-35"
              >
                <Image
                  src="/icons/nudges.png"
                  alt="Icon displaying a phone with a notification bell and a message bubble"
                  width={120}
                  height={120}
                  priority
                  className=""
                />
              </StaticBlob>
              <h4 className="font-bold">Behaviour Steering</h4>
              <p className="text-center">
                Notifications & in-app messaging remind and encourage users to
                use the app and to make use of the community laundry sharing
                feature; Constraints & affordances in the app&apos;s design prevent
                misuse of features and make the experience simple and intuitive
              </p>
            </div>
          </div>

          <ContentBlock>
            <div className="maw-w-prose space-y-3">
              <h4 className="font-bold">Low-Fi Wireframing</h4>
              <p>
                To begin translating my concept into a tangible design, I
                developed a low-fidelity wireframe prototype. I initially
                sketched out the primary user flows on paper, focusing on three
                key interaction scenarios with the app:
              </p>
              <ul className="list-disc pl-5">
                <li className="text-[#EBFCFB]">
                  Logging a suboptimal fill level and receiving negative
                  feedback
                </li>
                <li className="text-[#EBFCFB]">
                  Logging an optimal fill level and receving positive feedback
                  and a reward
                </li>
                <li className="text-[#EBFCFB]">
                  Engaging with the community section of the app to manage
                  laundry shares with other users
                </li>
              </ul>
              <p>
                This sketching phase allowed me to experiment with different
                layouts and functionalities quickly, without getting distracted
                by too much visual polish. One design element I was very sure of
                at this point and wanted to see a participant&apos;s response to was
                displaying the current point score on the home screen through an
                indicator that looks like a washing machine drum. This would
                fill up as points are added, culminating in a reward once the
                drum was filled completely. I was hoping that his metaphor-based
                approach in the design would make it stand out, keep it a bit
                more playful and make the point system very visual and easy to
                understand.
              </p>
              <p>
                Once the core structure was in place, I scanned the paper
                wireframes and digitised them using the Marvel app, where I
                added basic click-through interactions to simulate the intended
                experience. This early prototype served as a lightweight but
                effective way to visualise the concept and prepare for initial
                user testing.
              </p>
            </div>
            <ScreenGallery
              galleryName="lausha-low-fi"
              backgroundColour="#4B8482"
              buttonColour="full-red"
              className="w-80 h-80"
            />
          </ContentBlock>

          <ContentBlock reverse={true}>
            <div className="maw-w-prose space-y-3">
              <p>
                I then conducted a user testing session with a participant from
                my target user group to evaluate the prototype&apos;s usability and
                the overall concept. Using the Marvel prototype, I let the
                participant act through the three key user flows in a laundry
                room using the &apos;think aloud&apos; method and presented alternative
                layout versions for screens to gather feedback on structure and
                clarity.
              </p>
              <p>
                Throughout the session, I observed their interactions, took note
                of questions they asked or things they pointed out in real time,
                and followed up with a short interview. The participant found
                the concept itself very engaging, and showed a very positive
                response to the basic design ideas, especially the
                washing-machine-drum-like scoring. However, it became clear that
                the connection between fill-level optimisation and environmental
                impact - a core goal of the app - was not coming across as
                strongly as intended. This insight, along with feedback on the
                need for clearer messaging and guidance and a voiced concern
                about ensuring user trust in the laundry sharing system,
                directly informed the development of the mid-fidelity prototype,
                where I focused on making the purpose and value of the app more
                explicit and intuitive for users.
              </p>
            </div>
            <StaticBlob
              blobType={7}
              src="/lausha-lowfi-testing.png"
              className="w-100 h-100"
            />
          </ContentBlock>

          {/*----------- DELIVER -----------*/}

          <GradientHeading text="deliver" colourVariant="teal" />

          <ContentBlock>
            <div className="maw-w-prose space-y-3">
              <p>
                Before implementing concrete concept or layout refinements, I
                focused on creating a visual language for the mid-fidelity
                prototype that felt approachable, engaging, and clearly
                communicated feedback to the user. I selected a teal and
                orangey-red colour palette - a combination of cool and warm
                tones that not only provided visual contrast but also served a
                functional purpose within the app: warm hues were used to convey
                positive feedback, while cooler tones indicated less optimal
                outcomes, reinforcing the scoring system&apos;s behavioural cues.
              </p>
              <p>
                To soften the overall look and make the interface feel more
                inviting, I used a rounded typeface in a dark grey, which
                offered both readability and a friendly tone. I also
                incorporated gradients and background blur effects across
                overlays, backgrounds, and headings, adding a sense of depth and
                modernity without making the overall design too overwhelming.
              </p>
            </div>
            <Image
              src="/lausha_design_system.png"
              alt="Lausha's design system"
              width={400}
              height={400}
              priority
              className="w-full md:w-100 h-auto"
            />
          </ContentBlock>

          <ContentBlock reverse={true}>
            <div className="maw-w-prose space-y-3">
              <p>
                The next step was to respond to the feedback received from the
                first user test. For that, I made several key adjustments to the
                features of the app for the development of the mid-fidelity
                prototype to improve clarity, trust, and alignment with the
                app&apos;s sustainability goals.
              </p>
              <p>
                To help users better understand their laundry scores, I refined
                the feedback system not just by using coded colours, but also by
                adding a title on the score screen that clearly communicated how
                efficient the load was, offering more concrete and actionable
                feedback. I also introduced a “Why am I getting this score?”
                screen, which users could access for a clear explanation of
                optimal fill levels and how the scoring system contributes to
                environmental impact - making the link between user behaviour
                and sustainability more explicit.
              </p>
              <p>
                To address concerns around user trust when sharing loads, I
                implemented contextual guidance prompts within the app and added
                a user rating count to each profile, helping users assess
                reliability before agreeing to share. These changes aimed to
                enhance transparency, reinforce the purpose of the app, and
                support more confident, sustainable user decisions.
              </p>
            </div>
            <Image
              src="/lausha_lowfi_actions.png"
              alt="Concept and desing refinements made after the low-fidelity stage"
              width={400}
              height={400}
              priority
              className="w-full h-auto"
            />
          </ContentBlock>

          <BroadImage
            src="/lausha_mid_fi_testing.png"
            alt="Mid-Fidelity User Testing"
          />

          <ContentBlock>
            <div className="maw-w-prose space-y-3">
              <p>
                I conducted further user testing with the mid-fidelity prototype
                to evaluate how well the updated design communicated the app&apos;s
                purpose and supported user needs. The overall feedback from
                participants was highly positive - they found the concept
                engaging, the interface intuitive, and all stated they would be
                likely to use the app in real life.
              </p>
              <p>
                Notably, the prototype performed better at communicating the
                link between fill level optimisation and environmental
                sustainability, as evidenced by participants&apos; comments during
                the sessions and in the follow-up interviews. They also showed a
                general willingness to share loads with others, suggesting that
                the design changes to build trust—such as added guidance and
                user rating information—had been effective.
              </p>
              <p>
                While no major usability issues were raised, participants did
                suggest a couple of useful improvements. Some expressed concern
                that their laundry photos might not be properly aligned or clear
                enough, potentially leading to inaccurate scoring, so I added
                real-time feedback on the camera screen to reassure users when
                the photo is suitable for analysis. Others felt it would be
                helpful to include a timer for ongoing laundry shares, so that
                users and their partners could keep track of when a shared wash
                would finish—this feature was also implemented in the updated
                prototype. These refinements further strengthened the app&apos;s
                usability and overall user experience.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col items-center gap-5 lg:max-w-110">
                <div className="bg-full-teal rounded-3xl p-2">
                  <p className="font-bold">Action 1</p>
                  <p>
                    Let users know when they have correctly aligned the camera
                    with the washing machine drum through feedback.
                  </p>
                </div>
                <StaticBlob
                  blobType={3}
                  fillColor="#EBFCFB"
                  className="w-40 h-40"
                >
                  <Image
                    src="/lausha_action_1.png"
                    alt="Screenshot of the design refinement for feedback on camera alignment"
                    width={200}
                    height={200}
                    priority
                    className="rounded-xl"
                  />
                </StaticBlob>
              </div>
              <div className="flex flex-col items-center gap-5 lg:max-w-100">
                <div className="bg-dark-red rounded-3xl p-2">
                  <p className="font-bold">Action 2</p>
                  <p>Add a timer for ongoing washes.</p>
                </div>
                <StaticBlob
                  blobType={0}
                  fillColor="#E87F64"
                  className="w-40 h-40"
                >
                  <Image
                    src="/lausha_action_2.png"
                    alt="Screenshot of the design refinement for an ongoing wash timer"
                    width={200}
                    height={200}
                    priority
                    className="rounded-xl"
                  />
                </StaticBlob>
              </div>
            </div>
          </ContentBlock>

          <div className="flex flex-row flex-wrap-reverse justify-center items-center mb-10">
            <div className="max-w-full lg:max-w-150 lg:max-h-300 z-0">
              <EditorBox extraStyles="lg:pr-10">
                <p>
                  Lausha is a simple 3-step process: find a laundry share
                  partner, wash your clothes together, and earn rewards for
                  achieving an optimal fill level. By encouraging collaboration
                  and providing instant feedback on each load&apos;s efficiency, the
                  app makes sustainable laundry habits easy, social, and
                  rewarding.
                </p>
                <Button
                  href="https://www.figma.com/proto/KMn8mSIB2KXc1G9OOFI3X7/Lausha-Prototype-1?page-id=0%3A1&node-id=1-2&viewport=245%2C139%2C0.19&t=u1X0NxB1xxm3LZNL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1"
                  colourVariant="teal"
                  className="mt-3"
                >
                  Try Lausha&apos;s flows out for yourself
                </Button>
              </EditorBox>
            </div>
            <Image
              src="/mockup-placeholder-1.png"
              alt="Mockup of the Lausha App"
              width={350}
              height={400}
              priority
              className="-mb-13 lg:mb-0 lg:-ml-20 z-1 max-w-full"
            />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-15">
            <div className="flex flex-col items-center lg:max-w-80">
              <h4>Gamification</h4>
              <ScreenGallery
                galleryName="lausha-gamification"
                backgroundColour="#4B8482"
                buttonColour="full-red"
                className="w-80 h-80"
              />
            </div>
            <div className="flex flex-col items-center lg:max-w-80">
              <h4>Feedback</h4>
              <ScreenGallery
                galleryName="lausha-feedback"
                backgroundColour="#4B8482"
                buttonColour="full-red"
                className="w-80 h-80"
              />
            </div>
            <div className="flex flex-col items-center lg:max-w-80">
              <h4>Behaviour Steering</h4>
              <ScreenGallery
                galleryName="lausha-behaviour-steering"
                backgroundColour="#4B8482"
                buttonColour="full-red"
                className="w-80 h-80"
              />
            </div>
          </div>

          {/*----------- REFLECTIONS -----------*/}

          <GradientHeading text="reflections" colourVariant="teal" />

          <ContentBlock alignCenter={false}>
            <div className="max-w-prose space-y-3">
              <h4 className="font-bold">What I learned</h4>
              <p>
                I gained a deep understanding of the Double Diamond process and
                how each phase contributes to creating a user-centred solution.
                As it was my first full UX project, I followed the four phases
                in a relatively linear fashion, which helped me grasp the
                structure without feeling overwhelmed. However, I&apos;ve since come
                to appreciate the value of being more flexible and iterative,
                and in future projects, I would allow myself to move more
                fluidly between stages as new insights emerge.
              </p>
              <p>
                Working with a small participant sample due to time constraints
                and limited local connections was a challenge, but it taught me
                how to make the most of every research opportunity and be
                creative in participant recruitment. The biggest shift, however,
                was a mindset change - coming from a Computer Science
                background, I had to adapt from a solution-driven approach to a
                more exploratory, human-centred design process.
              </p>
              <p>
                This experience has been crucial in shaping how I now approach
                design problems with curiosity, empathy, a readiness to
                challenge assumptions, and a drive to create something
                meaningful.
              </p>
            </div>
            <div className="max-w-prose space-y-3">
              <h4 className="font-bold">A word on ethics</h4>
              <p>
                The field of designing for behaviour change is not an
                uncontroversial one. Is it acceptable as a designer to have this
                power over users to change their usual behaviours to something
                the designer (or a different stakeholder) considers to be the
                right one? I believe that any design intervention aiming to
                change user behaviour must be evaluated not just by its
                effectiveness in achieving the desired behaviour, but also by
                whether it does so ethically. For Lausha, I considered many
                different ethical evaluation factors when developing the
                concept:
              </p>
              <ul className="list-disc pl-5">
                <li className="text-[#EBFCFB]">
                  Were my intent and motivation for designing Lausha ethical?
                </li>
                <li className="text-[#EBFCFB]">
                  Are the behaviour change methods that Lausha uses ethical?
                </li>
                <li className="text-[#EBFCFB]">
                  Is the level of control the user has over Lausha acceptably
                  weighted against its intent and motivation?
                </li>
                <li className="text-[#EBFCFB]">
                  Are the intended outcomes of Lausha ethical and have
                  unintended outcomes been considered and are ethical?
                </li>
                <li className="text-[#EBFCFB]">
                  Have I taken moral responsibility for Lausha as a concept?
                </li>
              </ul>
              <p>
                I can confidently answer all these questions with &apos;Yes&apos;. I
                didn&apos;t use any coercive behaviour change strategies, leaving the
                control with the user at all times and relying more on
                informing, making the experience fun, and gently nudging - only
                employing design constraints to make the experience easier and
                prevent misuse, also addressing potential unintended outcomes. I
                also believe that my intent and motivation, saving energy in the
                laundry process and educating about the impact of laundry load
                size on the environment, are ethical, and are acceptably
                weighted against the level of control the user has. And I to
                this day firmly stand behind the concept, taking moral
                responsibility for it.
              </p>
              <p>
                In line with an ethical design practice, I of course also made
                sure that any sessions with participants followed standard
                ethics practices. Every participant was given a participant
                information sheet and a consent form before any interviews,
                observations, or user testing sessions took place.
              </p>
            </div>
          </ContentBlock>

          {/*----------- WHAT'S NEXT -----------*/}

          <GradientHeading text="what's next?" colourVariant="teal" />

          <div className="flex flex-row w-full justify-center mb-10">
            <div className="max-w-prose space-y-3">
              <p>
                While the project has concluded and was not intended for
                real-world implementation, there are several features I would
                explore further if development were to continue. Potential next
                steps could include integrating an in-app payment system for
                shared washes, implementing automatic user matching based on
                schedules and preferences, and adding a historical score
                overview to help users track their fill levels over time. This
                data could also enable personalised behavioural nudges,
                encouraging more consistent sustainable habits. These additions
                would further enhance the app&apos;s functionality and deepen its
                impact on user behaviour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
