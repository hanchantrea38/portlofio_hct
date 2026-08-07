/* ═══════════════════════════════════════════════════════════════
   GALLERY DATA — Photos of your activities & achievements
   ═══════════════════════════════════════════════════════════════

   HOW TO ADD YOUR OWN PHOTO (3 easy steps):
   1. Copy your photo file into the  src/assets/activities/  folder
      (jpg / png / webp all work — keep them reasonably sized).
   2. Add an import line below, e.g.:
         import myPhoto from "../assets/activities/my-photo.jpg";
   3. Add a new entry to the `galleryItems` array using myPhoto.
      Category must be "activity" or "achievement".
        { id: 7, title: "...", category: "activity",
          date: "2025", description: "...", image: myPhoto }

   The 6 placeholder entries below are examples — replace them
   with your real photos and details whenever you're ready.
   ═══════════════════════════════════════════════════════════════ */

import placeholder1 from "../assets/activities/placeholder-1.svg";
import placeholder2 from "../assets/activities/placeholder-2.svg";
import placeholder3 from "../assets/activities/placeholder-3.svg";
import placeholder4 from "../assets/activities/placeholder-4.svg";
import placeholder5 from "../assets/activities/placeholder-5.svg";
import placeholder6 from "../assets/activities/placeholder-6.svg";

export const galleryItems = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    category: "activity",
    date: "2025",
    description: "Intensive full-stack bootcamp covering HTML, CSS, JavaScript, PHP, and databases with hands-on project work.",
    image: placeholder1,
  },
  {
    id: 2,
    title: "Best UI/UX Design Project",
    category: "achievement",
    date: "2025",
    description: "Awarded Best UI/UX Design for the Komroung Trip Booking Application.",
    image: placeholder2,
  },
  {
    id: 3,
    title: "Agile & Scrum Training",
    category: "activity",
    date: "2025",
    description: "Trained in Agile project management, Scrum ceremonies, and sprint planning with Jira.",
    image: placeholder3,
  },
  {
    id: 4,
    title: "PNC Developer Club Meetup",
    category: "activity",
    date: "2024",
    description: "Regular participant in coding challenges, hackathons, and peer programming sessions.",
    image: placeholder4,
  },
  {
    id: 5,
    title: "Volunteer Mentor for Juniors",
    category: "achievement",
    date: "2025",
    description: "Mentored first-year students in HTML, CSS, and JavaScript — helping them build their first web pages.",
    image: placeholder5,
  },
  {
    id: 6,
    title: "Top Performer in Web Development",
    category: "achievement",
    date: "2025",
    description: "Recognized as the top-performing student in the web development track.",
    image: placeholder6,
  },
];

export const galleryFilters = [
  { value: "all", label: "All Photos", icon: "fas fa-images" },
  { value: "activity", label: "Activities", icon: "fas fa-camera" },
  { value: "achievement", label: "Achievements", icon: "fas fa-trophy" },
];
