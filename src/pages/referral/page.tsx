import { useState, useRef } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

const FORMSPREE_URL = 'https://formspree.io/f/xeergyqw';
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_FILES = 5;
const ALLOWED_EXT = ['.pdf', '.jpg', '.jpeg', '.png'];

export default function ReferralPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});
  const [dragActive, setDragActive] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: File[]) => {
    setUploadError(null);
    let newFiles = [...selectedFiles];
    
    for (const f of files) {
      if (newFiles.length >= MAX_FILES) {
        setUploadError(`Máximo ${MAX_FILES} archivos permitidos.`);
        break;
      }
      const ext = '.' + f.name.split('.').pop()?.toLowerCase();
      if (!ALLOWED_EXT.includes(ext)) {
        setUploadError(`"${f.name}" no es un formato permitido. Solo PDF, JPG o PNG.`);
        continue;
      }
      if (f.size > MAX_FILE_SIZE) {
        setUploadError(`"${f.name}" supera el límite de 10 MB.`);
        continue;
      }
      if (newFiles.find(sf => sf.name === f.name && sf.size === f.size)) continue;
      newFiles.push(f);
    }
    setSelectedFiles(newFiles);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    if (!formRef.current) return false;
    const formData = new FormData(formRef.current);
    const requiredFields = ['clinica', 'veterinario', 'email', 'tutor', 'tutor_telefono', 'nombre_mascota', 'especie', 'raza', 'peso', 'edad', 'motivo', 'rgpd'];
    const newErrors: Record<string, boolean> = {};
    let isValid = true;

    requiredFields.forEach(field => {
      const val = formData.get(field);
      if (!val || (typeof val === 'string' && val.trim() === '')) {
        newErrors[field] = true;
        isValid = false;
      }
      if (field === 'email' && val && typeof val === 'string') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
          newErrors[field] = true;
          isValid = false;
        }
      }
    });

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = document.querySelector('.border-red-500');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(formRef.current!);
    
    // Add selected files manually if they are not in the FormData from the native input
    // In our case they are managed by state
    selectedFiles.forEach(file => {
      formData.append('archivos', file);
    });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3] font-['Montserrat']">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-br from-[#bad7f2]/20 to-[#f2bac9]/20 relative overflow-hidden text-center">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-[#f2bac9]/20 blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full bg-[#bad7f2]/30 blur-2xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-white text-[#f2bac9] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-sm mb-6">
            Para veterinarios
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-6 leading-tight">
            Deriva un caso de nutrición
          </h1>
          <p className="text-xl text-[#1e3a5f]/80 max-w-2xl mx-auto mb-10 leading-relaxed font-['Merriweather']">
            Envíame los datos del paciente y te respondo en menos de 48h con una valoración nutricional personalizada.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['📋 Respuesta en 48h', '🔒 Datos protegidos', '📎 Adjunta analíticas', '🐾 Perros y gatos'].map(pill => (
              <span key={pill} className="bg-white border border-[#E8E4DD] text-[#1e3a5f] text-sm font-medium px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-[800px] mx-auto pt-16 pb-24 px-4 md:px-6">
        {submitStatus === 'success' ? (
          <div className="bg-white border-2 border-[#9fe0c3] rounded-3xl p-10 text-center shadow-xl animate-fade-in-up">
            <div className="text-5xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Caso recibido correctamente</h2>
            <p className="text-xl text-[#1e3a5f]/80 leading-relaxed font-['Merriweather'] mb-10">
              He recibido los datos del paciente y te contactaré en menos de 48h.<br />
              Si tienes cualquier duda urgente, puedes escribirme directamente por WhatsApp.
            </p>
            <button 
              onClick={() => setSubmitStatus('idle')}
              className="bg-[#f2bac9] hover:bg-[#eb9eb2] text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all"
            >
              Enviar otro caso
            </button>
          </div>
        ) : (
          <>
            {submitStatus === 'error' && (
              <div className="bg-[#fef0f0] border-2 border-red-200 rounded-3xl p-8 text-center mb-10 shadow-lg animate-fade-in-up">
                <div className="text-4xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Algo no ha ido bien</h2>
                <p className="text-lg text-[#1e3a5f]/70 font-['Merriweather']">
                  Ha habido un problema al enviar el formulario. Por favor, inténtalo de nuevo o contáctame directamente por WhatsApp.
                </p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-10" noValidate>
              
              {/* Bloque 1: Centro remisor */}
              <div className="bg-white border-2 border-[#E8E4DD] rounded-3xl p-6 md:p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#E8E4DD]">
                  <div className="w-14 h-14 bg-[#bad7f2]/20 rounded-2xl flex items-center justify-center text-3xl">🏥</div>
                  <div>
                    <h3 className="font-bold text-2xl text-[#1e3a5f]">Centro remisor</h3>
                    <p className="text-base text-[#3D7A5F] font-['Merriweather']">Datos del veterinario que deriva el caso</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Nombre de la clínica</label>
                    <input 
                      type="text" 
                      name="clinica" 
                      placeholder="Clínica Veterinaria..." 
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.clinica ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    />
                    {formErrors.clinica && <span className="text-sm text-red-500 font-['Merriweather'] italic">Este campo es obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Veterinario remisor</label>
                    <input 
                      type="text" 
                      name="veterinario" 
                      placeholder="Nombre y apellidos" 
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.veterinario ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    />
                    {formErrors.veterinario && <span className="text-sm text-red-500 font-['Merriweather'] italic">Este campo es obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Email de contacto</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="correo@clinica.com" 
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.email ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    />
                    {formErrors.email && <span className="text-sm text-red-500 font-['Merriweather'] italic">Introduce un email válido</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Teléfono <span className="font-normal text-gray-400 capitalize ml-1 text-xs">(opcional)</span></label>
                    <input 
                      type="tel" 
                      name="telefono" 
                      placeholder="600 000 000" 
                      className="w-full bg-white border-2 border-[#E8E4DD] rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f]"
                    />
                  </div>
                </div>
              </div>

              {/* Bloque 2: Tutor */}
              <div className="bg-white border-2 border-[#E8E4DD] rounded-3xl p-6 md:p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#E8E4DD]">
                  <div className="w-14 h-14 bg-[#f2bac9]/20 rounded-2xl flex items-center justify-center text-3xl">👤</div>
                  <div>
                    <h3 className="font-bold text-2xl text-[#1e3a5f]">Datos del tutor</h3>
                    <p className="text-base text-[#3D7A5F] font-['Merriweather']">Propietario del paciente</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Nombre y apellidos</label>
                    <input 
                      type="text" 
                      name="tutor" 
                      placeholder="Nombre completo" 
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.tutor ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    />
                    {formErrors.tutor && <span className="text-sm text-red-500 font-['Merriweather'] italic">Este campo es obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Teléfono de contacto</label>
                    <input 
                      type="tel" 
                      name="tutor_telefono" 
                      placeholder="600 000 000" 
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.tutor_telefono ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    />
                    {formErrors.tutor_telefono && <span className="text-sm text-red-500 font-['Merriweather'] italic">Este campo es obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Email del tutor <span className="font-normal text-gray-400 capitalize ml-1 text-xs">(opcional)</span></label>
                    <input 
                      type="email" 
                      name="tutor_email" 
                      placeholder="tutor@email.com" 
                      className="w-full bg-white border-2 border-[#E8E4DD] rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f]"
                    />
                  </div>
                </div>
              </div>

              {/* Bloque 3: Paciente */}
              <div className="bg-white border-2 border-[#E8E4DD] rounded-3xl p-6 md:p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#E8E4DD]">
                  <div className="w-14 h-14 bg-[#bad7f2]/20 rounded-2xl flex items-center justify-center text-3xl">🐾</div>
                  <div>
                    <h3 className="font-bold text-2xl text-[#1e3a5f]">Paciente</h3>
                    <p className="text-base text-[#3D7A5F] font-['Merriweather']">Datos de la mascota</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Nombre</label>
                    <input 
                      type="text" 
                      name="nombre_mascota" 
                      placeholder="Nombre de la mascota" 
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.nombre_mascota ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    />
                    {formErrors.nombre_mascota && <span className="text-sm text-red-500 font-['Merriweather'] italic">Obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Especie</label>
                    <select 
                      name="especie" 
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none cursor-pointer transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.especie ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Perro">Perro</option>
                      <option value="Gato">Gato</option>
                    </select>
                    {formErrors.especie && <span className="text-sm text-red-500 font-['Merriweather'] italic">Selecciona una</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Raza</label>
                    <input 
                      type="text" 
                      name="raza" 
                      placeholder="Raza" 
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.raza ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    />
                    {formErrors.raza && <span className="text-sm text-red-500 font-['Merriweather'] italic">Obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Peso (kg)</label>
                    <input 
                      type="number" 
                      name="peso" 
                      placeholder="Ej: 8.5" 
                      step="0.1" 
                      min="0"
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.peso ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    />
                    {formErrors.peso && <span className="text-sm text-red-500 font-['Merriweather'] italic">Obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Edad</label>
                    <input 
                      type="text" 
                      name="edad" 
                      placeholder="Ej: 3 años" 
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.edad ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    />
                    {formErrors.edad && <span className="text-sm text-red-500 font-['Merriweather'] italic">Obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Sexo <span className="font-normal text-gray-400 capitalize ml-1 text-xs">(opcional)</span></label>
                    <select 
                      name="sexo" 
                      className="w-full bg-white border-2 border-[#E8E4DD] rounded-xl px-4 py-4 outline-none cursor-pointer transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f]"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Macho entero">Macho entero</option>
                      <option value="Macho castrado">Macho castrado</option>
                      <option value="Hembra entera">Hembra entera</option>
                      <option value="Hembra esterilizada">Hembra esterilizada</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Bloque 4: Información clínica */}
              <div className="bg-white border-2 border-[#E8E4DD] rounded-3xl p-6 md:p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#E8E4DD]">
                  <div className="w-14 h-14 bg-[#f2bac9]/20 rounded-2xl flex items-center justify-center text-3xl">📋</div>
                  <div>
                    <h3 className="font-bold text-2xl text-[#1e3a5f]">Información clínica</h3>
                    <p className="text-base text-[#3D7A5F] font-['Merriweather']">Motivo de derivación y contexto del caso</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Motivo de remisión</label>
                    <textarea 
                      name="motivo" 
                      rows={4}
                      placeholder="¿Cómo puede ayudar la nutrición en este caso? Describe el motivo principal de la derivación..." 
                      className={`w-full bg-white border-2 rounded-xl px-4 py-4 outline-none resize-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f] ${formErrors.motivo ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E8E4DD]'}`}
                    />
                    {formErrors.motivo && <span className="text-sm text-red-500 font-['Merriweather'] italic">Este campo es obligatorio al derivar un caso</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Pruebas realizadas <span className="font-normal text-gray-400 capitalize ml-1 text-xs">(opcional)</span></label>
                    <textarea 
                      name="pruebas" 
                      rows={3}
                      placeholder="Analíticas, ecografías, radiografías u otras pruebas realizadas..." 
                      className="w-full bg-white border-2 border-[#E8E4DD] rounded-xl px-4 py-4 outline-none resize-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f]"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest">Tratamientos administrados <span className="font-normal text-gray-400 capitalize ml-1 text-xs">(opcional)</span></label>
                    <textarea 
                      name="tratamientos" 
                      rows={3}
                      placeholder="Medicación actual, suplementos, dieta en curso..." 
                      className="w-full bg-white border-2 border-[#E8E4DD] rounded-xl px-4 py-4 outline-none resize-none transition-all font-['Merriweather'] text-lg text-[#1e3a5f] focus:border-[#1e3a5f]"
                    />
                  </div>
                </div>
              </div>

              {/* Bloque 5: Adjuntos */}
              <div className="bg-white border-2 border-[#E8E4DD] rounded-3xl p-6 md:p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#E8E4DD]">
                  <div className="w-14 h-14 bg-[#bad7f2]/20 rounded-2xl flex items-center justify-center text-3xl">📎</div>
                  <div>
                    <h3 className="font-bold text-2xl text-[#1e3a5f]">Documentación adjunta</h3>
                    <p className="text-base text-[#3D7A5F] font-['Merriweather']">Analíticas, ecografías, informes — PDF o imágenes</p>
                  </div>
                </div>

                <div 
                  className={`border-4 border-dashed rounded-3xl p-10 text-center cursor-pointer transition-all relative ${dragActive ? 'border-[#f2bac9] bg-[#f2bac9]/5' : 'border-[#E8E4DD] bg-[#F8F6F3] hover:border-[#f2bac9] hover:bg-[#f2bac9]/5'}`}
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    multiple 
                    accept=".pdf,.jpg,.jpeg,.png" 
                    className="hidden"
                    onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
                  />
                  <div className="text-5xl mb-6">📂</div>
                  <div className="text-xl font-bold text-[#1e3a5f] mb-2">Arrastra los archivos aquí o selecciona</div>
                  <div className="text-sm text-[#3D7A5F] font-['Merriweather'] leading-relaxed">
                    PDF, JPG, PNG · Máximo 10 MB por archivo · Hasta 5 archivos
                  </div>
                </div>

                {uploadError && <div className="text-sm text-red-500 mt-4 font-['Merriweather'] italic bg-red-50 p-4 rounded-xl border border-red-100">{uploadError}</div>}
                
                {selectedFiles.length > 0 && (
                  <div className="mt-10 flex flex-col gap-4">
                    <p className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest px-2">Archivos seleccionados</p>
                    {selectedFiles.map((file, idx) => (
                      <div key={`${file.name}-${idx}`} className="flex items-center justify-between bg-[#F8F6F3] border-2 border-[#E8E4DD] rounded-2xl p-5 text-base font-['Merriweather'] group hover:border-[#f2bac9] transition-all">
                        <div className="flex items-center gap-5 overflow-hidden">
                          <span className="text-2xl">{file.type === 'application/pdf' ? '📄' : '🖼️'}</span>
                          <div className="flex flex-col">
                            <span className="truncate text-[#1e3a5f] font-bold">{file.name}</span>
                            <span className="text-[#3D7A5F] text-xs">{(file.size / 1024 / 1024).toFixed(1)} MB</span>
                          </div>
                        </div>
                        <button 
                          type="button" 
                          onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                          className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                          title="Eliminar archivo"
                        >
                          <i className="ri-close-line text-2xl"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-8 flex gap-3 p-5 bg-[#bad7f2]/10 rounded-2xl border border-[#bad7f2]/20">
                  <div className="text-2xl text-[#1e3a5f]">💡</div>
                  <p className="text-sm text-[#3D7A5F] leading-relaxed italic font-['Merriweather']">
                    Si tienes mucha documentación, puedes compartirla por WeTransfer e incluir el enlace en el campo de "pruebas realizadas".
                  </p>
                </div>
              </div>

              {/* RGPD */}
              <div className="bg-white border-2 border-[#E8E4DD] rounded-3xl p-6 md:p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#E8E4DD]">
                  <div className="w-14 h-14 bg-[#f2bac9]/20 rounded-2xl flex items-center justify-center text-3xl">🔒</div>
                  <div>
                    <h3 className="font-bold text-2xl text-[#1e3a5f]">Protección de datos</h3>
                    <p className="text-base text-[#3D7A5F] font-['Merriweather']">Compromiso ético y legal</p>
                  </div>
                </div>
                
                <div className="bg-[#F8F6F3] border-2 border-[#E8E4DD] rounded-3xl p-6 md:p-10">
                  <div className="flex items-start gap-5">
                    <div className="relative flex items-center h-7">
                      <input 
                        type="checkbox" 
                        name="rgpd" 
                        id="rgpd"
                        className={`w-7 h-7 rounded border-[#E8E4DD] text-[#f2bac9] focus:ring-[#f2bac9] cursor-pointer transition-all ${formErrors.rgpd ? 'ring-4 ring-red-100 border-red-500' : ''}`}
                      />
                    </div>
                    <label htmlFor="rgpd" className="text-lg text-[#1e3a5f] leading-relaxed cursor-pointer font-['Merriweather'] font-medium">
                      He informado al propietario de que sus datos y los de su mascota serán compartidos con Laura Quintero para recibir asesoramiento nutricional. Acepto la <a href="/politica-de-privacidad" target="_blank" className="text-[#f2bac9] font-bold hover:underline decoration-2">política de privacidad</a>.
                    </label>
                  </div>
                  <div className="mt-8 pt-8 border-t border-[#E8E4DD] text-sm text-[#3D7A5F] leading-relaxed font-['Merriweather']">
                    Los datos personales del tutor y del paciente se tratarán estrictamente de acuerdo con el RGPD y solo se utilizarán para la valoración nutricional del caso derivado. No se cederán a terceros ni se usarán con fines comerciales.
                  </div>
                </div>
                {formErrors.rgpd && <span className="text-sm text-red-500 mt-4 block font-['Merriweather'] text-center font-bold">⚠️ Es necesario marcar esta casilla antes de enviar el caso</span>}
              </div>

              <div className="pt-10">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#f2bac9] hover:bg-[#eb9eb2] disabled:bg-[#E8E4DD] disabled:text-gray-400 text-white font-bold py-5 rounded-2xl shadow-xl shadow-[#f2bac9]/20 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-4 text-xl uppercase tracking-widest"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/40 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando caso...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar derivación</span>
                      <span className="text-2xl">🐾</span>
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-[#3D7A5F] mt-6 font-['Merriweather'] italic leading-relaxed">
                  Recibirás una respuesta en tu email de contacto en menos de 48h hábiles.
                </p>
              </div>

            </form>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
