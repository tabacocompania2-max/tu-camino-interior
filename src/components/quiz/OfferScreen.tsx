import { useState, useEffect } from 'react';

interface OfferScreenProps {
  name: string;
  mainDifficulty: string;
  mainGoal: string;
  commitment: string;
}

const faqs = [
  {
    q: '¿Ya intenté otras cosas antes y no funcionaron, por qué esto sería diferente?',
    a: 'Esta guía no es un consejo genérico. Está construida a partir de tus respuestas reales, enfocada en tus patrones específicos. Además, combina principios de psicología cognitiva con un enfoque práctico paso a paso.',
  },
  {
    q: '¿No tengo mucho tiempo, me va a servir igual?',
    a: 'La guía está diseñada para adaptarse a tu disponibilidad. Incluso con 5 minutos al día puedes avanzar. Lo importante no es el tiempo, sino la consistencia.',
  },
  {
    q: '¿Es realmente personalizada o es lo mismo para todos?',
    a: 'Tu guía se genera a partir de tus respuestas específicas. El diagnóstico, las recomendaciones y el plan de acción son únicos para tu perfil emocional.',
  },
  {
    q: '¿Qué pasa si no funciona para mí?',
    a: 'Tienes 30 días de garantía total. Si no sientes un cambio real, te devolvemos cada peso. Sin preguntas, sin complicaciones.',
  },
];

const testimonials = [
  { name: 'María C.', country: 'México', text: 'Llevaba años sintiéndome perdida. Esta guía me ayudó a entender mis patrones y por primera vez siento que avanzo de verdad.', avatar: '👩🏻' },
  { name: 'Andrés R.', country: 'Colombia', text: 'Pensé que era otro quiz más, pero el diagnóstico fue increíblemente preciso. Las herramientas prácticas marcaron la diferencia.', avatar: '👨🏽' },
  { name: 'Valentina L.', country: 'Argentina', text: 'En 3 semanas logré lo que no pude en meses de buscar respuestas por mi cuenta. Lo recomiendo 100%.', avatar: '👩🏽' },
];

