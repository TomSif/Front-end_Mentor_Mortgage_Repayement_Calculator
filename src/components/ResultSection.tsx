import { Result } from "../hooks/useMortgageCalculator";

interface ResultSectionProps {
  result: Result | null;
}
const ResultSection = ({ result }: ResultSectionProps) => {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  return (
    <section
      aria-live="polite"
      className="px-6 py-8 bg-slate-900  md:rounded-b-lg md:p-10 xl:rounded-tl-0 xl:rounded-bl-[5rem] xl:rounded-r-2xl flex items-center justify-center flex-1 min-w-0"
    >
      {result === null ? (
        <article className="flex flex-col items-center justify-center  gap-4 w-full">
          <div className="w-48  h-48 ">
            <img
              className="aspect-square object-cover"
              src="/assets/images/illustration-empty.svg"
              alt=""
            />
          </div>
          <h2 className="text-white text-preset-2 text-center">
            Result shown here
          </h2>
          <p className="text-preset-4 text-slate-300 xl:text-center">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </article>
      ) : (
        <article className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-preset-2 text-white">Your Result</h2>
            <p className="text-preset-4 text-slate-300">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
          </div>
          <div className="bg-black/25 border-t-2 border-lime rounded-xl py-6 px-4 w-full">
            <div className="flex flex-col gap-2 pb-4 xl:pb-8 border border-transparent border-b-slate-400/25">
              <h3 className="text-preset-4 text-slate-300">
                Your monthly repayments
              </h3>
              <data
                className="text-lime text-preset-1-mobile md:text-preset-1"
                value={result.monthlyPayment.toFixed(2)}
              >
                {formatter.format(result.monthlyPayment)}
              </data>
            </div>
            <div className="flex flex-col gap-2 pt-4 xl:pt-8">
              <h4 className="text-preset-4 text-slate-300">
                Total you'll repay over the term
              </h4>
              <data
                className="text-white text-preset-2"
                value={result.totalRepayment.toFixed(2)}
              >
                {formatter.format(result.totalRepayment)}
              </data>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default ResultSection;
