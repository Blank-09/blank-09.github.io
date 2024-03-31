import React from 'react'
import { DownloadIcon } from '@radix-ui/react-icons'

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto border-b">
      <div className="py-20">
        <div>
          <h2 className="text-4xl font-bold">About Me</h2>
          <p>I'm a full-stack developer and a tech enthusiast</p>
        </div>
        <div className="mt-8 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 flex justify-center">
            <img
              src="/assets/img/linkedin-profile-image.jpg"
              alt="Priyanshu"
              className=""
            />
          </div>
          <div className="col-span-12 md:col-span-8 flex flex-col">
            <h3 className="text-3xl font-semibold mb-2">
              Full Stack Developer
            </h3>
            <p className="mb-6">
              I'm a full-stack developer and a tech enthusiast. I love to learn
              new technologies and build projects. I have experience working
              with JavaScript, TypeScript, React, Next.js, Node.js, Express.js,
              and MongoDB.
            </p>

            <div className="grid grid-cols-2">
              <ul className="col-span-2 sm:col-span-1 space-y-3">
                <li>
                  <strong>Birthday: </strong>
                  <span>3 March 2005</span>
                </li>
                <li>
                  <strong>Website: </strong>
                  <a
                    href="https://blank-09.github.io"
                    target="_blank"
                    className="text-orange-500 hover:underline"
                  >
                    https://blank-09.github.io
                  </a>
                </li>
                <li>
                  <strong>Phone: </strong>
                  <span>+91 80723 81972</span>
                </li>
                <li>
                  <strong>City: </strong>
                  <span>Coimbatore, Tamil Nadu</span>
                </li>
              </ul>

              <ul className="col-span-2 sm:col-span-1 space-y-3 mt-2 md:mt-0">
                <li>
                  <strong>Age: </strong>
                  <span>
                    {new Date(
                      new Date().getTime() - new Date('2005-03-03').getTime()
                    ).getFullYear() - 1970}
                  </span>
                </li>
                <li>
                  <strong>Profession: </strong>
                  <span>
                    Collage Student @
                    <a
                      href="https://skcet.ac.in/"
                      target="_blank"
                      className="text-orange-500 hover:underline"
                    >
                      SKCET
                    </a>
                  </span>
                </li>
                <li>
                  <strong>Email: </strong>
                  <a
                    href="mailto:priyanshu9943@gmail.com"
                    target="_blank"
                    className="text-orange-500 hover:underline"
                  >
                    priyanshu9943@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Freelance: </strong>
                  <span>Available</span>
                </li>
              </ul>
            </div>

            <p className="mt-3">
              You can have a look at my resume for more details about my
              education and work experience. Feel free to contact me if you have
              any questions or job opportunities.
            </p>

            <div className="mt-8 ms-auto">
              <a
                href="https://flowcv.com/resume/b808sw3pj7"
                target="_blank"
                className="border border-primary bg-primary text-primary-foreground px-3 py-2"
              >
                <DownloadIcon className="h-4 w-4 inline-block mr-2 mb-1" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
