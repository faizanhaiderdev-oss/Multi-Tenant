import { Head } from '@inertiajs/react';

const features = [
    ['Workspace clarity', 'Keep members, clients, and work in focused spaces without losing the big picture.', '▦'],
    ['Permission control', 'Give each person exactly the access they need with simple, flexible roles.', '◈'],
    ['Live activity', 'Know what moved forward, what needs attention, and who is making progress.', '✦'],
    ['Built to scale', 'Create a new workspace in seconds as your customers and team grow.', '◇'],
    ['Smart reporting', 'Turn workspace activity into clear signals your whole team can act on.', '↗'],
    ['One secure home', 'Keep every conversation, decision, and file connected and protected.', '⌁'],
];

const plans = [
    ['Starter', '$0', 'For small teams finding their flow.', ['Up to 3 workspaces', '5 team members', 'Core collaboration tools']],
    ['Growth', '$29', 'For teams ready to build momentum.', ['Unlimited workspaces', '25 team members', 'Advanced permissions']],
    ['Scale', 'Let’s talk', 'For organisations with bigger ambitions.', ['Unlimited members', 'Custom security controls', 'Priority support']],
];

const faqs = [
    ['What is a workspace?', 'A workspace is a dedicated home for a team, customer, or project. Each one keeps its people, activity, and permissions neatly separated.'],
    ['Can I invite clients?', 'Yes. Invite guests to the specific workspace they need while keeping internal work private.'],
    ['Can I change plans later?', 'Absolutely. Upgrade, downgrade, or cancel whenever your needs change.'],
    ['Is my data secure?', 'Your data is protected with role-based access controls and secure, isolated workspaces.'],
];

const BRAND_NAME = 'Zello';

