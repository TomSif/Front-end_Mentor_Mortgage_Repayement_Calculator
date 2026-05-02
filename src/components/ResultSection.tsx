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
      className="xl:rounded-tl-0 flex min-w-0 flex-1 items-center justify-center bg-slate-900 px-6 py-8 md:rounded-b-lg md:p-10 xl:rounded-r-2xl xl:rounded-bl-[5rem]"
    >
      {result === null ? (
        <article className="flex w-full flex-col items-center justify-center gap-4">
          <div className="h-48 w-48">
            <img
              className="aspect-square object-cover"
              src="/assets/images/illustration-empty.svg"
              alt=""
            />
          </div>
          <h2 className="text-preset-2 text-center text-white">
            Result shown here
          </h2>
          <p className="text-preset-4 text-slate-300 xl:text-center">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </article>
      ) : (
        <article className="flex w-full flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-preset-2 text-white">Your Result</h2>
            <p className="text-preset-4 text-slate-300">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
          </div>
          <div className="border-lime w-full rounded-xl border-t-2 bg-black/25 px-4 py-6">
            <div className="flex flex-col gap-2 border border-transparent border-b-slate-400/25 pb-4 xl:pb-8">
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
                className="text-preset-2 text-white"
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
