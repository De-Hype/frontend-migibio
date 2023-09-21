import Link from "next/link"

const Footer = () => {
  const date = new Date()
  return (
    <div className="flex justify-center items-center border bg-slate-50 py-5">
      <div className="flex items-center">
        <h3 className="pr-2 font-semibold">Hosted On Vercel</h3>
        <h3 className="font-black text-xl">|</h3>
        <h3 className="pl-2 font-normal"><Link className="font-bold" href='/generate'>David Hype</Link> {date.getFullYear()}</h3>
      </div>
    </div>
  )
}

export default Footer