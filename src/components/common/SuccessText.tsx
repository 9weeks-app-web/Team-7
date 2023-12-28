const SuccessText = ({
  successMessage,
}: {
  successMessage?: string;
}): JSX.Element => {
  return (
    <div className="flex gap-s-1">
      <img className="w-[14px] h-[14px]" src="./success.svg" alt="success" />
      <div>
        <pre className="input-info-success font-sans">{successMessage}</pre>
      </div>
    </div>
  );
};

export default SuccessText;
