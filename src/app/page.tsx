import Image from "next/image";
import {
  Anchor,
  Award,
  CalendarDays,
  ChevronRight,
  Hotel,
  Mail,
  MapPin,
  Medal,
  Phone,
  ShipWheel,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";

const experiences = [
  {
    role: "Logistics Specialist",
    company: "US Navy (Active Duty)",
    dates: "January 2025 - Current",
    tone: "navy",
    icon: Anchor,
    summary:
      "Active duty logistics work supporting operational readiness, accountability, coordination, and mission-focused service standards.",
  },
  {
    role: "Front Desk Agent",
    company: "The Langham Boston",
    dates: "June 2023 - December 2024",
    tone: "hospitality",
    icon: Hotel,
    summary:
      "Delivered refined guest arrivals, departures, problem resolution, and polished front-office service in a luxury hotel environment.",
  },
  {
    role: "General / Assistant Manager",
    company: "Domino's Pizza",
    dates: "June 2020 - 2023",
    tone: "leadership",
    icon: Star,
    summary:
      "Started as Assistant Manager, advanced into General Manager roles across Massachusetts locations, and earned recognition for speed, service, and operations.",
  },
  {
    role: "Front Desk Agent",
    company: "Hyatt Regency Boston Harbor",
    dates: "May 2019 - March 2020",
    tone: "hospitality",
    icon: Award,
    summary:
      "Completed front desk training, supported guest-facing hotel operations, and received an Employee of the Month nomination in November 2019.",
  },
  {
    role: "Guest Service Agent / Lobby Ambassador",
    company: "Sofitel Philippine Plaza Manila",
    dates: "June 2018 - April 2019",
    tone: "hospitality",
    icon: Sparkles,
    summary:
      "Began as an intern at a five-star property, then transitioned into a Guest Service Agent role after demonstrating strong service presence.",
  },
];

const strengths = [
  {
    title: "Guest-Centered Judgment",
    description:
      "Reads the room quickly, keeps composure under pressure, and protects the guest experience through clear communication.",
    icon: UsersRound,
  },
  {
    title: "Operational Discipline",
    description:
      "Balances service warmth with standards, accountability, timing, and the kind of follow-through teams can rely on.",
    icon: ShipWheel,
  },
  {
    title: "Leadership Range",
    description:
      "Comfortable moving between front desk polish, shift leadership, training moments, and mission-driven logistics work.",
    icon: Medal,
  },
];

const achievements = [
  "Bachelor of Science in Hospitality Management, Polytechnic University of the Philippines",
  "Scholar student for four years",
  "Domino's Rising Star, Fastest Pizza Maker, Best Customer Service, and 5-star Operational Assessment recognition",
  "Languages: English and Filipino",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="hero-shell">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand-mark" href="#top" aria-label="Samantha Rodeles home">
            <span>SR</span>
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#strengths">Strengths</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              Hospitality Management <span aria-hidden="true">/</span> Active Duty Logistics
            </p>
            <h1>Samantha Rodeles</h1>
            <p className="hero-lede">
              A guest experience professional shaped by luxury hospitality,
              operations leadership, and the discipline of US Navy logistics.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="mailto:samrodeles@gmail.com">
                <Mail size={18} aria-hidden="true" />
                Contact Samantha
              </a>
              <a className="secondary-link" href="#experience">
                View Experience
                <ChevronRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="portrait-stage" aria-label="Portrait and career summary">
            <div className="portrait-card">
              <Image
                src="/samantha-portrait.jpg"
                alt="Portrait of Samantha Rodeles"
                width={2572}
                height={3290}
                priority
                sizes="(max-width: 768px) 82vw, 420px"
                className="portrait-image"
              />
            </div>
            <div className="station-card">
              <span className="station-label">Current station</span>
              <strong>US Navy Active Duty</strong>
              <span>Logistics Specialist</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-labelledby="service-heading">
        <div>
          <p className="section-kicker">Service philosophy</p>
          <h2 id="service-heading">Hospitality at the front, precision behind the scenes.</h2>
        </div>
        <p>
          Samantha brings together the calm presence of a front desk professional,
          the accountability of an operations manager, and the readiness mindset
          of active duty logistics. The result is service that feels warm, prepared,
          and dependable.
        </p>
      </section>

      <section className="content-section" id="experience" aria-labelledby="experience-heading">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2 id="experience-heading">Career timeline</h2>
        </div>
        <div className="timeline">
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <article className={`timeline-item ${item.tone}`} key={`${item.company}-${item.role}`}>
                <div className="timeline-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="timeline-body">
                  <div className="timeline-meta">
                    <span>{item.company}</span>
                    <span>
                      <CalendarDays size={15} aria-hidden="true" />
                      {item.dates}
                    </span>
                  </div>
                  <h3>{item.role}</h3>
                  <p>{item.summary}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-section strengths-section" id="strengths" aria-labelledby="strengths-heading">
        <div className="section-heading">
          <p className="section-kicker">Strengths</p>
          <h2 id="strengths-heading">Built for people-facing work that still has to run cleanly.</h2>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <article className="strength-card" key={item.title}>
                <Icon size={26} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="credentials-band" aria-labelledby="credentials-heading">
        <div>
          <p className="section-kicker">Credentials</p>
          <h2 id="credentials-heading">Education, languages, and recognition</h2>
        </div>
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement}>
              <ChevronRight size={17} aria-hidden="true" />
              {achievement}
            </li>
          ))}
        </ul>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-heading">Ready for the next conversation.</h2>
          <p>
            Available for professional opportunities that value polished service,
            reliable operations, and cross-cultural communication.
          </p>
        </div>
        <div className="contact-panel" aria-label="Contact details">
          <a href="mailto:samrodeles@gmail.com">
            <Mail size={20} aria-hidden="true" />
            samrodeles@gmail.com
          </a>
          <a href="tel:+16172514695">
            <Phone size={20} aria-hidden="true" />
            617-251-4695
          </a>
          <a href="https://www.linkedin.com/in/samantha-rodelie-rodeles-12ba8015b/" target="_blank" rel="noreferrer">
            <MapPin size={20} aria-hidden="true" />
            LinkedIn profile
          </a>
        </div>
      </section>
    </main>
  );
}
