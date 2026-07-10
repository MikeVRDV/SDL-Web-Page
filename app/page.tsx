// app/page.tsx
import Image from 'next/image';

const contactInfo = {
  waText: "+62 821 2387 884", 
  waLink: "https://api.whatsapp.com/send/?phone=628212387884&text&type=phone_number&app_absent=0", 
  email: "sidiadinotodesignlab@gmail.com",
  ig: "sdl.arch",
  igLink: "https://www.instagram.com/sdl.arch",
  tiktok: "sdl.arch",
  tiktokLink: "https://www.tiktok.com/@sdl.arch",
  portofolioLink: "https://drive.google.com/file/d/1EnkuXQnggSw_7JqwZgvoOv-DOjV_yiHy/view?usp=drive_link"
};

const col1 = [
  { src: '/images/K1-01.png', title: 'Basement Office', aspect: 'aspect-[598/396]' },
  { src: '/images/K1-02.png', title: 'Library Sekolah Yakobus', aspect: 'aspect-[598/440]' },
  { src: '/images/K1-03.png', title: 'Klinik Pratama', aspect: 'aspect-[598/532]' },
  { src: '/images/K1-04.png', title: 'SDL Office', aspect: 'aspect-[598/810]' },
];

const col2 = [
  { src: '/images/K2-01.png', title: 'Clinic SSQ', aspect: 'aspect-[287/215]' },
  { src: '/images/K2-02.png', title: 'Clinic SSQ', aspect: 'aspect-[287/390]' },
  { src: '/images/K2-03.png', title: 'Sekolah Montessory', aspect: 'aspect-[287/320]' },
  { src: '/images/K2-04.png', title: 'Sportshall Sekolah Yakobus', aspect: 'aspect-[287/400]' },
  { src: '/images/K2-05.png', title: 'Villa Jimbaran', aspect: 'aspect-[287/410]' },
  { src: '/images/K2-06.png', title: 'SDL Office', aspect: 'aspect-[287/441]' },
];

const col3 = [
  { src: '/images/K3-01.png', title: 'Sportshall Sekolah Yakobus', aspect: 'aspect-[603/420]' },
  { src: '/images/K3-02.png', title: 'Library Sekolah Yakobus', aspect: 'aspect-[603/610]' },
  { src: '/images/K3-03.png', title: 'Library Sekolah Yakobus', aspect: 'aspect-[603/480]' },
  { src: '/images/K3-04.png', title: 'Sportshall Sekolah Yakobus', aspect: 'aspect-[603/702]' },
];

const col4 = [
  { src: '/images/K4-01.png', title: 'SDL Office', aspect: 'aspect-[284/310]' },
  { src: '/images/K4-02.png', title: 'Villa Jimbaran', aspect: 'aspect-[284/400]' },
  { src: '/images/K4-03.png', title: 'Library Sekolah Yakobus', aspect: 'aspect-[284/390]' },
  { src: '/images/K4-04.png', title: 'Basement Office', aspect: 'aspect-[284/520]' },
  { src: '/images/K4-05.png', title: 'Basement Office', aspect: 'aspect-[284/612]' },
];

export default function Home() {
  
  const columns = [col1, col2, col3, col4];

  return (
    <main className="min-h-screen bg-[#F1F1F1] text-black font-sans">
      
      <section id="hero" className="min-h-screen bg-[#BE2532] flex items-center justify-center px-6 py-12 md:px-24">
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12 max-w-5xl w-full text-white">
          
          {/* Logo */}
          <div className="w-full md:w-1/2 relative min-h-[16rem] md:min-h-0">
             <Image 
               src="/images/logosdl-redbg.jpg" 
               alt="SDL Logo"
               fill
               className="object-contain md:object-right"
             />
          </div>
          
          {/* Teks */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
            <div className="flex flex-col gap-4 max-w-md">
              
              {/* Segmen 1: Deskripsi */}
              <div className="flex flex-col gap-2 text-[13px] md:text-sm leading-snug font-light">
                <p>We are a small architecture practice based in Jakarta, Indonesia, led by <strong className="font-semibold">Ansel Sidiadinoto</strong>. Focused on <strong className="font-semibold">thoughtful and contextual design.</strong></p>
                <p>We start by <strong className="font-semibold">understanding each project's challenges,</strong> then turn those solutions into simple, well-crafted spaces.</p>
                <p>We believe good design is not just about how it looks, but how naturally it fits its surroundings and everyday life. The results are <strong className="font-semibold">designs that feel clear, meaningful, and quietly beautiful.</strong></p>
              </div>
              
              {/* Link Portofolio */}
              <div>
                <a 
                  href={contactInfo.portofolioLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[15px] md:text-base font-bold hover:underline"
                >
                  Check Our Portofolio
                </a>
              </div>

              {/* Info Kontak */}
              <div className="flex flex-col gap-1 text-[13px] md:text-sm font-light">
                <p>WA: <a href={contactInfo.waLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactInfo.waText}</a></p>
                <p>{contactInfo.email}</p>
                <p>
                  IG: <a href={contactInfo.igLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactInfo.ig}</a>
                  <span className="mx-2">|</span>
                  TikTok: <a href={contactInfo.tiktokLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactInfo.tiktok}</a>
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="portfolio" className="px-6 py-12 md:px-24 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[598fr_287fr_603fr_284fr] gap-4 w-full max-w-[1920px] mx-auto">
          
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col justify-between h-full gap-4">
              
              {col.map((item, itemIndex) => (
                <div key={itemIndex} className={`relative overflow-hidden group bg-gray-100 w-full ${item.aspect}`}>
                  
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 35vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 md:p-6 cursor-pointer z-10">
                    <p className="text-white font-sans font-normal text-sm md:text-base text-center tracking-wide">
                      {item.title}
                    </p>
                  </div>

                </div>
              ))}
              
            </div>
          ))}

        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#BE2532] text-white pt-24 pb-16 flex flex-col items-center justify-center mt-12 md:mt-24">
        
        <div className="relative w-24 h-24 md:w-28 md:h-28 mb-6">
          <Image 
            src="/images/SimpleLogo.png" 
            alt="SDL Logo Footer" 
            fill 
            className="object-contain" 
          />
        </div>
        
        <div className="flex flex-col items-center gap-1">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm md:text-base font-light text-center px-6 tracking-wide">
            <span>{contactInfo.email}</span>
            <span className="hidden md:inline">|</span>
            <span>WA: <a href={contactInfo.waLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactInfo.waText}</a></span>
            <span className="hidden md:inline">|</span>
            <span>IG/TikTok: <a href={contactInfo.igLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactInfo.ig}</a></span>
          </div>

          <div className="flex items-center justify-center text-sm md:text-base font-light mt-1">
            <span className="tracking-widest">&copy; 2026</span>
          </div>

        </div>

      </footer>

    </main>
  );
}