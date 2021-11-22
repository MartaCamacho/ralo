import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-left-side">
        <Image
                className="logo"
                src="/images/logo.jpg"
                alt="content"
                width="45"
                height="45"
              />
          <span className="">rALo</span>
        <p className="">
          © {new Date().getFullYear()} —
          <a
            href="https://www.instagram.com/arrobaralo/"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @arrobaralo
          </a>
        </p>
        </div>
        <span className="footer-social">
          <a
            className=""
            href="https://www.instagram.com/arrobaralo/"
            target="_blank" rel="noreferrer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-gray-500"
            href="mailto:yosoyralo@gmail.com"
            target="_blank" rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          </a>
        </span>
    </footer>
  );
};

export default Footer;
