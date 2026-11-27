/**
 * Easy Personalization Config
 * Update her name, your anniversary start date, memories, or letters here anytime!
 */
const SITE_CONFIG = {
  partnerName: "Dikshuu",
  coupleLabel: "Us & Forever",
  signature: "Forever yours",
  anniversaryStart: "2024-11-27T00:00:00",
  anniversaryBadgeText: "Since Nov 27, 2024",

  hugMessages: [
    "Sending you the tightest, warmest bear hug right now.",
    "One forehead kiss and a long squeeze delivered.",
    "Wrapped you in warmth—you are always safe with me.",
    "Emergency cuddle beam activated. Come here, love.",
    "A thousand hugs sent straight to my favorite person.",
  ],

  moodCards: [
    {
      id: "miss-me",
      category: "romantic",
      theme: "pink",
      icon: "mail",
      tag: "Romantic",
      title: "Open when you miss me",
      preview: "For the quiet moments when we aren't side by side.",
      letter:
        "Hey love,\n\nIf you're opening this, it means we're apart for a little while—and I want you to know there's a very high chance I'm thinking about you at this exact second.\n\nClose your eyes for three seconds and imagine my hand in yours. Distance is only temporary, and counting down until I see your smile again is my favorite pastime.",
      signoff: "Always right beside your heart,",
      widgetType: "kiss",
    },
    {
      id: "bad-day",
      category: "comfort",
      theme: "lavender",
      icon: "cloud",
      tag: "Comfort",
      title: "Open when you're having a bad day",
      preview: "Take a deep breath. You don't have to carry it alone.",
      letter:
        "Sweetheart,\n\nI'm so sorry today felt heavy. You work so hard, care so deeply, and shine even when you're exhausted—and I'm endlessly proud of you.\n\nLet today's stress melt away right here. Pop a few pastel stress bubbles below, drink some water, and remember I am always on your team.",
      signoff: "Your biggest cheerleader,",
      widgetType: "bubbles",
    },
    {
      id: "cant-sleep",
      category: "comfort",
      theme: "mint",
      icon: "moon",
      tag: "Calm",
      title: "Open when you can't sleep",
      preview: "A soft lullaby note for late-night overthinking.",
      letter:
        "Hi sleepyhead,\n\nIf your mind is racing tonight, let me borrow your worries until morning. Whatever is on your plate can wait until sunrise.\n\nTake four slow breaths with me: in for 4, hold for 4, out for 6. Imagine us stargazing under a pastel sky with zero alarms set for tomorrow.",
      signoff: "Dream of us tonight,",
      widgetType: "breathe",
    },
    {
      id: "mad-at-me",
      category: "playful",
      theme: "peach",
      icon: "coffee",
      tag: "Playful",
      title: "Open when you're mad at me",
      preview: "Peace treaty and emergency ice cream bribery inside.",
      letter:
        "Okay, first of all: you are cute even when you're grumpy (please don't throw a pillow at me for saying that).\n\nSecond: I'm genuinely sorry if I messed up or said something silly. Your feelings matter more to me than winning any argument. Let's talk it out gently—and yes, dessert is on me.",
      signoff: "Waving a soft pink peace flag,",
      widgetType: "peace",
    },
    {
      id: "super-happy",
      category: "playful",
      theme: "butter",
      icon: "sun",
      tag: "Joyful",
      title: "Open when you're super happy",
      preview: "Bottle up that bright smile and celebrate!",
      letter:
        "Look at you glowing!\n\nSeeing you genuinely happy is literally my favorite sight in the whole universe. Whatever good thing just happened, take a second to celebrate—you deserve every single drop of joy coming your way.\n\nTell me all about it as soon as you can!",
      signoff: "Smiling just picturing your smile,",
      widgetType: "celebrate",
    },
    {
      id: "self-doubt",
      category: "comfort",
      theme: "pink",
      icon: "sparkle",
      tag: "Care",
      title: "Open when you doubt yourself",
      preview: "A gentle reminder of how extraordinary you are.",
      letter:
        "Hey brilliant girl,\n\nSometimes your inner critic gets way too loud, so let me remind you of the truth: you are kind, resilient, ridiculously smart, and effortlessly magnetic.\n\nOn the days you forget your own magic, borrow my eyes—because to me, you are pure magic.",
      signoff: "Endlessly in awe of you,",
      widgetType: "compliment",
    },
    {
      id: "date-night",
      category: "playful",
      theme: "mint",
      icon: "compass",
      tag: "Date Night",
      title: "Open when you want a date night",
      preview: "Let fate pick our next cozy evening together.",
      letter:
        "Planning mode activated.\n\nWhether we dress up or stay in cozy hoodies with fairy lights and takeout, every evening with you is my favorite.\n\nTap below to pick our next date idea!",
      signoff: "Save a spot next to me,",
      widgetType: "datePicker",
    },
    {
      id: "anniversary",
      category: "romantic",
      theme: "lavender",
      icon: "heart",
      tag: "Milestone",
      title: "Open on our Anniversary",
      preview: "My milestone letter to you—past, present, and forever.",
      letter:
        "Happy Anniversary, my love,\n\nLooking back at everything we've shared, I realize the best part of our relationship isn't just the big milestones—it's the tiny everyday moments. Your laugh, your sleepy voice, the way your eyes light up when you're excited.\n\nThank you for choosing me, loving me, and making life softer and brighter. Here's to countless more anniversaries together.",
      signoff: "With all my heart, today & always,",
      widgetType: "anniversaryToast",
    },
  ],

  heroPhotos: [
    {
      src: "assets/dikshuu.jpg",
      alt: "Portrait of Dikshuu with a pastel pink flower in her hair",
      caption: "My prettiest forever",
      tag: "Flower Girl",
    },
    {
      src: "assets/dikshuu-smile.jpg",
      alt: "Smiling portrait of Dikshuu with a pink flower clip",
      caption: "That smile steals my heart",
      tag: "Softest Smile",
    },
    {
      src: "assets/dikshuu-saree.jpg",
      alt: "Monochrome portrait of Dikshuu in a saree with bow earrings",
      caption: "Timeless grace & elegance",
      tag: "Pure Grace",
    },
    {
      src: "assets/dikshuu-cozy.jpg",
      alt: "Playful collage of Dikshuu in glasses next to a laughing cat in glasses",
      caption: "Goofy, cozy & cutest duo",
      tag: "Cozy Adventures",
    },
  ],

  memories: [
    {
      date: "Chapter 01",
      title: "The First Spark",
      caption: "One soft smile from you, and suddenly every ordinary day felt like magic.",
      imageUrl: "assets/dikshuu-smile.jpg",
      photoIndex: 1,
    },
    {
      date: "Chapter 02",
      title: "Flower & Sunshine",
      caption: "Cute little moments, pink flowers, and the way you light up every single frame.",
      imageUrl: "assets/dikshuu.jpg",
      photoIndex: 0,
    },
    {
      date: "Chapter 03",
      title: "Cozy Adventures",
      caption: "Silly glasses, goofy laughs, and turning every ordinary hangout into my favorite memory.",
      imageUrl: "assets/dikshuu-cozy.jpg",
      photoIndex: 3,
    },
    {
      date: "Today & Always",
      title: "Our Anniversary",
      caption: "Timeless grace, soft eyes, and my whole heart in one frame. Still falling for you every day.",
      imageUrl: "assets/dikshuu-saree.jpg",
      photoIndex: 2,
    },
  ],

  reasons: [
    "The way your eyes light up whenever you talk about something you love.",
    "How safe, calm, and completely myself I feel whenever I'm with you.",
    "Your adorable laugh—it's honestly my favorite sound on Earth.",
    "The tiny thoughtful things you remember without me even realizing.",
    "How soft your heart is, even when you pretend to act tough.",
    "The way even boring errands turn into mini adventures with you.",
    "Your warm hugs that instantly fix 99% of bad days.",
    "How you inspire me to be kinder, happier, and better every day.",
    "The cutest expressions you make when you're sleepy or excited for food.",
    "Simply because you're you—and nobody else comes close.",
  ],

  coupons: [
    {
      id: "coupon-massage",
      code: "PASS NO. 01",
      icon: "sparkle",
      title: "30-Min Royal Head & Back Rub",
      desc: "Redeemable anytime you feel tired, no questions asked.",
    },
    {
      id: "coupon-dessert",
      code: "PASS NO. 02",
      icon: "coffee",
      title: "Midnight Dessert Run",
      desc: "Your flavor choice, my treat—even in comfy pajamas.",
    },
    {
      id: "coupon-movie",
      code: "PASS NO. 03",
      icon: "film",
      title: "100% Movie Choice (Zero Veto)",
      desc: "Pick any rom-com, cozy show, or marathon—I'll bring snacks.",
    },
    {
      id: "coupon-cuddle",
      code: "PASS NO. 04",
      icon: "heart",
      title: "Unlimited Cuddle & Comfort Pass",
      desc: "Good for extra hugs, forehead kisses, and unhurried quality time.",
    },
  ],
};

