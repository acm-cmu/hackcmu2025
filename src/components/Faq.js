import "./Faq.css";
import Faq from "react-faq-component";

const FaqPage = () => {
  const data = {
    rows: [
      {
        title: "Q: What is HackCMU?",
        content: `HackCMU is a 24-hour event where students from across campus come together to make something awesome — like an app, website or hardware hack.`,
      },
      {
        title: "Q: How do I register?",
        content: `You can register through the link here: https://docs.google.com/forms/d/e/1FAIpQLSevS-JRXkp0jOwKZIhcYjlWa4HFXfzoSBbqc7lxhJ4o0WPKeQ/viewform`,
      },
      {
        title: "Q: What is this year's theme?",
        content: `This year's theme is "Cyberpunk"!`,
      },
      {
        title: "Q: When will project categories be released?",
        content: `At the latest, project categories and sponsors will be released during our opening ceremony on Friday, September 13th. Please don't start or work on your project submissions before then, though considering ideas is acceptable. `,
      },
      {
        title: "Q: What if I'm an undergrad / graduate / doctoral student?",
        content: `All current CMU students are welcome! And we'll even have alumni and professors around to mentor. But please confirm eligibility for a challenge before submitting. We're happy to share that our industry partners are excited to meet students at all levels of academia!`,
      },
      {
        title: "Q: Where will HackCMU be held?",
        content: `HackCMU will mostly place in Rashid Auditorium, but there are also designated hacking areas in Gates!`,
      },
      {
        title: "Q: How much does this cost?",
        content: `$0! We'll provide meals, snacks, drinks, and lots of swag, thanks to the support of our wonderful sponsors.`,
      },
      {
        title: "Q: What do I do after I register?",
        content: `Wait for a follow-up email with more details. Invite your friends! It'll be fun! Hacking is more exciting with a crew, here's the link to share: https://docs.google.com/forms/d/e/1FAIpQLSevS-JRXkp0jOwKZIhcYjlWa4HFXfzoSBbqc7lxhJ4o0WPKeQ/viewform`,
      },
      {
        title: "Q: I’m not a “hacker”, can I still participate?",
        content: `Students of all skill levels are encouraged to attend, even if you’ve never written a line of code! Creative individuals of all kinds are welcome to apply — such as designers, ECE majors, statistics, etc. The only requirement is your attitude to learn!`,
      },
      {
        title: "Q: Are there teams? Do I need one to sign up!",
        content: `Working as a team is highly encouraged, but not required. We'll be facilitating team-forming the day-of, so don't be discouraged if you don't have a team! We don't actually track team formations until project submission, where you'll list your crew and their contributions to code, design, and ideation.`,
      },
      {
        title: "Q: How big can a team be?!",
        content: `There is a maximum final team size which is up to 4 people!`,
      },
      {
        title: "Q: What are the rules? Can I work on my project ahead of time?",
        content: `All work must be original, and you are not permitted to start building or designing your project until the event. Brainstorming ideas and forming teams beforehand is fine, though.`,
      },
      {
        title: "Q: How can I be entered into the raffle?",
        content: `You'll be automatically entered into the raffle if you submit a project by the due date!`,
      },
      {
        title: "Q: Who runs this event?",
        content: `You can learn more about us at <a href="http://acmatcmu.com" class="custom-link">acmatcmu.com</a>!`,
      },
      {
        title: "Q: Any other questions, comments, or concerns?",
        content: `Email us at acm-exec@cs.cmu.edu. We'd also love for you to follow us on social media @acmatcmu, LinkedIn group, keep up with our website, and join our Discord server :)`,
      },
    ],
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  return (
    <div id="faq-page" className="faq-page">
      <div className="faq-header"></div>{" "}
      {/* used to line up the scroll correctly */}
      <div className="faq-title">FAQ</div>
      <div className="faq-content">
        <Faq data={data} styles={"./Faq.css"} config={config} />
      </div>
      <div className="faq-footer"></div>
    </div>
  );
};

export default FaqPage;