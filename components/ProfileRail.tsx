import { NavItem, profile } from "../data/profile";

type ProfileRailProps = {
  navItems: NavItem[];
};

export function ProfileRail({ navItems }: ProfileRailProps) {
  return (
    <aside className="profile-rail">
      <h1>{profile.name}</h1>
      <p className="headline">{profile.headline}</p>
      <p className="location">{profile.location}</p>
      <p className="intro">{profile.summary}</p>

      <nav aria-label="Section navigation" className="section-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="social-links">
        {profile.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
