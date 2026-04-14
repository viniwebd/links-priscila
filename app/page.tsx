import Image from "next/image";

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[528px] lg:h-[592px] overflow-hidden">
        <Image
          src="/img-bg-hero-mobile.webp"
          alt="Priscila Rech"
          fill
          className="object-cover lg:hidden"
          priority
        />
        <Image
          src="/img-bg-hero-v1.webp"
          alt="Priscila Rech"
          fill
          className="object-cover hidden lg:block"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-[50px] lg:text-[82px] leading-none tracking-tight text-black"
            style={{
              fontFamily: 'var(--font-benpark)',
              transform: 'skewX(-18.43deg) scaleY(0.95)'
            }}
          >
            Seja bem-vinda
          </h1>
        </div>
      </section>

      {/* Cards Section */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-0 py-10 lg:py-20 flex flex-col items-center gap-5 lg:gap-8">

        {/* Card: Tráfego + Estratégia */}
        <div className="w-full max-w-[360px] lg:max-w-[726px] h-[148.76px] lg:h-[300px] bg-[#050505] rounded-[10px] lg:rounded-[20px] relative overflow-hidden">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute left-0 top-[-12px] lg:top-[-23px] w-[67px] lg:w-[134px] h-[161px] lg:h-[323px] flex items-center justify-center">
            <p
              className="text-white text-[67.6px] lg:text-[136.3px] leading-none tracking-tight uppercase opacity-15"
              style={{
                fontFamily: 'var(--font-benpark)',
                transform: 'rotate(-90deg)'
              }}
            >
              Bert
            </p>
          </div>

          <div className="absolute left-[180px] lg:left-[363px] top-[9px] lg:top-[18px] w-[196px] lg:w-[396px] h-[196px] lg:h-[396px] rounded-full bg-gradient-radial from-transparent to-transparent opacity-20"></div>

          <Image
            src="/trafego-estrategia.webp"
            alt="Priscila Rech - Tráfego e Estratégia"
            width={146}
            height={173}
            className="absolute right-[6px] lg:right-[13px] top-[4px] lg:top-[8px] w-[146px] lg:w-[295px] h-auto"
          />

          <div className="absolute left-[20px] lg:left-[40px] top-1/2 -translate-y-1/2 flex flex-col gap-[5px] lg:gap-[10px] max-w-[190px] lg:max-w-[338px]">
            <h2
              className="text-white text-[22.81px] lg:text-[46px] leading-[22px] lg:leading-[45px] tracking-tight uppercase"
              style={{ fontFamily: 'var(--font-benpark)' }}
            >
              Tráfego + <br />estratégia.
            </h2>
            <p className="text-[#e3e2e2] text-[10px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
              Tenha o acompanhamento da minha assessoria e escale os resultados da sua clínica.
            </p>
            <button className="bg-white rounded-[6px] lg:rounded-[12px] px-[15px] lg:px-[30px] py-[7.5px] lg:py-[15px] flex items-center gap-[5px] lg:gap-[10px] w-fit">
              <span className="text-black text-[8.9px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                Fazer aplicação
              </span>
              <div className="w-[12px] lg:w-[24px] h-[12px] lg:h-[24px] text-black">
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>

        {/* Card: Mentoria Individual */}
        <div className="w-full max-w-[360px] lg:max-w-[726px] h-[148.76px] lg:h-[300px] bg-[#583027] rounded-[10px] lg:rounded-[20px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ee7c2c] via-[#d44a25] to-[#d44a25] mix-blend-screen opacity-90"></div>

          <Image
            src="/mentoria-individual.webp"
            alt="Priscila Rech - Mentoria Individual"
            width={130}
            height={183}
            className="absolute right-[7px] lg:right-[35px] top-0 w-[130px] lg:w-[261px] h-auto"
          />

          <div className="absolute left-[20px] lg:left-[40px] top-1/2 -translate-y-1/2 flex flex-col gap-[5px] lg:gap-[10px] max-w-[165px] lg:max-w-[332px] z-10">
            <h2
              className="text-black lg:text-white text-[22.81px] lg:text-[46px] leading-[20px] lg:leading-[40px] tracking-tight uppercase"
              style={{ fontFamily: 'var(--font-benpark)' }}
            >
              MENTORIA <br />INDIVIDUAL
            </h2>
            <p className="text-[#2c2b2b] lg:text-[#eaeaea] text-[9.5px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
              Acompanhamento direto comigo para dominar posicionamento, vendas e aquisição de clientes.
            </p>
            <button className="bg-white rounded-[6px] lg:rounded-[12px] px-[15px] lg:px-[30px] py-[7.5px] lg:py-[15px] flex items-center gap-[5px] lg:gap-[10px] w-fit">
              <span className="text-[#c25203] lg:text-[#ea0071] text-[8.9px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                Botão CTA
              </span>
              <div className="w-[12px] lg:w-[24px] h-[12px] lg:h-[24px] text-[#c25203] lg:text-[#ea0071]">
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>

        {/* Card: Mentoria Bliss */}
        <div className="w-full max-w-[360px] lg:max-w-[726px] h-[148.76px] lg:h-[300px] bg-[#0e586d] rounded-[10px] lg:rounded-[20px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-24 mix-blend-multiply">
            <div className="w-full h-full bg-repeat opacity-20" style={{ backgroundImage: 'url(/mentoria-bliss.webp)' }}></div>
          </div>

          <Image
            src="/mentoria-bliss.webp"
            alt="Priscila Rech - Mentoria Bliss"
            width={160}
            height={157}
            className="absolute right-[20px] lg:right-[40px] top-[0.5px] lg:top-px w-[160px] lg:w-[323px] h-auto"
          />

          <div className="absolute left-[20px] lg:left-[40px] top-1/2 -translate-y-1/2 flex flex-col gap-[5px] lg:gap-[10px] max-w-[192px] lg:max-w-[398px] z-10">
            <div className="w-[72px] lg:w-[146px] h-[39px] lg:h-[79px] relative">
              <svg viewBox="0 0 146 79" fill="white" className="w-full h-full">
                <text x="0" y="60" fontSize="60" fontWeight="bold" fill="white">BLISS</text>
              </svg>
            </div>
            <p className="text-[#e3e2e2] text-[9.5px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-light" style={{ fontFamily: 'var(--font-inter)' }}>
              Para gestores de tráfego e profissionais de marketing que querem se especializar no mercado da estética e escalar clientes.
            </p>
            <button className="bg-white rounded-[6px] lg:rounded-[12px] px-[15px] lg:px-[30px] py-[7.5px] lg:py-[15px] flex items-center gap-[5px] lg:gap-[10px] w-fit">
              <span className="text-[#0e586d] text-[8.9px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                Botão CTA
              </span>
              <div className="w-[12px] lg:w-[24px] h-[12px] lg:h-[24px] text-[#0e586d]">
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>

        {/* Card: Sun Beauty */}
        <div className="w-full max-w-[360px] lg:max-w-[726px] h-[148.76px] lg:h-[300px] rounded-[10px] lg:rounded-[20px] relative overflow-hidden">
          <Image
            src="/sun-beauty.webp"
            alt="Sun Beauty"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#fce5c3] mix-blend-hard-light"></div>

          <div className="absolute left-[20px] lg:left-[40px] top-1/2 -translate-y-1/2 flex flex-col gap-[5px] lg:gap-[10px] max-w-[204px] lg:max-w-[336px] z-10">
            <h2
              className="text-[#353535] text-[29.75px] lg:text-[60px] leading-[25px] lg:leading-[50px] tracking-[-1.5px] lg:tracking-[-3px]"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              <span className="font-normal">Sun</span>{' '}
              <span className="font-bold italic">Beauty</span>
            </h2>
            <p className="text-[#4b4b4b] text-[10px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-light" style={{ fontFamily: 'var(--font-inter)' }}>
              O método para criar desafios que atraem pacientes, lotam agendas e geram faturamento em poucos dias.
            </p>
            <button className="bg-[#353535] rounded-[6px] lg:rounded-[12px] px-[15px] lg:px-[30px] py-[7.5px] lg:py-[15px] flex items-center gap-[5px] lg:gap-[10px] w-fit">
              <span className="text-white text-[8.9px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                Botão CTA
              </span>
              <div className="w-[12px] lg:w-[24px] h-[12px] lg:h-[24px] text-white">
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>

        {/* Card: Consulta Lucrativa */}
        <div className="w-full max-w-[360px] lg:max-w-[726px] h-[148.76px] lg:h-[300px] bg-[#010101] rounded-[10px] lg:rounded-[20px] relative overflow-hidden">
          <div className="absolute inset-0 bg-black mix-blend-soft-light"></div>

          <Image
            src="/consulta-lucrativa.webp"
            alt="Priscila Rech - Consulta Lucrativa"
            width={135}
            height={151}
            className="absolute right-[8px] lg:right-[16px] top-[-2.5px] lg:top-[-5px] w-[135px] lg:w-[273px] h-auto"
          />

          <div className="absolute left-[15px] lg:left-[30px] top-1/2 -translate-y-1/2 flex flex-col gap-[5px] lg:gap-[10px] max-w-[213px] lg:max-w-[398px] z-10">
            <h2 className="w-[95px] lg:w-[191px] h-[28px] lg:h-[57px] relative">
              <svg viewBox="0 0 191 57" fill="white" className="w-full h-full">
                <text x="0" y="45" fontSize="45" fontWeight="bold" fill="white">CONSULTA</text>
              </svg>
            </h2>
            <p className="text-[#b7b7b7] text-[10px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
              Transforme cada conversa com um paciente em agendamentos pagos e aumento imediato no faturamento da clínica.
            </p>
            <button className="bg-[#386f4f] rounded-[6px] lg:rounded-[12px] px-[15px] lg:px-[30px] py-[7.5px] lg:py-[15px] flex items-center gap-[5px] lg:gap-[10px] w-fit">
              <span className="text-white text-[8.9px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                Botão CTA
              </span>
              <div className="w-[12px] lg:w-[24px] h-[12px] lg:h-[24px] text-white">
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Seção Sobre */}
      <section className="relative w-full h-[792px] lg:h-[620px] overflow-hidden">
        <Image
          src="/secao-sobre.webp"
          alt="Priscila Rech - Sobre"
          fill
          className="object-cover"
        />

        <div className="absolute left-5 lg:left-[220px] top-[60px] lg:top-1/2 lg:-translate-y-1/2 max-w-[360px] lg:max-w-[527px]">
          <div className="flex flex-col gap-[16px] lg:gap-[30px]">
            <h2
              className="text-white text-[38px] lg:text-[60px] leading-[41px] lg:leading-[60px]"
              style={{ fontFamily: 'var(--font-benpark)' }}
            >
              Oi, Priscila Rech aqui!
            </h2>
            <div className="text-[#ddd] text-[18px] lg:text-[22px] leading-[20px] lg:leading-[30px] font-light space-y-4" style={{ fontFamily: 'var(--font-inter)' }}>
              <p>
                Sou especialista em{' '}
                <span className="text-white font-medium">
                  marketing & vendas para clínicas de estética e saúde.
                </span>{' '}
                Há mais de 7 anos crio campanhas de alta performance, ajudando{' '}
                <span className="text-white font-medium">
                  clínicas e gestores a construírem operações lucrativas.
                </span>
              </p>
              <p>
                Minha missão? Tirar clínicas do improviso e colocá-las no controle das vendas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(0,0,0,0.4)] py-5 lg:py-[30px] px-5 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[7px] lg:gap-0 text-[#4b4b4b] text-[12px] lg:text-[16px] leading-[19px] lg:leading-[30px] font-light" style={{ fontFamily: 'var(--font-inter)' }}>
          <p className="text-center lg:text-left">
            2026 © Todos os direitos reservados. Priscila Rech.
          </p>
          <p>
            Desenvolvido por Studio VYN.
          </p>
        </div>
      </footer>
    </div>
  );
}
