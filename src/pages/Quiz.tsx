import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSitePreferences } from '../context/SitePreferences';

export function Quiz() {
  const [step, setStep] = useState(0);
  const { t } = useSitePreferences();
  const questions = ['questionApartment', 'questionTime', 'questionTemperament', 'questionAffection', 'questionGrooming'] as const;

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 min-h-[60vh]">
      <h1 className="text-4xl text-forest mb-8 text-center">{t('quizTitle')}</h1>
      {step < questions.length ? (
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 rounded-3xl shadow-soft">
          <p className="text-sm text-gold mb-2">{t('question')} {step + 1} / {questions.length}</p>
          <h2 className="text-2xl text-forest mb-6">{t(questions[step])}</h2>
          <div className="space-y-3">
            <button onClick={() => setStep(step + 1)} className="w-full text-left p-4 rounded-xl border border-forest/10 hover:border-gold hover:bg-cream transition">{t('optionCalm')}</button>
            <button onClick={() => setStep(step + 1)} className="w-full text-left p-4 rounded-xl border border-forest/10 hover:border-gold hover:bg-cream transition">{t('optionActive')}</button>
          </div>
        </motion.div>
      ) : (
        <div className="bg-white p-8 rounded-3xl shadow-soft text-center">
          <h2 className="text-2xl text-forest mb-4">{t('result')}</h2>
          <p className="text-ink/70 mb-6">{t('resultDescription')}</p>
          <button onClick={() => setStep(0)} className="text-gold font-semibold">{t('restart')}</button>
        </div>
      )}
    </div>
  );
}