"use client";

import EditorBox from "../../components/editorbox";
import GradientHeading from "@/components/gradientheading";
import ContactForm from "@/components/contactform";
import heroWave from "../../../public/waves_hero.svg";
import codeWave from "../../../public/wave_codesection_1.svg";
import Image from "next/image";
import Link from "next/link";
import ContentBlock from "@/components/contentblock";
import AnimatedBlob from "@/components/animatedblob";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Sarina } from "next/font/google";
import Nav from "@/components/navbar";
import ImageViewer from "@/components/imageviewer";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <main ref={container}>
      <Nav />
      <section
        id="page-header"
        className="relative min-h-screen flex flex-col overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute top-[-15vh] lg:top-[-20vh] left-0 h-[200vh] lg:h-[120vh] w-full -z-10 bg-[url('/background.svg')] bg-cover bg-center scale-x-[-1]"
        />

        <div
          id="hero"
          className="grow-1 flex flex-col justify-center overflow-hidden pt-30 lg:pt-40"
        >
          <div
            id="content"
            className="flex flex-col gap-5 lg:gap-0 w-full max-w-7xl mx-auto justify-center items-center px-4"
          >
            <h1
              className={`order-2 lg:order-1 text-4xl md:text-5xl lg:text-6xl z-10 xl:block text-center ${sarina.className} lg:-mb-20 xl:-mb-35`}
            >
              <span className="bg-linear-to-r from-red-500 from-10% via-amber-500 via-30% to-orange-500 bg-clip-text text-transparent p-2 drop-shadow-lg lg:drop-shadow-2xl">
                welcome!
              </span>
            </h1>

            <AnimatedBlob
              src="/home/hero_image.jpg"
              alt="Photo of Sarah Hägele"
              className="order-1 lg:order-2 w-48 h-48 xl:w-65 xl:h-65 lg:ml-190 z-0"
            />

            <EditorBox extraStyles="order-3 z-1 lg:-mt-20">
              <div className="max-w-prose space-y-3">
                <p>Allow me to introduce myself.</p>
                <p>
                  My name is Sarah Hägele and I am a Hobbyist Photographer,
                  former Full-Stack Software Developer, and UX Designer.
                </p>
                <p>
                  I coded this website from scratch with the goal to give you a
                  glimpse into who I am as a person and what I stand for and do
                  as a designer.
                </p>
              </div>
            </EditorBox>
          </div>
          <div className="flex flex-row flex-wrap gap-5 justify-center items-center mt-20 mb-10 space-y-10">
            <ImageViewer
              blobType={1}
              fillColor="#7b5a4e"
              disableExpand={true}
              className="w-15 h-15 md:w-20 md:h-20 md:-mb-10"
            >
              <Image
                src="/icons/sql_logo.svg"
                alt="Icon displaying the Oracle SQL language"
                width={90}
                height={90}
                priority
                className=""
              />
            </ImageViewer>
            <ImageViewer
              blobType={2}
              fillColor="#7b5a4e"
              disableExpand={true}
              className="w-15 h-15 md:w-20 md:h-20 md:-mt-10"
            >
              <Image
                src="/icons/java_logo.png"
                alt="Icon displaying the Java Logo"
                width={50}
                height={50}
                priority
                className=""
              />
            </ImageViewer>
            <ImageViewer
              blobType={3}
              fillColor="#7b5a4e"
              disableExpand={true}
              className="w-15 h-15 md:w-20 md:h-20 md:-mb-10"
            >
              <Image
                src="/icons/python_logo.png"
                alt="Icon displaying the Python Logo"
                width={70}
                height={70}
                priority
                className=""
              />
            </ImageViewer>
            <ImageViewer
              blobType={4}
              fillColor="#7b5a4e"
              disableExpand={true}
              className="w-15 h-15 md:w-20 md:h-20 md:-mt-10"
            >
              <Image
                src="/icons/js_ts_logo.png"
                alt="Icon displaying the JavaScript and TypeScript Logo"
                width={70}
                height={70}
                priority
                className=""
              />
            </ImageViewer>
            <ImageViewer
              blobType={5}
              fillColor="#7b5a4e"
              disableExpand={true}
              className="w-15 h-15 md:w-20 md:h-20 md:-mb-10"
            >
              <Image
                src="/icons/html_css_logo.png"
                alt="Icon displaying the HTML and CSS Logo"
                width={70}
                height={70}
                priority
                className=""
              />
            </ImageViewer>
            <ImageViewer
              blobType={2}
              fillColor="#7b5a4e"
              disableExpand={true}
              className="w-15 h-15 md:w-20 md:h-20 md:-mt-10"
            >
              <Image
                src="/icons/figma_logo.png"
                alt="Icon displaying the Figma Logo"
                width={50}
                height={50}
                priority
                className=""
              />
            </ImageViewer>
            <ImageViewer
              blobType={3}
              fillColor="#7b5a4e"
              disableExpand={true}
              className="w-15 h-15 md:w-20 md:h-20 md:-mb-10"
            >
              <Image
                src="/icons/ai_ps_logo.png"
                alt="Icon displaying the Adobe Illustrator and Photoshop Logo"
                width={70}
                height={70}
                priority
                className=""
              />
            </ImageViewer>
          </div>
        </div>
        <Image
          src={heroWave}
          alt="SVG waves separating the hero section from the page content"
          className="hero-waves grow-0"
          priority
          fill={false}
        />
      </section>

      <section className="bg-extra-dark-choco p-4 lg:px-16">
        <GradientHeading text="case studies" className="scroll-mt-25" />
        <div className="w-full py-8 flex flex-row justify-center flex-wrap gap-15">
          <div className="flex flex-col justify-center items-center max-w-70 lg:max-w-110">
            <Link href="/carers" className="cursor-pointer">
              <ImageViewer
                blobType={2}
                fillColor="#8D72C8"
                hoverEffect={true}
                disableExpand={true}
                className="w-70 h-70 lg:w-110 lg:h-110"
              >
                <Image
                  src="/carers/dementia_carer_illustration.png"
                  alt="Illustration of a dementia carer"
                  width={350}
                  height={400}
                  priority
                  className="w-90"
                />
              </ImageViewer>
            </Link>
            <h3 className="mt-5">Caring for the Carer</h3>
            <p>Major Project (2025)</p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5 mt-5">
              <div className="z-1 text-center max-w-70 border-full-lilac border-2 rounded-3xl px-2 py-1">
                <p>Sector: Adult Social Care</p>
              </div>
              <div className="z-1 text-center max-w-70 border-full-lilac border-2 rounded-3xl px-2 py-1">
                <p>User Research</p>
              </div>
              <div className="z-1 text-center max-w-70 border-full-lilac border-2 rounded-3xl px-2 py-1">
                <p>Sensemaking</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center max-w-70 lg:max-w-110">
            <Link href="/expenses" className="cursor-pointer">
              <ImageViewer
                blobType={3}
                fillColor="#455DFF"
                hoverEffect={true}
                disableExpand={true}
                className="w-70 h-70 lg:w-110 lg:h-110"
              >
                <Image
                  src="/centsible/mockups/centsible_main_mockup_4.png"
                  alt="Mockup of the Centsible App"
                  width={350}
                  height={400}
                  priority
                  className="w-45 lg:w-70"
                />
              </ImageViewer>
            </Link>
            <h3 className="mt-5">Centsible</h3>
            <p>Group Client Project (2025)</p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5 mt-5">
              <div className="z-1 text-center max-w-70 border-cent-blue border-2 rounded-3xl px-2 py-1">
                <p>Sector: Expense Management</p>
              </div>
              <div className="z-1 text-center max-w-70 border-cent-blue border-2 rounded-3xl px-2 py-1">
                <p>Ideation</p>
              </div>
              <div className="z-1 text-center max-w-70 border-cent-blue border-2 rounded-3xl px-2 py-1">
                <p>UX Leadership</p>
              </div>
              <div className="z-1 text-center max-w-70 border-cent-blue border-2 rounded-3xl px-2 py-1">
                <p>Agile Design</p>
              </div>
              <div className="z-1 text-center max-w-70 border-cent-blue border-2 rounded-3xl px-2 py-1">
                <p>Mobile App</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center max-w-70 lg:max-w-110">
            <Link href="/smarti" className="cursor-pointer">
              <ImageViewer
                blobType={1}
                fillColor="#646756"
                hoverEffect={true}
                disableExpand={true}
                className="w-70 h-70 lg:w-110 lg:h-110"
              >
                <Image
                  src="/smarti/mockups/home-mockup.png"
                  alt="Mockup of the SmartI App"
                  width={350}
                  height={400}
                  priority
                  className="w-50 lg:w-80"
                />
              </ImageViewer>
            </Link>
            <h3 className="mt-5">SmartI</h3>
            <p>Solo Project (2024)</p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5 mt-5">
              <div className="z-1 text-center max-w-70 border-pine border-2 rounded-3xl px-2 py-1">
                <p>Sector: Home Energy Usage</p>
              </div>
              <div className="z-1 text-center max-w-70 border-pine border-2 rounded-3xl px-2 py-1">
                <p>Visual Design</p>
              </div>
              <div className="z-1 text-center max-w-70 border-pine border-2 rounded-3xl px-2 py-1">
                <p>Wireframing</p>
              </div>
              <div className="z-1 text-center max-w-70 border-pine border-2 rounded-3xl px-2 py-1">
                <p>Mobile App</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center max-w-70 lg:max-w-110">
            <Link href="/lausha" className="cursor-pointer">
              <ImageViewer
                blobType={0}
                fillColor="#4b8482"
                hoverEffect={true}
                disableExpand={true}
                className="w-70 h-70 lg:w-110 lg:h-110"
              >
                <Image
                  src="/lausha/mockups/mockup_home_3.png"
                  alt="Mockup of the Lausha App"
                  width={350}
                  height={400}
                  priority
                  className="w-55 lg:w-90"
                />
              </ImageViewer>
            </Link>
            <h3 className="mt-5">Lausha</h3>
            <p>Solo Project (2024)</p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5 mt-5">
              <div className="z-1 text-center max-w-70 border-full-teal border-2 rounded-3xl px-2 py-1">
                <p>Sector: Sustainability</p>
              </div>
              <div className="z-1 text-center max-w-70 border-full-teal border-2 rounded-3xl px-2 py-1">
                <p>User Research</p>
              </div>
              <div className="z-1 text-center max-w-70 border-full-teal border-2 rounded-3xl px-2 py-1">
                <p>Prototyping</p>
              </div>
              <div className="z-1 text-center max-w-70 border-full-teal border-2 rounded-3xl px-2 py-1">
                <p>Mobile App</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-extra-dark-choco p-4 lg:px-16">
        <GradientHeading text="about me" className="scroll-mt-25" />
        <div className="w-full flex flex-row flex-wrap justify-center px-4 lg:px-16">
          <ContentBlock>
            <AnimatedBlob
              src="/aboutme/climbing-1.jpg"
              alt=""
              className="w-65 h-65 lg:w-100 lg:h-100"
            />
            <div className="max-w-prose space-y-3">
              <p>
                I&apos;m a UX and Product Designer with a background in Computer
                Science and a passion for creating meaningful, human-centred
                digital experiences. My journey into UX began with a lifelong
                interest in digital design - from fiddling with HTML and
                Photoshop as a teenager to noticing every beautifully crafted
                (or frustratingly bad) interface I came across.
              </p>
            </div>
          </ContentBlock>
          <ContentBlock>
            <div className="max-w-prose space-y-3">
              <h4>Diving into Software</h4>
              <p>
                My computer-affinity initially lead me to complete a
                three-year-long Bachelor&apos;s degree in Computer Science and
                work as a software developer at FNT Software for an additional
                year, which gave me a deep understanding and appreciation of
                software and how it is created from a technical point of view.
              </p>
              <p>
                I worked on a wide array of projects at all levels of the
                tech-stack, including database interactions with SQL, backend-
                and API- development (
                <a
                  href="https://www.fntsoftware.com/en/press/fnt-software-achieves-first-tm-forum-open-api-certification"
                  className="font-bold underline"
                >
                  see here
                </a>{" "}
                for the outcome of one such project) with Java or Python, and
                even some frontend-dabbling with TypeScript.
              </p>
            </div>
            <ImageViewer
              src="/aboutme/comp-sci-2.JPG"
              blobType={5}
              alt="Photo of Sarah Hägele and her classmates at the 2023 Computer Science graduation"
              caption="Me and my computer science classmates during our graduation"
              className="w-65 h-65 lg:w-80 lg:h-80"
            />
          </ContentBlock>
          <ContentBlock flipOnMobile={true}>
            <ImageViewer
              src="/aboutme/team-2.JPG"
              blobType={2}
              alt="Photo showing Sarah Hägele and her teammates during a group working session"
              caption="Capturing a nice moment during a group working session for the 'Centsible' group project"
              className="w-65 h-65 lg:w-80 lg:h-80"
            />
            <div className="max-w-prose space-y-3">
              <h4>Searching for more</h4>
              <p>
                Throughout these four years, I came to realise that I was
                missing something fundamental, which wasn&apos;t logic or
                structure - it was people. I found this missing piece within UX
                Design. After successfully applying for a scholarship for a
                Master&apos;s degree in UX and Service Design at Loughborogh
                University, I left my home country of Germany to live and study
                in the UK for a year.
              </p>
              <p>
                This year taught me an incredible amount - about UX and about
                myself. Now, I bring together technical understanding, design
                thinking, and a strong sense of ownership to shape products that
                genuinely make a difference.
              </p>
            </div>
          </ContentBlock>

          <ContentBlock>
            <div className="max-w-prose space-y-3">
              <h4>Me, the Designer</h4>
              <p>
                What drives me is the opportunity to create purposeful,
                user-focused software - ideally products that empower people or
                contribute to positive change. With this, I&apos;m especially
                drawn to open-source tools and socially impactful digital
                solutions.
              </p>
              <p>
                I thrive when I can take initiative, lead processes, and stay
                visible across teams, whether that&apos;s designing intuitive
                interfaces, managing design projects, or collaborating closely
                with developers through my technical understanding. I aim to
                always embody three core principles within my design practice:
              </p>
              <h4>Human-centred. Difference-making. Leading.</h4>
            </div>
            <ImageViewer
              src="/aboutme/pitch.png"
              blobType={1}
              alt="Photo showing Sarah Hägele doing a pitch to her classmates with her project group"
              caption="Presenting a UX Design idea to classmates with my teammates during a group project in Loughborough"
              className="w-65 h-65 lg:w-80 lg:h-80"
            />
          </ContentBlock>

          <ContentBlock flipOnMobile={true}>
            <ImageViewer
              src="/aboutme/firefighting-1.JPG"
              blobType={4}
              alt="Photo showing Sarah Hägele with a group of youth firefighters in front of a fire engine"
              caption="Group photo with the youth firefighters after leading a training session with a turntable ladder"
              className="w-65 h-65 lg:w-80 lg:h-80"
            />
            <div className="max-w-prose space-y-3">
              <h4>Me, the Human</h4>
              <p>
                Outside of work, I&apos;m a hobbyist photographer, an avid
                pianist, a volunteer firefighter (including training the youth),
                and an enthusiastic rock climber. Ironically, there&apos;s
                nothing quite as grounding as being off-the ground halfway up a
                rockface. A big part of what makes firefighting and climbing so
                meaningful to me is the team- and community-spirit in both of
                them. You wouldn&apos;t get up a mountain without a partner to
                rely on, and you couldn&apos;t put out a fire without a team!
              </p>
            </div>
          </ContentBlock>

          <div className="flex flex-row flex-wrap justify-center gap-5">
            <ImageViewer
              src="/aboutme/firefighting-2.JPG"
              blobType={5}
              alt="Photo showing Sarah Hägele in a firefighter uniform with a group of youth firefighters"
              caption="Capturing a youth firefighter session for the annual retrospective slideshow"
              className="w-65 h-65 lg:w-70 lg:h-70"
            />
            <ImageViewer
              src="/aboutme/climbing-2.jpg"
              blobType={1}
              alt="Photo showing Sarah Hägele climbing"
              caption="Me climbing up a cliff in Pembrokeshire"
              className="w-65 h-65 lg:w-70 lg:h-70"
            />
            <ImageViewer
              src="/aboutme/climbing-3.JPG"
              blobType={2}
              alt="Photo showing a group of climbers from the Loughborough Students Mountaineering Club"
              caption="Group photo from a trip to Pembrokeshire with the Loughborough Students Mountaineering Club"
              className="w-65 h-65 lg:w-70 lg:h-70"
            />
          </div>
        </div>
      </section>

      <section className="relative ">
        <motion.div
          style={{ y }}
          className="absolute top-[-80vh] left-0 h-[120vh] lg:h-full w-full -z-10 bg-[url('/background.svg')] bg-cover bg-center scale-x-[-1]"
        />

        <div className="bg-extra-dark-choco p-4 lg:px-16">
          <GradientHeading text="contact" className="scroll-mt-25" />
        </div>

        <div className="w-full h-[122px] overflow-hidden">
          <Image
            src={codeWave}
            alt="SVG waves separating the hero section from the page content"
            className="code-wave"
            priority
            fill={false}
          />
        </div>
        <div className="px-4 lg:px-16 -mt-5">
          <EditorBox extraStyles="w-full max-w-xl mx-auto">
            <ContactForm />
          </EditorBox>
        </div>
      </section>
    </main>
  );
}
