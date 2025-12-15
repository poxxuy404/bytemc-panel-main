import { Layout } from "@/components/layout/Layout";
import { Target, Heart, Rocket, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To create the most engaging and fair Minecraft experience for players across Central Asia.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Every decision we make prioritizes our players' experience and enjoyment.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Constantly updating and adding new features to keep gameplay fresh and exciting.",
  },
  {
    icon: Shield,
    title: "Fair Play",
    description:
      "Strict anti-cheat measures and active moderation ensure a level playing field.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-20 animate-fade-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">ByteMC</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              ByteMC.uz was founded with a simple goal: to provide the best
              Minecraft server experience for players in Uzbekistan and beyond.
              Since our launch, we've grown to become one of the most popular
              servers in the region.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "2023", label: "Founded" },
              { value: "2025+", label: "Players" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass rounded-xl p-6 text-center animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow))]"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  date: "January 2023",
                  title: "Server Launch",
                  description: "ByteMC.uz officially launched with Survival mode.",
                },
                {
                  date: "March 2023",
                  title: "BoxPVP Added",
                  description: "Introduced our popular BoxPVP game mode.",
                },
                {
                  date: "June 2023",
                  title: "1000 Players",
                  description: "Reached our first milestone of 1000 registered players.",
                },
                {
                  date: "2024",
                  title: "2025+ Players",
                  description: "Became the leading Minecraft server in Uzbekistan.",
                },
              ].map((event, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    {i < 3 && <div className="w-0.5 h-full bg-border mt-2" />}
                  </div>
                  <div className="glass rounded-xl p-6 flex-1 -mt-1">
                    <span className="text-primary text-sm font-display font-semibold">
                      {event.date}
                    </span>
                    <h4 className="font-display text-lg font-bold mt-1 mb-2">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
