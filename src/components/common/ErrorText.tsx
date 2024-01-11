const ErrorText = ({
  errorMessage,
}: {
  errorMessage?: string;
}): JSX.Element => {
  return (
    <div className="flex gap-s-1">
      <img className="w-[14px] h-[14px]" src="/warn.svg" alt="warn" />
      <pre className="input-info-waring font-sans">{errorMessage}</pre>
    </div>
  );
};

export default ErrorText;
