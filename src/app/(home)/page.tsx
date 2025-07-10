import EditorBox from "../../components/editorbox";
import StaticBlob from "@/components/staticblob";
import GradientHeading from "@/components/gradientheading";
import ContactForm from "@/components/contactform";
import codeWave from "../../../public/wave_codesection_1.svg";
import Image from "next/image";
import Link from "next/link";
import ContentBlock from "@/components/contentblock";
import AnimatedBlob from "@/components/animatedblob";

export default function Home() {
  return (
    <main>
      <div>
        <section className="bg-extra-dark-choco p-4 lg:px-16">
          <GradientHeading text="case studies" anchor="anchor_casestudies" />
          <div className="w-full py-8 flex flex-row justify-center flex-wrap gap-15">
            <div className="flex flex-col justify-center items-center">
              <Link href="/lausha" className="cursor-pointer">
                <StaticBlob
                  blobType={0}
                  fillColor="#4b8482"
                  hoverEffect={true}
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
                </StaticBlob>
              </Link>
              <h3 className="mt-5">Lausha</h3>
              <p>Solo Academic Project (2024)</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Link href="/expenses" className="cursor-pointer">
                <StaticBlob
                  blobType={3}
                  fillColor="#455DFF"
                  hoverEffect={true}
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
                </StaticBlob>
              </Link>
              <h3 className="mt-5">Centsible</h3>
              <p>Group Client/Academic Project (2025)</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Link href="/carers" className="cursor-pointer">
                <StaticBlob
                  blobType={2}
                  fillColor="#8D72C8"
                  hoverEffect={true}
                  className="w-70 h-70 lg:w-120 lg:w-110 lg:h-110"
                >
                  <Image
                    src="/carers/dementia_carer_illustration.png"
                    alt="Illustration of a dementia carer"
                    width={350}
                    height={400}
                    priority
                    className="w-90"
                  />
                </StaticBlob>
              </Link>
              <h3 className="mt-5">Caring for the Carer</h3>
              <p>Academic Major Project (2025)</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Link href="/smarti" className="cursor-pointer">
                <StaticBlob
                  blobType={1}
                  fillColor="#646756"
                  hoverEffect={true}
                  className="w-70 h-70 lg:w-120 lg:w-110 lg:h-110"
                >
                  <h3>Work in progress!</h3>
                </StaticBlob>
              </Link>
              <h3 className="mt-5">SmartI</h3>
              <p>Solo Academic Project (2024)</p>
            </div>
          </div>
        </section>
        <section className="bg-extra-dark-choco p-4 lg:px-16">
          <GradientHeading text="about me" anchor="anchor_aboutme" />
          <div className="w-full flex flex-row flex-wrap justify-center px-4 lg:px-16">
            <ContentBlock>
              <AnimatedBlob
                src="/about_me_photo.jpg"
                alt=""
                className="w-65 h-65 lg:w-100 lg:h-100"
              />
              <div className="max-w-prose space-y-3">
                <p>
                  I&apos;m a UX and Product Designer with a background in
                  Computer Science and a passion for creating meaningful,
                  human-centred digital experiences. My journey into UX began
                  with a lifelong interest in digital design - from fiddling
                  with HTML and Photoshop as a teenager to noticing every
                  beautifully crafted (or frustratingly bad) interface I came
                  across. My computer-affinity initially lead me to study
                  Computer Science and work as a software developer for one
                  year, however I realised that I was missing something
                  fundamental. This missing piece wasn&apos;t logic or structure
                  - it was people. Now, I bring together technical
                  understanding, design thinking, and a strong sense of
                  ownership to shape products that genuinely make a difference.
                </p>
                <p>
                  What drives me is the opportunity to create purposeful,
                  user-focused software - ideally products that empower people
                  or contribute to positive change. I&apos;m especially drawn to
                  open-source tools and socially impactful digital solutions. I
                  thrive when I can take initiative, lead processes, and stay
                  visible across teams, whether that&apos;s designing intuitive
                  interfaces, managing design projects, or collaborating closely
                  with developers. Outside of work, I&apos;m a volunteer
                  firefighter, School Representative at Loughborough University,
                  and an avid climber and pianist — all of which reflect my
                  values of leadership, connection, and my ever-present
                  commitment to growth.
                </p>
              </div>
            </ContentBlock>
          </div>
        </section>
      </div>

      <section>
        <div className="bg-extra-dark-choco p-4 lg:px-16">
          <GradientHeading text="contact" anchor="anchor_contact" />
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
