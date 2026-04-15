function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "size-[24px]"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[528px] lg:h-[592px] overflow-hidden bg-white">
        {/* Mobile Image */}
        <img
          src="/img-bg-hero-mobile.webp"
          alt="Priscila Rech"
          className="absolute inset-0 w-full h-full object-cover lg:hidden"
        />
        {/* Desktop Image */}
        <img
          src="/img-bg-hero-v1.webp"
          alt="Priscila Rech"
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        />
        {/* Gradient overlay para telas maiores que 1440px */}
        <div className="hero-gradient-overlay"></div>
        <div className="absolute left-0 right-0 bottom-[30px] flex justify-center z-10">
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
      <div className="max-w-[1440px] mx-auto px-5 lg:px-0 pb-10 lg:pb-20 flex flex-col items-center gap-5 lg:gap-8">

        {/* Card: Tráfego + Estratégia */}
        <a
          href="https://wa.me/555197400814?text=Oi%20Priscila%2C%20tenho%20interesse%20e%20quero%20saber%20mais%20a%20asssesoria%20da%20BERT."
          target="_blank"
          rel="noopener noreferrer"
          className="banner-card w-full max-w-[360px] lg:max-w-[726px] h-[180px] lg:h-[300px] bg-[#050505] rounded-[10px] lg:rounded-[20px] relative overflow-hidden block"
        >
          {/* Mobile Image */}
          <img
            src="/banners-mobile/trafego-estrategia-mobile.webp"
            alt="Priscila Rech - Tráfego e Estratégia"
            className="absolute inset-0 w-full h-full object-cover lg:hidden"
          />
          {/* Desktop Image */}
          <img
            src="/trafego-estrategia.webp"
            alt="Priscila Rech - Tráfego e Estratégia"
            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
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
            <div className="btn-shine-dark bg-white rounded-[6px] lg:rounded-[12px] px-[15px] lg:px-[30px] py-[7.5px] lg:py-[15px] flex items-center gap-[5px] lg:gap-[10px] w-fit">
              <span className="text-black text-[10.9px] lg:text-[20px] leading-[15px] lg:leading-[28px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                Aplicar agora
              </span>
              <ArrowIcon className="size-[12px] lg:size-[24px] text-black" />
            </div>
          </div>
        </a>

        {/* Card: Mentoria Individual */}
        <a
          href="https://form.typeform.com/to/CNtrNE77"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-card w-full max-w-[360px] lg:max-w-[726px] h-[180px] lg:h-[300px] bg-[#ea0071] rounded-[10px] lg:rounded-[20px] relative overflow-hidden block"
        >
          {/* Mobile Image */}
          <img
            src="/banners-mobile/mentoria-individual-mobile.webp"
            alt="Priscila Rech - Mentoria Individual"
            className="absolute inset-0 w-full h-full object-cover lg:hidden"
          />
          {/* Desktop Image */}
          <img
            src="/mentoria-individual.webp"
            alt="Priscila Rech - Mentoria Individual"
            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
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
            <div className="btn-shine-dark bg-white rounded-[6px] lg:rounded-[12px] px-[15px] lg:px-[30px] py-[7.5px] lg:py-[15px] flex items-center gap-[5px] lg:gap-[10px] w-fit">
              <span className="text-[#c25203] lg:text-[#ea0071] text-[10.9px] lg:text-[20px] leading-[15px] lg:leading-[28px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                Garantir vaga
              </span>
              <ArrowIcon className="size-[12px] lg:size-[24px] text-[#c25203] lg:text-[#ea0071]" />
            </div>
          </div>
        </a>

        {/* Card: Mentoria Bliss */}
        <a
          href="https://wa.me/555197400814?text=Oi%20Priscila%2C%20tenho%20interesse%20e%20quero%20entrar%20na%20mentoria%20BLI%24S."
          target="_blank"
          rel="noopener noreferrer"
          className="banner-card w-full max-w-[360px] lg:max-w-[726px] h-[180px] lg:h-[300px] bg-[#0e586d] rounded-[10px] lg:rounded-[20px] relative overflow-hidden block"
        >
          {/* Mobile Image */}
          <img
            src="/banners-mobile/mentoria-bliss-mobile.webp"
            alt="Priscila Rech - Mentoria Bliss"
            className="absolute inset-0 w-full h-full object-cover lg:hidden"
          />
          {/* Desktop Image */}
          <img
            src="/mentoria-bliss.webp"
            alt="Priscila Rech - Mentoria Bliss"
            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          />

          <div className="absolute left-[20px] lg:left-[40px] top-1/2 -translate-y-1/2 flex flex-col gap-[5px] lg:gap-[10px] max-w-[192px] lg:max-w-[398px] z-10">
            <img
              src="/logo-bliss.webp"
              alt="BLISS"
              className="w-[72px] lg:w-[146px] h-auto"
            />
            <p className="text-[#e3e2e2] text-[9.5px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-light" style={{ fontFamily: 'var(--font-inter)' }}>
              Para gestores de tráfego e profissionais de marketing que querem se especializar no mercado da estética e escalar clientes.
            </p>
            <div className="btn-shine-dark bg-white rounded-[6px] lg:rounded-[12px] px-[15px] lg:px-[30px] py-[7.5px] lg:py-[15px] flex items-center gap-[5px] lg:gap-[10px] w-fit">
              <span className="text-[#0e586d] text-[10.9px] lg:text-[20px] leading-[15px] lg:leading-[28px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                Entrar agora
              </span>
              <ArrowIcon className="size-[12px] lg:size-[24px] text-[#0e586d]" />
            </div>
          </div>
        </a>

        {/* Card: Sun Beauty */}
        <a
          href="https://pay.kiwify.com.br/7AsuYk3"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-card w-full max-w-[360px] lg:max-w-[726px] h-[180px] lg:h-[300px] rounded-[10px] lg:rounded-[20px] relative overflow-hidden block"
        >
          {/* Mobile Image */}
          <img
            src="/banners-mobile/sun-beauty-mobile.webp"
            alt="Sun Beauty"
            className="absolute inset-0 w-full h-full object-cover lg:hidden"
          />
          {/* Desktop Image */}
          <img
            src="/sun-beauty.webp"
            alt="Sun Beauty"
            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          />

          <div className="absolute left-[20px] lg:left-[40px] top-1/2 -translate-y-1/2 flex flex-col gap-[5px] lg:gap-[10px] max-w-[170px] lg:max-w-[336px] z-10">
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
            <div className="btn-shine bg-[#353535] rounded-[6px] lg:rounded-[12px] px-[15px] lg:px-[30px] py-[7.5px] lg:py-[15px] flex items-center gap-[5px] lg:gap-[10px] w-fit">
              <span className="text-white text-[10.9px] lg:text-[20px] leading-[15px] lg:leading-[28px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                Comprar agora
              </span>
              <ArrowIcon className="size-[12px] lg:size-[24px] text-white" />
            </div>
          </div>
        </a>

        {/* Card: Consulta Lucrativa */}
        <a
          href="https://priscilarech.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-card w-full max-w-[360px] lg:max-w-[726px] h-[180px] lg:h-[300px] bg-[#010101] rounded-[10px] lg:rounded-[20px] relative overflow-hidden block"
        >
          {/* Mobile Image */}
          <img
            src="/banners-mobile/consulta-lucrativa-mobile.webp"
            alt="Priscila Rech - Consulta Lucrativa"
            className="absolute inset-0 w-full h-full object-cover lg:hidden"
          />
          {/* Desktop Image */}
          <img
            src="/consulta-lucrativa.webp"
            alt="Priscila Rech - Consulta Lucrativa"
            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          />

          <div className="absolute left-[15px] lg:left-[30px] top-1/2 -translate-y-1/2 flex flex-col gap-[5px] lg:gap-[10px] max-w-[213px] lg:max-w-[398px] z-10">
            <img
              src="/logo-consulta-lucrativa.webp"
              alt="CONSULTA"
              className="w-[95px] lg:w-[191px] h-auto"
            />
            <p className="text-[#b7b7b7] text-[10px] lg:text-[18px] leading-[13px] lg:leading-[26px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
              Transforme cada conversa com um paciente em agendamentos pagos e aumento imediato no faturamento da clínica.
            </p>
            <div className="btn-shine bg-[#386f4f] rounded-[6px] lg:rounded-[12px] px-[15px] lg:px-[30px] py-[7.5px] lg:py-[15px] flex items-center gap-[5px] lg:gap-[10px] w-fit">
              <span className="text-white text-[10.9px] lg:text-[20px] leading-[15px] lg:leading-[28px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
                Saber mais
              </span>
              <ArrowIcon className="size-[12px] lg:size-[24px] text-white" />
            </div>
          </div>
        </a>
      </div>

      {/* Seção Sobre */}
      <section className="relative w-full h-[792px] lg:h-[620px] overflow-hidden">
        {/* Mobile Image */}
        <img
          src="/secao-sobre-mobile.webp"
          alt="Priscila Rech - Sobre"
          className="absolute inset-0 w-full h-full object-cover lg:hidden"
        />
        {/* Desktop Image */}
        <img
          src="/secao-sobre.webp"
          alt="Priscila Rech - Sobre"
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
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
            Desenvolvido por{' '}
            <a
              href="https://studiovyn.com.br/?utm_campaign=footer&utm_medium=priscila_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Studio VYN
            </a>.
          </p>
        </div>
      </footer>
    </div>
  );
}
