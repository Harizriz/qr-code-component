import Image from 'next/image'
import QRCode from '../images/image-qr-code.png'

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-light-gray shadow-sm">
      <div className="flex max-h-max max-w-[300px] flex-col justify-center rounded-2xl bg-white p-4 shadow-lg">
        <div className="rounded-lg">
          <Image src={QRCode} alt="qr-code" className="h-72 w-72 rounded-xl" />
        </div>
        <p className="mx-3 mt-4 text-center text-[21px] font-bold text-dark-blue">
          Improve your front-end skills by building projects
        </p>
        <p className="mx-3 mt-4 pb-4 text-center text-base font-normal text-grayish-blue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}
