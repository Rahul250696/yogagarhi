import { Users, BookOpen, Brain, BookMarked, UsersRound, RefreshCw, Zap, Layers, UserCheck } from "lucide-react";

const features = [
  { title: "Unique Shiv-Shakti Method", desc: "Our signature approach converts yogic theory into practical wisdom.", icon: Zap },
  { title: "Traditional Multi-Style", desc: "Vinyasa, Hatha, Ashtanga, and Iyengar as complete systems.", icon: Layers },
  { title: "Pre-TTC Mentorship", desc: "Build a strong foundation before training begins.", icon: UserCheck },
  { title: "Small Learning Groups", desc: "Only 8-10 students for personalized attention.", icon: Users },
  { title: "Philosophy-Driven", desc: "Highest philosophy through rituals, meditation, and satsang.", icon: Brain },
  { title: "35+ Sequencing Book", desc: "Practical sequences for immediate teaching application.", icon: BookMarked },
  { title: "Yoga Community", desc: "Join a large yoga family that supports growth.", icon: UsersRound },
  { title: "Course Repetition", desc: "Revisit training whenever it runs, at no extra cost.", icon: RefreshCw },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Why Choose Yogagarhi
        </h2>
        {/* Decorative Chakra Icon */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
          <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="20" cy="20" r="16"/>
            <circle cx="20" cy="20" r="8"/>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <ellipse key={i} cx={20 + 12 * Math.cos(angle * Math.PI / 180)} cy={20 + 12 * Math.sin(angle * Math.PI / 180)} rx="2" ry="4" transform={`rotate(${angle} ${20 + 12 * Math.cos(angle * Math.PI / 180)} ${20 + 12 * Math.sin(angle * Math.PI / 180)})`}/>
            ))}
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group p-6 bg-card rounded-lg border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon 
                  className="w-7 h-7 text-primary animate-float group-hover:scale-110 transition-transform duration-300" 
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
