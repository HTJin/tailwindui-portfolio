import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'

function GmailIcon(props) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M55,10H9c-2.209,0-4,1.791-4,4v34c0,2.209,1.791,4,4,4h46c2.209,0,4-1.791,4-4V14C59,11.791,57.209,10,55,10z M55,45.738 C54.954,47,53.901,48,52.618,48H49.5L51,21L32,33L13,22l1.5,26h-3.118C10.099,48,9.046,47,9,45.738V16.289 c0-1.25,1.03-2.263,2.3-2.263h1.2L32,29l19.5-14.974h1.2c1.27,0,2.3,1.013,2.3,2.263V45.738z" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function ResumeIcon(props) {
  return (
    <svg
      viewBox="0 0 256 256"
      aria-hidden="true"
      fill="currentColor"
      {...props}
    >
      <path
        d="M212.09 38.96v156.03l-10.05 10.05c-3.35 3.34-9.06 3.59-12.46.3-3.52-3.4-3.55-9.01-.11-12.46l11.05-11.05c3.07-3.07 3.25-8.07.24-11.2-3.09-3.26-8.23-3.28-11.36-.14l-23.35 23.33c-7.08 7.09-9.46 14.79-9.54 23.64H99.49c-.08-8.85-2.46-16.55-9.54-23.64L66.6 170.49c-3.13-3.14-8.27-3.12-11.36.14-3.01 3.13-2.83 8.13.24 11.2l11.05 11.05c3.44 3.45 3.41 9.06-.11 12.46-3.4 3.29-9.11 3.04-12.46-.3l-9.05-9.05V7.62h135.84l31.34 31.34z"
        fill="#EFEFEF"
      />
      <path
        d="M212.09 186.5v8.49l-10.05 10.05c-3.35 3.34-9.06 3.59-12.46.3-3.52-3.4-3.55-9.01-.11-12.46l11.05-11.05c3.07-3.07 3.25-8.07.24-11.2-3.09-3.26-8.23-3.28-11.36-.14l-23.35 23.33c-7.08 7.09-9.46 14.79-9.54 23.64h-6v-.05c.1-11.369 3.678-20.218 11.29-27.83l23.36-23.33c5.58-5.6 14.61-5.38 19.95.25 5.19 5.39 5.04 14.18-.35 19.57l-11.05 11.05a2.735 2.735 0 0 0 .04 3.9c1.01.99 2.99.83 4.05-.23l14.29-14.29zM105.49 217.41v.05h-6c-.08-8.85-2.46-16.55-9.54-23.64L66.6 170.49c-3.13-3.14-8.27-3.12-11.36.14-3.01 3.13-2.83 8.13.24 11.2l11.05 11.05c3.44 3.45 3.41 9.06-.11 12.46-3.4 3.29-9.11 3.04-12.46-.3l-9.05-9.05v-8.48L58.2 200.8c1.05 1.04 3.03 1.21 4.05.23a2.738 2.738 0 0 0 .03-3.91l-11.04-11.05c-5.39-5.39-5.54-14.18-.32-19.6 5.26-5.55 14.29-5.87 19.93-.22l23.34 23.33c7.61 7.61 11.2 16.46 11.3 27.83z"
        fill="#AFAFAF"
      />
      <circle cx="87.875" cy="55.04" r="31.75" fill="#F0C020" />
      <path
        d="M99.5 248.38H56.75v-11.49L9.91 190.04a9.533 9.533 0 0 1-2.81-6.77l-.32-39.08c0-4.82 3.91-8.72 8.73-8.73 4.81 0 8.72 3.91 8.72 8.73l.32 28.33c0 2.028.824 3.924 2.19 5.29l18.17 18.18 9.05 9.05c3.35 3.34 9.06 3.59 12.46.3 3.52-3.4 3.55-9.01.11-12.46l-11.05-11.05c-3.07-3.07-3.25-8.07-.24-11.2 3.09-3.26 8.23-3.28 11.36-.14l23.35 23.33c7.08 7.09 9.46 14.79 9.54 23.64.02.29.01 30.62.01 30.92zM249.22 144.19l-.32 39.08c0 2.55-1.01 4.98-2.81 6.77l-46.84 46.85v11.49H156.5c0-.3-.01-30.63.01-30.92.08-8.85 2.46-16.55 9.54-23.64l23.35-23.33c3.13-3.14 8.27-3.12 11.36.14 3.01 3.13 2.83 8.13-.24 11.2l-11.05 11.05c-3.44 3.45-3.41 9.06.11 12.46 3.4 3.29 9.11 3.04 12.46-.3l10.05-10.05 17.17-17.18a7.492 7.492 0 0 0 2.19-5.29l.32-28.33c0-4.82 3.91-8.73 8.72-8.73 4.82.01 8.73 3.91 8.73 8.73zM86.329 75.202c-7.233 0-13.096-5.863-13.096-13.096V51.178h26.191v10.929c0 7.232-5.863 13.095-13.095 13.095z"
        fill="#FFB69F"
      />
      <path
        d="m101.73 34.878-5.65 2.949a10.16 10.16 0 0 1-4.702 1.153H79.276c-4.201 0-7.403 3.76-6.735 7.907l.692 4.292h26.191a14.298 14.298 0 0 0 2.437-16.029l-.131-.272z"
        fill="#7C7B7A"
      />
      <path
        d="M92.346 243.724a2.5 2.5 0 0 1-2.5-2.5v-4.388a2.5 2.5 0 1 1 5 0v4.388a2.5 2.5 0 0 1-2.5 2.5zm0-14.389a2.5 2.5 0 0 1-2.5-2.5v-8.837c0-7.54-1.948-12.565-6.723-17.346l-23.358-23.34a2.5 2.5 0 1 1 3.533-3.537l23.36 23.342c5.663 5.669 8.188 12.109 8.188 20.881v8.837a2.5 2.5 0 0 1-2.5 2.5zM192.095 243.724a2.5 2.5 0 0 1-2.5-2.5v-7.301c0-.663.264-1.299.732-1.768l48.953-48.953.185-27.034a2.5 2.5 0 0 1 2.5-2.48h.021a2.5 2.5 0 0 1 2.479 2.52l-.217 27.025c0 1.331-.51 2.583-1.435 3.505l-48.219 48.219v6.266a2.499 2.499 0 0 1-2.499 2.501zm49.95-95.036h-.02a2.5 2.5 0 0 1-2.48-2.52l.016-2a2.5 2.5 0 0 1 2.5-2.48h.02a2.5 2.5 0 0 1 2.48 2.52l-.016 2a2.5 2.5 0 0 1-2.5 2.48z"
        fill="#FBE0E2"
      />
      <path d="M60.62 71.53c-1.146.828-1.353 2.419-.561 3.49.798 1.127 2.396 1.37 3.48.57a2.496 2.496 0 0 0 .58-3.48v-.01c-.779-1.07-2.409-1.34-3.499-.57z" />
      <path d="M87.87 20.79c-23.258 0-39.638 22.653-32.641 44.64.41 1.28 1.84 2.03 3.141 1.62 1.278-.405 2.06-1.799 1.62-3.14-6.001-18.857 8.23-38.083 27.88-38.12 16.1.03 29.229 13.15 29.25 29.25-.021 16.1-13.15 29.22-29.25 29.25-6.271 0-12.25-1.96-17.301-5.66-1.069-.8-2.71-.54-3.489.53a2.502 2.502 0 0 0 .529 3.5c5.9 4.34 12.91 6.63 20.261 6.63 18.935 0 34.25-15.316 34.25-34.25 0-18.934-15.314-34.25-34.25-34.25z" />
      <path d="m4.28 144.19.319 39.1c0 3.17 1.29 6.28 3.55 8.52l46.101 46.12v10.45a2.5 2.5 0 0 0 5 0v-11.49c0-.67-.26-1.29-.73-1.77l-46.84-46.85a7.003 7.003 0 0 1-2.08-5l-.319-39.1c0-3.42 2.789-6.2 6.239-6.21 3.42.01 6.2 2.8 6.21 6.23l.32 28.36a9.93 9.93 0 0 0 2.92 7.03l27.22 27.23c4.342 4.321 11.573 4.555 15.971.33 4.455-4.312 4.618-11.543.14-16.02l-11.05-11.06c-2.045-2.044-2.328-5.507-.21-7.69l.02-.02c2.103-2.226 5.603-2.257 7.771-.09l6.5 6.49c.939.94 2.59.94 3.529 0a2.484 2.484 0 0 0 0-3.54l-6.489-6.49c-4.239-4.237-10.979-3.974-14.92.17h-.011c-3.946 4.098-3.776 10.644.271 14.71l11.05 11.05a6.237 6.237 0 0 1-.08 8.89c-2.39 2.325-6.552 2.128-8.95-.27l-8.319-8.322V10.12h130.84v28.84a2.5 2.5 0 0 0 2.5 2.5h28.84V69.2a2.5 2.5 0 0 0 5 0V38.96c0-.685-.324-1.356-.73-1.77L182.52 5.85a2.641 2.641 0 0 0-1.77-.73H44.91a2.503 2.503 0 0 0-2.5 2.5v182.326l-13.9-13.906a5.007 5.007 0 0 1-1.46-3.52l-.32-28.36c-.02-6.17-5.05-11.2-11.22-11.2-6.191.01-11.23 5.05-11.23 11.23zM183.25 13.656c14.669 14.669 9.719 9.718 22.801 22.804H183.25V13.656z" />
      <path d="M78.399 182.28c-.97.98-.97 2.56 0 3.54a2.51 2.51 0 0 0 3.54 0c.971-.98.971-2.56 0-3.54-.939-.94-2.589-.94-3.54 0zM244.322 188.272l-46.84 46.85a2.498 2.498 0 0 0-.732 1.768v11.49a2.5 2.5 0 1 0 5 0v-10.455l46.103-46.113a11.95 11.95 0 0 0 3.548-8.522l.319-39.101c0-6.179-5.035-11.217-11.229-11.23-6.188 0-11.221 5.038-11.221 11.202l-.319 28.358a5.012 5.012 0 0 1-1.459 3.523l-12.901 12.906V89.2a2.5 2.5 0 0 0-5 0v104.75l-9.32 9.32-.01.013c-2.428 2.402-6.599 2.526-8.942.259-2.519-2.433-2.531-6.434-.08-8.895l11.05-11.05c4.051-4.051 4.174-10.646.287-14.688-4.05-4.274-10.812-4.332-14.94-.188l-23.353 23.332c-6.354 6.362-9.617 13.694-10.178 22.907h-52.197c-.521-9.054-3.753-16.512-10.187-22.91l-2.71-2.7c-.94-.95-2.59-.94-3.53 0a2.5 2.5 0 0 0 0 3.54h.011l2.689 2.7c6.05 6.1 8.68 12.65 8.811 21.89v.05c.014.984.01 21.407.01 30.85a2.5 2.5 0 0 0 5 0c0-28.6.002-27.42-.004-28.42h52.008c-.004 3.306-.007 10.84-.004 28.132v.288a2.5 2.5 0 1 0 5 0v-.289c-.006-41.11.01-27.72.01-30.609.082-9.125 2.799-15.877 8.807-21.894l23.354-23.333c2.215-2.222 5.708-2.083 7.787.108 2.025 2.106 1.933 5.561-.206 7.7l-11.053 11.052c-4.408 4.421-4.405 11.629.143 16.022 4.284 4.145 11.554 4.01 15.915-.283.017-.016.037-.027.053-.043v-.004l27.218-27.228a10.036 10.036 0 0 0 2.923-7.03l.319-28.358c0-3.435 2.791-6.23 6.216-6.23 3.438.007 6.234 2.802 6.234 6.209l-.322 39.1a7 7 0 0 1-2.078 5.002z" />
      <circle cx="212.09" cy="79.2" r="2.5" />
      <path d="M86.329 77.702c8.6 0 15.596-6.996 15.596-15.595v-9.998c3.972-4.803 5.219-11.794 2.055-18.322a2.501 2.501 0 0 0-3.407-1.126l-5.648 2.949a7.696 7.696 0 0 1-3.546.87H79.276c-5.741 0-10.116 5.142-9.203 10.805l.66 4.092v10.731c0 8.598 6.996 15.594 15.596 15.594zm10.596-15.595c0 5.842-4.753 10.595-10.596 10.595s-10.596-4.753-10.596-10.595v-8.429h21.191v8.429zM79.276 41.479h12.102c2.031 0 4.058-.497 5.859-1.437l3.167-1.653a11.9 11.9 0 0 1-2.126 10.289H75.362l-.354-2.189a4.325 4.325 0 0 1 4.268-5.01z" />
      <path d="m86.329 68.218c4.166 0 7.556-3.39 7.556-7.556a2.5 2.5 0 1 0-5 0c0 1.409-1.146 2.556-2.556 2.556s-2.556-1.146-2.556-2.556a2.5 2.5 0 1 0-5 0c0 4.167 3.39 7.556 7.556 7.556zm47.921-4.522h41a2.5 2.5 0 1 0 0-5h-41a2.5 2.5 0 1 0 0 5zm0 11.514h63.25a2.5 2.5 0 1 0 0-5h-63.25a2.5 2.5 0 1 0 0 5zm-76.234 25.54a2.5 2.5 0 0 0 2.5 2.5h100a2.5 2.5 0 1 0 0-5h-100a2.5 2.5 0 0 0-2.5 2.5zm138.47-2.5h-25.969a2.5 2.5 0 1 0 0 5h25.969a2.5 2.5 0 1 0 0-5zm0 13.563h-95.969a2.5 2.5 0 1 0 0 5h95.969a2.5 2.5 0 1 0 0-5zm-135.97 5h30a2.5 2.5 0 1 0 0-5h-30a2.5 2.5 0 1 0 0 5zm82.5 11.062a2.5 2.5 0 0 0-2.5-2.5h-80a2.5 2.5 0 1 0 0 5h80a2.5 2.5 0 0 0 2.5-2.5zm53.468-2.5h-45.969a2.5 2.5 0 1 0 0 5h45.969a2.5 2.5 0 1 0 0-5zm-135.97 13.563a2.5 2.5 0 1 0 0 5h50a2.5 2.5 0 1 0 0-5h-50zm135.97 0h-75.969a2.5 2.5 0 1 0 0 5h75.969a2.5 2.5 0 1 0 0-5zm0 13.562h-29.969a2.5 2.5 0 1 0 0 5h29.969a2.5 2.5 0 1 0 0-5zm-37.468 2.5a2.5 2.5 0 0 0-2.5-2.5h-96a2.5 2.5 0 1 0 0 5h96a2.5 2.5 0 0 0 2.5-2.5z" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export function Intro() {
  return (
    <>
      <div>
        <Link className="-mb-16 mt-16 flex justify-center lg:pr-[30%]" href="/">
          <Logo />
        </Link>
      </div>
      <h1 className="mt-14 text-center font-display text-3xl/tight font-light text-white lg:text-left lg:text-4xl/tight">
        Hello, my name is <br />{' '}
        <span className="text-sky-300">Hyun-Tae Jin</span>
      </h1>
      <p className="mt-4 hyphens-auto break-words text-sm/6 text-gray-300 lg:hyphens-none lg:break-normal">
        I am deeply committed to crafting sleek, pragmatic web applications with
        utmost precision. With an inclination towards user-centered design, I
        strive to transform your imagination into tangible products.
      </p>
      <SignUpForm />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href="https://www.linkedin.com/in/htjin/"
          target="_blank"
          rel="noopener noreferrer"
          icon={LinkedinIcon}
          className="flex-none"
        >
          Linkedin
        </IconLink>
        <IconLink
          href="https://github.com/htjin"
          target="_blank"
          rel="noopener noreferrer"
          icon={GitHubIcon}
          className="flex-none"
        >
          GitHub
        </IconLink>
        <IconLink
          href="mailto:hytaej@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          icon={GmailIcon}
          className="flex-none"
        >
          hytaej@gmail.com
        </IconLink>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Copyright © {new Date().getFullYear()} Hyun-Tae Jin
      <IconLink
        href="https://drive.google.com/file/d/1pvgo_B2zgQ8FyAsvgk_z44nibqY9tl1_/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        icon={ResumeIcon}
        compact
        large
      >
        Download Resumé
      </IconLink>
    </p>
  )
}
