import React, { FC } from "react"
import Image from "next/image"
import { getTranslations } from "next-intl/server"

const Page: FC = async () => {
  const t = await getTranslations()
  return (
    <div className="flex justify-center">
      <section className="w-full pb-12">
        <div className="container m-auto px-4 md:px-6">
          <div className="grid gap-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("Meet the Bridesmaids")}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("wonderfulWomen")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-4">
                <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    alt="Bridesmaid 1"
                    className="object-cover"
                    height={128}
                    src="https://offdf4hlrt.ufs.sh/f/6m6EU73MglBWJroWMmOPOc2vEVB6Dw7Le9rdS0nmFxkHhUpg"
                    width={128}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Courtney Lane-Donovan</h3>
                  <p className="text-muted-foreground">{t("Matron of Honor")}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    alt="Bridesmaid 2"
                    className="object-cover"
                    height={128}
                    src="https://offdf4hlrt.ufs.sh/f/6m6EU73MglBWjRMh3BRlZipV93QIqtao5OYXGhrMdvEz82fF"
                    width={128}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Teffy Sanchez Holguin</h3>
                  <p className="text-muted-foreground">{t("friendGirl")}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    alt="Bridesmaid 3"
                    className="object-cover"
                    height={128}
                    src="https://offdf4hlrt.ufs.sh/f/6m6EU73MglBWduiKb560qGArE9Q3284k6KDTelYwRpW5JIZV"
                    width={128}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Tami Mediavilla</h3>
                  <p className="text-muted-foreground">{t("friendGirl")}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    alt="Bridesmaid 4"
                    className="object-cover"
                    height={128}
                    src="https://offdf4hlrt.ufs.sh/f/6m6EU73MglBWrvpV0eZZMA5wGF4JgN2PXBV1vjTe93nOoi0l"
                    width={128}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Sophia Donovan</h3>
                  <p className="text-muted-foreground">{t("Junior Bridesmaid")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("Meet the Groomsmen")}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("fantasticGuys")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-4">
                <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    alt="Groomsman 5"
                    className="object-cover"
                    height={128}
                    src="https://offdf4hlrt.ufs.sh/f/6m6EU73MglBWH2xIPEgzd5PesZim7ISCpR0LWtxGjOzJ3VFo"
                    width={128}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Chris Franceschini</h3>
                  <p className="text-muted-foreground">Best Man</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    alt="Groomsman 6"
                    className="object-cover"
                    height={128}
                    src="https://offdf4hlrt.ufs.sh/f/6m6EU73MglBWCFJKWSYjQxp12wvOHErSY5BLIqZ4PuCdGXAs"
                    width={128}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Tom Franceschini</h3>
                  <p className="text-muted-foreground">Best Man</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    alt="Groomsman 7"
                    className="object-cover"
                    height={128}
                    src="https://offdf4hlrt.ufs.sh/f/6m6EU73MglBW3cic2zLNdUESBF8eAolItbPMGT5hmps2DOKQ"
                    width={128}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">John Franceschini</h3>
                  <p className="text-muted-foreground">Best Man</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    alt="Groomsman 2"
                    className="object-cover"
                    height={128}
                    src="https://offdf4hlrt.ufs.sh/f/6m6EU73MglBWsD45UKdTrcXSTDHoCphK08uIwRg2WJZvQzxt"
                    width={128}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Troy Burr</h3>
                  <p className="text-muted-foreground">{t("friendBoy")}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    alt="Groomsman 3"
                    className="object-cover"
                    height={128}
                    src="https://offdf4hlrt.ufs.sh/f/6m6EU73MglBW2XDTRhC6KyhRLwOzA89TDVpnWEF127lvsa4i"
                    width={128}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Luke Swanson</h3>
                  <p className="text-muted-foreground">{t("friendBoy")}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="size-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    alt="Groomsman 4"
                    className="object-cover"
                    height={128}
                    src="https://offdf4hlrt.ufs.sh/f/6m6EU73MglBWaTXlCt5BimsrWyDVnothlJPSLGXbwAC85FOE"
                    width={128}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Kamron Hamzehloo</h3>
                  <p className="text-muted-foreground">{t("friendBoy")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
