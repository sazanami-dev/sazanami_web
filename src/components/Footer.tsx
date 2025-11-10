import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="w-full border-t border-neutral-200 bg-white/70 backdrop-blur-sm dark:bg-neutral-700 dark:border-neutral-700">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/sazanami_dev-white.svg"
              alt="sazanami_dev_logo_footer"
              width={200}
              height={50}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-14">
            <p className="md:w-2/3 text-md leading-relaxed text-neutral-600 dark:text-neutral-300">
              さざなみ開発は技術を楽しむコミュニティです。勉強会・ハッカソン・LTを通して技術力向上と交流を促進しています。
            </p>
            <div className="flex flex-col gap-3 md:w-1/3">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Follow
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/sazanami-dev"
                  aria-label="GitHub"
                  className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  target="_blank"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.36 3.44 9.9 8.2 11.5.6.12.82-.27.82-.6l-.02-2.1c-3.34.75-4.05-1.66-4.05-1.66-.54-1.4-1.32-1.78-1.32-1.78-1.08-.78.08-.76.08-.76 1.2.09 1.84 1.27 1.84 1.27 1.06 1.9 2.78 1.35 3.45 1.03.1-.8.42-1.35.76-1.66-2.67-.32-5.48-1.4-5.48-6.2 0-1.37.46-2.48 1.24-3.36-.12-.32-.54-1.62.12-3.38 0 0 1-.33 3.3 1.27a11 11 0 0 1 6 0c2.3-1.6 3.3-1.27 3.3-1.27.66 1.76.24 3.06.12 3.38.78.88 1.24 1.99 1.24 3.36 0 4.82-2.82 5.88-5.5 6.2.42.38.8 1.12.8 2.26l-.02 3.35c0 .33.22.72.82.6 4.76-1.6 8.2-6.14 8.2-11.5A12 12 0 0 0 12 .5Z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/sazanami_dev"
                  aria-label="X"
                  className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  target="_blank"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.18 3h3.6l-7.86 9.02L22.44 21h-5.95l-4.66-6-5.34 6H2.9l8.4-9.44L3 3h6.05l4.2 5.4L17.18 3Z"/>
                  </svg>
                </a>
                <a
                  href="mailto:sazanami-dev@trident.ac.jp"
                  aria-label="Mail"
                  className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  target="_blank"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.3-.5 7.2 5.4 7.2-5.4H4.3Zm15.4 2.1-6.9 5.17a1.5 1.5 0 0 1-1.9 0L4 7.1v10.9c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V7.1Z"/>
                  </svg>
                </a>
              </div>
            </div>
        </div>

        <div className="text-xs text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row gap-2 sm:justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
          <span>&copy; {year} さざなみ開発</span>
        </div>
      </div>
    </footer>
  );
}; 