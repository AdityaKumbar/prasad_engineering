# TASKS.md â€” Prasad Engineering Website

> Stack: React + Vite Â· Tailwind CSS Â· shadcn/ui Â· Framer Motion Â· React Router v7
> Location: `d:\Prasad Engineering\prasad-engineering\`

---

## Phase 1 â€” Setup

- [x] Scaffold Vite + React project
- [x] Install and configure Tailwind CSS v3
- [x] Install React Router v7
- [x] Install Framer Motion
- [x] Install Lucide React
- [x] Install clsx + tailwind-merge
- [x] Install Radix UI primitives (`@radix-ui/react-slot`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-navigation-menu`)
- [x] Create `tailwind.config.js` with custom color palette (`brand`, `steel`, `accent`, `surface`)
- [x] Create `src/index.css` with Tailwind directives, Google Fonts, base styles, and utility classes
- [x] Create `src/lib/utils.js` with `cn()` helper
- [x] Update `index.html` with SEO meta tags and favicon
- [x] Create `src/main.jsx` entry point
- [x] Create `components/layout/Layout.jsx` shell with `<Outlet />`
- [x] Create `components/layout/Navbar.jsx` with logo, nav links, dropdowns, mobile drawer, CTA button
- [x] Implement Navbar scroll-blur effect
- [x] Implement Navbar dropdown for About (3 sub-links)
- [x] Implement Navbar dropdown for Services (2 sub-links)
- [x] Implement Navbar mobile slide-in drawer
- [x] Implement Navbar active link highlighting
- [x] Create `components/layout/Footer.jsx` with stats strip, brand info, ISO badge, link columns
- [x] Create `components/ui/PageHero.jsx` reusable hero component
- [x] Create `App.jsx` with full route tree (nested `/about/*` and `/services/*`)
- [x] Create `pages/Home.jsx` stub
- [x] Create `pages/about/AboutCompany.jsx` stub
- [x] Create `pages/about/Founders.jsx` stub
- [x] Create `pages/about/Certifications.jsx` stub
- [x] Create `pages/WhyUs.jsx` stub
- [x] Create `pages/Industries.jsx` stub
- [x] Create `pages/services/AluminiumCasting.jsx` stub
- [x] Create `pages/services/Rubber.jsx` stub
- [x] Create `pages/Contact.jsx` stub
- [x] Create `pages/NotFound.jsx` (404 page)
- [x] Copy `logo.png` to `public/` folder
- [x] Verify dev server runs without errors at `http://localhost:5173`

---

## Phase 2 â€” Homepage

- [x] **Hero Section**
  - [x] Add full-viewport dark hero background with subtle grid pattern
  - [x] Add ambient gradient orb behind hero text
  - [x] Add animated tag badge ("Est. 1989 Â· Belagavi, India")
  - [x] Add animated H1 headline: "Precision Aluminium Casting & Engineering Solutions"
  - [x] Add gradient text effect on headline ("& Engineering Solutions")
  - [x] Add hero subheadline (35+ years, 916+ companies, ISO)
  - [x] Add "Get Quote" primary CTA button
  - [x] Add "View Services" outline button
  - [x] Add staggered entry animations (Framer Motion + SplitText)

- [x] **Stats / Company Highlights Section**
  - [x] Add stats strip below hero (separate from footer)
  - [x] Add stat: 35+ Years Experience (with sub-label)
  - [x] Add stat: 916+ Companies Served (with sub-label)
  - [x] Add stat: 64+ Alloys Capability (with sub-label)
  - [x] Add stat: 49+ Skilled Workforce (with sub-label)
  - [x] Add count-up animation on scroll into view

- [x] **About Preview Section**
  - [x] Add section heading "Who We Are"
  - [x] Add 2-3 sentence company description
  - [x] Add "Learn More About Us" link to `/about/company`
  - [x] Add a visual element (image placeholder with ISO badge overlay)
  - [x] Add scroll-triggered fade-in animation

- [x] **Services Preview Section**
  - [x] Add section heading "Our Core Services"
  - [x] Add shadcn Card for "Aluminium Casting" with icon, description, process tags, Learn More CTA
  - [x] Add shadcn Card for "Rubber Component Solutions" with icon, description, product tags, Learn More CTA
  - [x] Add "View All Services" section-level CTA
  - [x] Add hover lift + border glow effect on each card
  - [x] Add scroll-triggered fade-up animation

- [x] **Industries Preview Section**
  - [x] Add section heading "Built for Many, Trusted by All"
  - [x] Add 6 industry cards in 3-col grid (Automotive, Pump, Electrical, Agricultural, Industrial, Mechanical)
  - [x] Add icon + title + 1-line description per card
  - [x] Add hover lift + border glow + top accent on each card
  - [x] Add "Explore Industries" CTA link
  - [x] Add staggered scroll-triggered fade-up animation

- [x] **Why Us Section**
  - [x] Add section heading "The Prasad Engineering Difference"
  - [x] Add 6 differentiator cards with icon + title + short text (3-col grid)
  - [x] Add "Explore All Reasons" link to `/why-us`
  - [x] Add staggered scroll-triggered fade-up animation

- [x] **Call-to-Action (CTA) Band**
  - [x] Add full-width CTA strip with blue gradient background
  - [x] Add CTA headline "Ready to work with us?"
  - [x] Add CTA subtext (24-hour response promise)
  - [x] Add "Contact Us" primary button linking to `/contact`
  - [x] Add "View Services" secondary button
  - [x] Add slide-in animation on both sides