// Crisp Inline SVG Icon Library
function getIconSvg(name, size = 20) {
  const icons = {
    mail: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="3"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    cloud: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    moon: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    coffee: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>`,
    sun: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    sparkle: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    compass: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    heart: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    film: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>`,
  };
  return icons[name] || icons.heart;
}

// State
const openedCards = new Set(JSON.parse(localStorage.getItem("dikshuu_opened_cards") || "[]"));
const claimedCoupons = new Set(JSON.parse(localStorage.getItem("dikshuu_claimed_coupons") || "[]"));
const photoLoves = JSON.parse(localStorage.getItem("dikshuu_photo_loves") || "{}");

let currentFilter = "all";
let currentModalIndex = 0;
let heroPhotoIndex = 0;
let lightboxIndex = 0;
let hugCount = 0;
let reasonIndex = -1;
let lastReasonNumber = 0;

// DOM Elements
const moodGrid = document.getElementById("moodGrid");
const timelineGrid = document.getElementById("timelineGrid");
const couponGrid = document.getElementById("couponGrid");
const letterModal = document.getElementById("letterModal");
const modalBadge = document.getElementById("modalBadge");
const modalEmoji = document.getElementById("modalEmoji");
const modalTitle = document.getElementById("modalTitle");
const modalLetter = document.getElementById("modalLetter");
const modalSignoff = document.getElementById("modalSignoff");
const modalWidget = document.getElementById("modalWidget");
const modalCounter = document.getElementById("modalCounter");

