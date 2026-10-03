export type Event = {
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  cover: string;
  photos: string[];
};

export const events: Event[] = [
  {
    slug: "garden-wedding",
    title: "חתונה בין הגפנים",
    category: "חתונה",
    location: "עמק האלה",
    description:
      "ערב קיץ אינטימי בין הגפנים, עם שולחנות ארוכים, תאורה חמה ורגעים קטנים שנשארים בלב.",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    photos: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "midnight-celebration",
    title: "לילה של פעם בחיים",
    category: "מסיבה",
    location: "תל אביב",
    description:
      "הפקת ערב מלאת אנרגיה, צבע ומוזיקה, שנבנתה בדיוק סביב האנשים שחגגו אותה.",
    cover:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=85",
    photos: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "summer-table",
    title: "שולחן קיץ",
    category: "אירוע פרטי",
    location: "יפו",
    description:
      "מפגש משפחתי סביב שולחן אחד, עם פרחים עונתיים, אוכל טוב ואווירה שמרגישה כמו חופשה.",
    cover:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    photos: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "brand-launch",
    title: "הערב שבו הכול התחיל",
    category: "אירוע עסקי",
    location: "חיפה",
    description:
      "השקה שמחברת בין אנשים ורעיונות, בחלל תעשייתי שהפך לערב בלתי נשכח.",
    cover:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85",
    photos: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "desert-vows",
    title: "כן, מול המדבר",
    category: "חתונה",
    location: "מצפה רמון",
    description:
      "טקס קטן מול נוף גדול, עם צבעי אדמה, אור אחרון של יום והאנשים הכי קרובים.",
    cover:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1600&q=85",
    photos: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "together",
    title: "נפגשים מחדש",
    category: "אירוע עסקי",
    location: "ירושלים",
    description:
      "יום של תוכן, השראה וחיבורים חדשים, שהמשיך לערב של חגיגה משותפת.",
    cover:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=85",
    photos: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    slug: "live-music-celebration",
    title: "ערב של מוזיקה חיה",
    category: "שבע ברכות",
    location: "בית שמש",
    description:
      "שבע הברכות המרכזי של ארגון אוהל",
    cover: "/images/event1/DSC_0035.jpg",
    photos: [
      "/images/event1/DSC_0035.jpg",
      "/images/event1/DSC_0003.jpg",
      "/images/event1/DSC_0083.jpg",
      "/images/event1/DSC_0098.jpg",
      "/images/event1/DSC_0802.jpg",
      "/images/event1/DSC_8897.jpg",
      "/images/event1/DSC_8931.jpg",
      "/images/event1/DSC_9916.jpg",
    ],
  },
  {
    slug: "shared-celebration",
    title: "חגיגה של רגעים משותפים",
    category: "אירוע פרטי",
    location: "מיקום לא צוין",
    description:
      "מפגש חגיגי סביב שולחנות, עם מוזיקה, הופעות ואווירה שמחה.",
    cover: "/images/event2/143A0461.jpg",
    photos: [
      "/images/event2/143A0461.jpg",
      "/images/event2/143A0005.jpg",
      "/images/event2/143A0007.jpg",
      "/images/event2/143A0012.jpg",
      "/images/event2/143A0029.jpg",
      "/images/event2/143A0089.jpg",
      "/images/event2/143A0460.jpg",
      "/images/event2/143A1415.jpg",
      "/images/event2/143A1502.jpg",
      "/images/event2/143A1531.jpg",
      "/images/event2/143A2208.jpg",
      "/images/event2/143A3011.jpg",
    ],
  },
];
