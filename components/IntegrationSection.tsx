import Image from "next/image";

export function IntegrationSection() {
  return (
    <section className="bg-primary py-12 text-white">
      <div className="st-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Seamless Integration, Expert Configuration for different CRM's
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          <Image
            src="https://ext.same-assets.com/438387271/3156100007.png"
            alt="Close.io Logo"
            width={120}
            height={40}
            className="h-8 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/438387271/917097421.png"
            alt="Zoho Logo"
            width={120}
            height={40}
            className="h-8 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/438387271/3245698258.png"
            alt="Salesforce Logo"
            width={120}
            height={40}
            className="h-8 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://ext.same-assets.com/438387271/6382215.png"
            alt="Pipedrive Logo"
            width={120}
            height={40}
            className="h-8 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
