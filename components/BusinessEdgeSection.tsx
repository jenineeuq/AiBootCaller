import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function BusinessEdgeSection() {
  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--st-light-gray))]">
      <div className="st-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          The AIBotcaller Business Edge
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Maximize Your Savings, Minimize Missed Opportunities
            </h3>
            <p className="text-gray-600 mb-0">
              Every unanswered call can cost your business an average of $1,200
              in lost revenue. AIBotcaller AI-driven communication solutions
              turn this around, ensuring no call and no opportunity is missed.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Direct Cost
              <br />
              Benefits
            </h3>
            <p className="text-gray-600 mb-0">
              By leveraging AI, you can cut the typical annual expense of a
              full-time receptionist, approximately $30,000, down to a fraction
              of the cost. Our AI system offers the efficiency of an entire team
              for less than the price of a single employee.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Mitigate the Risk of
              <br />
              Missed Calls
            </h3>
            <p className="text-gray-600 mb-0">
              Industry data suggests that small businesses lose an estimated
              $90,000 annually from missed calls. AIBotcaller AI eliminates this
              risk, transforming potential losses into captured sales and
              improved customer retention.
            </p>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/dash-board.jpg"
                alt="Business Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg w-16 h-16 flex items-center justify-center">
                <Image
                  src="/logo-blue-nobox.png"
                  alt="AIBotcaller Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">
                Start Your Journey Today
              </h2>

              <p className="text-center text-gray-600 mb-8">
                Join the forefront of the Voice AI revolution. With AIBotcaller,
                you're not just improving your business or agency; you're
                shaping the future of customer relations. Take the first step
                towards building a better, more profitable business or
                forward-thinking agency that drives growth and innovation
              </p>

              <div className="bg-primary text-white p-8 rounded-xl">
                <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
                  Be the Change in
                  <br />
                  Customer Engagement
                </h3>

                <div className="flex justify-center">
                  <Button className="bg-white text-primary hover:bg-white/90 font-medium py-3 px-6 rounded-lg">
                    Launch your First Voice AI Agent with AIBotcaller
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
