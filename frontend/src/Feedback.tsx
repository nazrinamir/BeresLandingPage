// components/SuggestionsSection.tsx
import { useTranslation } from "./lang/useTranslation";

const Feedback = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24">
      <div className="text-center px-4">
        <h3 className="text-xl md:text-2xl font-semibold !text-white mb-4">
          {t('feedback.title')}
        </h3>
        <a
          href="https://your-feedback-form-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm md:text-base"
        >
          {t('feedback.linkText')}
        </a>
      </div>
    </section>
  );
};

export default Feedback;
