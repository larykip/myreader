import { Button } from "@/components/ui/button";
import { BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ServerCogIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: 'Store your PDF Documents',
    description: 'Store your PDF documents in a secure and easy to access location.',
    icon: GlobeIcon
  },
  {
    name: 'Blazing Fast Responses',
    description: 'Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.',
    icon: ZapIcon
  },
  {
    name: 'Chat memorization',
    description: 'Our chatbot remembers your previous conversations, making it easier to pick up where you left off.',
    icon: BrainCogIcon
  },
  {
    name: 'Interactive PDF Viewer',
    description: 'Engage with your PDF documents in a whole new way with our interactive PDF viewer.',
    icon: EyeIcon
  },
  {
    name: 'Cloud Backup',
    description: 'Rest easy knowing your documents are backed up in the cloud, ensuring you never lose your important files.',
    icon: ServerCogIcon
  },
  {
    name: 'Responsive Across Devices',
    description: 'Access your documents on any device, ensuring you have the information you need wherever you are.',
    icon: MonitorSmartphoneIcon
  }
  
]

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll bg-gradient-to-bl p-2 lg:p-5 from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold text-indigo-600 leading-7">
              Your Interactive Document Companion
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform your PDFs into Interactive Conversations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Intoducing{" "}
              <span className="text-indigo-600 font-bold">PDF Chatbot</span>
              <br />
              <br />Upload your PDFs and start a conversation with them and our chatbot will answers
               your questions, summarize content and answer all your queries. <span className="text-indigo-600">PDF Chatbot</span>{" "}
              is your interactive document companion, changing static documents into{" "}
              <span className=" font-bold">living conversations</span>,
              enhancing productivity 10x fold effortlessly.
            </p>
            <Button asChild className="mt-10">
              <Link href='/dashboard'>Get Started</Link>
            </Button>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                alt="screenshot of the app"
                src='https://i.imgur.com/VciRSTI.jpeg'
                width={2432}
                height={1442}
                className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div aria-hidden='true' className="relative">
                <div className='absolute bottom-0 bg-gradient-to-t  from-white/95 pt-[5%]'/>
              </div>
          </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7
           to-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon/>
                </dt>
                <dd>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
