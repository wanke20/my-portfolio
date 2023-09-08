import "./AboutPage.css";

const About = () => {
  return (
    <>
      <h2 className="title">About Me</h2>
      <div className="about-container">
        <p className="text-left">
          Hi! I'm a student from Northeastern University with a strong interest
          in coding. At Northeastern, I've had the opportunity to learn about a
          range of programming languages and tools. I've worked with languages
          like JavaScript, TypeScript, Java, and Python. I've also spent time
          getting to know web development frameworks such as React, Next.js,
          Express, and Node.js. On the database side, I've familiarized myself
          with MongoDB, SQL, and Prisma and have used design tools including
          CSS, SASS, and Tailwind CSS. I also have experience with Sanity CMS.
          <br />
          <br />
          While I've gained a good amount of experience, I see myself as an
          ongoing learner, always eager to discover more. My portfolio, though
          still growing, includes a few projects like an e-commerce storefront
          API, games like Battleship, my personal website, and an agenda tool.
          Each project represents a step in my learning journey at Northeastern.
          I'm passionate about coding and am always looking to add more to my
          skill set. My time at Northeastern has been about consistent learning,
          and there's so much more I'm excited to explore.
        </p>
        <img src="about-photos/stock-image1.png" alt="Stock Photo" />
      </div>
      <div className="about-container">
        <img src="about-photos/collaboration.webp" alt="Stock Photo" />
        <p className="text-right">
          In addition to my academic pursuits and personal projects,
          collaboration has been a cornerstone of my growth at Northeastern.
          Working alongside peers, I've come to appreciate the power of diverse
          perspectives in problem-solving. I've been fortunate to be part of
          coding groups and tech initiatives on campus, which have fostered an
          environment of shared knowledge and mutual growth. These collective
          experiences have not only fine-tuned my technical abilities but also
          refined my interpersonal skills, emphasizing the importance of
          effective communication in the realm of tech. <br />
          <br />
          Looking ahead, I'm keen on exploring the practical applications of my
          skills in real-world scenarios. While I've built a strong foundation,
          I believe the true test of a developer's mettle is in tackling
          unforeseen challenges and adapting to ever-evolving technological
          landscapes. Northeastern has instilled in me a deep sense of curiosity
          and a relentless work ethic. As I continue my journey, my aim is not
          only to excel as a developer but also to contribute positively to the
          tech community, ensuring that my work resonates with purpose and
          creates meaningful impacts.
        </p>
      </div>
      <div className="about-container">
        <p className="text-left">
          As I delve deeper into the tech world, I am continually reminded of
          the rapid pace of innovation. The tools and technologies I've learned
          today may evolve tomorrow. It's this very unpredictability and
          dynamism that fuels my passion. I find solace in the realization that,
          in technology, there's always room to grow, always a new challenge to
          tackle, and always an opportunity to reinvent and reimagine. At
          Northeastern, I've been exposed not just to the technical facets but
          also to the ethics and responsibilities that come with wielding such
          knowledge. This has fostered a sense of balance in me, ensuring that
          while I chase technological advancements, I remain grounded in my
          commitment to use these tools for the betterment of society. <br />
          <br />
          In the coming years, I aspire to bridge the gap between what I've
          learned and its practical implementation. I envision myself working on
          projects that aren't just technically sophisticated but also socially
          relevant. Whether it's developing tools to make online spaces more
          inclusive, crafting platforms that democratize information, or
          designing systems that address pressing global challenges, I aim to
          blend my skills with purpose. With every line of code I write, I want
          to inch closer to a world where technology amplifies positive change,
          and my journey at Northeastern is a testament to this ambition.
        </p>
        <img src="about-photos/stock-photo.jpg" alt="Stock Photo" />
      </div>
    </>
  );
};

export default About;
