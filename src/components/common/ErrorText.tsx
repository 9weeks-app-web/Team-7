const ErrorText = ({
  errorMessage,
}: {
  errorMessage?: string;
}): JSX.Element => {
  return (
    <div className="flex gap-s-1">
      <img className="w-[14px] h-[14px]" src="./warn.svg" alt="warn" />
      <p className="input-info-waring">{errorMessage}</p>
    </div>
  );
};

export default ErrorText;
