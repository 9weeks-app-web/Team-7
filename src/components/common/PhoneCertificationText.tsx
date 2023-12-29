interface PhoneCertificationTextProps {
  phoneCertificationText: string;
}

const PhoneCertificationText = ({
  phoneCertificationText,
}: PhoneCertificationTextProps) => {
  return (
    <pre className="text-xs text-neutral-70 font-sans">
      {phoneCertificationText}
    </pre>
  );
};

export default PhoneCertificationText;
