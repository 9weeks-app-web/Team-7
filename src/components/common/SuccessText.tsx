const SuccessText = ({
  successMessage,
}: {
  successMessage?: string;
}): JSX.Element => {
  return (
    <div className="flex gap-s-1">
      <img className="w-[14px] h-[14px]" src="./success.svg" alt="success" />
      <p className="input-info-success">{successMessage}</p>
    </div>
  );
};

export default SuccessText;
