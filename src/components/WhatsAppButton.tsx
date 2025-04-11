
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/2348012345678"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <Button className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 text-white"
        >
          <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 13.5997 2.40211 15.1116 3.10489 16.4525L2.05176 21.1871C1.95856 21.5353 2.05449 21.9079 2.30159 22.1863C2.54869 22.4646 2.91318 22.5986 3.2699 22.5337L8.25249 21.5295C9.57028 22.1953 11.0542 22.5755 12.6147 22.5989L12.001 22.6C17.5239 22.6 21.001 18.1229 21.001 12.6V12C21.001 6.47715 17.5239 2 12.001 2ZM17.0793 15.7508C16.8408 16.3597 15.868 16.8564 15.1039 16.9953C14.5778 17.0891 13.8705 17.165 11.9947 16.5557C9.58043 15.7652 8.02337 13.3496 7.87358 13.1549C7.73064 12.9603 6.84302 11.7763 6.84302 10.5546C6.84302 9.33288 7.45344 8.75635 7.73475 8.45331C7.97087 8.2024 8.35546 8.086 8.72632 8.086C8.83838 8.086 8.93866 8.09183 9.02716 8.09591C9.29141 8.107 9.42266 8.12392 9.59404 8.5105C9.8058 8.98635 10.2853 10.2081 10.3568 10.3642C10.4282 10.5203 10.4759 10.7119 10.381 10.919C10.2914 11.1262 10.2147 11.2205 10.0587 11.4033C9.90268 11.586 9.73456 11.7279 9.57843 11.923C9.43549 12.0939 9.27551 12.2765 9.45859 12.5879C9.64167 12.8993 10.0863 13.6597 10.764 14.2629C11.6278 15.0363 12.3301 15.3357 12.6695 15.4789C12.9175 15.5869 13.2149 15.5653 13.4037 15.3735C13.6405 15.1309 13.9329 14.7466 14.2301 14.3673C14.4482 14.0899 14.7243 14.0501 15.0156 14.1581C15.3128 14.2602 16.5258 14.8557 16.8487 15.0183C17.1716 15.1809 17.3876 15.2576 17.459 15.3834C17.5305 15.5091 17.5305 16.0538 17.0793 15.7508Z"></path>
        </svg>
      </Button>
    </a>
  );
};

export default WhatsAppButton;
