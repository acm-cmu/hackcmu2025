import "./Faq.css";
import Faq from "react-faq-component";

const FaqPage = () => {
  const data = {
    rows: [
      {
        title: " Q: What is HackCMU?",
        content: `HackCMU is a 24-hour event where students from across campus come together to make something awesome — like an app, website or hardware hack.`,
      },
      {
        title: " Q: How do I register?",
        content: (
        <>
          You can register through <a href="https://bit.ly/hackcmu" class="custom-link">Google Forms here</a>!
        </>
      ),
      },
      {
        title: " Q: How do project tracks work?",
        content: `When you submit your project, you'll choose a track that best fits your idea, along with a short (50-word) explanation of why it belongs in that track. We'll select one winner and one runner-up for each track based on creativity, fit, and impact.`,
      }, 
      {
        title: " Q: When will project tracks be released?",
        content: `We will announce the tracks during the opening ceremony of HackCMU on September 12th, Friday.`,
      },
      {
        title: " Q: What if I'm an undergrad / graduate / doctoral student?",
        content: `All current CMU students are welcome!`,
      },
      {
        title: " Q: Where will HackCMU be held?",
        content: `HackCMU will mostly take place in Simmons Auditorium at Tepper!`,
      },
      {
        title: " Q: How much does this cost?",
        content: `$0! We'll provide meals, snacks, drinks, and lots of swag, thanks to the support of our wonderful sponsors.`,
      },
      {
        title: " Q: What do I do after I register?",
        content: `Wait for a follow-up email with more details. Invite your friends! It'll be fun!`,
      },
      {
        title: " Q: I'm not a “hacker”, can I still participate?",
        content: `Students of all skill levels are encouraged to attend, even if you've never written a line of code! Anyone is welcome to participate — such as designers, engineers, data scientists, etc. The only requirement is your attitude to learn!`,
      },
      {
        title: " Q: Are there teams? Do I need one to sign up?",
        content: `Working as a team is highly encouraged, but not required. We'll be facilitating team-forming the day-of, so don't be discouraged if you don't have a team! We don't actually track team formations until project submission, where you'll list your crew and their contributions to code, design, and ideation.`,
      },
      {
        title: " Q: How big can a team be?",
        content: `There is a maximum final team size which is up to 4 people!`,
      },
      {
        title: " Q: What are the rules? Can I work on my project ahead of time?",
        content: `All work must be original, and you are not permitted to start building or designing your project until the event. Brainstorming ideas and forming teams beforehand is fine, though.`,
      },
      {
        title: " Q: How can I be entered into the raffle?",
        content: `You'll be automatically entered into the raffle if you submit a project by the due date!`,
      },
      {
        title: " Q: Who runs this event?",
        content: `You can learn more about us at <a href="http://acmatcmu.com" class="custom-link">acmatcmu.com</a>!`,
      },
      {
        title: " Q: Any other questions, comments, or concerns?",
        content: `Email us at acm-exec@cs.cmu.edu. We'd also love for you to follow us on social media @acmatcmu, LinkedIn group, keep up with our website, and join our Discord server :)`,
      },
    ],
  };

  const config = {
    rowContentColor: 'grey',

    // arrowIcon: "V",
    // tabFocus: true
  };

  const styles = {
  // keep any other overrides you already have here…
  rowContentColor: "white",   // answer text
  rowTitleColor:   "white",   // question titles (optional)
};

  return (
    <div id="faq-page" className="faq-page">
      <div className="faq-header"></div>{" "}
      {/* used to line up the scroll correctly */}
      <div className="faq-content">
        <Faq data={data} styles={styles} config={config} />
      </div>
      <div className="faq-footer"></div>
    </div>
  );
};

export default FaqPage;