---

## Phase 3 â€” Pages

### About Us â€” Company
- [x] Add PageHero with tag, title, subtitle
- [x] Add company history paragraph (founded 1989, Belagavi)
- [x] Add company growth and capabilities paragraph
- [x] Add quick-facts card (Founded, Location, Certification, Companies Served, Experience, Alloys)
- [x] Add Vision statement section
- [x] Add Mission statement section
- [x] Add scroll-triggered animations throughout

### About Us â€” Founders & Leadership
- [x] Add PageHero
- [x] Add founder profile card (name, role, avatar/initials, bio, highlights)
- [x] Add leadership team card (name, role, bio, highlights)
- [x] Add staggered entry animation on cards
- [x] Add team ethos strip at bottom

### About Us â€” Certifications
- [x] Add PageHero
- [x] Add ISO certification card (icon, badge, description, checklist)
- [x] Add Quality Assurance Standards card
- [x] Add Process & Documentation Control card
- [x] Add badge highlight row (ISO, QA, Process Control, 100% Inspection)
- [x] Add slide-in animation on cards

### Services â€” Aluminium Casting
- [x] Add PageHero
- [x] Add intro text (core capability, since 1989)
- [x] Add 6-step process grid (GDC, HPDC, Sand, Centrifugal, CNC, Inspection)
- [x] Add "Request a Sample" CTA button
- [x] Add applications / industries served list
- [x] Add 64+ alloy tags section
- [x] Add scroll-triggered animations

### Services â€” Rubber Industry Services
- [x] Add PageHero
- [x] Add intro text (expanded capability)
- [x] Add 6-product grid (Seals, Gaskets, Bushes, Dampers, Moulded Parts, Profiles)
- [x] Add "Discuss Requirements" CTA button
- [x] Add rubber compounds section (8 compound tags)
- [x] Add applications list
- [x] Add scroll-triggered animations

### Industries We Serve
- [x] Add PageHero
- [x] Add Automotive sector card (icon, title, description, product tags)
- [x] Add Pump Manufacturing card
- [x] Add Electrical Components card
- [x] Add Agricultural Machinery card
- [x] Add Industrial Equipment card
- [x] Add Mechanical Engineering card
- [x] Add hover accent + product tag pills on all cards
- [x] Add staggered scroll-triggered animation
- [x] Add "Discuss Requirements" CTA

### Why Us
- [x] Add PageHero
- [x] Add stats strip (35+, 916+, 64+, 49+) with CountUp
- [x] Add 9-card grid with all differentiators
- [x] Add icon, title, full description per card
- [x] Add hover effects and top accent on cards
- [x] Add "Work With Us" CTA
- [x] Add scroll-triggered stagger animation

### Contact
- [x] Add PageHero
- [x] Add Address info tile (icon + value + sub)
- [x] Add Phone info tile
- [x] Add Email info tile
- [x] Add Working Hours info tile
- [x] Add contact form (Name, Company, Email, Phone, Message fields)
- [x] Add form validation (required fields with inline errors)
- [x] Add form success state with confirmation message
- [x] Add slide-in animation on info tiles and form

---

## Phase 4 â€” Content & Assets

- [x] Replace founder placeholder names with real names
- [x] Add real founder bio text
- [ ] Add founder photo (or professional avatar)
- [x] Add factory/facility image to About or Home section
- [x] Add product images for Aluminium Casting page
- [x] Add product images for Rubber page
- [x] Replace placeholder contact phone with real number
- [x] Replace placeholder contact email with real email
- [x] Confirm company address and update footer + contact page
- [ ] Add client logos section on homepage (if available)
- [x] Improve hero subheadline copy
- [x] Improve About Company body copy
- [x] Improve service page descriptions

---

## Phase 5 â€” Enhancements

- [ ] **Animations**
  - [x] Add count-up animation on stats (homepage and footer)
  - [x] Add scroll-reveal on all section headings
  - [x] Add stagger animation on card grids
  - [x] Add parallax effect on hero background
  - [x] Verify no animation runs before element is in viewport

- [ ] **Responsiveness**
  - [ ] Test and fix Navbar on mobile (640px and below)
  - [ ] Test and fix Navbar on tablet (641px to 1024px)
  - [ ] Test and fix homepage hero on mobile
  - [ ] Test and fix stats grid on mobile
  - [ ] Test and fix service cards on mobile
  - [ ] Test and fix all page grids on mobile
  - [ ] Test and fix footer on mobile
  - [ ] Test and fix contact form on mobile

- [ ] **Performance**
  - [x] Add `loading="lazy"` to all images
  - [x] Compress and optimise all image assets
  - [x] Add `width` and `height` to all `<img>` tags
  - [x] Verify no layout shift (CLS) on load
  - [x] Check bundle size with `npm run build`

---

## Phase 6 â€” Final

- [ ] **UI Polish**
  - [ ] Audit spacing consistency across all pages
  - [ ] Audit font sizes and hierarchy
  - [ ] Audit colour contrast (WCAG AA minimum)
  - [ ] Add focus styles for keyboard navigation
  - [ ] Verify all interactive elements have unique IDs
  - [ ] Verify all images have descriptive `alt` text
  - [ ] Add a "Back to top" button in the footer

  



