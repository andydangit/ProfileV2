import { FaMicrosoft } from "react-icons/fa";
import { SiComptia } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";
import { GrSystem } from "react-icons/gr";

const data = [
  {
    id: 1,
    icon: <GrSystem />,
    title: "Bachelor Degree",
    desc: "Management Information System",
  },

  {
    id: 2,
    icon: <FaMicrosoft />,
    title: "Microsoft",
    desc: "MCTS Window 7, MCTS Server 2008, MCTS Server 2008 Network, Azure Fundamentals",
  },
  {
    id: 3,
    icon: <SiComptia />,
    title: "Comptia",
    desc: "A+, Network+, Security+",
  },
  {
    id: 4,
    icon: <GrCertificate />,
    title: "Other",
    desc: "ITIL V3, Nucamp: Full Stack Web and Mobile Development",
  },
];

export default data;
