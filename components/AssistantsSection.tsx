"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import dynamic from "next/dynamic";
import realEstateAnimation from "../../public/real estate.json";
import techSupportAnimation from "../../public/tech support.json";
import creditRepairAnimation from "../../public/credit repair.json";
import aiAgencyAnimation from "../../public/ai agency.json";
import spanishRealEstateAnimation from "../../public/spain real estate.json";
import solarAnimation from "../../public/solar.json";
import healthInsuranceAnimation from "../../public/health insurancee.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function AssistantsSection() {
  return (
    <section
      id="explore-assistants"
      className="bg-[#f8f8fa] pt-8 pb-16 md:pt-12 md:pb-24"
    >
      <div className="st-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          Explore Assistants for Different Use Cases
        </h2>

        <AssistantsTabs />
      </div>
    </section>
  );
}

function AssistantsTabs() {
  const [activeTab, setActiveTab] = useState("real-estate");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioId, setCurrentAudioId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const assistants = [
    {
      id: "real-estate",
      title: "Real Estate",
      description:
        "Streamlines property-related dialogues, from lead capture to scheduling property tours, enhancing customer service with AI that speaks the language of real estate.",
      icon: "https://ext.same-assets.com/438387271/1494940329.svg",
      audioUrl:
        "https://chris-gordon-founder.github.io/websiteaudio/realstate-audio.mp3",
      duration: "2:07",
    },
    {
      id: "solar",
      title: "Solar",
      description:
        "Streamlines property-related dialogues, from lead capture to scheduling property tours, enhancing customer service with AI that speaks the language of real estate.",
      icon: "https://ext.same-assets.com/438387271/2023182280.svg",
      audioUrl:
        "https://chris-gordon-founder.github.io/websiteaudio/solar-audio.mp3",
      duration: "0:43",
    },
    {
      id: "health-insurance",
      title: "Health Insurance",
      description:
        "Tailors health plan discussions, providing clear, conversational responses and appointment setting to navigate the complex insurance landscape.",
      icon: "https://ext.same-assets.com/438387271/821917325.svg",
      audioUrl:
        "https://chris-gordon-founder.github.io/websiteaudio/health-insurance-audio.mp3",
      duration: "0:43",
    },
    {
      id: "tech-support",
      title: "Tech Support",
      description:
        "Offers tech troubleshooting through voice, facilitating issue resolution and customer service thats available around the clock. Credit Repair: Guides users through credit improvement steps, speaks to common credit queries, and books consultations with financial experts, all in natural language.",
      icon: "https://ext.same-assets.com/438387271/3375532828.svg",
      audioUrl:
        "https://chris-gordon-founder.github.io/websiteaudio/tech-support.mp3",
      duration: "0:43",
    },
    {
      id: "credit-repair",
      title: "Credit Repair",
      description: "Expert credit guidance with easy appointment coordination.",
      icon: "https://ext.same-assets.com/438387271/162360456.svg",
      audioUrl:
        "https://chris-gordon-founder.github.io/websiteaudio/credit-repair.mp3",
      duration: "0:43",
    },
    {
      id: "ai-agency",
      title: "AI Agency",
      description:
        "Showcases the capabilities of AI in agency settings, providing lead qualification, industry-specific FAQs, and seamless booking for AI consultancy.",
      icon: "https://ext.same-assets.com/438387271/3843343557.svg",
      audioUrl:
        "https://chris-gordon-founder.github.io/websiteaudio/agency-mp3.mp3",
      duration: "0:43",
    },
    {
      id: "spanish-real-estate",
      title: "Spanish Speaking Real Estate",
      description:
        "Optimiza los dilogos relacionados con propiedades, desde la captura de clientes potenciales hasta la programacin de visitas a propiedades, mejorando el servicio al cliente con una IA que habla el idioma del sector inmobiliario.",
      icon: "https://ext.same-assets.com/438387271/1494940329.svg",
      audioUrl:
        "https://chris-gordon-founder.github.io/websiteaudio/spanish-agent-demo.mp3",
      duration: "0:43",
    },
  ];

  const handlePlayAudio = (assistant: (typeof assistants)[0]) => {
    if (!assistant.audioUrl) return;

    if (audioRef.current) {
      // If the same audio is clicked again, toggle play/pause
      if (currentAudioId === assistant.id) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
        return;
      }

      // If different audio is selected, stop current audio and play new one
      audioRef.current.pause();
      audioRef.current.src = assistant.audioUrl;
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentAudioId(assistant.id);
    } else {
      // Create a new audio element if none exists
      audioRef.current = new Audio(assistant.audioUrl);
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentAudioId(assistant.id);

      // Add event listener for when audio ends
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setCurrentAudioId(null);
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <Tabs
        defaultValue="real-estate"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="overflow-x-auto w-full md:overflow-visible">
          <TabsList className="h-auto bg-gray-50 p-2 flex flex-nowrap gap-1 min-w-max md:min-w-0">
            {assistants.map((assistant) => (
              <TabsTrigger
                key={assistant.id}
                value={assistant.id}
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow py-3 px-4"
              >
                <Image
                  src={assistant.icon}
                  alt={assistant.title}
                  width={24}
                  height={24}
                  className="w-6 h-6 filter invert brightness-0 text-primary"
                />
                <span className="whitespace-nowrap text-sm font-medium">
                  {assistant.title}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {assistants.map((assistant) => (
          <TabsContent
            key={assistant.id}
            value={assistant.id}
            className="p-6 focus-visible:outline-none focus-visible:ring-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={assistant.icon}
                    alt={assistant.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 filter invert brightness-0 text-primary"
                  />
                  <h3 className="text-xl font-semibold">{assistant.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{assistant.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary text-white hover:bg-primary/90 rounded-lg">
                    Call Me Now
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="rounded-lg"
                      onClick={() => handlePlayAudio(assistant)}
                    >
                      {isPlaying && currentAudioId === assistant.id
                        ? "Pause Audio"
                        : "Play Audio Now"}
                    </Button>
                    <span className="text-sm text-gray-500">
                      {assistant.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden bg-primary/5 aspect-video">
                  {assistant.id === "real-estate" ? (
                    <Lottie
                      animationData={realEstateAnimation}
                      loop={true}
                      className="w-full h-full object-cover"
                    />
                  ) : assistant.id === "tech-support" ? (
                    <Lottie
                      animationData={techSupportAnimation}
                      loop={true}
                      className="w-full h-full object-cover"
                    />
                  ) : assistant.id === "credit-repair" ? (
                    <Lottie
                      animationData={creditRepairAnimation}
                      loop={true}
                      className="w-full h-full object-cover"
                    />
                  ) : assistant.id === "ai-agency" ? (
                    <Lottie
                      animationData={aiAgencyAnimation}
                      loop={true}
                      className="w-full h-full object-cover"
                    />
                  ) : assistant.id === "spanish-real-estate" ? (
                    <Lottie
                      animationData={spanishRealEstateAnimation}
                      loop={true}
                      className="w-full h-full object-cover"
                    />
                  ) : assistant.id === "solar" ? (
                    <Lottie
                      animationData={solarAnimation}
                      loop={true}
                      className="w-full h-full object-cover"
                    />
                  ) : assistant.id === "health-insurance" ? (
                    <Lottie
                      animationData={healthInsuranceAnimation}
                      loop={true}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="relative h-32 w-32">
                        <Image
                          src={assistant.icon}
                          alt={assistant.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 mx-auto opacity-30"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-1 shadow-md font-medium text-sm text-primary flex items-center gap-1">
                  <Image
                    src={assistant.icon}
                    alt={assistant.title}
                    width={16}
                    height={16}
                    className="w-4 h-4 filter invert brightness-0 text-primary"
                  />
                  {assistant.title}
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
