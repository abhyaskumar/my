import { useEffect } from "react";

const AdmissionForm = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(
        "https://docs.google.com/forms/d/e/FORM_ID/viewform",
        "_blank",
        "noopener,noreferrer"
      );
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <p className="text-gray-700 text-sm md:text-base">
          Opening admission form in a new tab…
        </p>

        <p className="text-xs text-gray-500 mt-2">
          If it doesn’t open automatically,
          <a
            href="https://forms.gle/PaNjfMk68FSKmaPE6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 ml-1 underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdmissionForm;
