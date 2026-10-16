export const profile = {
  name: "David Ochuko Yaya",
  email: "davidyayaochuko@gmail.com",
  role: "CTO & technical co-founder",
  place: "Lagos, Nigeria",
};

export const products = [
  {
    num: "01",
    year: "Fintech · Technical co-founder",
    name: "Spendprofile",
    body: "Nigerian bank statements, read properly. Upload the PDF your bank already gave you. Transactions come out structured, and the extraction is checked against the statement’s own totals. No bank login. No BVN.",
    tags: ["Statement intelligence", "Reconciliation", "B2C + B2B API"],
    href: "https://spendprofile.app",
    label: "spendprofile.app",
  },
  {
    num: "02",
    year: "Marketplace · Co-founder & technical lead",
    name: "Bidoro",
    body: "A trust-first peer-to-peer marketplace for local commerce. Verified sellers, buyer protection, and payments through a licensed partner — because “just send the money” is not a product. ₦3m grant from the FGC Idoani Alumni Association, Lagos Chapter.",
    tags: ["Escrow", "Verification", "bidoro.africa"],
    href: "https://bidoro.africa",
    label: "bidoro.africa",
  },
  {
    num: "03",
    year: "Local commerce · Technical co-founder",
    name: "Ojarun",
    body: "The market, at your door. Agents source fresh food and household items from local markets, check quality, and riders deliver. Built for how Nigerians actually shop, not for a catalogue that pretends the market is a supermarket.",
    tags: ["Agents", "Sourcing", "Delivery"],
    href: "https://ojarun.com",
    label: "ojarun.com",
  },
];

export const teaching = [
  {
    num: "01",
    year: "Mentor · Cloud, DevOps",
    name: "Thrive Africa",
    body: "Tuition-free career acceleration across Africa. I mentor students through cloud computing and DevOps — consoles, cost guardrails, and the habit of deleting what you created.",
    href: "https://www.thriveafrica.co/",
    label: "thriveafrica.co",
  },
  {
    num: "02",
    year: "Pioneering team · Lead mentor · since 2023",
    name: "MEQuest",
    body: "A mentorship community built on collaboration, access, respect, and empowerment. I helped shape the cloud and DevOps path — curriculum, cohorts, and the handoff from learner to mentor.",
    href: "https://mequest.org/",
    label: "mequest.org",
  },
  {
    num: "03",
    year: "Community I built",
    name: "The Dev Guide 99",
    body: "Grow. Build. Get unstuck. Not one guide — people guiding each other. A home for builders who need a room, not another lonely tutorial tab.",
    href: "https://thedevguide99.com/",
    label: "thedevguide99.com",
  },
  {
    num: "04",
    year: "Teaching tool · Thrive Africa",
    name: "AWS Cloud Practitioner quiz",
    body: "Practice exams with immediate feedback for the cohorts I teach. Built so a student can find the gap before exam day, not after.",
    href: "https://aws-cloud-practitioner-quiz.netlify.app",
    label: "aws-cloud-practitioner-quiz.netlify.app",
  },
];

export const timeline = [
  {
    year: "2026 — now",
    title: "Chief Technology Officer, Netan Technologies",
    where: "Technology direction, engineering delivery, and the platforms under Spendprofile, Bidoro, and Ojarun.",
  },
  {
    year: "2021 — 2026",
    title: "Senior DevOps / Site Reliability Engineer, Netan",
    where: "Production SaaS across AWS, Azure, and GCP. Hybrid on-prem and Azure that cut infrastructure cost by about half. Terraform that cut manual provisioning by roughly two thirds. 99.9% uptime with zero-trust, micro-segmentation, and key vaults. CI/CD with GitHub Actions, Jenkins, and Argo CD.",
  },
  {
    year: "2024 — now",
    title: "Co-founder, Bidoro · Spendprofile · Ojarun",
    where: "Architecture, trust and payments, and the unglamorous reliability work that lets a product stay live.",
  },
  {
    year: "2024",
    title: "Solutions Architect, Eco-Clouds",
    where: "Short engagement moving production systems onto Alibaba, Huawei, and Tencent Cloud for clients expanding into APAC.",
  },
  {
    year: "2023 — 2024",
    title: "Data engineering tutor & DevOps, Data2Bots",
    where: "Cohorts on Airflow, dbt, Spark, and Kafka, plus the pipelines those classes sat on.",
  },
  {
    year: "2023 — now",
    title: "Lead mentor, MEQuest",
    where: "Pioneering team. Cloud and DevOps training, mentor playbooks, and the loop from learner to mentor.",
  },
  {
    year: "2017 — 2021",
    title: "IT Support, Nestlé",
    where: "Manufacturing site in Ogun State. Uptime, access, and translating incidents into plain language.",
  },
];

