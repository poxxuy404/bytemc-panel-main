import { Layout } from "@/components/layout/Layout";
import { Crown, Shield, Sword, Star } from "lucide-react";

const staffCategories = [
  {
    title: "Owners",
    icon: Crown,
    members: [
      { name: "ByteKing", role: "Founder & CEO", online: true },
      { name: "MCMaster", role: "Co-Founder", online: true },
    ],
  },
  {
    title: "Administrators",
    icon: Shield,
    members: [
      { name: "AdminPro", role: "Head Admin", online: true },
      { name: "ServerGuard", role: "Senior Admin", online: false },
      { name: "TechWizard", role: "Technical Admin", online: true },
    ],
  },
  {
    title: "Moderators",
    icon: Sword,
    members: [
      { name: "ModMaster", role: "Head Mod", online: true },
      { name: "FairPlay", role: "Senior Mod", online: true },
      { name: "Guardian", role: "Moderator", online: false },
      { name: "Protector", role: "Moderator", online: true },
      { name: "Watchdog", role: "Moderator", online: false },
    ],
  },
  {
    title: "Helpers",
    icon: Star,
    members: [
      { name: "Helper1", role: "Helper", online: true },
      { name: "NewHelper", role: "Trial Helper", online: false },
      { name: "Support_Pro", role: "Helper", online: true },
    ],
  },
];

const Admins = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-display font-semibold text-primary mb-6">
              Meet the Team
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Staff</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The dedicated team behind ByteMC, working 24/7 to ensure the best
              gaming experience for our community.
            </p>
          </div>

          <div className="space-y-12">
            {staffCategories.map((category, catIndex) => (
              <div key={catIndex} className="animate-fade-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.members.map((member, memIndex) => (
                    <div
                      key={memIndex}
                      className="glass rounded-xl p-5 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow))] group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center relative">
                          <span className="font-display text-lg font-bold text-primary">
                            {member.name[0]}
                          </span>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card ${member.online ? "bg-green-500" : "bg-muted-foreground"}`}
                          />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Join Staff CTA */}
          <div className="mt-20 glass rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Want to Join the Team?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for dedicated players to help our community.
              Staff applications open periodically on our Discord.
            </p>
            <span className="inline-block glass-button rounded-lg px-6 py-3 font-display font-semibold cursor-pointer hover:text-primary transition-colors">
              Apply on Discord
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admins;
