import React, { useState } from 'react';
import { 
  Mail, 
  FileText, 
  CheckCircle2, 
  Printer, 
  X, 
  Maximize2,
  Layers,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

type PortfolioCategory = 
  | 'promotional-sales' 
  | 'welcome-email' 
  | 'abandoned-cart' 
  | 'sales-email' 
  | 'email-sequence' 
  | 'before-after' 
  | 'breakdowns' 
  | 'case-studies';

interface EmailSample {
  id: string;
  categoryKey: 'promotional-sales' | 'welcome-email' | 'abandoned-cart' | 'sales-email';
  title: string;
  type: string;
  projectLabel: 'Spec Project';
  awarenessLevel: 'Problem Aware' | 'Solution Aware' | 'Product Aware' | 'Most Aware';
  industry: string;
  context: string;
  subject: string;
  previewText: string;
  sender: string;
  body: string[];
  ctaLabel: string;
  breakdown: {
    subjectLine: string;
    hook: string;
    painPointDesire: string;
    objectionHandling: string;
    offerUrgency: string;
    cta: string;
  };
}

interface SequenceEmail {
  step: string;
  day: string;
  role: string;
  awarenessLevel: string;
  subject: string;
  previewText: string;
  strategicGoal: string;
  body: string[];
  ctaLabel: string;
  keyElements: {
    hook: string;
    objectionDismantled: string;
    intendedAction: string;
  };
}

interface BeforeAfterItem {
  id: string;
  title: string;
  projectLabel: 'Spec Project';
  context: string;
  before: {
    subject: string;
    body: string;
    critique: string[];
  };
  after: {
    subject: string;
    body: string;
    improvements: string[];
  };
}

interface BreakdownItem {
  id: string;
  title: string;
  type: string;
  projectLabel: 'Spec Project';
  context: string;
  sections: {
    label: string;
    copy: string;
    analysis: string;
  }[];
}

interface CaseStudyItem {
  id: string;
  title: string;
  projectLabel: 'Spec Project';
  industry: string;
  objective: string;
  copyApproach: string;
  keyDecisions: string[];
  sampleExcerpt: {
    subject: string;
    snippet: string;
  };
  outcomeLearning: string;
}

export const Work: React.FC = () => {
  // Default to the first requested sample type: Promotional Sales Email
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('promotional-sales');
  const [viewMode, setViewMode] = useState<'inbox' | 'pdf'>('inbox');
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(true);

  // Active step for sequence viewer (5 emails)
  const [selectedSequenceStep, setSelectedSequenceStep] = useState<number>(0);
  const [sequenceViewMode, setSequenceViewMode] = useState<'inbox' | 'pdf'>('inbox');

  // The 4 Core Standalone Email Samples (plus the 5th: Email Sequence below)
  const standaloneSamples: EmailSample[] = [
    {
      id: 'sample-promo',
      categoryKey: 'promotional-sales',
      title: 'Studio Workspace Solid Walnut Batch Drop',
      type: 'Promotional Sales Email',
      projectLabel: 'Spec Project',
      awarenessLevel: 'Solution Aware',
      industry: 'Handcrafted Studio Gear and Workspace Goods',
      context: 'Sent to a warm email list of designers and remote professionals announcing an exclusive workshop batch of solid walnut desk shelves.',
      subject: 'Why we refused to use plastic veneers on the Studio Shelf',
      previewText: 'Most monitor risers use photo-printed vinyl over wood dust. Here is what we did instead.',
      sender: 'Sumana Pervaiz <studio@atelierwork.com>',
      body: [
        "There is an open secret in the workspace furniture industry: almost every wooden desk riser you see on social feeds is compressed wood dust wrapped in photo-printed plastic vinyl.",
        "They look convincing under studio lighting for the first three weeks. Then a heavy monitor arm chips the edge, or summer humidity causes the center span to sag by a quarter of an inch.",
        "When we began designing the Studio Shelf, we agreed on a single uncompromising rule: if an object will not last twenty years on your desk, it does not belong in your workspace.",
        "Every single shelf in this run is milled from one continuous plank of American black walnut. No glued veneer seams to bubble up, and no composite fillers underneath. The legs are laser-cut from heavy twelve-gauge cold-rolled steel, finished with a matte powder coat that resists scratches.",
        "Will it bow under an ultrawide monitor setup? We load-tested the center span to eighty pounds with zero measurable deflection. Whether you mount a thirty-four-inch display or two studio reference monitors, the shelf remains completely flat.",
        "Each piece is finished by hand using organic tung oil, allowing the natural walnut grain to breathe and develop a rich patina over years of daily use rather than peeling like synthetic lacquer.",
        "Our workshop just completed a limited batch of eighty-five units.",
        "Once this run is spoken for, our woodworkers reset the shop tooling for conference tables, and the next shelf batch will not ship until late next quarter.",
        "If your workspace needs a calm, permanent foundation that will never sag or peel, you can reserve one from this run below:"
      ],
      ctaLabel: 'Reserve a Solid Walnut Shelf (85 Units)',
      breakdown: {
        subjectLine: 'Piques curiosity through an unexpected, opinionated design refusal rather than a generic discount announcement.',
        hook: 'Exposes how mass-market competitors cut corners with synthetic composite materials, creating immediate alignment with discerning readers.',
        painPointDesire: 'Translates the frustration of saggy, peeling desk accessories into the desire for permanent, heirloom-grade craftsmanship.',
        objectionHandling: 'Directly addresses the primary physical objection—weight capacity and screen sagging—with an 80-pound load test proof point.',
        offerUrgency: 'A genuine workshop production limit of 85 units before the shop tooling resets for the quarter.',
        cta: 'A single, high-intent reservation action that respects the subscriber’s intellect.'
      }
    },
    {
      id: 'sample-welcome',
      categoryKey: 'welcome-email',
      title: 'Day-1 Anti-Complexity Welcome and Orientation',
      type: 'Welcome Email',
      projectLabel: 'Spec Project',
      awarenessLevel: 'Problem Aware',
      industry: 'Minimalist Productivity Software',
      context: 'Sent immediately after a user creates a free account for a focused daily execution tool.',
      subject: 'The first thing to delete from your morning routine',
      previewText: 'A quick note before you organize your workspace today.',
      sender: 'Sumana Pervaiz from FocusCraft <team@focuscraft.io>',
      body: [
        "Most productivity advice starts with what you should add to your morning: another checklist, another habit tracker, or another color-coded calendar block.",
        "The problem is that when your workday already feels crowded, adding five new routines is like trying to organize a packed closet by buying more plastic hangers.",
        "You end up spending your best morning energy managing the system instead of completing the work.",
        "We built FocusCraft on the opposite principle.",
        "There are no nested sub-folders to configure. There are no automated triggers to troubleshoot. When you log in, the screen displays only one thing: the three priorities you must complete before five o'clock today.",
        "You do not need to spend your morning migrating old spreadsheets or building complicated project trees.",
        "Your only job today is to pick the single task you have been putting off all week, write it down, and close the tab until you are ready to begin.",
        "Click below to set your first priority and get back to real work in under sixty seconds:"
      ],
      ctaLabel: 'Set Your First Priority (Under 60 Seconds)',
      breakdown: {
        subjectLine: 'Creates immediate curiosity by challenging the standard instinct to add more tasks and habits to a morning routine.',
        hook: 'Validates tool fatigue and disarms the pressure of overwhelming onboarding experiences.',
        painPointDesire: 'Replaces morning cognitive overload and setup fatigue with immediate mental clarity and focus.',
        objectionHandling: 'Removes the massive mental hurdle of migrating existing task lists by advising the reader to ignore backlogs and start with one item.',
        offerUrgency: 'Free account activation framed as an immediate reduction in friction rather than a software pitch.',
        cta: 'A low-friction, micro-commitment that takes under one minute to finish.'
      }
    },
    {
      id: 'sample-cart',
      categoryKey: 'abandoned-cart',
      title: 'Empathetic Objection-Handler Recovery',
      type: 'Abandoned Cart Email',
      projectLabel: 'Spec Project',
      awarenessLevel: 'Most Aware',
      industry: 'Botanical Sleep and Recovery Formulas',
      context: 'Sent four hours after a shopper leaves a sleep recovery set in their cart without completing the purchase.',
      subject: 'Did your morning get busy? (Quick note on your saved order)',
      previewText: 'Quick check-in regarding the Deep Sleep Set in your bag.',
      sender: 'Sumana Pervaiz <support@restandrepair.com>',
      body: [
        "We noticed you were reviewing the Deep Sleep Recovery Set earlier today and stepped away before completing your order.",
        "Everyday life gets busy: an urgent message arrives, a meeting starts early, or your day simply moves faster than planned. We saved your items so you do not have to start from scratch.",
        "If you are still weighing the decision, here are the two questions we hear most often from first-time customers:",
        "First: Will this make you feel groggy or foggy tomorrow morning? No. Most conventional sleep aids use heavy doses of synthetic melatonin that knock out your central nervous system, leaving you feeling sluggish at breakfast. Our botanical blend uses magnesium glycinate and organic tart cherry to support your natural melatonin production, so you wake up feeling clear-headed and alert.",
        "Second: What happens if it does not work for your sleep routine? Every bottle is backed by our thirty-night empty-bottle guarantee. Take it consistently for three weeks. If you do not experience deeper, uninterrupted rest, reply to this email and our team will issue a complete refund. You do not even have to send the bottle back.",
        "Your saved bag is reserved for the next twenty-four hours below:"
      ],
      ctaLabel: 'Return to Your Saved Order',
      breakdown: {
        subjectLine: 'Conversational and disarming, deliberately avoiding the aggressive, guilt-tripping tone of standard e-commerce cart emails.',
        hook: 'Validates everyday distractions and positions the brand as empathetic rather than desperate.',
        painPointDesire: 'Speaks directly to the deep desire for restorative rest without the lingering fear of morning mental fog.',
        objectionHandling: 'Directly dismantles the two biggest barriers: next-day grogginess and financial buyer remorse.',
        offerUrgency: 'A respectful 24-hour cart reservation protected by an unconditional 30-night empty-bottle guarantee.',
        cta: 'A frictionless, single-click return to the saved checkout screen.'
      }
    },
    {
      id: 'sample-sales',
      categoryKey: 'sales-email',
      title: 'Operational Scope and Margin Alignment',
      type: 'Sales Email',
      projectLabel: 'Spec Project',
      awarenessLevel: 'Problem Aware',
      industry: 'B2B Advisory and Leadership Consulting',
      context: 'Sent to agency owners and consulting founders addressing scope creep, unbilled revisions, and proposal fatigue.',
      subject: 'The proposal mistake that costs agency founders 20 hours a month',
      previewText: 'Why custom proposals take four days and quietly bleed twenty percent of your margin.',
      sender: 'Sumana Pervaiz <advisory@sumanapervaiz.com>',
      body: [
        "When an agency founder tells me their team is working eighty-hour weeks, the problem is rarely their talent or client delivery. It is almost always their proposal process.",
        "You spend four full days drafting a twenty-page custom proposal for a prospective client. You agonizingly calculate every variable, only for the prospect to scroll straight to the final pricing page in ten seconds.",
        "Worse, because the scope was custom-built on the fly, you end up spending the next six months managing vague deliverables and unbilled revision requests that quietly eat away twenty percent of your gross margin.",
        "Next month, I am hosting five private forty-five-minute Operational Scope Audits for agency principals.",
        "Together, we will review your last three statements of work, identify the exact phrasing where scope creep enters your engagements, and build a standardized three-tier scope model you can customize and send in under thirty minutes.",
        "Will standardizing your packages make your firm look like a commodity? No. It defines firm, protected boundaries around your baseline delivery so that when a client requests bespoke strategic advisory, you can price it at a high premium without apologizing.",
        "If you run an active service firm with two or more full-time team members and want to protect your margins, you can review the session criteria below:"
      ],
      ctaLabel: 'Review Operational Audit Criteria',
      breakdown: {
        subjectLine: 'Names a specific, costly operational drain that every agency founder instantly recognizes.',
        hook: 'Reframes the root cause of burnout from client delivery to proposal mechanics.',
        painPointDesire: 'Replaces exhausting 80-hour workweeks with protected, predictable 60%+ gross margins.',
        objectionHandling: 'Dismantles the common fear that standardized packages compromise high-touch consulting authority.',
        offerUrgency: 'Only five private diagnostic audit sessions allocated for the upcoming calendar month.',
        cta: 'A low-pressure review of audit criteria and application requirements.'
      }
    }
  ];

  // 5. Multi-Stage Connected Email Sequence Sample (5 Strategic Progression Emails)
  const sequenceData: SequenceEmail[] = [
    {
      step: 'Email 01',
      day: 'Day 1',
      role: 'Problem Relief & Initial Onboarding',
      awarenessLevel: 'Problem Aware',
      subject: 'You are in. Here is the single task to finish today.',
      previewText: 'A quick orientation to get your workspace running in two minutes.',
      strategicGoal: 'Disarms activation anxiety and prevents new subscriber drop-off by focusing on one immediate, low-friction win.',
      body: [
        "Welcome to FocusCraft.",
        "You did not create an account so you could spend your entire morning organizing settings, configuring tags, and watching tutorials.",
        "You signed up because you have real client projects to deliver, and your current task list feels scattered across browser tabs, notebook margins, and half-read Slack reminders.",
        "So instead of asking you to build ten project boards and invite your entire team today, here is our simple two-minute orientation rule:",
        "Pick the single most important task you need to complete today. Type it into your priority slot. When you finish it this afternoon, check it off.",
        "That is all you need to do today. Tomorrow morning, your board will be clear and ready for the next priority.",
        "Click below to set your first task and experience the difference:"
      ],
      ctaLabel: 'Add Your First Priority',
      keyElements: {
        hook: 'Releases the overwhelming cognitive burden of traditional software setup immediately.',
        objectionDismantled: 'Addresses setup fatigue before the new user closes the tab in frustration.',
        intendedAction: 'Log in and complete one micro-action to establish immediate momentum.'
      }
    },
    {
      step: 'Email 02',
      day: 'Day 3',
      role: 'Deepen the Problem & Uncover Hidden Drag',
      awarenessLevel: 'Solution Aware',
      subject: 'How to replace your 60-minute Monday status meeting',
      previewText: 'The simple asynchronous recap view that gives your team their morning back.',
      strategicGoal: 'Transitions from individual utility to team-wide value, illustrating how the tool solves communication drag without meetings.',
      body: [
        "Most Monday morning status meetings exist for one simple reason: nobody remembers what actually got finished on Friday afternoon.",
        "Everyone dials in, opens their laptops, and spends sixty minutes reading through bullet points they could have digested in three minutes of quiet reading.",
        "It costs your team hours of peak morning focus, and by the time everyone leaves the call, half the day is already gone.",
        "Here is what our most productive teams do instead:",
        "They turn on the automated Friday Summary view. At four o'clock on Friday, the workspace automatically compiles finished deliverables and flags next-week priorities into a concise one-page digest.",
        "No slideshows to assemble. No hour-long check-ins. Just a clear recap waiting with Monday morning coffee.",
        "You can activate your team summary view in thirty seconds below:"
      ],
      ctaLabel: 'Enable Team Summary View',
      keyElements: {
        hook: 'Targets the universal frustration of pointless recurring status meetings.',
        objectionDismantled: 'Shows how the tool reduces administrative time instead of adding more software overhead.',
        intendedAction: 'Activate an asynchronous feature that involves team collaborators.'
      }
    },
    {
      step: 'Email 03',
      day: 'Day 5',
      role: 'Introduce the Solution & Methodology',
      awarenessLevel: 'Solution Aware',
      subject: 'The difference between tracking work and actually finishing it',
      previewText: 'Why complex project boards create a false sense of accomplishment.',
      strategicGoal: 'Bridges from surface feature usage into the core philosophy of the product, separating busywork from true execution.',
      body: [
        "There is a dangerous trap in modern project management: confusing the organization of work with the execution of work.",
        "It feels productive to create thirty new color-coded subtasks, assign custom status labels, and rearrange kanban columns. But at five o'clock, when you look at what actually shipped to a client, nothing moved forward.",
        "Complex software turns into an endless parking lot for unfinished ideas.",
        "FocusCraft is built around Daily Execution Mode: an intentional constraint that limits active work-in-progress to three key deliverables at any time.",
        "When an urgent request comes in, the system forces a deliberate trade-off: what gets paused so this new item can be done properly?",
        "It eliminates multitasking and ensures that when your team logs off, real deliverables are in client hands.",
        "See how Daily Execution Mode handles mid-day priority shifts below:"
      ],
      ctaLabel: 'Explore Daily Execution Mode',
      keyElements: {
        hook: 'Challenges the industry illusion that task tracking equals task completion.',
        objectionDismantled: 'Addresses the fear of falling behind by showing how execution limits prevent burnout.',
        intendedAction: 'Review the methodology and apply execution constraints to an active project.'
      }
    },
    {
      step: 'Email 04',
      day: 'Day 7',
      role: 'Address the #1 Objection (Team Adoption)',
      awarenessLevel: 'Product Aware',
      subject: '“Will my team actually use this?” (Honest answer)',
      previewText: 'How to avoid software graveyard syndrome when rolling out new tools.',
      strategicGoal: 'Directly confronts the silent fear that team members will abandon the tool after the trial period.',
      body: [
        "Whenever a team lead or business owner considers adopting a new platform, one thought quietly holds them back:",
        "“What if I pay for this, introduce it to my team, and two weeks later everyone goes back to sticky notes, spreadsheets, and private Slack messages?”",
        "It is a completely reasonable hesitation. Most enterprise software requires team members to learn an entire vocabulary of tags, statuses, and custom fields just to update a deadline.",
        "We designed FocusCraft with zero learning curve for team collaborators. When a designer, writer, or developer opens a task card, they see only two buttons: In Progress and Done.",
        "They do not need to attend an onboarding session. They do not need to read documentation. They simply see what needs attention and check it off.",
        "Send your teammate a test invite today and watch how quickly they complete their first task:"
      ],
      ctaLabel: 'Invite One Teammate to Test',
      keyElements: {
        hook: 'Speaks the exact unspoken doubt that stops business leaders from upgrading software.',
        objectionDismantled: 'Dismantles team adoption resistance by proving collaborators have zero learning curve.',
        intendedAction: 'Send a single low-risk team invitation to test response.'
      }
    },
    {
      step: 'Email 05',
      day: 'Day 9',
      role: 'Honest Urgency & Transparent Decision Close',
      awarenessLevel: 'Most Aware',
      subject: 'Your trial ends in 48 hours (3 options moving forward)',
      previewText: 'No surprise charges. Here is what happens to your workspace on Friday.',
      strategicGoal: 'Creates natural decision urgency without manufactured pressure, offering clear and transparent options.',
      body: [
        "Your seven-day FocusCraft trial wraps up in forty-eight hours.",
        "We do not believe in sneaky auto-renewals, quiet credit card charges, or high-pressure countdown clocks. Here are the three straightforward ways you can proceed on Friday morning:",
        "Option 1: Upgrade to the Team Plan. Keep your automated Friday recaps, team collaboration boards, and priority archives active for your entire company.",
        "Option 2: Switch to the Free Solo Plan. If you only need individual daily priority tracking for yourself, your account remains completely free forever.",
        "Option 3: Export your workspace in one click. If you decide this is not the right fit, you can download all your completed tasks and project histories cleanly with zero lock-in.",
        "If you are ready to give your team a calm, focused workflow heading into next month, choose your path below:"
      ],
      ctaLabel: 'Select Your Plan Moving Forward',
      keyElements: {
        hook: 'Provides reassurance by promising zero hidden fees or credit card traps.',
        objectionDismantled: 'Removes trapped-feeling anxiety by offering a free solo tier and clean export options.',
        intendedAction: 'Select an upgrade tier with full confidence in pricing and terms.'
      }
    }
  ];

  // Supporting Portfolio Materials
  const beforeAfterList: BeforeAfterItem[] = [
    {
      id: 'ba-1',
      title: 'B2B Software Launch Broadcast',
      projectLabel: 'Spec Project',
      context: 'Transforming a self-centered feature announcement into a reader-focused problem solver.',
      before: {
        subject: 'Exciting News! Version 4.0 is finally live today!',
        body: 'We are thrilled to announce that our development team has spent the last six months rewriting our backend architecture! Version 4.0 contains over 50 brand-new features, an updated interface, and enhanced database indexing. Check out our changelog to read about all the amazing updates we built for our community!',
        critique: [
          'Celebrates company effort rather than customer benefit',
          'Vague jargon with zero concrete value for the reader',
          'Call to action asks reader to read a technical changelog'
        ]
      },
      after: {
        subject: 'The 3-second fix for slow Monday dashboard loading',
        body: 'If you have more than 50 active clients in your portal, opening your project dashboard on Monday mornings used to take twelve seconds of watching a loading spinner.\n\nToday, we deployed an update that loads your entire client summary in under 400 milliseconds.\n\nNo settings to change. No new buttons to learn. Log in today and your metrics will be ready before you take a sip of coffee.',
        improvements: [
          'Opens with a specific, relatable friction point',
          'Highlights the tangible transformation rather than backend code',
          'Frictionless invitation that feels immediately useful'
        ]
      }
    },
    {
      id: 'ba-2',
      title: 'Consulting Discovery Invitation',
      projectLabel: 'Spec Project',
      context: 'Replacing generic corporate marketing speak with direct peer-to-peer positioning.',
      before: {
        subject: 'Scale your business to the next level with our synergy solutions',
        body: 'Are you ready to unlock 10x ROI and optimize your workflow? In today’s fast-paced digital landscape, businesses must leverage cutting-edge paradigms to stay ahead of the competition. Book a 30-minute discovery call today to learn how our comprehensive consulting packages can transform your enterprise!',
        critique: [
          'Overloaded with hollow buzzwords and inflated promises',
          'Fails to identify who the reader is or what they struggle with',
          'High-commitment CTA with zero evidence of capability'
        ]
      },
      after: {
        subject: 'Why your best consultants are spending 15 hours a week in spreadsheets',
        body: 'When your firm hits ten people, you stop having delivery problems and start having coordination problems.\n\nYour senior strategists spend their mornings manually updating utilization tables instead of guiding clients. Next week, I am reviewing three client staffing models to show how to reclaim those fifteen hours.\n\nIf you want to see the template we use, reply with “Sheet” and I will send the walkthrough video.',
        improvements: [
          'Speaks the exact language of an agency or consultancy founder',
          'Points directly to unbilled operational drag',
          'Low-friction, conversational response call-to-action'
        ]
      }
    }
  ];

  const breakdownList: BreakdownItem[] = [
    {
      id: 'breakdown-1',
      title: 'Anatomy of an Unsubscribe-Proof Re-engagement Email',
      type: 'List Cleanse & Revival',
      projectLabel: 'Spec Project',
      context: 'Sent to subscribers who have not opened an email in 90 days. Goal: Filter for genuine interest without sounding needy.',
      sections: [
        {
          label: 'The Honest Subject Line',
          copy: 'Permission to clean up your inbox? (No hard feelings)',
          analysis: 'Dismantles defensiveness by offering a gracious exit while triggering curiosity about what follows.'
        },
        {
          label: 'The Guilt-Free Hook',
          copy: 'Inboxes get busy. Priorities shift. If this newsletter is no longer helpful to what you are building, the last thing I want to do is clutter your mornings.',
          analysis: 'Validates the reader’s reality. Removes guilt and positions the writer as respectful of personal boundaries.'
        },
        {
          label: 'The Value Re-Anchor',
          copy: 'Over the next month, we are focusing exclusively on three practical teardowns: pricing negotiation scripts, retainer contracts, and scope protection.',
          analysis: 'Reminds the subscriber of the high-substance value they originally subscribed to receive.'
        },
        {
          label: 'The Clean Two-Option CTA',
          copy: 'If you want to stay: Click here to keep your subscription active.\nIf you want to leave: You do not need to do anything. We will quietly remove you on Friday.',
          analysis: 'Puts total control in the reader’s hands. Eliminates dead weight on the list while retaining high-intent readers.'
        }
      ]
    }
  ];

  const caseStudiesList: CaseStudyItem[] = [
    {
      id: 'cs-1',
      title: 'Botanical Sleep and Metabolic Recovery Formulation',
      projectLabel: 'Spec Project',
      industry: 'Wellness / Organic Sleep Formulas',
      objective: 'Convert skeptical first-time visitors into confident trial buyers without sounding like infomercial wellness hype.',
      copyApproach: 'Positioned sleep recovery as an emotional and metabolic foundation rather than a magic cure. Used transparent ingredient chemistry and an unconditional guarantee to dismantle hesitation.',
      keyDecisions: [
        'Removed all artificial countdown clocks and replaced them with genuine batch limitations',
        'Addressed the number-one fear (next-day drowsiness) in the third sentence',
        'Highlighted the 30-night empty-bottle refund policy directly beside the buy button'
      ],
      sampleExcerpt: {
        subject: 'Why synthetic melatonin leaves you feeling like you slept underwater',
        snippet: 'Most sleep aids don’t actually help you rest. They sedate your nervous system, which is why your alarm clock feels like a physical punch in the forehead...'
      },
      outcomeLearning: 'Demonstrates how clinical transparency and plainspoken empathy can outperform loud marketing claims in crowded consumer markets.'
    },
    {
      id: 'cs-2',
      title: 'Executive Leadership Advisory Firm',
      projectLabel: 'Spec Project',
      industry: 'B2B Professional Services / Management Consulting',
      objective: 'Engage founders and managing partners for private operational audits without aggressive cold pitches.',
      copyApproach: 'Built each email around a distinct operational blind spot (e.g. unbilled scope creep, proposal fatigue, second-order delegation bottlenecks) to establish authority before introducing the offer.',
      keyDecisions: [
        'Used peer-level advisory tone rather than enthusiastic sales jargon',
        'Demonstrated understanding of operational bottlenecks through specific numerical examples',
        'Kept next actions conversational: low-pressure diagnostic reviews instead of high-friction pitches'
      ],
      sampleExcerpt: {
        subject: 'Why capable leaders still struggle with second-order delegation',
        snippet: 'It is easy to delegate tasks you know how to do. The hardest part of leadership is delegating decisions where the outcome is ambiguous and the risk falls on your shoulders...'
      },
      outcomeLearning: 'Proves that for premium consulting offers, demonstrating deep domain understanding and respecting the reader’s intellect generates far more qualified inquiries than standard urgency triggers.'
    }
  ];

  // Active standalone sample object
  const currentStandaloneSample = standaloneSamples.find(s => s.categoryKey === activeTab) || standaloneSamples[0];
  const activeSequenceEmail = sequenceData[selectedSequenceStep];

  // Navigation order for smoothly browsing through the 5 core email projects
  const projectNavigationOrder: {
    key: PortfolioCategory;
    title: string;
    type: string;
  }[] = [
    { key: 'promotional-sales', title: 'Studio Walnut Batch Drop', type: '1. Promotional Sales Email' },
    { key: 'welcome-email', title: 'Day-1 Orientation', type: '2. Welcome Email' },
    { key: 'abandoned-cart', title: 'Deep Sleep Recovery', type: '3. Abandoned Cart Email' },
    { key: 'sales-email', title: 'Operational Scope Audit', type: '4. Sales Email' },
    { key: 'email-sequence', title: 'SaaS Trial Sequence (5 Emails)', type: '5. Email Sequence (5-Part Flow)' },
  ];

  // Grid navigation overview thumbnails for instant preview & jump
  const overviewThumbnails = [
    {
      key: 'promotional-sales' as PortfolioCategory,
      badge: 'Promotional',
      stepNumber: '01',
      title: 'Promotional Sales Email',
      subtitle: 'Studio Shelf Batch Drop',
      subjectSnippet: 'Why we refused to use plastic veneers...',
      typeTag: 'Broadcast',
    },
    {
      key: 'welcome-email' as PortfolioCategory,
      badge: 'Welcome',
      stepNumber: '02',
      title: 'Welcome Email',
      subtitle: 'Day-1 Orientation',
      subjectSnippet: 'The first thing to delete from your routine...',
      typeTag: 'Onboarding',
    },
    {
      key: 'abandoned-cart' as PortfolioCategory,
      badge: 'Abandoned Cart',
      stepNumber: '03',
      title: 'Abandoned Cart Email',
      subtitle: 'Deep Sleep Recovery',
      subjectSnippet: 'Did your morning get busy? (Quick note)...',
      typeTag: 'Recovery',
    },
    {
      key: 'sales-email' as PortfolioCategory,
      badge: 'Sales Email',
      stepNumber: '04',
      title: 'Sales Email',
      subtitle: 'Operational Scope Audit',
      subjectSnippet: 'The proposal mistake costing 20 hours...',
      typeTag: 'Consulting',
    },
    {
      key: 'email-sequence' as PortfolioCategory,
      badge: 'Sequence',
      stepNumber: '05',
      title: 'Email Sequence',
      subtitle: 'SaaS Trial Flow (5 Emails)',
      subjectSnippet: 'Connected multi-stage automated journey...',
      typeTag: '5-Part Flow',
    },
  ];

  const currentNavIndex = projectNavigationOrder.findIndex(p => p.key === activeTab);
  const prevProject = currentNavIndex > 0 ? projectNavigationOrder[currentNavIndex - 1] : null;
  const nextProject = currentNavIndex >= 0 && currentNavIndex < projectNavigationOrder.length - 1 
    ? projectNavigationOrder[currentNavIndex + 1] 
    : null;

  const navigateToProject = (targetKey: PortfolioCategory) => {
    setActiveTab(targetKey);
    setViewMode('inbox');
    setSequenceViewMode('inbox');
    const stageElem = document.getElementById('work-stage');
    if (stageElem) {
      stageElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#E5E1D8]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#681426] mb-3">
            05. Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-5">
            Portfolio
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Real, fully readable email copywriting mockups, multi-step sequence flows, structural breakdowns, before-and-after improvements, and conceptual case studies by Sumana Pervaiz.
          </p>
        </div>

        {/* Grid-Based Navigation Overview: Clickable Thumbnails for Each Project Category */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-[#E5E1D8] gap-1">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-600 font-mono">
              Project Navigator: Click Any Category to Load Live Sample
            </p>
            <span className="text-[11px] text-neutral-500">
              Interactive Email Mockups & Matching PDF Manuscripts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {overviewThumbnails.map((item) => {
              const isSelected = activeTab === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => navigateToProject(item.key)}
                  className={`p-4 text-left transition-all relative flex flex-col justify-between cursor-pointer group border ${
                    isSelected
                      ? 'bg-white border-2 border-[#681426] shadow-sm'
                      : 'bg-white border-[#E5E1D8] hover:border-neutral-400 hover:shadow-2xs'
                  }`}
                >
                  {/* Top miniature status */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border ${
                        isSelected 
                          ? 'bg-[#681426] text-white border-[#681426]' 
                          : 'bg-[#F8F6F2] text-neutral-700 border-[#E5E1D8] group-hover:text-[#681426]'
                      }`}>
                        {item.badge}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {item.stepNumber}
                      </span>
                    </div>

                    {/* Thumbnail visual simulation */}
                    <div className="my-2.5 p-2 bg-[#FBF9F5] border border-[#EBE6DC] text-[10px] text-neutral-500 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#681426] shrink-0" />
                        <span className="font-semibold text-neutral-800 line-clamp-1">
                          {item.subtitle}
                        </span>
                      </div>
                      <p className="italic text-neutral-600 line-clamp-1 text-[9.5px]">
                        "{item.subjectSnippet}"
                      </p>
                    </div>

                    <h4 className={`text-xs font-bold leading-snug mt-1 transition-colors ${
                      isSelected ? 'text-[#681426]' : 'text-[#111111] group-hover:text-[#681426]'
                    }`}>
                      {item.title}
                    </h4>
                  </div>

                  {/* Bottom tag and jump indicator */}
                  <div className="mt-3 pt-2.5 border-t border-[#F1ECE4] flex items-center justify-between text-[11px]">
                    <span className="font-mono text-neutral-500 text-[10px]">{item.typeTag}</span>
                    <span className={`text-[10px] font-semibold flex items-center gap-1 ${
                      isSelected ? 'text-[#681426]' : 'text-neutral-500 group-hover:text-[#681426]'
                    }`}>
                      <span>{isSelected ? 'Viewing' : 'Open'}</span>
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Secondary Teardown Links */}
          <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-neutral-500 text-[11px]">
              Or explore in-depth copywriting teardowns:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('before-after');
                  document.getElementById('work-stage')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                  activeTab === 'before-after'
                    ? 'bg-[#681426] text-white border-[#681426]'
                    : 'bg-white text-neutral-700 hover:text-black border-[#E5E1D8]'
                }`}
              >
                Before & After Teardowns
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('breakdowns');
                  document.getElementById('work-stage')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                  activeTab === 'breakdowns'
                    ? 'bg-[#681426] text-white border-[#681426]'
                    : 'bg-white text-neutral-700 hover:text-black border-[#E5E1D8]'
                }`}
              >
                Email Breakdowns
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('case-studies');
                  document.getElementById('work-stage')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                  activeTab === 'case-studies'
                    ? 'bg-[#681426] text-white border-[#681426]'
                    : 'bg-white text-neutral-700 hover:text-black border-[#E5E1D8]'
                }`}
              >
                Mini Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TABS 1 TO 4: LIVE STANDALONE EMAIL SAMPLES WITH MATCHING PDF PREVIEW */}
        {/* ========================================================================= */}
        {(activeTab === 'promotional-sales' ||
          activeTab === 'welcome-email' ||
          activeTab === 'abandoned-cart' ||
          activeTab === 'sales-email') && (
          <div className="space-y-8">
            
            {/* Main Stage: Large, Readable Email Mockup and Clean PDF Sheet Preview */}
            <div id="work-stage" className="bg-white border border-[#E5E1D8] shadow-sm overflow-hidden scroll-mt-24">
              
              {/* Stage Top Bar */}
              <div className="bg-[#F8F6F2] px-6 py-4 border-b border-[#E5E1D8] flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#681426] uppercase tracking-wider">
                      {currentStandaloneSample.type}
                    </span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-xs font-mono font-semibold text-neutral-700 px-2 py-0.5 bg-white border border-[#E5E1D8]">
                      {currentStandaloneSample.projectLabel}
                    </span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-xs text-neutral-600">
                      {currentStandaloneSample.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#111111]">
                    {currentStandaloneSample.title}
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-xl">
                    {currentStandaloneSample.context}
                  </p>
                </div>

                {/* View Mode Switcher: Live Email Mockup vs View PDF & Full Modal */}
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-[#E5E1D8] p-1 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setViewMode('inbox')}
                      className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        viewMode === 'inbox'
                          ? 'bg-[#681426] text-white shadow-2xs'
                          : 'text-neutral-700 hover:text-black'
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Live Email Mockup</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setViewMode('pdf')}
                      className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        viewMode === 'pdf'
                          ? 'bg-[#681426] text-white shadow-2xs'
                          : 'text-neutral-700 hover:text-black'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View PDF</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPdfModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-900 hover:text-white bg-white hover:bg-[#681426] border border-neutral-300 hover:border-[#681426] transition-all cursor-pointer shadow-2xs"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Open Full PDF</span>
                  </button>
                </div>
              </div>

              {/* View Content: Inbox Mockup vs PDF Manuscript Sheet */}
              {viewMode === 'inbox' ? (
                /* 1. Live Email Mockup - Professionally Designed */
                <div className="p-6 md:p-12 max-w-3xl mx-auto">
                  
                  {/* Clean Email Client Header */}
                  <div className="pb-6 mb-8 border-b border-[#E5E1D8] space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-500 gap-1">
                      <div>
                        <span className="font-semibold text-neutral-900">From: </span>
                        <span>{currentStandaloneSample.sender}</span>
                      </div>
                      <span className="text-xs font-mono text-neutral-600 bg-[#F8F6F2] px-2 py-0.5 border border-[#E5E1D8]">
                        Awareness: {currentStandaloneSample.awarenessLevel}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-neutral-900">Subject: </span>
                      <span className="text-base sm:text-lg font-bold text-[#111111]">{currentStandaloneSample.subject}</span>
                    </div>

                    <div className="text-xs text-neutral-600">
                      <span className="font-semibold text-neutral-900">Preheader: </span>
                      <span>{currentStandaloneSample.previewText}</span>
                    </div>
                  </div>

                  {/* Clean White Email Body Copy with High Readability */}
                  <div className="space-y-5 text-base sm:text-lg text-neutral-900 leading-relaxed font-sans">
                    {currentStandaloneSample.body.map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>

                  {/* Professional Maroon CTA Button */}
                  <div className="pt-8 pb-6">
                    <div className="inline-block px-7 py-3.5 bg-[#681426] text-white text-sm sm:text-base font-semibold shadow-xs">
                      {currentStandaloneSample.ctaLabel}
                    </div>
                  </div>

                  {/* Strategic Breakdown Toggle Panel */}
                  <div className="mt-10 pt-6 border-t border-[#E5E1D8]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#681426]" />
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
                          Copywriting Structure & Strategy Breakdown
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowBreakdown(!showBreakdown)}
                        className="text-xs text-[#681426] font-semibold hover:underline cursor-pointer"
                      >
                        {showBreakdown ? 'Hide Breakdown' : 'Show Breakdown'}
                      </button>
                    </div>

                    {showBreakdown && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F8F6F2] p-5 border border-[#E5E1D8] text-xs">
                        <div className="p-3 bg-white border border-[#E5E1D8]">
                          <span className="font-bold text-[#681426] block uppercase tracking-wider mb-1 font-mono">
                            Subject Line Strategy:
                          </span>
                          <span className="text-neutral-700 leading-relaxed">
                            {currentStandaloneSample.breakdown.subjectLine}
                          </span>
                        </div>

                        <div className="p-3 bg-white border border-[#E5E1D8]">
                          <span className="font-bold text-[#681426] block uppercase tracking-wider mb-1 font-mono">
                            The Opening Hook:
                          </span>
                          <span className="text-neutral-700 leading-relaxed">
                            {currentStandaloneSample.breakdown.hook}
                          </span>
                        </div>

                        <div className="p-3 bg-white border border-[#E5E1D8]">
                          <span className="font-bold text-[#681426] block uppercase tracking-wider mb-1 font-mono">
                            Pain Point & Core Desire:
                          </span>
                          <span className="text-neutral-700 leading-relaxed">
                            {currentStandaloneSample.breakdown.painPointDesire}
                          </span>
                        </div>

                        <div className="p-3 bg-white border border-[#E5E1D8]">
                          <span className="font-bold text-[#681426] block uppercase tracking-wider mb-1 font-mono">
                            Objection Handling:
                          </span>
                          <span className="text-neutral-700 leading-relaxed">
                            {currentStandaloneSample.breakdown.objectionHandling}
                          </span>
                        </div>

                        <div className="p-3 bg-white border border-[#E5E1D8]">
                          <span className="font-bold text-[#681426] block uppercase tracking-wider mb-1 font-mono">
                            Offer & Urgency Logic:
                          </span>
                          <span className="text-neutral-700 leading-relaxed">
                            {currentStandaloneSample.breakdown.offerUrgency}
                          </span>
                        </div>

                        <div className="p-3 bg-white border border-[#E5E1D8]">
                          <span className="font-bold text-[#681426] block uppercase tracking-wider mb-1 font-mono">
                            Call to Action:
                          </span>
                          <span className="text-neutral-700 leading-relaxed">
                            {currentStandaloneSample.breakdown.cta}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              ) : (
                /* 2. PDF Version Preview - Clean White Page with Clear Black Text */
                <div className="p-6 md:p-12 bg-[#EDE8E0] flex flex-col items-center">
                  
                  <div className="w-full max-w-2xl mb-4 flex items-center justify-between text-xs text-neutral-600">
                    <span className="font-mono">PDF PREVIEW: CLEAN WHITE MANUSCRIPT</span>
                    <button
                      type="button"
                      onClick={() => setPdfModalOpen(true)}
                      className="inline-flex items-center gap-1 font-semibold text-[#681426] hover:underline cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Open Full Screen PDF</span>
                    </button>
                  </div>

                  <div className="w-full max-w-2xl bg-white p-8 md:p-14 shadow-md border border-[#D5D0C5] text-[#111111]">
                    
                    <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-200">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                          PORTFOLIO SPECIFICATION ARCHIVE
                        </p>
                        <h4 className="text-xl font-bold text-neutral-900 mt-1">
                          {currentStandaloneSample.title}
                        </h4>
                      </div>
                      <div className="text-right text-xs font-mono text-neutral-500">
                        <span>PAGE 1 OF 1</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pb-6 mb-8 border-b border-neutral-100 text-xs font-mono text-neutral-700 bg-neutral-50 p-4 border border-neutral-200">
                      <div>
                        <span className="text-neutral-400 block">DELIVERABLE:</span>
                        <span className="font-bold text-neutral-900">{currentStandaloneSample.type}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block">PROJECT TYPE:</span>
                        <span className="font-bold text-[#681426]">{currentStandaloneSample.projectLabel}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-neutral-400 block">SUBJECT LINE:</span>
                        <span className="font-bold text-neutral-900 font-sans text-sm">{currentStandaloneSample.subject}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-neutral-400 block">PREHEADER:</span>
                        <span className="text-neutral-700">{currentStandaloneSample.previewText}</span>
                      </div>
                    </div>

                    <div className="space-y-4 text-base text-neutral-900 leading-relaxed font-sans">
                      {currentStandaloneSample.body.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-600 font-mono gap-2">
                      <span className="font-bold text-[#681426]">CTA BUTTON: [{currentStandaloneSample.ctaLabel}]</span>
                      <span>SUMANA PERVAIZ · EMAIL COPYWRITING</span>
                    </div>

                  </div>
                </div>
              )}

              {/* Subtle Previous / Next Project Navigation Bar */}
              <div className="bg-[#FAF9F7] px-6 py-4 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                {prevProject ? (
                  <button
                    type="button"
                    onClick={() => navigateToProject(prevProject.key)}
                    className="inline-flex items-center gap-2.5 text-neutral-700 hover:text-[#681426] font-medium transition-colors cursor-pointer group text-left"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-neutral-500 group-hover:text-[#681426] shrink-0" />
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-mono tracking-wider">Previous Sample</span>
                      <span className="font-semibold text-neutral-900 group-hover:text-[#681426] block sm:inline">{prevProject.type}</span>
                    </div>
                  </button>
                ) : (
                  <div className="hidden sm:block opacity-0 select-none pointer-events-none">Placeholder</div>
                )}

                <div className="text-center font-mono text-xs text-neutral-600 py-1 px-3 bg-white border border-[#E5E1D8] self-center">
                  Project {currentNavIndex + 1} of {projectNavigationOrder.length}
                </div>

                {nextProject ? (
                  <button
                    type="button"
                    onClick={() => navigateToProject(nextProject.key)}
                    className="inline-flex items-center gap-2.5 text-neutral-700 hover:text-[#681426] font-medium transition-colors cursor-pointer group text-right justify-end"
                  >
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-mono tracking-wider">Next Sample</span>
                      <span className="font-semibold text-neutral-900 group-hover:text-[#681426] block sm:inline">{nextProject.type}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-neutral-500 group-hover:text-[#681426] shrink-0" />
                  </button>
                ) : (
                  <div className="hidden sm:block opacity-0 select-none pointer-events-none">Placeholder</div>
                )}
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CONNECTED STRATEGIC EMAIL SEQUENCE (5 CONNECTED STAGES) */}
        {/* ========================================================================= */}
        {activeTab === 'email-sequence' && (
          <div className="space-y-8">
            <div id="work-stage" className="bg-white border border-[#E5E1D8] shadow-xs p-6 md:p-10 scroll-mt-24">
              
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#681426] uppercase tracking-wider">
                    5. Strategic Email Sequence
                  </span>
                  <span className="text-neutral-400">·</span>
                  <span className="text-xs font-mono font-semibold text-neutral-700 px-2 py-0.5 bg-[#F8F6F2] border border-[#E5E1D8]">
                    Spec Project · 5 Connected Emails
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-2">
                  SaaS Trial Activation and Conversion Sequence
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  A deliberate 5-part journey built so every email has a distinct, strategic job: guiding the reader from initial problem relief to confident team plan adoption without high-pressure gimmicks.
                </p>
              </div>

              {/* Step Navigation Bar - Connected Progression (5 Steps) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
                {sequenceData.map((seq, idx) => (
                  <button
                    key={seq.step}
                    type="button"
                    onClick={() => setSelectedSequenceStep(idx)}
                    className={`p-3.5 text-left border transition-all cursor-pointer ${
                      selectedSequenceStep === idx
                        ? 'bg-[#681426] text-white border-[#681426] shadow-xs'
                        : 'bg-[#F8F6F2] text-neutral-800 border-[#E5E1D8] hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className={`text-[11px] font-mono uppercase font-bold ${selectedSequenceStep === idx ? 'text-neutral-200' : 'text-[#681426]'}`}>
                        {seq.step} ({seq.day})
                      </p>
                    </div>
                    <p className="text-xs font-bold leading-snug line-clamp-2">
                      {seq.role}
                    </p>
                  </button>
                ))}
              </div>

              {/* Sequence Top Bar: Mode Switcher */}
              <div className="bg-[#F8F6F2] px-6 py-4 border border-[#E5E1D8] border-b-0 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#681426] uppercase font-mono">
                    {activeSequenceEmail.step} · {activeSequenceEmail.day}
                  </span>
                  <p className="text-sm font-bold text-[#111111]">
                    {activeSequenceEmail.role}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white border border-[#E5E1D8] p-1 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setSequenceViewMode('inbox')}
                      className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        sequenceViewMode === 'inbox'
                          ? 'bg-[#681426] text-white shadow-2xs'
                          : 'text-neutral-700 hover:text-black'
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Live Email Mockup</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSequenceViewMode('pdf')}
                      className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        sequenceViewMode === 'pdf'
                          ? 'bg-[#681426] text-white shadow-2xs'
                          : 'text-neutral-700 hover:text-black'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View PDF</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Sequence Email Reader */}
              {sequenceViewMode === 'inbox' ? (
                <div className="bg-[#F8F6F2] border border-[#E5E1D8] p-6 md:p-10">
                  <div className="max-w-2xl mx-auto bg-white p-6 sm:p-10 border border-[#E5E1D8] shadow-xs">
                    
                    {/* Sequence Header Info */}
                    <div className="pb-5 mb-6 border-b border-[#F1ECE4] space-y-2">
                      <div className="flex flex-wrap items-center justify-between text-xs text-neutral-500 gap-2">
                        <span className="font-bold text-[#681426] uppercase font-mono">{activeSequenceEmail.step} · {activeSequenceEmail.day}</span>
                        <span className="text-xs font-mono text-neutral-600 bg-[#F8F6F2] px-2 py-0.5 border border-[#E5E1D8]">
                          Awareness: {activeSequenceEmail.awarenessLevel}
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-neutral-600">
                        Strategic Role: <span className="text-neutral-900">{activeSequenceEmail.role}</span>
                      </p>

                      <div>
                        <span className="text-xs font-semibold text-neutral-900">Subject: </span>
                        <span className="text-base font-bold text-[#111111]">{activeSequenceEmail.subject}</span>
                      </div>

                      <div className="text-xs text-neutral-600">
                        <span className="font-semibold text-neutral-900">Preheader: </span>
                        <span>{activeSequenceEmail.previewText}</span>
                      </div>
                    </div>

                    {/* Body Copy */}
                    <div className="space-y-4 text-sm sm:text-base text-neutral-900 leading-relaxed font-sans">
                      {activeSequenceEmail.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-6 pb-2">
                      <div className="inline-block px-6 py-3 bg-[#681426] text-white text-xs sm:text-sm font-semibold shadow-xs">
                        {activeSequenceEmail.ctaLabel}
                      </div>
                    </div>

                    {/* Strategic Goal Callout */}
                    <div className="mt-8 pt-5 border-t border-[#F1ECE4] space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-neutral-900">Why this email exists: </span>
                        <span className="text-neutral-700">{activeSequenceEmail.strategicGoal}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-[11px] text-neutral-600">
                        <div className="p-2.5 bg-[#F8F6F2] border border-[#E5E1D8]">
                          <span className="font-bold text-[#681426] block">Objection Dismantled:</span>
                          <span>{activeSequenceEmail.keyElements.objectionDismantled}</span>
                        </div>
                        <div className="p-2.5 bg-[#F8F6F2] border border-[#E5E1D8]">
                          <span className="font-bold text-[#681426] block">Intended Action:</span>
                          <span>{activeSequenceEmail.keyElements.intendedAction}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ) : (
                /* Sequence PDF Manuscript Sheet */
                <div className="p-6 md:p-10 bg-[#EDE8E0] border border-[#E5E1D8] flex flex-col items-center">
                  <div className="w-full max-w-2xl bg-white p-8 md:p-12 shadow-md border border-[#D5D0C5] text-[#111111]">
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                          SEQUENCE MANUSCRIPT · {activeSequenceEmail.step}
                        </p>
                        <h4 className="text-lg font-bold text-neutral-900">
                          {activeSequenceEmail.role} ({activeSequenceEmail.day})
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-neutral-500">SPEC PROJECT</span>
                    </div>

                    <div className="pb-4 mb-6 border-b border-neutral-100 text-xs font-mono bg-neutral-50 p-3 border border-neutral-200 space-y-1">
                      <div><span className="text-neutral-400">SUBJECT: </span><span className="font-bold text-neutral-900">{activeSequenceEmail.subject}</span></div>
                      <div><span className="text-neutral-400">PREHEADER: </span><span>{activeSequenceEmail.previewText}</span></div>
                      <div><span className="text-neutral-400">AWARENESS: </span><span>{activeSequenceEmail.awarenessLevel}</span></div>
                    </div>

                    <div className="space-y-3 text-sm text-neutral-900 leading-relaxed font-sans">
                      {activeSequenceEmail.body.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600 font-mono">
                      <span className="font-bold text-[#681426]">CTA: [{activeSequenceEmail.ctaLabel}]</span>
                      <span>SEQUENCE STEP {selectedSequenceStep + 1} OF 5</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step Progress Controller */}
              <div className="mt-6 flex items-center justify-between text-xs text-neutral-600">
                <span>Displaying Sequence Email {selectedSequenceStep + 1} of 5</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={selectedSequenceStep === 0}
                    onClick={() => setSelectedSequenceStep(prev => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 border border-neutral-300 bg-white hover:bg-neutral-50 disabled:opacity-40 cursor-pointer"
                  >
                    Previous Email
                  </button>
                  <button
                    type="button"
                    disabled={selectedSequenceStep === sequenceData.length - 1}
                    onClick={() => setSelectedSequenceStep(prev => Math.min(sequenceData.length - 1, prev + 1))}
                    className="px-3 py-1.5 border border-neutral-300 bg-white hover:bg-neutral-50 disabled:opacity-40 cursor-pointer"
                  >
                    Next Email
                  </button>
                </div>
              </div>

              {/* Subtle Previous / Next Project Navigation Bar */}
              <div className="mt-10 pt-6 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                {prevProject ? (
                  <button
                    type="button"
                    onClick={() => navigateToProject(prevProject.key)}
                    className="inline-flex items-center gap-2.5 text-neutral-700 hover:text-[#681426] font-medium transition-colors cursor-pointer group text-left"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-neutral-500 group-hover:text-[#681426] shrink-0" />
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-mono tracking-wider">Previous Sample</span>
                      <span className="font-semibold text-neutral-900 group-hover:text-[#681426] block sm:inline">{prevProject.type}</span>
                    </div>
                  </button>
                ) : (
                  <div className="hidden sm:block opacity-0 select-none pointer-events-none">Placeholder</div>
                )}

                <div className="text-center font-mono text-xs text-neutral-600 py-1 px-3 bg-[#F8F6F2] border border-[#E5E1D8] self-center">
                  Project {currentNavIndex + 1} of {projectNavigationOrder.length}
                </div>

                {nextProject ? (
                  <button
                    type="button"
                    onClick={() => navigateToProject(nextProject.key)}
                    className="inline-flex items-center gap-2.5 text-neutral-700 hover:text-[#681426] font-medium transition-colors cursor-pointer group text-right justify-end"
                  >
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-mono tracking-wider">Next Sample</span>
                      <span className="font-semibold text-neutral-900 group-hover:text-[#681426] block sm:inline">{nextProject.type}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-neutral-500 group-hover:text-[#681426] shrink-0" />
                  </button>
                ) : (
                  <div className="hidden sm:block opacity-0 select-none pointer-events-none">Placeholder</div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB: BEFORE AND AFTER */}
        {/* ========================================================================= */}
        {activeTab === 'before-after' && (
          <div className="space-y-12">
            {beforeAfterList.map((item) => (
              <div key={item.id} className="bg-white border border-[#E5E1D8] shadow-xs p-6 md:p-10">
                
                {/* Header */}
                <div className="max-w-2xl mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#681426] uppercase tracking-wider">
                      Comparison Teardown
                    </span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-xs font-mono font-semibold text-neutral-700 px-2 py-0.5 bg-[#F8F6F2] border border-[#E5E1D8]">
                      {item.projectLabel}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    {item.context}
                  </p>
                </div>

                {/* 2-Column Side-by-Side Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* BEFORE Pane */}
                  <div className="p-6 md:p-8 bg-[#FAF9F7] border border-neutral-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
                          Original Email (Before)
                        </span>
                        <span className="text-xs text-neutral-500">Unclear and Over-Hyped</span>
                      </div>

                      <div className="mb-4">
                        <span className="text-xs font-semibold text-neutral-700 block">Subject:</span>
                        <p className="text-sm font-semibold text-neutral-900 mt-0.5 line-through decoration-red-400">
                          {item.before.subject}
                        </p>
                      </div>

                      <div className="space-y-3 text-sm text-neutral-700 leading-relaxed font-sans">
                        <p className="whitespace-pre-line">{item.before.body}</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-neutral-200">
                      <p className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Why this copy leaks revenue:
                      </p>
                      <ul className="space-y-1.5 text-xs text-neutral-600">
                        {item.before.critique.map((crit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-red-600 font-bold shrink-0">✕</span>
                            <span>{crit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* AFTER Pane */}
                  <div className="p-6 md:p-8 bg-white border-2 border-[#681426] shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F1ECE4]">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#681426] font-mono">
                          Sumana Pervaiz Revision (After)
                        </span>
                        <span className="text-xs font-semibold text-[#681426]">Persuasive and Clear</span>
                      </div>

                      <div className="mb-4">
                        <span className="text-xs font-bold text-[#111111] block">Subject:</span>
                        <p className="text-sm font-bold text-[#111111] mt-0.5">
                          {item.after.subject}
                        </p>
                      </div>

                      <div className="space-y-3 text-sm sm:text-base text-neutral-900 leading-relaxed font-sans">
                        <p className="whitespace-pre-line">{item.after.body}</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-[#F1ECE4]">
                      <p className="text-xs font-bold text-[#681426] uppercase tracking-wider mb-2">
                        Strategic Improvements Applied:
                      </p>
                      <ul className="space-y-1.5 text-xs text-neutral-700">
                        {item.after.improvements.map((imp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#681426] shrink-0 mt-0.5" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB: EMAIL BREAKDOWNS */}
        {/* ========================================================================= */}
        {activeTab === 'breakdowns' && (
          <div className="space-y-12">
            {breakdownList.map((item) => (
              <div key={item.id} className="bg-white border border-[#E5E1D8] shadow-xs p-6 md:p-10">
                
                <div className="max-w-2xl mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#681426] uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-xs font-mono font-semibold text-neutral-700 px-2 py-0.5 bg-[#F8F6F2] border border-[#E5E1D8]">
                      {item.projectLabel}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    {item.context}
                  </p>
                </div>

                <div className="space-y-6">
                  {item.sections.map((sec, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 p-5 bg-[#F8F6F2] border border-[#E5E1D8]">
                      
                      <div className="md:col-span-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#681426] font-mono block">
                          Part 0{idx + 1}: {sec.label}
                        </span>
                        <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                          {sec.analysis}
                        </p>
                      </div>

                      <div className="md:col-span-8 bg-white p-5 border border-[#E5E1D8]">
                        <p className="text-xs uppercase font-mono text-neutral-400 mb-2">The Copy</p>
                        <p className="text-sm text-neutral-900 leading-relaxed font-sans whitespace-pre-line font-medium">
                          {sec.copy}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB: MINI CASE STUDIES */}
        {/* ========================================================================= */}
        {activeTab === 'case-studies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesList.map((cs) => (
              <div key={cs.id} className="bg-white border border-[#E5E1D8] shadow-xs p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F1ECE4]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#681426] font-mono">
                      {cs.industry}
                    </span>
                    <span className="text-xs font-mono font-semibold text-neutral-700 px-2 py-0.5 bg-[#F8F6F2] border border-[#E5E1D8]">
                      {cs.projectLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-4 leading-snug">
                    {cs.title}
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed mb-6">
                    <div>
                      <span className="font-bold text-[#111111] block mb-1">Objective:</span>
                      <p>{cs.objective}</p>
                    </div>

                    <div>
                      <span className="font-bold text-[#111111] block mb-1">Copywriting Approach:</span>
                      <p>{cs.copyApproach}</p>
                    </div>

                    <div>
                      <span className="font-bold text-[#111111] block mb-1">Strategic Decisions:</span>
                      <ul className="space-y-1 list-disc list-inside text-neutral-600 pl-1">
                        {cs.keyDecisions.map((dec, i) => (
                          <li key={i}>{dec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F8F6F2] border border-[#E5E1D8] mb-4">
                    <p className="text-xs font-bold text-[#111111] mb-1">
                      Sample Excerpt: "{cs.sampleExcerpt.subject}"
                    </p>
                    <p className="text-xs text-neutral-600 italic">
                      "{cs.sampleExcerpt.snippet}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F1ECE4] text-xs text-neutral-700 leading-relaxed">
                  <span className="font-semibold text-[#111111]">Core Takeaway: </span>
                  <span>{cs.outcomeLearning}</span>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Transition Bridge to FAQ */}
        <div className="mt-16 pt-8 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-medium text-neutral-700">
            Have questions regarding process, deliverables, or turnaround times?
          </p>
          <a
            href="#faq"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681426] hover:underline cursor-pointer"
          >
            <span>Read frequently asked questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULL-PAGE PDF MANUSCRIPT MODAL */}
      {/* ========================================================================= */}
      {pdfModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl max-h-[92vh] bg-white border border-[#D5D0C5] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between px-6 py-4 bg-[#F8F6F2] border-b border-[#E5E1D8]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#681426]" />
                <span className="text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider">
                  PDF Manuscript View: {currentStandaloneSample.type} ({currentStandaloneSample.projectLabel})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:text-black border border-neutral-300 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Document</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPdfModalOpen(false)}
                  className="p-1.5 text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-8 sm:p-14 overflow-y-auto bg-[#EDE8E0] flex justify-center">
              <div className="w-full max-w-2xl bg-white p-8 md:p-14 shadow-sm border border-[#D5D0C5] text-[#111111]">
                
                <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-200">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                      SUMANA PERVAIZ · PORTFOLIO MANUSCRIPT
                    </p>
                    <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                      {currentStandaloneSample.title}
                    </h2>
                  </div>
                  <div className="text-right text-xs font-mono text-neutral-500">
                    <span>PAGE 1 OF 1</span>
                  </div>
                </div>

                <div className="bg-neutral-50 p-4 border border-neutral-200 text-xs font-mono text-neutral-700 space-y-1 mb-8">
                  <div>
                    <span className="text-neutral-400">TYPE: </span>
                    <span className="font-bold text-neutral-900">{currentStandaloneSample.type}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400">STATUS: </span>
                    <span className="font-semibold text-[#681426]">{currentStandaloneSample.projectLabel}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400">SUBJECT: </span>
                    <span className="font-bold text-neutral-900 font-sans text-sm">{currentStandaloneSample.subject}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400">PREHEADER: </span>
                    <span>{currentStandaloneSample.previewText}</span>
                  </div>
                </div>

                <div className="space-y-4 text-base text-neutral-900 leading-relaxed font-sans">
                  {currentStandaloneSample.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-600 font-mono gap-2">
                  <span className="font-bold text-[#681426]">CTA BUTTON: [{currentStandaloneSample.ctaLabel}]</span>
                  <span>SUMANA PERVAIZ · EMAIL COPYWRITING</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
