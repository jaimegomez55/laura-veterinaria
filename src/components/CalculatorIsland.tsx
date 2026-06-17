import { useState } from 'react';

function getResultData(val: number) {
  if (val <= 15) {
    return {
      color: 'text-[#5DA283]',
      bgColor: 'bg-[#5DA283]/10',
      borderColor: 'border-[#5DA283]',
      icon: '✓',
      title: 'Rango saludable',
      desc: `¡Excelente! Este alimento tiene un nivel de grasa adecuado (${val}%). Para la mayoría de perros adultos sanos, el rango ideal es entre 10-15% de grasa en materia seca.`,
    };
  }
  if (val <= 25) {
    return {
      color: 'text-[#E89F4F]',
      bgColor: 'bg-[#E89F4F]/10',
      borderColor: 'border-[#E89F4F]',
      icon: '⚠',
      title: 'Moderadamente alto',
      desc: `Atención: Este alimento tiene ${val}% de grasa en materia seca, lo cual es moderadamente alto. Puede ser adecuado para perros muy activos o en crecimiento, pero NO recomendado para perros con tendencia a sobrepeso o problemas pancreáticos.`,
    };
  }
  return {
    color: 'text-[#C85C5C]',
    bgColor: 'bg-[#C85C5C]/10',
    borderColor: 'border-[#C85C5C]',
    icon: '✕',
    title: 'Muy alto',
    desc: `¡Cuidado! Este alimento tiene ${val}% de grasa, lo cual es excesivamente alto. Un consumo prolongado puede provocar pancreatitis, obesidad y problemas digestivos. Te recomiendo consultar con un nutricionista canino antes de continuar con este alimento.`,
  };
}