export const essays = [
  {
    slug: "no-bank-login",
    topic: "Products",
    kicker: "Spendprofile",
    title: "Why Spendprofile does not connect to your bank",
    dek: "Anyone can OCR a PDF. The product is knowing when the number is incomplete — and never asking for a login to get there.",
    homeDek: "The permission surface is a file you already have. That constraint is the product.",
    date: "16 October 2026",
    body: [
      { p: "Most products that promise to “read your money” start the same way. Connect your bank. Share a credential, or hand an aggregator a token, and hope the person on the other side of the screen trusts you enough to click allow." },
      { p: "We built <a href=\"https://spendprofile.app\">Spendprofile</a> the other way. You export the PDF your Nigerian bank already gave you. You upload it. We turn the pages into transactions, categories, and a picture of cash flow. Then we check our own work against the statement’s printed totals." },
      { p: "That last step is the product. Anyone can OCR a PDF. A confidently wrong number is worse than an incomplete one. If the extraction does not reconcile, we say so. We do not dress a gap up as insight." },
      { h: "The permission surface" },
      { p: "No bank login. No BVN. The only thing we ask for is a file the user already holds — the same file they would email to a consulate, a lender, or a landlord. That is a smaller promise, and it is one we can keep." },
      { p: "It also made the engineering harder. Nigerian banks do not share a format. Fourteen of them parse through dedicated work, not a slogan that we support “any statement.” When a format is unsupported, the honest outcome is unsupported — not a guess." },
      { h: "Why this is a CTO decision" },
      { p: "Open banking is a real path. It is also a licence, a sponsor, a recurring cost, and a sentence you must be able to defend in public. We are not there, and we do not pretend we are. The commercial story for businesses that would send us their customers’ statements stays closed until the data-protection registration that role requires is done." },
      { p: "Until then, the consumer product does one job well: help someone read the statement before someone else judges them by it." },
    ],
  },
  {
    slug: "trust-is-the-product",
    topic: "Products",
    kicker: "Bidoro",
    title: "Trust is the product",
    dek: "A marketplace in Nigeria fails at the moment money moves. Verification, escrow, and a licensed payment partner are the product.",
    homeDek: "Bidoro is not a catalogue with a pay button. The hard part is what happens when a stranger sends money.",
    date: "16 October 2026",
    body: [
      { p: "People already trade on WhatsApp. They already send photos of goods and account numbers in the same chat. The failure is not discovery. The failure is the moment money moves and nobody can unwind it." },
      { p: "<a href=\"https://bidoro.africa\">Bidoro</a> exists for that moment. Verified sellers. A conversation tied to an order. Buyer protection. Payments that sit with a licensed partner instead of in a stranger’s personal account. Reviews that mean a completed deal, not a drive-by star on a product page." },
      { h: "What I actually own" },
      { p: "As technical co-founder I am not decorating a storefront. I am responsible for the architecture that makes those promises enforceable: identity, order state, escrow timing, what an admin can see, and what they must not. A button that says “protected” while the ledger does something else is worse than no button." },
      { p: "The same standard shows up next door at <a href=\"https://ojarun.com\">Ojarun</a>. An agent in a real market, a freshness check, a rider, a doorstep. Software is the coordination layer. Trust is still a person who picked the tomatoes." },
      { h: "Why I keep both" },
      { p: "Spendprofile asks whether a number is true. Bidoro asks whether a trade is safe. Ojarun asks whether the market can come to you without you standing in it. Different customers. One job: do not ship a confident lie." },
    ],
  },
  {
    slug: "cleanup-discipline",
    topic: "Teaching",
    kicker: "Teaching · Thrive Africa & MEQuest",
    title: "If you cannot delete it, you should not create it",
    dek: "Budgets, MFA, and teardown are not junior chores. They are how a CTO keeps a cohort — and a company — from a surprise bill.",
    homeDek: "A rule I insist on with every cloud cohort — and the same rule I use as a CTO.",
    date: "16 October 2026",
    body: [
      { p: "I still teach cloud foundations. Not as a second career. Because explaining a thing is how I find out whether I understand it — and because the people coming through <a href=\"https://www.thriveafrica.co/\">Thrive Africa</a> and <a href=\"https://mequest.org/\">MEQuest</a> are often opening a real console for the first time." },
      { p: "The first lab is never “launch something impressive.” It is MFA, a budget with an email alert, and a tour of the pages that charge you money. Then we build. Then we tear it down before the session ends." },
      { h: "The rule" },
      { p: "If you cannot delete it, you should not create it. That covers the EC2 instance, the disk you forgot, the public storage bucket, the NAT gateway someone enabled “just to try.” It also covers the production habit: every environment needs an owner, a spend ceiling, and a way back." },
      { p: "I learned this the expensive way, the way most of us do — a resource left running, a root account used like a daily login, a pipeline that could deploy and could not roll back cleanly. At Netan the work became hybrid cloud, Terraform, and a platform that had to stay up. The lesson did not get softer when the title changed to CTO. It got stricter." },
      { h: "Why cohorts hear it out loud" },
      { p: "<a href=\"https://thedevguide99.com/\">The Dev Guide 99</a> exists for the same reason the labs do. People do not get unstuck from a PDF. They get unstuck when someone who has already broken production will sit with the diagram and say what to delete first." },
    ],
  },
];

export const archive = [
  {
    topic: "Archive",
    title: "Understanding zero-trust security in DevOps",
    dek: "Never trust, always verify — identity, least privilege, and what that means once the perimeter is gone.",
    date: "December 2024",
    href: "https://medium.com/@davidyayaochuko/understanding-zero-trust-security-in-devops-087e7b993982",
    source: "Medium",
  },
  {
    topic: "Archive",
    title: "From IT support to senior DevOps engineer",
    dek: "The long version of the path: Nestlé floors, unpaid startup nights, and the failures that actually taught the tools.",
    date: "Medium",
    href: "https://medium.com/@davidyayaochuko/from-it-support-to-senior-devops-engineer-my-8-year-journey-in-tech-6683139e637a",
  },
];

export const social = [
  { href: "https://www.linkedin.com/in/davidochukoyaya/", label: "LinkedIn" },
  { href: "https://github.com/davidyayaochuko", label: "GitHub" },
  { href: "https://x.com/_Ogheneochuko", label: "X" },
  { href: "https://medium.com/@davidyayaochuko", label: "Medium" },
  { href: "https://spendprofile.app", label: "Spendprofile" },
  { href: "https://bidoro.africa", label: "Bidoro" },
  { href: "https://ojarun.com", label: "Ojarun" },
];
