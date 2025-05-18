import Image from "next/image";

export function SuccessSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="st-container">
        <div className="flex justify-center mb-12">
          <Image
            src="/logo-blue-nobox.png"
            alt="AIBotcaller Logo"
            width={300}
            height={80}
            className="h-20 w-auto"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          Your Success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SuccessCard
            title="Empowering Businesses"
            description="We are dedicated to redefining and improving customer engagement with AI powered communication"
            icon="💼"
          />
          <SuccessCard
            title="Automate For Efficiency"
            description="Experience your business full potential with the power of automated scheduling, follow ups, and AI -driven calls."
            icon="⚙️"
          />
          <SuccessCard
            title="Break language barriers"
            description="Our AI has the ability to support 12 languages. Offer a solution that transcends geographical and linguistic limitations"
            icon="🌍"
          />
          <SuccessCard
            title="Innovate Customer Service"
            description="Elevate the standard of customer interaction with AI consistency and quality."
            icon="🔄"
          />
        </div>

      </div>
    </section>
  );
}

function SuccessCard({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
