import Image from "next/image";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-[hsl(var(--st-light-gray))] py-16 pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="st-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          AIBotcaller Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Universal Calendar Syncing"
            description="Our AI directly books and syncs appointments across all major calendar platforms, including Google, Outlook, and Apple Calendar, for a unified scheduling experience."
            icon="/1.png"
          />
          <FeatureCard
            title="AI Receptionist"
            description="Automatically routes unanswered calls to AI instead of voicemail, seamlessly works with any iOS or Android phone, books appointments, answers business questions, transfers calls, and sends call transcripts and recordings directly to your phone."
            icon="/2.png"
          />
          <FeatureCard
            title="Seamless Handoff Capability"
            description="Effortless transition from AI to human touch with live call transfer, ensuring no conversation loses its flow. Round robin queues mean immediate redirection to available team members, maintaining engagement at scale."
            icon="/3.png"
          />
          <FeatureCard
            title="Intelligent Real-Time Interaction"
            description="AIBotcaller AI excels in intelligent engagement, dynamically assessing and participating in conversations with an understanding that mirrors human insight."
            icon="/4.png"
          />
          <FeatureCard
            title="Global Communication Reimagined"
            description="Connect globally with ease. Our AI speaks 12 languages, including English, Spanish, French, Hindi, and more, breaking down language barriers for seamless customer interactions."
            icon="/5.png"
          />
          <FeatureCard
            title="High-Volume Calling"
            description="Ability to make & receive up to 1800 calls in 60 seconds speaking to every person simultaneously."
            icon="/6.png"
          />
        </div>

        {/* Dashboard image removed */}
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Image src={icon} alt={title} width={32} height={32} className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
