import Image from "next/image";

export function AdvantagesSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="https://ext.same-assets.com/438387271/2279739063.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="st-container relative z-10">
        <div className="flex justify-center mb-10">
          <Image
            src="/logo-white.png"
            alt="AIBotcaller Logo"
            width={360}
            height={96}
            className="h-24 w-auto brightness-0 invert"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Advantages of Using Voice AI For Your Business:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AdvantageCard
            title="Easy Entry, High Returns"
            description="Minimum barrier to entry with significant profit potential"
            icon="📈"
          />
          <AdvantageCard
            title="Robust Support"
            description="Personal team dedicated to building your Voice AI Solution, comprehensive training, online course modules, updated tech stacks and ongoing support to ensure your success"
            icon="🤝"
          />
          <AdvantageCard
            title="Scalable Business Model"
            description="Room to grow, whether youre a small business with big aspirations or a global enterprise"
            icon="🚀"
          />
          <AdvantageCard
            title="Unlimited Possibilities"
            description="Every business, from startups, service industries, agencies, hospitality, and large corporations will benefit from enhanced and effective communication"
            icon="🌐"
          />
        </div>

        <div className="mt-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Experience Humanlike AI Communication Firsthand
            </h3>
            <p className="text-center text-lg mb-8">
              Allow Our AI to Call You Instantly
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-gray-800 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-gray-800"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-gray-800 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-gray-800"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="md:col-span-2 mt-2">
                  <button
                    type="submit"
                    className="w-full bg-[hsl(var(--st-orange))] hover:bg-[hsl(var(--st-orange))]/90 text-white font-medium py-3 rounded-lg transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvantageCard({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}