export default function OfferScreen({ name, mainDifficulty, mainGoal, commitment }: OfferScreenProps) {
  const [timeLeft, setTimeLeft] = useState(12 * 60);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div className="max-w-lg mx-auto px-5 py-8 animate-slide-up">
      {/* Before/After */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex flex-col items-center">
          <span className="text-5xl">😔</span>
          <span className="text-xs text-muted-foreground mt-1">Antes</span>
        </div>
        <div className="flex-1 h-0.5 quiz-gradient rounded-full" />
        <div className="flex flex-col items-center">
          <span className="text-5xl">✨</span>
          <span className="text-xs text-muted-foreground mt-1">Después</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-foreground text-center mb-4">
        Tu guía personalizada está lista, {name}
      </h1>

      {/* Summary */}
      <div className="bg-card rounded-2xl p-5 quiz-shadow mb-6 space-y-3">
        <div className="flex items-start gap-3">
          <span className="text-lg">🎯</span>
          <div>
            <p className="text-xs text-muted-foreground">Dificultad principal</p>
            <p className="font-semibold text-foreground text-sm">{mainDifficulty}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-lg">💫</span>
          <div>
            <p className="text-xs text-muted-foreground">Tu meta</p>
            <p className="font-semibold text-foreground text-sm">{mainGoal}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-lg">⏰</span>
          <div>
            <p className="text-xs text-muted-foreground">Compromiso diario</p>
            <p className="font-semibold text-foreground text-sm">{commitment}</p>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="bg-accent rounded-2xl p-4 mb-8 text-center">
        <p className="text-sm text-muted-foreground mb-1">Tu descuento está reservado por:</p>
        <p className="text-3xl font-bold text-primary animate-count-pulse">
          {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
        </p>
      </div>

      {/* Plans */}
      <div className="space-y-4 mb-8">
        {/* Plan 1 */}
        <button
          onClick={() => setSelectedPlan(0)}
          className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
            selectedPlan === 0 ? 'border-primary quiz-shadow-lg' : 'border-border'
          } bg-card`}
        >
          <p className="font-bold text-foreground">Guía esencial</p>
          <p className="text-sm text-muted-foreground mt-1">Solo la guía PDF, acceso inmediato</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-sm text-muted-foreground line-through">$29</span>
            <span className="text-2xl font-bold text-primary">$9</span>
          </div>
        </button>

        {/* Plan 2 - Featured */}
        <button
          onClick={() => setSelectedPlan(1)}
          className={`w-full text-left p-5 rounded-2xl border-2 transition-all relative ${
            selectedPlan === 1 ? 'border-primary quiz-shadow-lg' : 'border-primary/50'
          } bg-card`}
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 quiz-gradient text-primary-foreground text-xs font-semibold rounded-full">
            Más completo
          </span>
          <p className="font-bold text-foreground">Guía + comunidad</p>
          <p className="text-sm text-muted-foreground mt-1">Guía completa + comunidad 3 meses + soporte</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-sm text-muted-foreground line-through">$67</span>
            <span className="text-2xl font-bold text-primary">$19</span>
          </div>
        </button>

        {/* Plan 3 */}
        <button
          onClick={() => setSelectedPlan(2)}
          className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
            selectedPlan === 2 ? 'border-primary quiz-shadow-lg' : 'border-border'
          } bg-card`}
        >
          <p className="font-bold text-foreground">Transformación total</p>
          <p className="text-sm text-muted-foreground mt-1">Todo + comunidad de por vida + actualizaciones</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-sm text-muted-foreground line-through">$127</span>
            <span className="text-2xl font-bold text-primary">$37</span>
          </div>
        </button>
      </div>

      {/* CTA */}
      <button className="w-full py-4 rounded-xl quiz-gradient text-primary-foreground font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity mb-10">
        Quiero mi guía personalizada
      </button>

      {/* Benefits */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-foreground mb-4">Lo que vas a lograr</h3>
        <div className="space-y-3">
          {[
            'Identificar y romper tus patrones emocionales',
            'Reducir la ansiedad y encontrar calma interior',
            'Fortalecer tu autoestima desde adentro',
            'Mejorar tus relaciones personales',
            'Descubrir tu propósito y dirección de vida',
            'Crear hábitos que nutran tu bienestar',
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-primary mt-0.5">✓</span>
              <span className="text-foreground text-sm">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof Stats */}
      <div className="grid grid-cols-3 gap-3 mb-10">
        <div className="bg-card rounded-xl p-3 text-center quiz-shadow">
          <p className="text-xl font-bold text-primary">83%</p>
          <p className="text-xs text-muted-foreground mt-1">mejoró su bienestar en 6 semanas</p>
        </div>
        <div className="bg-card rounded-xl p-3 text-center quiz-shadow">
          <p className="text-xl font-bold text-primary">77%</p>
          <p className="text-xs text-muted-foreground mt-1">sintió cambios desde la primera semana</p>
        </div>
        <div className="bg-card rounded-xl p-3 text-center quiz-shadow">
          <p className="text-xl font-bold text-primary">50K+</p>
          <p className="text-xs text-muted-foreground mt-1">personas en Latinoamérica</p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-foreground mb-4">Preguntas frecuentes</h3>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden quiz-shadow">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-4 flex items-center justify-between"
              >
                <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                <span className={`text-muted-foreground transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-foreground mb-4">Lo que dicen quienes ya empezaron</h3>
        <div className="space-y-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-4 quiz-shadow">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{t.avatar}</span>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.country}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/80 italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee */}
      <div className="bg-accent rounded-2xl p-6 text-center mb-8">
        <span className="text-4xl mb-3 block">🛡️</span>
        <h4 className="font-bold text-foreground mb-2">Garantía total de 30 días</h4>
        <p className="text-sm text-muted-foreground">
          30 días o te devolvemos cada peso. Sin preguntas.
        </p>
      </div>

      {/* Final CTA */}
      <button className="w-full py-4 rounded-xl quiz-gradient text-primary-foreground font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity mb-6">
        Quiero mi guía personalizada
      </button>

      {/* Payment methods */}
      <div className="text-center mb-8">
        <p className="text-xs text-muted-foreground mb-2">Métodos de pago aceptados</p>
        <div className="flex justify-center gap-4 text-2xl opacity-60">
          <span>💳</span>
          <span className="text-sm font-semibold text-muted-foreground self-center">Visa</span>
          <span className="text-sm font-semibold text-muted-foreground self-center">Mastercard</span>
          <span className="text-sm font-semibold text-muted-foreground self-center">PayPal</span>
        </div>
      </div>
    </div>
  );
}
