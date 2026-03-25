import { Link } from 'react-router-dom';
import { Search, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const pillars = [
  {
    icon: Search,
    title: 'Discovery',
    description:
      'Ginagawa naming madaling hanapin ang mga tindahan na dati ay kailangan mong lakarin pa. Mapa-sari-sari, carinderia, o junk shop — nandito sila sa Kanto.',
    color: 'bg-kanto-orange/10 text-kanto-orange',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Hindi lang marketplace ang Kanto — ito ay digital na kanto kung saan nagkikita ang mga tao, nagre-review, at nagtutulungan. Ang bawat review ay tulong sa kapwa.',
    color: 'bg-kanto-teal/10 text-kanto-teal',
  },
  {
    icon: Lightbulb,
    title: 'Opportunity',
    description:
      'Binibigyan namin ng pagkakataon ang mga micro-entrepreneur na lumago nang hindi kailangan ng malaking puhunan. Free tools, fair pricing, real visibility.',
    color: 'bg-kanto-gold/10 text-kanto-gold',
  },
];

const stats = [
  { number: '1.3M+', label: 'Micro-businesses sa Pilipinas na walang digital presence' },
  { number: '60%', label: 'Ng Filipino households ay bumibili sa sari-sari stores araw-araw' },
  { number: '₱2.4T', label: 'Ang halaga ng informal economy sa bansa' },
  { number: '85%', label: 'Ng micro-businesses ay hindi pa naka-online' },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-kanto-cream">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-kanto-orange/10 via-kanto-gold/5 to-kanto-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-kanto-brown mb-4 leading-tight">
            The Story of Kanto
          </h1>
          <p className="text-lg text-kanto-brown/70 max-w-2xl mx-auto">
            Isang platform na ginawa para sa mga tunay na negosyante sa kanto — ang mga nagtitinda,
            nagluluto, nag-aayos, at nagre-recycle sa bawat sulok ng Pilipinas.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-kanto-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-kanto-gold/5 rounded-full blur-3xl" />
      </section>

      {/* Origin Story */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-kanto-brown mb-6 text-center">
          One Carinderia, Too Much Adobo
        </h2>
        <div className="prose prose-sm sm:prose-base max-w-none text-kanto-brown/80 space-y-4 leading-relaxed">
          <p>
            Si Aling Nena ay maaga gumising — alas-kwatro pa lang, gising na siya. Bago pa magliwanag
            ang araw, nagluluto na siya ng kanyang sikat na adobo. Ang sarap ng amoy. Marami ang luto.
            Kaya naman, puno ang mga kaldero.
          </p>
          <p>
            Pero dumating ang tanghali at walang dumaan. Ang mga taong madalas sa kanya ay nagpalit
            na ng ruta — may bagong kalsada, may bagong kainan sa kabilang block. Hindi naman siya
            kilala ng mga bago sa lugar.
          </p>
          <p>
            Pagsapit ng hapon, nakatingin si Aling Nena sa mga kaldero ng adobo. Masarap pa rin.
            Mainit pa rin. Pero walang kumakain.
          </p>
          <p className="font-semibold text-kanto-brown">
            Hindi dahil pangit ang pagkain niya. Hindi dahil mahal. Hindi dahil walang gustong kumain
            ng adobo. Ang problema — <span className="text-kanto-orange">invisible siya beyond her kanto.</span>
          </p>
          <p>
            Walang nakakaalam na nandoon siya. Walang app na nagpapakita sa kanya. Walang search result
            na bumabalik sa pangalan niya. Para sa digital world, hindi siya umiiral.
          </p>
          <p>
            At hindi lang si Aling Nena. Milyon-milyong katulad niya — mga nanay, tatay, lolo, lola —
            ang nagtitinda araw-araw sa mga kanto ng Pilipinas na walang digital presence. Walang
            website, walang social media, walang listing kahit saan.
          </p>
          <p className="text-lg font-semibold text-kanto-brown">
            Ginawa namin ang Kanto para sa kanila.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-kanto-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Our Mission
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-kanto-brown mb-6">
            Making the invisible economy visible
          </h2>
          <p className="text-kanto-brown/70 max-w-2xl mx-auto text-lg leading-relaxed">
            1.3 million micro-businesses in the Philippines have no digital presence. They serve
            their communities every day, but the internet doesn't know they exist. Kanto changes that.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-kanto-brown text-center mb-10">
          How Kanto Helps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="text-center">
                <div
                  className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4',
                    pillar.color.split(' ')[0]
                  )}
                >
                  <Icon className={cn('w-7 h-7', pillar.color.split(' ')[1])} />
                </div>
                <h3 className="text-lg font-bold text-kanto-brown mb-2">{pillar.title}</h3>
                <p className="text-sm text-kanto-brown/70 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-kanto-brown py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-kanto-orange mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-white/70 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-kanto-brown mb-4">Join the Movement</h2>
        <p className="text-kanto-brown/70 mb-8 max-w-lg mx-auto">
          Maging parte ka ng pagbabago. I-list ang iyong store, tulungan ang iyong kapitbahay,
          at palakihin ang iyong negosyo — libre lang.
        </p>
        <Link
          to="/list-store"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-kanto-orange text-white font-semibold rounded-xl hover:bg-kanto-orange/90 transition-colors text-lg"
        >
          I-list ang Store Mo
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
