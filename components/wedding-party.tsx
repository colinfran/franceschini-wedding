/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React, { FC } from "react"

const WeddingParty: FC = () => {
  return (
    <section className="w-full pb-12">
      <div className="container m-auto px-4 md:px-6">
        <div className="grid gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Bridesmaids
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These are the wonderful women who will be supporting the bride throughout her wedding
              day.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Bridesmaid 1"
                  className="object-cover"
                  height={128}
                  src="https://i.ibb.co/rkv5PrY/courtney.png"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Courtney Lane-Donovan</h3>
                <p className="text-muted-foreground">Matron of Honor</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Bridesmaid 2"
                  className="object-cover"
                  height={128}
                  src="https://i.ibb.co/0y4WbG3/teffy.png"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Teffy Sanchez Holguin</h3>
                <p className="text-muted-foreground">Friend</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Bridesmaid 3"
                  className="object-cover"
                  height={128}
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">????? ??????????</h3>
                <p className="text-muted-foreground">Friend</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Bridesmaid 4"
                  className="object-cover"
                  height={128}
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">????? ??????????</h3>
                <p className="text-muted-foreground">Friend</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Groomsmen
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These are the fantastic men who will be standing by the groom&apos;s side as he ties
              the knot.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Groomsman 1"
                  className="object-cover"
                  height={128}
                  src="https://i.ibb.co/Wt8CGsT/jaycob.png"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Jaycob Barros</h3>
                <p className="text-muted-foreground">Best Man</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Groomsman 2"
                  className="object-cover"
                  height={128}
                  src="https://i.ibb.co/TtWqy3z/troy.png"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Troy Burr</h3>
                <p className="text-muted-foreground">Friend</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Groomsman 3"
                  className="object-cover"
                  height={128}
                  src="https://i.ibb.co/TcPWvqv/luke.png"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Luke Swanson</h3>
                <p className="text-muted-foreground">Friend</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Groomsman 4"
                  className="object-cover"
                  height={128}
                  src="https://i.ibb.co/NVpkVPc/kam.png"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Kamron Hamzehloo</h3>
                <p className="text-muted-foreground">Friend</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Groomsman 5"
                  className="object-cover"
                  height={128}
                  src="https://i.ibb.co/6Zd9shM/chris.png"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Chris Franceschini</h3>
                <p className="text-muted-foreground">Brother</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Groomsman 6"
                  className="object-cover"
                  height={128}
                  src="https://i.ibb.co/kGrpBJb/tom.png"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Tom Franceschini</h3>
                <p className="text-muted-foreground">Brother</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="Groomsman 7"
                  className="object-cover"
                  height={128}
                  src="https://i.ibb.co/4sNS77g/john.png"
                  width={128}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">John Franceschini</h3>
                <p className="text-muted-foreground">Brother</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingParty
