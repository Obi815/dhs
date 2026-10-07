A responsive, single-page website for Direct Health Services, a non-medical adult day program in San Jose, California serving adults with disabilities, older adults, veterans, and their families and caregivers. Visitors can learn about the program, see the activities offered, check hours and location, and send a message, all from one smooth-scrolling page that works on phones, tablets, and desktops.

Link to project: coming soon

Show Image

How It's Made

Tech used: Next.js (App Router), React, TypeScript, Tailwind CSS, Vercel

I built this site section by section, and every section is its own React component: Home, Services, Activities, About, Contact, plus a Nav and a Footer. The page itself just stacks them in order, and the nav links jump to each one with anchor links (#about, #activities, and so on). Smooth scrolling is a single line of CSS (scroll-behavior: smooth), and each section uses scroll-margin-top so the fixed nav never covers a heading.

A few of the parts I'm proudest of:

Nav that changes as you scroll. The nav starts see-through on top of the hero photo with white text, then switches to a solid white bar with a shadow once you scroll. I did this with useState and a scroll listener inside useEffect. On phones, the links collapse into a menu button that opens a dropdown and closes itself when a link is tapped.
Activities cards built from data. The five activity cards aren't copy-pasted. Each one is an object in a TypeScript file (activities.ts) with a title, examples, photo, icon, and an optional note, and one .map() turns the list into cards. Adding a new activity means adding one object. The cards sit in a horizontal scroll row, with a black and white photo, a blue tint layer on top, and the icon pinned to the corner using relative and absolute positioning.
Mobile-first responsive layout. Every section was written for phones first, then scaled up with Tailwind's sm:, md:, and lg: prefixes. For example, the Services cards go from 1 column on phones, to 2 on tablets, to 4 on laptops, and the hero text sizes step up with the screen.
Contact section with no backend. The hours, contact info, and an embedded Google Map sit side by side. The message form builds a mailto: link from what the visitor types, so it opens their email app with the message already written. It keeps hosting simple and costs nothing to run.
Photos. The photos on the site are AI-generated illustrations, not pictures of real participants.
Optimizations
Used Next.js <Image> for every photo, with the sizes prop set to match the real display width so phones don't download bigger images than they need.
Kept most components as server components. Only the two parts that need state or browser events (the nav and the contact form) use 'use client', which keeps the JavaScript sent to the browser small.
The Google Map iframe uses loading="lazy", so it only loads when someone scrolls down near it.
Cards and nav links are generated from lists, so there's less repeated code and fewer places for mistakes.
Lessons Learned
Flexbox items shrink by default. My activity cards collapsed to about 145px wide and the photos disappeared. After a lot of digging in DevTools, I learned that shrink-0 fixes it. Rebuilding the card one layer at a time (gray box, then blue box, then the photo) was what finally made the problem clear.
Stacking layers needs a relative parent. The blue tint and corner icon only lined up with the photo once they were all inside the same relative box with absolute inset-0.
Tailwind matches class names exactly. A made-up class does nothing, but a real one you didn't mean (like fixed) takes effect, and it took me a while to notice that a placeholder I'd typed was removing my cards from the layout.
JSX details matter. Quotes mean plain text and curly braces mean code (src={activity.icon}, not src='activity.icon'), and list items need a key.
Design for small screens from the start. Going back to fix sizes for phones and tablets taught me to think in breakpoints from the beginning next time.
Honesty about content matters. Since the images are AI-generated, I added a note in the footer so visitors aren't misled about what they're looking at.