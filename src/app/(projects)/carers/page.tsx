import type { Metadata, Viewport } from "next";
import StaticBlob from "@/components/staticblob";
import ProjectsHeader from "@/components/projectsheader";
import BackButton from "@/components/backbutton";
import ContentBlock from "@/components/contentblock";
import BroadImage from "@/components/broadimage";
import EditorBox from "@/components/editorbox";
import GradientHeading from "@/components/gradientheading";
import TripleContentBlock from "@/components/triplecontentblock";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Carers - Sarah Hägele Portfolio",
  description:
    "Detail page about the UX design project for informal carers by Sarah Hägele",
};

export const viewport: Viewport = {
  themeColor: "#322824",
};

export default function Carers() {
  return (
    <main>
      <ProjectsHeader heading="Caring for the Carer" />

      <div className="bg-extra-dark-choco -mb-25 overflow-x-hidden">
        <div className="mx-auto container flex flex-col items-center px-4 pt-4 pb-25 lg:px-16">
          <div className="w-full flex flex-col justify-center items-center">
            {/*----------- TAGLINE -----------*/}
            <h3 className="italic text-center">
              Discovering opportunities to support informal carers.
            </h3>
            <BackButton
              text="Back to case studies"
              href="/#anchor_casestudies"
            />
          </div>

          {/*----------- OVERVIEW -----------*/}

          <GradientHeading text="overview" colourVariant="teal" />

          <div className="flex flex-row flex-wrap justify-center items-center mb-10">
            <Image
              src="/carers/dementia_carer_illustration.png"
              alt="Illustration of a dementia carer"
              width={350}
              height={400}
              priority
              className="-mb-20 lg:-mb-10 lg:-mr-20 z-0 w-90 -rotate-15"
            />
            <div className="max-w-full lg:max-w-150 lg:max-h-300 z-1">
              <EditorBox>
                <h3 className="font-bold">In a nutshell</h3>
                <div className="max-w-prose space-y-3">
                  <p>
                    Informal carers are the backbone of many health care systems
                    in the world, yet they are routinely undervalued,
                    overworked, and they feel unsupported and isolated.
                  </p>
                  <p>
                    Through an in-depth and thorough exploratory research
                    process, I collected rich stories and experiences from not
                    only informal carers themselves, but also professional
                    carers and support workers for informal carers. I discovered
                    that especially carers for people who have dementia struggle
                    with an &quot;always on&quot; mentality, making it hard for
                    them to take time for themselves.
                  </p>
                  <p>
                    I steadily gained a deeper and deeper understanding of
                    informal carers for people with dementia throughout my
                    research until I arrived at a concise UX Vision Statement
                    that I believe presents a real opportunity to make a
                    difference for carers.
                  </p>
                </div>
              </EditorBox>
            </div>
          </div>

          <div className="w-full py-8 flex flex-row justify-center flex-wrap gap-5">
            <div className="min-w-35 max-w-55 flex flex-col items-center gap-3">
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

              <p className="text-center font-bold">10 weeks</p>
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
                Secondary Research, Interviews, Directed Storytelling, Diary
                Study, Group Card Sorting, Affinity Mapping, Archetypes,
                Ecosystem Mapping, Empathy Mapping, Experience Mapping
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
                Figjam, Figma, Behaviour Theories: PERMA Wellbeing Model,
                Kübler-Ross Stages of Grief
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
                Individual Academic Major Project
              </p>
            </div>
          </div>

          {/*----------- INTRODUCTION -----------*/}

          <GradientHeading text="introduction" colourVariant="teal" />

          <ContentBlock reverse={false}>
            <div className="max-w-prose space-y-3">
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
                The challenge then was to investigate and define the real needs
                behind carers&apos; experiences in order to identify meaningful
                opportunities for intervention. I consciously decided to center
                this project around informal carers because of these reasons,
                but also because of my personal motivation and values. I believe
                that caring more about the carers is a very meaningful and
                worthwhile endeavour, and one that gives me the opportunity to
                make a difference for people.
              </p>
            </div>
            <EditorBox extraStyles="max-w-full lg:max-w-110">
              <h4>
                How might we find an opportunity that allows the design of a
                solution to support carer wellbeing?
              </h4>
            </EditorBox>
          </ContentBlock>

          <ContentBlock reverse={true}>
            <div className="max-w-prose space-y-3">
              <p>
                As the project is currently still ongoing, this case study is
                focused on its first phase, which follows the first half of the
                Double Diamond process: Discover and Define. I used a
                mixed-methods approach, combining extensive secondary research
                with a diverse range of primary user research methods. My aim
                was to build a deep understanding of the lived experiences of
                informal carers more broadly at first and later on, I narrowed
                this down to specifically dementia carers. With this
                understanding of my target users, I could then synthesise
                actionable insights, culminating in a UX Vision Statement and
                three Experience Design Principles that could form a good basis
                for future design directions.
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
              <h3>Secondary Research</h3>
              <p>
                Before speaking to users, I immersed myself in secondary
                research to better understand the context surrounding informal
                dementia care. I explored a wide range of sources - from
                academic journals and government publications to personal blog
                posts, carer forums, and charity websites - gradually building a
                good understanding of what it means to be an informal carer
                today.
              </p>
              <p>
                I went back to secondary research several times throughout the
                primary research process as themes from conversations with
                participants emerged, for example to explore relevant
                behavioural theories and wellbeing frameworks to help interpret
                and structure what I was learning. Overall, my secondary
                research included:
              </p>
              <ul className="list-disc pl-5">
                <li className="text-[#EBFCFB]">
                  General challenges and lived experiences of informal carers
                </li>
                <li className="text-[#EBFCFB]">
                  Different types of informal carers to start building
                  archetypes
                </li>
                <li className="text-[#EBFCFB]">
                  The PERMA model of wellbeing by Martin Seligman, to frame the
                  impact of caring on wellbeing
                </li>
                <li className="text-[#EBFCFB]">
                  The concept of anticipatory grief, through the lens of the
                  Kübler-Ross model, the &apos;5 stages of grief&apos;
                </li>
              </ul>
              <p>
                What stood out most was the emotional landscape of caring —
                carers don&apos;t just face logistical challenges; they&apos;re
                often mourning the gradual loss of the person they once knew,
                while still caring for them every day. This anticipatory grief
                emerged as a key theme, deeply impacting their wellbeing and
                making it harder for them to prioritise their own needs.
              </p>
              <p>
                Throughout the secondary research process, I tracked findings
                and surfaced assumptions using a risk-uncertainty matrix.
                High-risk, high-uncertainty assumptions — such as how supported
                carers feel by their environment, or the emotional toll of
                constant presence — became focal points for validation within my
                primary research.
              </p>
            </div>
            <div>
              <StaticBlob
                blobType={5}
                src="/carers/assumptions_map.png"
                className="w-60 h-60 lg:w-110 lg:h-110"
              />
            </div>
          </ContentBlock>

          <ContentBlock reverse={true} flipOnMobile={true}>
            <div className="max-w-prose space-y-3">
              <h3>Primary (User) Research</h3>
              <p>
                With a foundation of assumptions in place, I set out to explore
                the lived experiences of informal carers through qualitative
                user research. However, from the beginning, I was mindful that
                this wouldn&apos;t be straightforward — carers are often
                time-poor, emotionally burdened, and, in some cases, vulnerable.
                Engaging with them ethically and respectfully was essential.
              </p>
              <p>
                To ensure the research would be safe and appropriate for
                participants, I went through a rigorous formal ethical approval
                process with the university. This meant that I couldn&apos;t
                speak directly with informal carers themselves for the first
                several weeks of the project. Rather than pause my research, I
                adapted: I used this time to engage with support workers and
                professional carers, who work closely with informal carers and
                had rich second-hand insights to offer.
              </p>
              <p>
                I conducted four semi-structured interviews with support workers
                for informal carers, including a creative ecosystem mapping
                activity within the interview to understand carers&apos; wider
                context and support networks. Similarly, I interviewed five
                professional carers, supported by a carer archetype-building
                activity, where we created personas based on archetype templates
                I developed for this purpose. Throughout these interviews, I
                started to see a focus emerge on dementia carers as especially
                emotionally burdoned, so I focused on just the dementia carer
                archetype.
              </p>
            </div>
            <div className="max-w-full">
              <div className="flex flex-row flex-nowrap items-center justify-center -mb-10 gap-3">
                <StaticBlob
                  blobType={4}
                  fillColor="#4B8482"
                  className="w-50 h-50 lg:w-70 lg:h-70"
                >
                  <Image
                    src="/carers/ecosystem_mapping_activity.jpg"
                    alt="Image of a completed ecosystem map by a participant"
                    width={200}
                    height={300}
                    priority
                    className="rounded-xl"
                  />
                </StaticBlob>
                <h4>Interviews with Ecosystem Mapping</h4>
              </div>
              <div className="flex flex-row flex-nowrap items-center justify-center mb-3 gap-3">
                <h4>Interviews with Archetype Building</h4>
                <StaticBlob
                  blobType={5}
                  fillColor="#4B8482"
                  className="w-50 h-50 lg:w-70 lg:h-70"
                >
                  <Image
                    src="/carers/dementia_carer_archetype_activity.png"
                    alt="Image of a completed dementia carer archetype by a participant"
                    width={300}
                    height={200}
                    priority
                    className="rounded-xl"
                  />
                </StaticBlob>
              </div>
            </div>
          </ContentBlock>

          <ContentBlock>
            <div className="max-w-prose space-y-3">
              <p>
                Once ethical clearance was granted, I shifted to engaging
                directly with dementia carers themselves. I wanted to ensure the
                methods were as respectful and accessible as possible, while
                still allowing for meaningful, reflective insight. I therefore
                designed a mixed-method approach, combining rich personal
                reflective stories with real-time experiences and creative
                expression.
              </p>
              <p>
                Throughout three directed storytelling sessions, I invited
                carers to walk me through their daily experiences in their own
                words, focusing on moments where they felt like they needed a
                break and time for themselves and what they experienced during
                these moments. At the same time, I ran a week-long diary study
                via WhatsApp with an active dementia carer, which offered a
                lightweight, real-time way for them to share thoughts, moments,
                and struggles — and allowed me to ask sensitive follow-up
                questions in a non-intrusive way. Finally, I complemented this
                with a group card sorting session, using the five PERMA
                wellbeing categories to explore how different aspects of
                wellbeing showed up (or didn&apos;t) in their caring
                experiences.
              </p>
              <p>
                This mixed method approach worked really well. Each method
                complemented the others: where directed storytelling captured
                emotional highs and lows, the diary study surfaced day-to-day
                pressures, and card sorting prompted reflection on needs and
                values that might otherwise go unspoken.
              </p>
            </div>
            <div className="max-w-full">
              <div className="flex flex-row flex-nowrap items-center justify-center mb-3 gap-3">
                <h4>Directed Storytelling</h4>
                <StaticBlob
                  blobType={5}
                  fillColor="#4B8482"
                  className="w-50 h-50 lg:w-70 lg:h-70"
                >
                  <Image
                    src="/icons/storytelling.png"
                    alt="Icon displaying a woman reading from a book"
                    width={200}
                    height={200}
                    priority
                    className="w-35 h-35 lg:w-50 lg:h-50"
                  />
                </StaticBlob>
              </div>
              <div className="flex flex-row flex-nowrap items-center justify-center -mb-10 gap-3">
                <StaticBlob
                  blobType={0}
                  fillColor="#4B8482"
                  className="w-50 h-50 lg:w-70 lg:h-70"
                >
                  <Image
                    src="/carers/diary_study_screenshot.jpg"
                    alt="Screenshot of a WhatsApp Diary Study"
                    width={150}
                    height={300}
                    priority
                    className="rounded-xl w-25 h-auto md:w-30 lg:w-40"
                  />
                </StaticBlob>
                <h4>WhatsApp Diary Study</h4>
              </div>
              <div className="flex flex-row flex-nowrap items-center justify-center gap-3">
                <h4>PERMA Group Card Sorting</h4>
                <StaticBlob
                  blobType={1}
                  src="/carers/card_sorting.jpg"
                  className="w-50 h-50 lg:w-70 lg:h-70"
                />
              </div>
            </div>
          </ContentBlock>

          {/*----------- DEFINE -----------*/}

          <GradientHeading text="define" colourVariant="teal" />

          <div className="max-w-prose space-y-3">
            <h3>Making Sense of my Data</h3>
            <p>
              Synthesis in this project was an ongoing, iterative process that
              allowed me to adapt and deepen my focus as new information
              emerged. I went through two key rounds of synthesis: the first
              after conducting interviews with support workers and professional
              carers, and the second following my research activities with
              dementia carers themselves. This approach allowed me to learn in
              stages, validating early assumptions and findings while uncovering
              richer, more nuanced insights from rich, lived experiences as I
              went.
            </p>
          </div>

          <BroadImage
            src="/carers/affinity_map.jpg"
            alt="Excerpt of Affinity Diagram for the Carers project after talking to support workers and professional carers"
          />

          <ContentBlock reverse={true}>
            <div className="max-w-prose space-y-3">
              <h4>Round One: Framing the Landscape</h4>
              <p>
                After speaking with support workers and professional carers, I
                carried out my first round of affinity mapping to start making
                sense of what I had heard. These participants brought indirect
                but deeply informed perspectives on the lives of informal carers
                - I started to see themes emerging around emotional exhaustion,
                the isolation carers face, and their struggle to maintain a
                healthy, balanced life around their role as a carer.
              </p>
              <p>
                From this synthesis, I also developed two design artefacts in
                the form of a carer ecosystem map visualising the support
                network - or lack thereof - that surrounds them, and a dementia
                carer archetype representing a composite of the needs, goals,
                and challenges of my target user group. Both of these artefacts
                were co-created with my participants through the creative
                activities I conducted with them during the interviews.
              </p>
              <p>
                With this first round of synthesis, I began shaping an early
                direction for the next phase of research. A key area of
                opportunity emerged: the difficulty carers face in taking even
                short breaks throughout the day. This became the focus of my
                subsequent research with dementia carers themselves.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <StaticBlob
                blobType={2}
                fillColor="#4B8482"
                className="w-70 h-70 lg:w-100 lg:h-100 lg:mr-25"
              >
                <Image
                  src="/carers/ecosystem_map.png"
                  alt="Ecosystem Map for the dementia carer"
                  width={400}
                  height={400}
                  priority
                  className="w-70 h-auto md:w-80 lg:w-100"
                />
              </StaticBlob>
              <StaticBlob
                blobType={3}
                fillColor="#4B8482"
                className="w-70 h-70 lg:w-100 lg:h-100 lg:ml-25"
              >
                <Image
                  src="/carers/archetype_dementia_carer.png"
                  alt="Archetype of the dementia carer"
                  width={400}
                  height={400}
                  priority
                  className="w-70 h-auto md:w-80 lg:w-100"
                />
              </StaticBlob>
            </div>
          </ContentBlock>

          <BroadImage
            src="/carers/affinity_map_2.jpg"
            alt="Excerpt of Affinity Diagram for the Carers project after talking to dementia carers"
          />

          <ContentBlock>
            <div className="max-w-prose space-y-3">
              <h4>Round Two: Deepening the Understanding</h4>
              <p>
                With this emerging direction in mind, I had conducted the
                research activities with dementia carers with the intention to
                both explore and challenge these early findings and insights.
                Following this second phase, I returned to affinity mapping, now
                enriched with first-hand lived experiences. The new data not
                only validated many of the earlier insights, but also added new
                emotional and contextual layers - especially around themes like
                lack of neighbourly support, emotional guilt, and the burden of
                always being present.
              </p>
              <p>
                Along with the affinity map, I refined the carer archetype and
                ecosystem map and created more key artefacts to structure and
                communicate my findings and insights, including an empathy map
                to capture carers&apos; thoughts, feelings, behaviours, and
                frustrations, and a joint experience map highlighting parallel
                emotional journeys of the carer and the person with dementia.
              </p>
            </div>
            <StaticBlob
              blobType={1}
              fillColor="#4B8482"
              className="w-70 h-70 lg:w-100 lg:h-100"
            >
              <Image
                src="/carers/empathy_map.png"
                alt="Empathy Map for the dementia carer"
                width={400}
                height={400}
                priority
                className="w-70 h-auto md:w-80 lg:w-100"
              />
            </StaticBlob>
          </ContentBlock>

          <Image
            src="/carers/joint_experience_map.jpg"
            alt="Joint Experience Map for the dementia carer and the person who has dementia"
            width={400}
            height={100}
            priority
            className="rounded-xl w-full h-auto my-10"
          />

          <ContentBlock reverse={true} flipOnMobile={true}>
            <div className="max-w-prose space-y-3">
              <h4>What I found</h4>
              <p>
                After two rounds of synthesis, I had extracted about 30
                different insights, which I then ranked through a prioritisation
                matrix and condensed down to twelve key insights. For the
                purpose of readability within this case study, I have included
                the three key insights I determined to be the most meaningful
                and actionable.
              </p>
            </div>
            <StaticBlob
              blobType={2}
              fillColor="#4B8482"
              className="w-70 h-70 lg:w-100 lg:h-100"
            >
              <Image
                src="/carers/insights_matrix.png"
                alt="Prioritisation matrix for all the insights"
                width={400}
                height={400}
                priority
                className="w-70 h-auto md:w-80 lg:w-100"
              />
            </StaticBlob>
          </ContentBlock>

          <TripleContentBlock alignCenter={false}>
            <div className="flex flex-col items-center gap-5">
              <StaticBlob
                blobType={3}
                fillColor="#4B8482"
                className="w-70 h-70"
              >
                <div className="flex flex-col items-center">
                  <div className="z-1 text-center max-w-70 bg-dark-red rounded-3xl p-2 mb-3">
                    <p>
                      &quot;There was four of us. But I got no help from
                      them.&quot; (Carer 5)
                    </p>
                  </div>
                  <Image
                    src="/icons/volunteering.png"
                    alt="Icon showing three hands overlapping"
                    width={100}
                    height={100}
                    priority
                    className="z-0 w-30 h-auto md:w-40 lg:w-50 -mt-10"
                  />
                  <div className="z-1 text-center max-w-70 bg-dark-red rounded-3xl p-2 -mt-5">
                    <p>
                      &quot;Today&apos;s neighbourliness has more or less
                      disappeared because of COVID.&quot; (Carer 1)
                    </p>
                  </div>
                </div>
              </StaticBlob>
              <div className="w-full px-4 lg:px-0">
                <EditorBox extraStyles="max-w-prose">
                  <p className="font-bold">
                    There is a lack of neighbourliness in many communities
                    today, where people often receive little support from around
                    them.
                  </p>
                  <p>
                    Carers feel like they are on their own with their demanding
                    tasks, having to take on everything themselves and therefore
                    having very little time for themselves, negatively impacting
                    their wellbeing.
                  </p>
                </EditorBox>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5">
              <StaticBlob
                blobType={3}
                fillColor="#4B8482"
                className="w-70 h-70"
              >
                <div className="flex flex-col items-center">
                  <div className="z-1 text-center max-w-70 bg-dark-red rounded-3xl p-2">
                    <p>
                      &quot;Yes, it never ends, so someone always has to be
                      there somehow.&quot; (Carer 2)
                    </p>
                  </div>
                  <Image
                    src="/icons/stress-management.png"
                    alt="Icon showing a woman balancing multiple things like a clock, a calendar, and a bomb"
                    width={100}
                    height={100}
                    priority
                    className="z-0 w-30 h-auto md:w-40 lg:w-50 -mt-5"
                  />
                  <div className="z-1 text-center max-w-70 bg-dark-red rounded-3xl p-2 -mt-18">
                    <p>
                      &quot;But even when she sat there quietly for a few hours,
                      someone just had to be around, and you also had to give
                      her something to drink regularly.&quot; (Carer 3)
                    </p>
                  </div>
                </div>
              </StaticBlob>
              <div className="w-full px-4 lg:px-0">
                <EditorBox extraStyles="max-w-prose">
                  <p className="font-bold">
                    By feeling the need of being always present, carers create
                    an immensely high physical and mental workload for
                    themselves.
                  </p>
                  <p>
                    Carers feel like they cannot go away to do things for
                    themselves or cannot switch off, which can facilitate mental
                    health problems and resentment. And when they do go away,
                    they struggle with guilt for not being there all the time.
                  </p>
                </EditorBox>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5">
              <StaticBlob
                blobType={3}
                fillColor="#4B8482"
                className="w-70 h-70"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src="/icons/rain.png"
                    alt="Icon showing an umbrella under rain"
                    width={100}
                    height={100}
                    priority
                    className="z-0 w-30 h-auto md:w-40 lg:w-50 -mt-5"
                  />
                  <div className="z-1 text-center max-w-70 bg-dark-red rounded-3xl p-2 -mt-8">
                    <p>
                      &quot;When they start looking after somebody, they start
                      actually grieving, the grieving process. [...] It&apos;s like
                      they are starting a grieving process and the acceptance
                      eventually comes in.&quot; (Support Worker 3)
                    </p>
                  </div>
                </div>
              </StaticBlob>
              <div className="w-full px-4 lg:px-0">
                <EditorBox extraStyles="max-w-prose">
                  <p className="font-bold">
                    Carers experience anticipatory grief when caring for a
                    person with dementia, feeling a sense of loss as the
                    person&apos;s condition deteriorates.
                  </p>
                  <p>
                    Having to deal with grief is difficult and can have a big
                    impact on personal wellbeing, even beyond the cared
                    for&apos;s passing.
                  </p>
                </EditorBox>
              </div>
            </div>
          </TripleContentBlock>

          <div className="max-w-prose space-y-3 my-10">
            <h4>User Needs emerge</h4>
            <p>
              After deriving a wide array of insights, I was able to define a
              set of user needs:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-[#EBFCFB]">
                Ensuring their loved one is safe, healthy, and well cared for
              </li>
              <li className="text-[#EBFCFB]">
                Being able to step away occasionally without guilt or anxiety
              </li>
              <li className="text-[#EBFCFB]">
                Feeling emotionally and practically supported — not just
                responsible
              </li>
              <li className="text-[#EBFCFB]">
                Having time for themselves to rest, recover, or pursue other
                interests
              </li>
              <li className="text-[#EBFCFB]">
                Preserving a sense of identity and independence outside the
                carer role
              </li>
              <li className="text-[#EBFCFB]">
                Staying connected to social circles
              </li>
              <li className="text-[#EBFCFB]">
                Finding meaning and positive emotion in their relationship with
                their loved one
              </li>
            </ul>
          </div>

          <ContentBlock>
            <div className="max-w-prose space-y-3">
              <h4>Defining the UX Vision</h4>
              <p>
                To clearly articulate the direction of the design and create a
                concise, strong base for a future ideation process, I created a
                UX Vision Statement that represented the core opportunity I
                uncovered through my research, taking my insights and defined
                user needs into consideration. Alongside it, I defined three
                Experience Design Principles to guide ideation and
                decision-making going forward. These principles serve as a
                constant reminder to stay user-centred and as a framework,
                helping me evaluate future concepts against what matters most to
                my target users.
              </p>
            </div>
            <EditorBox>
              <h4>
                There is an opportunity for a product or service for informal
                carers of someone with dementia who want to be able to
                occasionally take time for themselves to prioritise their own
                wellbeing, but feel stretched by the constant demands of caring
                and isolated and unsupported in their community, impacting their
                ability to step away confidently without worry or guilt.
              </h4>
            </EditorBox>
          </ContentBlock>

          <TripleContentBlock alignCenter={false}>
            <StaticBlob blobType={0} fillColor="#4B8482" className="w-70 h-70">
              <div className="flex flex-col items-center max-w-prose space-y-3 text-center">
                <h3 className="font-bold">Trustworthy</h3>
                <h4>
                  Carers can rely on it to ensure their loved one is safe and
                  well cared for.
                </h4>
              </div>
            </StaticBlob>

            <StaticBlob blobType={2} fillColor="#4B8482" className="w-70 h-70">
              <div className="flex flex-col items-center max-w-prose space-y-3 text-center">
                <h3 className="font-bold">Supportive</h3>
                <h4>
                  Carers feel emotionally and practically supported by a
                  genuine, understanding network.
                </h4>
              </div>
            </StaticBlob>

            <StaticBlob blobType={4} fillColor="#4B8482" className="w-70 h-70">
              <div className="flex flex-col items-center max-w-prose space-y-3 text-center">
                <h3 className="font-bold">Flexible</h3>
                <h4>
                  Carers can get the specific support that they need within
                  their unique situation.
                </h4>
              </div>
            </StaticBlob>
          </TripleContentBlock>

          {/*----------- REFLECTIONS -----------*/}

          <GradientHeading text="reflections" colourVariant="teal" />

          <div className="max-w-prose space-y-3">
            <p>
              This project has been a meaningful and very challenging journey in
              more ways than one. Gaining ethical approval delayed my access to
              participants, but I adapted by sourcing valuable insights from
              support workers and professionals early on. I&apos;m especially
              proud of how I was able to maintain a rigorous, ethically sound
              process throughout all the challenges I faced while also managing
              multiple university projects simultaneously.
            </p>
            <p>
              Emotionally, this was one of the most human and impactful topics
              I&apos;ve explored. I was especially struck by the concepts of
              anticipatory grief and the that of lacking neighbourliness - as
              someone raised in a small village where everyone knows everyone,
              it was almost a given for me that people support and help each
              other, so finding out my participants didn&apos;t experience this
              came as a big surprise to me and challenged my basic societal
              assumptions. Now, it deeply informs my mindset and design vision.
            </p>
            <p>
              Coming from a computer science background, I&apos;m used to
              structure and logic - and this project has challenged me to become
              more comfortable with ambiguity and the messiness of the
              exploratory research process. That said, I was able to use my
              analytical mindset as a strength as well: I was able to manage
              complexity, make confident methodological decisions, and identify
              patterns within messy, human data while never losing focus of the
              bigger picture.
            </p>
          </div>

          {/*----------- WHAT'S NEXT -----------*/}

          <GradientHeading text="what's next?" colourVariant="teal" />

          <div className="max-w-prose space-y-3">
            <p>
              This case study represents the first half of my UX Master&apos;s
              Major Project, focusing on discovery and definition. The next
              phase - ideation, prototyping, and testing - will build on these
              insights to develop a user-centred design solution for dementia
              carers. This will be added to the portfolio upon completion.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
