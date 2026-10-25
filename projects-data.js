const PROJECTS = [
  {
    id: "picknest",
    name: "PickNest",
    image: "images/picknest.png",
    url: "picknest-theta.vercel.app",
    description:
      "A responsive ecommerce demo with product search, category filters, cart, wishlist, Google login, demo checkout, order history, and light/dark themes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Better Auth"],
    liveLink: "https://picknest-theta.vercel.app/",
    sourceLink: "https://github.com/iamminhaz31/picknest",
    challenges: [
      "Setting up Google login so each user keeps their own cart, wishlist and orders.",
      "Making search, category filters and sorting work together without breaking each other.",
      "Keeping the light and dark themes looking right on every page."
    ],
    improvements: [
      "Connect a real payment gateway instead of the demo checkout.",
      "Add an admin dashboard to manage products and orders.",
      "Add product reviews and ratings."
    ]
  },
  {
    id: "bazardor",
    name: "BazarDor",
    image: "images/bazardor.png",
    url: "bazardor-app.vercel.app",
    description:
      "A daily market-price app with category browsing, price sorting, market-wise product details, secure login, and editable user profiles.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    liveLink: "https://bazardor-app.vercel.app/",
    sourceLink: "https://github.com/iamminhaz31/bazardor-app",
    challenges: [
      "Showing the same product with different prices in different markets in a clear way.",
      "Building secure login and keeping user sessions safe.",
      "Letting users edit their profile without breaking saved data."
    ],
    improvements: [
      "Add price history charts for each product.",
      "Let users set price alerts.",
      "Update prices automatically from a live source."
    ]
  },
  {
    id: "fitlog",
    name: "FitLog",
    image: "images/fitlog.png",
    url: "fitlog-zeta-ten.vercel.app",
    description:
      "A workout library with search, filters, sorting, exercise details, saved workouts, and a personal plan with completion tracking.",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    liveLink: "https://fitlog-zeta-ten.vercel.app/",
    sourceLink: "https://github.com/iamminhaz31/fitlog",
    challenges: [
      "Combining search, filters and sorting so the list always shows the right workouts.",
      "Keeping saved workouts and the personal plan correct when the user marks items as done."
    ],
    improvements: [
      "Add user accounts so plans are saved across devices.",
      "Show progress charts for completed workouts.",
      "Let users create their own custom workouts."
    ]
  },
  {
    id: "devstack",
    name: "DevStack",
    image: "images/devstack.png",
    url: "dev-stack-eight.vercel.app",
    description:
      "Explore development technologies and build a personal stack. Add technologies, remove individual items, or clear the entire stack.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    liveLink: "https://dev-stack-eight.vercel.app/",
    sourceLink: "https://github.com/iamminhaz31/dev-stack",
    challenges: [
      "Managing the stack state so adding, removing and clearing always update the screen correctly.",
      "Stopping the same technology from being added twice."
    ],
    improvements: [
      "Save the stack so it stays after a page refresh.",
      "Let users share their stack with a link.",
      "Add more technologies and categories."
    ]
  }
];