const heroPhotoImg = document.getElementById("heroPhotoImg");
const heroPhotoCaption = document.getElementById("heroPhotoCaption");
const heroPhotoCounter = document.getElementById("heroPhotoCounter");
const heroPhotoTag = document.getElementById("heroPhotoTag");
const heroPhotoDots = document.getElementById("heroPhotoDots");

const photoLightbox = document.getElementById("photoLightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTag = document.getElementById("lightboxTag");
const lightboxCaption = document.getElementById("lightboxCaption");
const photoLoveCount = document.getElementById("photoLoveCount");

// Apply Personalization
function applyConfig() {
  document.getElementById("partnerName").textContent = SITE_CONFIG.partnerName;
  document.getElementById("footerPartnerName").textContent = SITE_CONFIG.partnerName;
  document.getElementById("navCoupleName").textContent = SITE_CONFIG.coupleLabel;
  document.getElementById("footerSignature").textContent = SITE_CONFIG.signature;
  document.getElementById("anniversaryDateBadge").textContent = SITE_CONFIG.anniversaryBadgeText;
  document.title = `Happy Anniversary, ${SITE_CONFIG.partnerName} ✨`;
}

// Live Anniversary Counter
function updateCounter() {
  const start = new Date(SITE_CONFIG.anniversaryStart).getTime();
  const diff = Math.max(0, Date.now() - start);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countDays").textContent = String(days);
  document.getElementById("countHours").textContent = String(hours).padStart(2, "0");
  document.getElementById("countMinutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("countSeconds").textContent = String(seconds).padStart(2, "0");
}

// Delicate Ambient Luminous Orbs (non-emoji)
function spawnBackgroundParticles() {
  const container = document.getElementById("floatingParticles");
  for (let i = 0; i < 14; i += 1) {
    const dot = document.createElement("span");
    dot.className = "ambient-dot";
    const size = 5 + (i % 4) * 3;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${(i * 7.1 + 4) % 96}%`;
    dot.style.animationDuration = `${16 + (i % 6) * 3}s`;
    dot.style.animationDelay = `${-(i * 2.1)}s`;
    container.appendChild(dot);
  }
}

// Confetti Burst Engine
const confettiCanvas = document.getElementById("confettiCanvas");
const ctx = confettiCanvas.getContext("2d");
let confettiPieces = [];
let confettiAnimId = null;

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function launchConfetti(originX = window.innerWidth / 2, originY = window.innerHeight * 0.45) {
  const colors = ["#d95f8c", "#9d85f2", "#4ec49c", "#ef9570", "#eab349"];
  for (let i = 0; i < 38; i += 1) {
    const angle = (Math.PI * 2 * i) / 38 + (Math.random() - 0.5) * 0.35;
    const speed = 3 + Math.random() * 5.5;
    confettiPieces.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: 5 + Math.random() * 4,
      color: colors[i % colors.length],
      alpha: 1,
      rot: Math.random() * Math.PI,
      vRot: (Math.random() - 0.5) * 0.2,
    });
  }
  if (!confettiAnimId) {
    animateConfetti();
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces = confettiPieces.filter((p) => p.alpha > 0.03);

  confettiPieces.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.16;
    p.rot += p.vRot;
    p.alpha -= 0.016;

    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
    ctx.restore();
  });

  if (confettiPieces.length > 0) {
    confettiAnimId = requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimId = null;
  }
}

// Render Mood Envelopes
function renderMoodCards() {
  const filtered = SITE_CONFIG.moodCards.filter(
    (card) => currentFilter === "all" || card.category === currentFilter
  );
  moodGrid.innerHTML = "";

  filtered.forEach((card) => {
    const isOpened = openedCards.has(card.id);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `mood-card${isOpened ? " opened" : ""}`;
    btn.dataset.theme = card.theme;
    btn.innerHTML = `
      <div class="mood-card-top">
        <span class="mood-icon" aria-hidden="true">${getIconSvg(card.icon, 20)}</span>
        <span class="mood-seal">${isOpened ? "Read ✓" : card.tag}</span>
      </div>
      <h3>${card.title}</h3>
      <p>${card.preview}</p>
      <span class="mood-open-cue">Open letter →</span>
    `;
    btn.addEventListener("click", () => {
      const idx = SITE_CONFIG.moodCards.findIndex((c) => c.id === card.id);
      openModal(idx);
    });
    moodGrid.appendChild(btn);
  });
}

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentFilter = chip.dataset.filter;
    renderMoodCards();
  });
});

// Render Curated Lookbook Timeline
function renderTimeline() {
  timelineGrid.innerHTML = "";
  SITE_CONFIG.memories.forEach((mem, idx) => {
    const card = document.createElement("article");
    const hasPhoto = Boolean(mem.imageUrl);
    card.className = `memory-card${hasPhoto ? " has-photo" : ""}`;
    card.innerHTML = `
      <div class="memory-frame">
        <img src="${mem.imageUrl}" alt="${mem.title}" loading="lazy" />
        <span class="memory-badge">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>
          </svg>
          View
        </span>
      </div>
      <div class="memory-meta">
        <span class="memory-date">${mem.date}</span>
        <span class="memory-index">0${idx + 1} / 0${SITE_CONFIG.memories.length}</span>
      </div>
      <h3>${mem.title}</h3>
      <p>${mem.caption}</p>
    `;
    if (hasPhoto && typeof mem.photoIndex === "number") {
      card.querySelector(".memory-frame").addEventListener("click", () => {
        openLightbox(mem.photoIndex);
      });
    }
    timelineGrid.appendChild(card);
  });
}

// Render Luxury Passes
function renderCoupons() {
  couponGrid.innerHTML = "";
  SITE_CONFIG.coupons.forEach((coupon) => {
    const isClaimed = claimedCoupons.has(coupon.id);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `coupon-ticket${isClaimed ? " claimed" : ""}`;
    btn.innerHTML = `
      <div class="coupon-top">
        <span class="coupon-icon-box" aria-hidden="true">${getIconSvg(coupon.icon, 19)}</span>
        <span class="coupon-status">${isClaimed ? "Redeemed ✓" : "Redeem"}</span>
      </div>
      <span class="coupon-code">${coupon.code}</span>
      <h3>${coupon.title}</h3>
      <p>${coupon.desc}</p>
    `;
    btn.addEventListener("click", () => {
      if (!claimedCoupons.has(coupon.id)) {
        claimedCoupons.add(coupon.id);
        localStorage.setItem("dikshuu_claimed_coupons", JSON.stringify([...claimedCoupons]));
        const rect = btn.getBoundingClientRect();
        launchConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
        renderCoupons();
      }
    });
    couponGrid.appendChild(btn);
  });
}

document.getElementById("resetCouponsBtn").addEventListener("click", () => {
  claimedCoupons.clear();
  localStorage.removeItem("dikshuu_claimed_coupons");
  renderCoupons();
});

// Modal Logic & Mini Interactive Widgets
function renderModalWidget(card) {
  modalWidget.innerHTML = "";

  if (card.widgetType === "kiss") {
    modalWidget.innerHTML = `
      <p class="widget-title">Instant Pick-Me-Up</p>
      <button type="button" class="btn btn-soft" id="widgetActionBtn">Send Forehead Kiss</button>
      <p class="widget-output" id="widgetOutput"></p>
    `;
    let kisses = 0;
    document.getElementById("widgetActionBtn").addEventListener("click", () => {
      kisses += 1;
      document.getElementById("widgetOutput").textContent = `Delivered ${kisses} gentle forehead kiss${kisses > 1 ? "es" : ""}.`;
      launchConfetti();
    });
  } else if (card.widgetType === "bubbles") {
    modalWidget.innerHTML = `
      <p class="widget-title">Release today's stress — pop the bubbles:</p>
      <div class="bubble-wrap" id="bubbleWrap"></div>
      <p class="widget-output" id="widgetOutput"></p>
    `;
    const wrap = document.getElementById("bubbleWrap");
    let popped = 0;
    for (let i = 0; i < 10; i += 1) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "bubble-btn";
      b.textContent = "○";
      b.setAttribute("aria-label", "Pop stress bubble");
      b.addEventListener("click", () => {
        if (!b.classList.contains("popped")) {
          b.classList.add("popped");
          b.textContent = "✓";
          popped += 1;
          document.getElementById("widgetOutput").textContent =
            popped === 10
              ? "All 10 worries cleared. Sending you the warmest hug."
              : `${popped} / 10 worries released`;
        }
      });
      wrap.appendChild(b);
    }
  } else if (card.widgetType === "breathe") {
    modalWidget.innerHTML = `
      <p class="widget-title">Guided Calm Breath</p>
      <button type="button" class="btn btn-soft" id="widgetActionBtn">Begin 1 Calm Cycle</button>
      <p class="widget-output" id="widgetOutput"></p>
    `;
    document.getElementById("widgetActionBtn").addEventListener("click", () => {
      const out = document.getElementById("widgetOutput");
      out.textContent = "Inhale softly... 1, 2, 3, 4";
      setTimeout(() => {
        out.textContent = "Hold gently... you are safe and loved";
      }, 2400);
      setTimeout(() => {
        out.textContent = "Exhale slowly... goodnight, love";
      }, 4800);
    });
  } else if (card.widgetType === "peace") {
    modalWidget.innerHTML = `
      <p class="widget-title">Peace Offering</p>
      <button type="button" class="btn btn-soft" id="widgetActionBtn">Accept Peace Treaty + Ice Cream</button>
      <p class="widget-output" id="widgetOutput"></p>
    `;
    document.getElementById("widgetActionBtn").addEventListener("click", () => {
      document.getElementById("widgetOutput").textContent = "Treaty accepted. One warm hug and ice cream owed immediately.";
      launchConfetti();
    });
  } else if (card.widgetType === "celebrate") {
    modalWidget.innerHTML = `
      <p class="widget-title">Celebration Confetti</p>
      <button type="button" class="btn btn-soft" id="widgetActionBtn">Launch Confetti</button>
      <p class="widget-output" id="widgetOutput"></p>
    `;
    document.getElementById("widgetActionBtn").addEventListener("click", () => {
      document.getElementById("widgetOutput").textContent = "Keep shining—so proud of you!";
      launchConfetti();
    });
  } else if (card.widgetType === "compliment") {
    const boosts = [
      "You make ordinary days feel effortlessly memorable.",
      "Your kindness leaves everyone around you gentler and happier.",
      "You are stronger and wiser than you give yourself credit for.",
      "You are genuinely one of one—completely irreplaceable.",
    ];
    modalWidget.innerHTML = `
      <p class="widget-title">Gentle Truths</p>
      <button type="button" class="btn btn-soft" id="widgetActionBtn">Remind Me Again</button>
      <p class="widget-output" id="widgetOutput"></p>
    `;
    let idx = 0;
    document.getElementById("widgetActionBtn").addEventListener("click", () => {
      document.getElementById("widgetOutput").textContent = boosts[idx % boosts.length];
      idx += 1;
    });
  } else if (card.widgetType === "datePicker") {
    const dates = [
      "Cozy coffee walk + bookstore browsing",
      "Sunset picnic with snacks & our playlist",
      "Homemade pasta night under fairy lights",
      "Late-night drive & ice cream stops",
      "Blanket fort + favorite movie marathon",
    ];
    modalWidget.innerHTML = `
      <p class="widget-title">Date Night Curator</p>
      <button type="button" class="btn btn-soft" id="widgetActionBtn">Suggest Our Next Date</button>
      <p class="widget-output" id="widgetOutput"></p>
    `;
    document.getElementById("widgetActionBtn").addEventListener("click", () => {
      const choice = dates[Math.floor(Math.random() * dates.length)];
      document.getElementById("widgetOutput").textContent = choice;
      launchConfetti();
    });
  } else {
    modalWidget.innerHTML = `
      <p class="widget-title">Anniversary Toast</p>
      <button type="button" class="btn btn-soft" id="widgetActionBtn">Toast to Forever</button>
      <p class="widget-output" id="widgetOutput"></p>
    `;
    document.getElementById("widgetActionBtn").addEventListener("click", () => {
      document.getElementById("widgetOutput").textContent = "To every year ahead with you, my love.";
      launchConfetti();
    });
  }
}

function openModal(index) {
  currentModalIndex = (index + SITE_CONFIG.moodCards.length) % SITE_CONFIG.moodCards.length;
  const card = SITE_CONFIG.moodCards[currentModalIndex];

  openedCards.add(card.id);
  localStorage.setItem("dikshuu_opened_cards", JSON.stringify([...openedCards]));
  renderMoodCards();

  modalBadge.textContent = card.tag;
  modalEmoji.innerHTML = getIconSvg(card.icon, 26);
  modalTitle.textContent = card.title;
  modalLetter.textContent = card.letter;
  modalSignoff.textContent = card.signoff;
  modalCounter.textContent = `${currentModalIndex + 1} / ${SITE_CONFIG.moodCards.length}`;

  renderModalWidget(card);
  letterModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  letterModal.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("closeModalBtn").addEventListener("click", closeModal);
document.getElementById("prevCardBtn").addEventListener("click", () => openModal(currentModalIndex - 1));
document.getElementById("nextCardBtn").addEventListener("click", () => openModal(currentModalIndex + 1));

letterModal.addEventListener("click", (e) => {
  if (e.target === letterModal) {
    closeModal();
  }
});

// Hero Polaroid Stack & Photo Lightbox
function renderHeroPhoto() {
  const photos = SITE_CONFIG.heroPhotos;
  const current = photos[heroPhotoIndex];
  heroPhotoImg.src = current.src;
  heroPhotoImg.alt = current.alt;
  heroPhotoCaption.textContent = current.caption;
  heroPhotoTag.textContent = current.tag;
  heroPhotoCounter.textContent = `0${heroPhotoIndex + 1} / 0${photos.length}`;

  heroPhotoDots.innerHTML = "";
  photos.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.className = `polaroid-dot${idx === heroPhotoIndex ? " active" : ""}`;
    heroPhotoDots.appendChild(dot);
  });
}

function openLightbox(index) {
  const photos = SITE_CONFIG.heroPhotos;
  lightboxIndex = (index + photos.length) % photos.length;
  const item = photos[lightboxIndex];

  lightboxImg.src = item.src;
  lightboxImg.alt = item.alt;
  lightboxTag.textContent = item.tag;
  lightboxCaption.textContent = item.caption;
  photoLoveCount.textContent = String(photoLoves[item.src] || 0);

  photoLightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  photoLightbox.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("heroPrevPhotoBtn").addEventListener("click", () => {
  heroPhotoIndex = (heroPhotoIndex - 1 + SITE_CONFIG.heroPhotos.length) % SITE_CONFIG.heroPhotos.length;
  renderHeroPhoto();
});

document.getElementById("heroNextPhotoBtn").addEventListener("click", () => {
  heroPhotoIndex = (heroPhotoIndex + 1) % SITE_CONFIG.heroPhotos.length;
  renderHeroPhoto();
});

document.getElementById("heroPhotoBtn").addEventListener("click", () => {
  openLightbox(heroPhotoIndex);
});

document.getElementById("closeLightboxBtn").addEventListener("click", closeLightbox);
document.getElementById("prevLightboxBtn").addEventListener("click", () => openLightbox(lightboxIndex - 1));
document.getElementById("nextLightboxBtn").addEventListener("click", () => openLightbox(lightboxIndex + 1));

photoLightbox.addEventListener("click", (e) => {
  if (e.target === photoLightbox) {
    closeLightbox();
  }
});

document.getElementById("lovePhotoBtn").addEventListener("click", (e) => {
  const item = SITE_CONFIG.heroPhotos[lightboxIndex];
  photoLoves[item.src] = (photoLoves[item.src] || 0) + 1;
  localStorage.setItem("dikshuu_photo_loves", JSON.stringify(photoLoves));
  photoLoveCount.textContent = String(photoLoves[item.src]);
  const rect = e.currentTarget.getBoundingClientRect();
  launchConfetti(rect.left + rect.width / 2, rect.top);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!letterModal.hidden) closeModal();
    if (!photoLightbox.hidden) closeLightbox();
  }
});

// Virtual Hug Button
document.getElementById("hugBtn").addEventListener("click", (e) => {
  hugCount += 1;
  const msg = SITE_CONFIG.hugMessages[(hugCount - 1) % SITE_CONFIG.hugMessages.length];
  document.getElementById("hugStatus").textContent = `${msg} (${hugCount} sent)`;
  const rect = e.currentTarget.getBoundingClientRect();
  launchConfetti(rect.left + rect.width / 2, rect.top);
});

// Love Jar Button
document.getElementById("drawReasonBtn").addEventListener("click", (e) => {
  reasonIndex = (reasonIndex + 1) % SITE_CONFIG.reasons.length;
  lastReasonNumber += 1;
  document.getElementById("reasonText").textContent = SITE_CONFIG.reasons[reasonIndex];
  document.getElementById("reasonCounter").textContent = `Note ${String(lastReasonNumber).padStart(2, "0")}`;
  const rect = e.currentTarget.getBoundingClientRect();
  launchConfetti(rect.left + rect.width / 2, rect.top);
});

// Song Player Controller ("Aa Chalke Tujhe")
const bgAudio = document.getElementById("bgAudio");
const musicDock = document.getElementById("musicDock");
const musicToggleBtn = document.getElementById("musicToggleBtn");
const dockPlayBtn = document.getElementById("dockPlayBtn");
const dockPlayIcon = document.getElementById("dockPlayIcon");
const audioProgressWrap = document.getElementById("audioProgressWrap");
const audioProgressFill = document.getElementById("audioProgressFill");
const audioTime = document.getElementById("audioTime");

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function updateAudioUI(isPlaying) {
  musicToggleBtn.setAttribute("aria-pressed", String(isPlaying));
  musicToggleBtn.querySelector(".music-label").textContent = isPlaying ? "Playing" : "Our Song";
  musicDock.classList.toggle("is-playing", isPlaying);
  dockPlayBtn.setAttribute("aria-label", isPlaying ? "Pause song" : "Play song");
  dockPlayIcon.innerHTML = isPlaying
    ? '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'
    : '<polygon points="6 3 20 12 6 21 6 3"/>';
}

function toggleSong() {
  if (bgAudio.paused) {
    bgAudio.play().then(() => updateAudioUI(true)).catch(() => updateAudioUI(false));
  } else {
    bgAudio.pause();
    updateAudioUI(false);
  }
}

musicToggleBtn.addEventListener("click", toggleSong);
dockPlayBtn.addEventListener("click", toggleSong);

bgAudio.addEventListener("loadedmetadata", () => {
  audioTime.textContent = `0:00 / ${formatTime(bgAudio.duration)}`;
});

bgAudio.addEventListener("timeupdate", () => {
  const duration = bgAudio.duration || 0;
  const pct = duration > 0 ? (bgAudio.currentTime / duration) * 100 : 0;
  audioProgressFill.style.width = `${pct}%`;
  audioProgressWrap.setAttribute("aria-valuenow", String(Math.round(pct)));
  audioTime.textContent = duration > 0
    ? `${formatTime(bgAudio.currentTime)} / ${formatTime(duration)}`
    : formatTime(bgAudio.currentTime);
});

audioProgressWrap.addEventListener("click", (e) => {
  if (!bgAudio.duration) return;
  const rect = audioProgressWrap.getBoundingClientRect();
  const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  bgAudio.currentTime = ratio * bgAudio.duration;
});

audioProgressWrap.addEventListener("keydown", (e) => {
  if (!bgAudio.duration) return;
  if (e.key === "ArrowRight") {
    bgAudio.currentTime = Math.min(bgAudio.duration, bgAudio.currentTime + 5);
  } else if (e.key === "ArrowLeft") {
    bgAudio.currentTime = Math.max(0, bgAudio.currentTime - 5);
  }
});

// Subtle Scroll Reveal
function setupScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => observer.observe(el));
}

// Initialize Everything
applyConfig();
updateCounter();
setInterval(updateCounter, 1000);
spawnBackgroundParticles();
renderHeroPhoto();
renderMoodCards();
renderTimeline();
renderCoupons();
setupScrollReveal();
