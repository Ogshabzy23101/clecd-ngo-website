const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Mission & Vision', href: '#mission' },
  { label: 'Our Programmes', href: '#programmes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

const programmes = [
  {
    title: 'Community Care',
    text: 'Placeholder for CLECD community support activities, outreach work, and care initiatives.',
  },
  {
    title: 'Vulnerable Persons Support',
    text: 'Placeholder for programme details focused on marginalised and vulnerable people.',
  },
  {
    title: 'Life Enhancement Initiatives',
    text: 'Placeholder for skills, wellbeing, education, or livelihood development activities.',
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="CLECD home">
          <span className="brand-mark">CL</span>
          <span>
            <strong>CLECD</strong>
            <small>Nigeria</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">Registered Nigerian Non-Profit</p>
            <h1>Centre for Life Enhancement and Community Development</h1>
            <p className="hero-copy">
              Establishing an enabling environment for marginalised and
              vulnerable people through practical support, care, and community
              development.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Contact Us
              </a>
              <a className="button secondary" href="#programmes">
                Our Programmes
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="CLECD registration details">
            <span>CAC Registration No.</span>
            <strong>CAC/IT/NO 62836</strong>
            <p>Serving communities from Ara, Nigeria.</p>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Us</p>
            <h2>Community-centred care for people who need it most.</h2>
          </div>
          <div className="split">
            <p>
              Centre for Life Enhancement and Community Development (CLECD) is
              a Nigerian non-profit organisation working to improve standards of
              living for marginalised and vulnerable people.
            </p>
            <p>
              Based at Old Maternity Building, Sekoni Area, Ara, CLECD focuses
              on support, care, and development initiatives that help people
              participate more fully in community life.
            </p>
          </div>
        </section>

        <section className="section mission-band" id="mission">
          <div className="value-card">
            <p className="eyebrow">Mission</p>
            <h2>Providing support and care.</h2>
            <p>
              Establishing an enabling environment for the marginalised and
              vulnerable people by providing support and care.
            </p>
          </div>
          <div className="value-card">
            <p className="eyebrow">Vision</p>
            <h2>Enhancing standards of living.</h2>
            <p>
              To be a leading organisation that seeks to enhance standards of
              living in the lives of marginalised people.
            </p>
          </div>
        </section>

        <section className="section" id="programmes">
          <div className="section-heading">
            <p className="eyebrow">Our Programmes</p>
            <h2>Focused programmes with room to grow.</h2>
            <p>
              {/* Replace this placeholder once CLECD's confirmed programme descriptions are available. */}
              Programme details below are placeholders and should be updated
              with real CLECD activities, impact numbers, and beneficiary
              stories.
            </p>
          </div>
          <div className="programme-grid">
            {programmes.map((programme) => (
              <article className="programme-card" key={programme.title}>
                <h3>{programme.title}</h3>
                <p>{programme.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section donate-section" aria-labelledby="donate-title">
          <div>
            <p className="eyebrow">Support Our Work</p>
            <h2 id="donate-title">Donation information coming soon.</h2>
            <p>
              {/* Replace with verified bank details, payment links, or donor instructions before launch. */}
              This donation area is reserved for verified CLECD giving details.
            </p>
          </div>
          <a className="button primary" href="#contact">
            Request Donation Details
          </a>
        </section>

        <section className="section" id="gallery">
          <div className="section-heading">
            <p className="eyebrow">Gallery</p>
            <h2>Snapshots from the field.</h2>
            <p>
              {/* Replace these placeholders with real CLECD event and programme photographs. */}
              Image placeholders are included for future outreach, programme,
              training, or community visit photos.
            </p>
          </div>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="gallery-item" key={item}>
                <span>Photo {item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact Us</p>
            <h2>Start a conversation with CLECD.</h2>
            <p>
              Reach the organisation by phone, email, Facebook, or the contact
              form below.
            </p>
          </div>
          <div className="contact-layout">
            <div className="contact-details">
              <h3>Contact Details</h3>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:rchdev@yahoo.com">rchdev@yahoo.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+2348033667653">08033667653</a>
              </p>
              <p>
                <strong>Address:</strong> Old Maternity Building, Sekoni Area,
                Ara, Nigeria
              </p>
              <p>
                <strong>Facebook:</strong> clecdclecd
              </p>
              <p>
                {/* Replace with the real domain once purchased or connected. */}
                <strong>Website:</strong> www.example-clecd-domain.org
              </p>
            </div>

            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you.html"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out:
                  <input name="bot-field" />
                </label>
              </p>
              <label>
                Full Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email Address
                <input type="email" name="email" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" required />
              </label>
              <button className="button primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Centre for Life Enhancement and Community Development</strong>
          <p>CAC Registration No: CAC/IT/NO 62836</p>
        </div>
        <div>
          <p>Old Maternity Building, Sekoni Area, Ara, Nigeria</p>
          <p>
            <a href="mailto:rchdev@yahoo.com">rchdev@yahoo.com</a> |{' '}
            <a href="tel:+2348033667653">08033667653</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