export default function CalculatorIsland() {
  const [fat, setFat] = useState('');
  const [moisture, setMoisture] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const fatVal = parseFloat(fat);
    const moistureVal = parseFloat(moisture);

    if (isNaN(fatVal) || isNaN(moistureVal)) {
      setError('Por favor, ingresa valores válidos en ambos campos.');
      return;
    }
    if (moistureVal >= 100) {
      setError('El porcentaje de humedad debe ser menor a 100%.');
      setResult(null);
      return;
    }
    const dryMatter = 100 - moistureVal;
    const realFat = (fatVal / dryMatter) * 100;
    setResult(Math.round(realFat * 10) / 10);
  };

  const reset = () => {
    setFat('');
    setMoisture('');
    setResult(null);
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const share = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Calculadora de Materia Seca',
        text: `He calculado que la comida de mi perro tiene un ${result}% de grasa real. ¡Usa esta calculadora!`,
        url,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url);
      alert('Enlace copiado al portapapeles');
    }
  };

  const getWhatsAppLink = () => {
    if (result === null) return 'https://wa.me/34634359766';
    const message = `Hola Laura, acabo de usar tu calculadora de materia seca.\n\nMi resultado:\n📊 Grasa en etiqueta: ${fat}%\n💧 Humedad: ${moisture}%\n🔍 Grasa REAL en materia seca: ${result}%\n\n¿Podrías ayudarme con una recomendación personalizada para mi perro?`;
    return `https://wa.me/34634359766?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen font-['Montserrat'] bg-[#F8F6F3]">
      <main className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-10">
            <div className="text-4xl mb-4">🐾</div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Calculadora de Materia Seca
            </h1>
            <p className="text-[#3D7A5F] font-['Merriweather']">
              Descubre cuánta grasa realmente consume tu perro
            </p>
          </div>

          <div className="bg-[#1e3a5f] text-white p-6 rounded-2xl mb-8 shadow-lg">
            <p className="font-['Merriweather'] leading-relaxed">
              <span className="font-bold">¿Sabías que...</span> el porcentaje de grasa que ves en la etiqueta incluye el agua?
              Para saber cuánta grasa <span className="underline decoration-[#E89F4F] decoration-2 underline-offset-2">REALMENTE</span> consume tu perro, necesitas calcular en materia seca.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-[#E8E4DD]">
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-[#1e3a5f] mb-2 uppercase tracking-wide">
                  Porcentaje de grasa (Etiqueta)
                </label>
                <input
                  type="number"
                  value={fat}
                  onChange={(e) => setFat(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E4DD] focus:border-[#1e3a5f] focus:ring-0 outline-none transition-all text-lg font-['Merriweather'] text-[#1e3a5f]"
                  placeholder="Ej: 12"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1e3a5f] mb-2 uppercase tracking-wide">
                  Porcentaje de humedad (Etiqueta)
                </label>
                <input
                  type="number"
                  value={moisture}
                  onChange={(e) => setMoisture(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E4DD] focus:border-[#1e3a5f] focus:ring-0 outline-none transition-all text-lg font-['Merriweather'] text-[#1e3a5f]"
                  placeholder="Ej: 68"
                  min="0"
                  max="100"
                />
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 text-[#C85C5C] rounded-xl border border-red-100 flex items-center gap-2">
                <i className="ri-error-warning-line text-xl"></i>
                <span className="font-['Merriweather'] text-sm">{error}</span>
              </div>
            )}

            <button
              onClick={calculate}
              className="w-full bg-[#E89F4F] hover:bg-[#d68f45] text-white font-bold py-4 rounded-xl transition-all duration-300 mb-8 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              CALCULAR AHORA
            </button>

            {result !== null && (() => {
              const data = getResultData(result);
              return (
                <div className="animate-fade-in space-y-8">
                  <div className="bg-[#1e3a5f] text-white p-8 rounded-2xl text-center shadow-inner">
                    <p className="text-white/80 text-sm mb-2 uppercase tracking-wider">Grasa en materia seca</p>
                    <p className="text-6xl font-bold font-['Montserrat'] mb-2">{result}%</p>
                    <p className="text-white/90 font-['Merriweather'] text-sm">Esto es lo que tu perro REALMENTE consume</p>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-[#1e3a5f] bg-[#F8F6F3] p-4 rounded-xl">
                    <div className="text-center">
                      <p className="text-xs uppercase text-gray-500 mb-1">En la etiqueta</p>
                      <p className="text-xl font-bold">{fat}%</p>
                    </div>
                    <i className="ri-arrow-right-line text-xl text-[#E89F4F]"></i>
                    <div className="text-center">
                      <p className="text-xs uppercase text-gray-500 mb-1">Valor real</p>
                      <p className="text-xl font-bold">{result}%</p>
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl border-2 flex items-center justify-center gap-2 ${data.bgColor} ${data.borderColor} ${data.color}`}>
                    <span className="text-xl font-bold">{data.icon}</span>
                    <span className="font-bold uppercase tracking-wide">{data.title}</span>
                  </div>

                  <div className="bg-[#F8F6F3] p-6 rounded-xl border-l-4 border-[#1e3a5f]">
                    <p className="text-[#1e3a5f] font-['Merriweather'] leading-relaxed">{data.desc}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <a
                      href="https://calendly.com/laura-quintero-vet/llamada-gratuita-informacion"
                      target="_blank"
                      rel="noreferrer"
                      className="col-span-1 md:col-span-2 bg-[#E89F4F] hover:bg-[#d68f45] text-white font-bold py-4 px-6 rounded-xl text-center transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>📅</span> Reservar Consulta Gratuita
                    </a>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl text-center transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <i className="ri-whatsapp-line text-xl"></i> Consulta Rápida
                    </a>
                    <button
                      onClick={share}
                      className="bg-white hover:bg-gray-50 text-[#1e3a5f] border-2 border-[#1e3a5f] font-bold py-3 px-6 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                    >
                      <i className="ri-share-line text-xl"></i> Compartir
                    </button>
                    <button
                      onClick={reset}
                      className="col-span-1 md:col-span-2 text-gray-400 hover:text-[#1e3a5f] font-medium py-2 text-sm transition-colors flex items-center justify-center gap-1 mt-2"
                    >
                      <i className="ri-refresh-line"></i> Hacer otro cálculo
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </main>
    </div>
  );
}
