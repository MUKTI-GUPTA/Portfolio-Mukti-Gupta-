// import project1 from "../assets/projects/p1.png";
// import project2 from "../assets/projects/p2.png";



export const EXPERIENCES = [
  {
    year: "Jan'2024 - Aug'2024",
    role: "Post-Grad Certificate in Cloud Computing",
    company: "Humber College (Faculty of Applied Science and Technology)",
    description: `Studied AWS, GCP, Azure, with hands-on experience in Docker, Kubernetes, Terraform, and Ansible. Completed projects in cloud architecture, big data, and DevOps.`,
    type: ["Education"],
  },
  {
    year: "Jan'2023 - Dec'2023",
    role: "Post-Grad Certificate in Web Development",
    company: "Humber College (Faculty of Creative Media and Arts)",
    description: `Completed full-stack web development program covering ASP.NET, MERN stack, PHP, and Laravel, with a focus on responsive design, usability testing, and project management.`,
    type: ["Education"],
  },
];

export const PROJECTS = [
  {
    title: "Smart Cities Weather Dashboard ↗",
    image: project1,
    description:
    `A real-time weather app with 3D Map, AI-generated city insights, 5-day forecasts, and latest updates(24h), 
    deployed globally using AWS Amplify and Elastic Beanstalk.`,
    technologies: ["React.js", "Tailwind CSS", "AWS Elastic Beanstalk", "ChatGPT API", "AI", "Vercel AI SDK", "3D Map", "Docker"],
    link: "https://github.com/AnjiCodes",
  },
  {
    title: "Bookager - Cloud Deployed Book Management App ↗",
    image: project2,
    description:
    `Serverless, cloud-based book management app with secure MFA, allowing users to add, update,
     and delete books. Deployed on AWS with Node.js and HTML/CSS, offering scalability, security, and a clean, responsive interface.`, 
    technologies: ["Node.js", "HTML", "CSS", "AWS Lambda","DynamoDB","Amazon Cognito", "API Gateway","Amazon S3"],
    link: "https://github.com/AnjiCodes/aws-books-lamdafunction-main",
  },
];

export const CONTACT = {
  address: "India Delhi",
  phoneNo: "+91 8287718001",
  email: "Mukti01gupta@gmail.com",
};
