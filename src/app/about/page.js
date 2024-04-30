/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import style from "./page.module.css";
import aboutCover from "@/assets/images/aboutCover.jpg";
import biopic from "@/assets/images/biopic.jpeg";
const About = () => {
  return (
    <div className={`${style.homePage} ${style.planPage}`}>
      <div className={style.banner1}>
        <div className='container'>
          <h1>About Us</h1>
        </div>
      </div>
      <section className={style.aboutUsSec}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1 className={style.sHeading}>Introducing My Immigration Hub</h1>
              <p style={{ textAlign: "justify" }}>
                For any immigration matter you may be experiencing, our team of
                experienced professionals is here to provide personalized
                assistance tailored to your needs. With a commitment to
                affordability, we strive to ensure that navigating the
                complexities of immigration processes is both accessible and
                stress-free for you. Call us today to ask your questions and
                take the first step towards achieving your immigration goals
                with confidence. For the budding entrepreneur, the passionate
                small business, or the hopeful individual seeking a brighter
                future on American shores, we are your bridge. In the intricate
                realms of business and immigration law, My Immigration Hub is not just a law
                firm—it's a partner in your journey. We understand the dreams
                that drive you, and with our transparent subscription and flat
                fee models, we make sure that achieving them doesn’t come with
                unforeseen legal costs. At My Immigration Hub, we don’t just provide legal
                services; we champion aspirations. Welcome to My Immigration Hub Law – Where
                Dreams Meet Determined Advocacy.
              </p>
            </div>
            <div className='col-md-6 mt-5'>
              <Image src={aboutCover} alt='about' className='img-fluid' />
            </div>
          </div>
        </div>
      </section>
      <section className={style.bio}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h1 className={style.sHeading}>Elina Alinezhad</h1>

              <Image className={style.biopic} src={biopic} alt='' />
            </div>

            <div className='col-lg-6 para1'>
              <p>
                Elina Alinezhad is dedicated to immigration law, she combines
                professional expertise with personal experience. Beginning with
                a Bachelor's degree in Judicial Law, she built a foundation for
                her legal career. She holds two Master of Laws degrees,
                including one from Shahid Beheshti Law University, where she
                ranked 21st out of over 2,000 applicants in a nationwide
                entrance exam. Her commitment to immigration law continued with
                a Master of Laws from the University of Oregon School of Law in
                the United States, offering insights into U.S. legal nuances.
                With her background as an immigrant, she approaches immigration
                law with both legal acumen and empathy.
              </p>
              <p>
                Her journey is not solely defined by educational achievements.
                As an immigrant herself, she intimately understands the dreams,
                challenges, and aspirations that accompany the pursuit of a new
                life in a foreign land. This personal experience has ignited
                within her a profound passion for assisting others on their
                immigration journeys.
              </p>
              <p>
                Having worked for several esteemed law firms before, she brings
                a wealth of experience and expertise to the table. It was
                through these experiences that she recognized a calling beyond
                just legal career. She realized that her mission was to create a
                firm with her business partner that combined legal excellence
                with a deep commitment to understanding the individual stories
                behind each case.
              </p>
              <p>
                Her commitment to serving immigrants and their families is far
                more than a professional pursuit – it's a deeply personal
                calling. The satisfaction she derives from aiding individuals in
                navigating the intricate path to a better life is unmatched.
                Whether it's reuniting families, securing opportunities, or
                safeguarding rights, each success story reinforces her belief in
                the transformative power of immigration law.
              </p>
              <p>
                She is a compassionate guide, offering unwavering support
                throughout every stage of the process. Her experiences have
                taught her that the challenges encountered by immigrants are as
                diverse as the individuals themselves, and it's this
                understanding that fuels her determination to provide
                personalized, effective, and empathetic legal support. She
                invites you to join her in this journey of empowerment, where
                your dreams and aspirations are met with the dedication they
                genuinely deserve. Together, let's transform the complexities of
                immigration law into stepping stones toward brighter futures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
