/* ═══════════════════════════════════════════════════════════════
   GALLERY DATA — Photos of your activities & achievements
   ═══════════════════════════════════════════════════════════════

   HOW TO ADD YOUR OWN PHOTO (3 easy steps):
   1. Copy your photo file into the  src/assets/activities/  folder
      (jpg / png / webp all work — keep them reasonably sized).
   2. Add an import line below, e.g.:
         import myPhoto from "../assets/activities/my-photo.jpg";
   3. Add a new entry to the `galleryItems` array using myPhoto.
      Category must be one of: "activity", "achievement",
      "club" (clubs & groups) or "personal".
        { id: 9, title: "...", category: "activity",
          description: "...", image: myPhoto }

   The entries below use placeholder titles — swap in your real
   titles and categories whenever you're ready.
   ═══════════════════════════════════════════════════════════════ */

import act1 from "../assets/activities/act1.jpg";
import act2 from "../assets/activities/act2.jpg";
import atCt1 from "../assets/activities/at-ct1.jpg";
import ct1 from "../assets/activities/ct1.jpg";
import ct2 from "../assets/activities/ct2.jpg";
import ct5 from "../assets/activities/ct5.jpg";
import ct6 from "../assets/activities/ct6.jpg";
import pct1 from "../assets/activities/pct1.jpg";

export const galleryItems = [
  {
    id: 1,
    title: "Activity Photo 1",
    category: "activity",
    image: act1,
  },
  {
    id: 2,
    title: "Activity Photo 2",
    category: "activity",
    image: act2,
  },
  {
    id: 3,
    title: "Achievement Photo 1",
    category: "achievement",
    image: atCt1,
  },
  {
    id: 4,
    title: "Activity Photo 3",
    category: "activity",
    image: ct2,
  },
  {
    id: 5,
    title: "Activity Photo 4",
    category: "activity",
    image: ct5,
  },
  {
    id: 6,
    title: "Achievement Photo 2",
    category: "achievement",
    image: ct6,
  },
  {
    id: 7,
    title: "Activity Photo 5",
    category: "activity",
    image: pct1,
  },
  {
    id: 8,
    title: "Achievement Photo 3",
    category: "achievement",
    image: ct1,
  },
];

export const galleryFilters = [
  { value: "all", label: "All Photos", icon: "fas fa-images" },
  { value: "activity", label: "Activities", icon: "fas fa-camera" },
  { value: "achievement", label: "Achievements", icon: "fas fa-trophy" },
  { value: "club", label: "Clubs & Groups", icon: "fas fa-users" },
  { value: "personal", label: "Personal", icon: "fas fa-user" },
];