function Arrow() {
    return <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function BrandLogo({ compact = false, className = '' }) {
    return <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 5.5h14L5 18.5h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
        {!compact && <span className="text-lg font-bold tracking-tight text-foreground">{BRAND_NAME}</span>}
    </span>;
}

function Button({ children, href = '#pricing', muted = false, className = '' }) {
    const color = muted
        ? 'border border-border bg-card text-card-foreground hover:bg-secondary'
        : 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:brightness-110';
    return <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius)] px-5 py-3 text-sm font-semibold transition ${color} ${className}`}>{children}</a>;
}

function SectionIntro({ eyebrow, title, description }) {
    return <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>}</div>;
}

function Metric({ label, value, trend }) {
    return <div className="rounded-xl border border-border bg-card p-4"><p className="text-xs text-muted-foreground">{label}</p><p className="mt-2 text-2xl font-bold">{value}</p><p className="mt-1 text-[10px] font-medium text-success">{trend}</p></div>;
}

export default function Home() {
    return <>
        <Head title="Multi-tenant workspaces" />
        <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            <header className="sticky top-0 z-30 border-b border-border/80 bg-background/85 backdrop-blur-xl">
                <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
                    <a href="#top" aria-label={`${BRAND_NAME} home`}><BrandLogo /></a>
                    <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex"><a className="hover:text-foreground" href="#features">Features</a><a className="hover:text-foreground" href="#pricing">Pricing</a><a className="hover:text-foreground" href="/login">Login</a></div>
                    <Button className="px-4 py-2.5">Get Started <Arrow /></Button>
                </nav>
            </header>

            <main id="top">
                <section className="relative isolate pt-20 sm:pt-28">
                    <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/15 via-accent/5 to-transparent dark:from-primary/10" />
                    <div className="mx-auto max-w-7xl px-5 pb-16 text-center lg:px-8">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"><span className="h-1.5 w-1.5 rounded-full bg-success" /> Built for modern multi-tenant teams</div>
                        <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl">One calm place for <span className="text-primary">every workspace.</span></h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">Give every customer, team, and project a beautiful home—without the busywork of keeping everything organised.</p>
                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button>Start for free <Arrow /></Button><Button href="#features" muted>Explore features</Button></div><p className="mt-4 text-xs text-muted-foreground">No credit card required · Set up in minutes</p>
                    </div>
                    <Dashboard />
                </section>

                <section id="features" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><SectionIntro eyebrow="Everything in its place" title="More focus. Less workspace wrangling." description={`${BRAND_NAME} handles the structure behind the scenes, so your team can spend its energy doing meaningful work.`} /><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map(([title, description, icon]) => <article key={title} className="rounded-[var(--radius)] border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-xl text-secondary-foreground">{icon}</span><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></article>)}</div></section>

                <section className="border-y border-border bg-secondary/25 py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionIntro eyebrow="A simpler way to grow" title="From first invite to full momentum." description="Your ideal workspace setup is only three small steps away." /><div className="mt-14 grid gap-8 md:grid-cols-3">{[['01', 'Create your space', 'Set up a workspace for a customer, team, or new initiative in seconds.'], ['02', 'Invite the right people', 'Bring in teammates and guests with access that fits their role.'], ['03', 'Move work forward', 'See activity, uncover momentum, and keep every workspace on track.']].map(([number, title, text], index) => <div key={title} className="relative"><span className="text-5xl font-bold tracking-tighter text-primary/20">{number}</span>{index < 2 && <span className="absolute right-0 top-7 hidden h-px w-2/3 bg-border md:block" />}<h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section>

                <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><SectionIntro eyebrow="Simple, honest pricing" title="A plan that grows with you." description="Start with the essentials, then add more power when your workspaces need it." /><div className="mt-14 grid gap-5 lg:grid-cols-3">{plans.map(([name, price, detail, items], index) => <article key={name} className={`relative rounded-[1rem] border p-7 ${index === 1 ? 'border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20' : 'border-border bg-card text-card-foreground'}`}>{index === 1 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">Most popular</span>}<h3 className="text-lg font-bold">{name}</h3><p className={`mt-2 h-10 text-sm ${index === 1 ? 'text-primary-foreground/75' : 'text-muted-foreground'}`}>{detail}</p><p className="mt-7 text-4xl font-bold tracking-tight">{price}{price.startsWith('$') && <span className="ml-1 text-sm font-medium opacity-70">/ month</span>}</p><Button muted={index === 1} className={`mt-7 w-full ${index === 1 ? 'border-primary-foreground/20 bg-primary-foreground text-primary hover:bg-primary-foreground/90' : ''}`}>Choose {name}</Button><ul className="mt-7 space-y-3">{items.map((item) => <li key={item} className={`flex gap-3 text-sm ${index === 1 ? 'text-primary-foreground/85' : 'text-muted-foreground'}`}><span className={index === 1 ? 'text-primary-foreground' : 'text-success'}>✓</span>{item}</li>)}</ul></article>)}</div></section>

                <section className="mx-auto max-w-3xl px-5 py-24"><SectionIntro eyebrow="Questions, answered" title="Frequently asked questions" /><div className="mt-12 divide-y divide-border rounded-[var(--radius)] border border-border bg-card px-6">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">{question}<span className="text-xl text-primary transition group-open:rotate-45">+</span></summary><p className="pt-3 pr-8 text-sm leading-6 text-muted-foreground">{answer}</p></details>)}</div></section>

                <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8"><div className="relative overflow-hidden rounded-[1.25rem] bg-primary px-7 py-14 text-center text-primary-foreground sm:px-14"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.24),transparent_35%)]" /><div className="relative"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Give every workspace room to thrive.</h2><p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">Start building calmer, clearer collaboration today.</p><Button className="mt-8 bg-card text-card-foreground shadow-none hover:bg-card/90">Get started for free <Arrow /></Button></div></div></section>
            </main>

            <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><a href="#top" aria-label={`${BRAND_NAME} home`}><BrandLogo /></a><div className="flex gap-5"><a href="#features" className="hover:text-foreground">Features</a><a href="#pricing" className="hover:text-foreground">Pricing</a><a href="#" className="hover:text-foreground">Privacy</a><a href="#" className="hover:text-foreground">Terms</a></div><p>© 2026 {BRAND_NAME}.</p></div></footer>
        </div>
    </>;
}

function Dashboard() {
    const bars = [40, 57, 46, 70, 54, 84, 64, 93, 74, 100, 82, 91];
    return <div className="mx-auto max-w-6xl px-5 pb-5 lg:px-8">
        <div className="rounded-[1.25rem] border border-border bg-card p-2 shadow-2xl shadow-primary/10">
            <div className="overflow-hidden rounded-[1rem] border border-border bg-background text-left">
                <div className="flex h-11 items-center gap-1.5 border-b border-border px-4"><span className="h-2.5 w-2.5 rounded-full bg-destructive/70" /><span className="h-2.5 w-2.5 rounded-full bg-warning/70" /><span className="h-2.5 w-2.5 rounded-full bg-success/70" /><div className="ml-3 h-5 w-52 rounded-md bg-muted" /></div>
                <div className="grid min-h-[25rem] grid-cols-[11.5rem_1fr] sm:min-h-[30rem]">
                    <aside className="hidden border-r border-border bg-card p-4 sm:block">
                        <div className="flex items-center gap-2 font-bold"><BrandLogo compact className="scale-75 origin-left" /><span>{BRAND_NAME}</span></div>
                        <div className="mt-8 space-y-2 text-xs font-medium text-muted-foreground"><p className="rounded-lg bg-secondary px-3 py-2.5 text-secondary-foreground">Overview</p><p className="px-3 py-2">Workspaces</p><p className="px-3 py-2">Members</p><p className="px-3 py-2">Reports</p></div>
                        <div className="mt-16 rounded-xl bg-muted p-3"><p className="text-xs font-semibold">Growth plan</p><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border"><div className="h-full w-2/3 rounded-full bg-accent" /></div><p className="mt-2 text-[10px] text-muted-foreground">18 of 25 seats used</p></div>
                    </aside>
                    <div className="p-5 sm:p-8"><div className="flex items-start justify-between"><div><p className="text-sm text-muted-foreground">Good morning, Ana</p><h2 className="mt-1 text-xl font-bold sm:text-2xl">Workspace overview</h2></div><div className="hidden rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium sm:block">October 2026</div></div><div className="mt-7 grid gap-3 sm:grid-cols-3"><Metric label="Active workspaces" value="12" trend="+2 this month" /><Metric label="Team members" value="86" trend="+12% growth" /><Metric label="Tasks completed" value="1,248" trend="+18% growth" /></div><div className="mt-5 grid gap-5 lg:grid-cols-[1.5fr_1fr]"><div className="rounded-xl border border-border bg-card p-5"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Workspace activity</p><p className="mt-1 text-xs text-muted-foreground">A healthy week across your teams</p></div><span className="text-xs font-semibold text-success">+24.8%</span></div><div className="mt-7 flex h-28 items-end gap-2">{bars.map((height, index) => <div key={index} style={{ height: `${height}%` }} className={`w-full rounded-t-md ${index > 8 ? 'bg-primary' : 'bg-secondary'}`} />)}</div></div><div className="rounded-xl border border-border bg-card p-5"><p className="text-sm font-semibold">Recent activity</p><div className="mt-4 space-y-4">{[['MS', 'bg-accent', 'Maya invited a new member'], ['JD', 'bg-success', 'Jordan created Acme workspace'], ['NL', 'bg-warning', 'Nora completed onboarding']].map(([initials, color, text]) => <div key={initials} className="flex gap-2.5"><span className={`grid h-7 w-7 place-items-center rounded-full text-[9px] font-bold text-white ${color}`}>{initials}</span><p className="text-xs font-medium">{text}</p></div>)}</div></div></div></div>
                </div>
            </div>
        </div>
    </div>;
}
