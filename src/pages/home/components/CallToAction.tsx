
export default function CallToAction() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-[#bad7f2] to-[#f2bac9]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mx-auto mb-8 shadow-lg">
            <i className="ri-heart-fill text-5xl text-[#f2bac9]"></i>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            No tienes que tomar decisiones solo.
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Agenda una llamada gratuita y hablamos de tu caso sin compromiso.
          </p>

          <div className="flex justify-center">
            <a 
              href="https://calendly.com/laura-quintero-vet/llamada-gratuita-informacion?month=2025-12"
              className="inline-block bg-[#ff6b5a] hover:bg-[#ff5544] text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Agenda una llamada gratuita
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4">
                <i className="ri-phone-fill text-3xl text-[#bad7f2]"></i>
              </div>
              <p className="text-white font-semibold">+34 634359766</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4">
                <i className="ri-mail-fill text-3xl text-[#f2bac9]"></i>
              </div>
              <p className="text-white font-semibold">laura.quintero.vet@gmail.com</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
