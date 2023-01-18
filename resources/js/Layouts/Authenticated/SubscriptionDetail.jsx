export default function SubscriptionDetail({
  name,
  isBasic = true,
  remainingActiveDays,
  activeDays,
}) {
  let persen = (100 * remainingActiveDays) / activeDays
  let tot_persen1 = (persen / 100) * 12
  let tot_persen = Math.round(tot_persen1)
  console.log(Math.round(tot_persen))
  if (isBasic) {
    return (
      <div className="mt-auto pr-[30px]">
        <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
          <div className="text-black text-lg font-semibold mb-8">{name}</div>
          <div className="text-black text-sm mb-2">
            {remainingActiveDays} of {activeDays}
          </div>
          hari
        </div>
        <div className="rounded-full w-full h-[6px] bg-[#f1f1f1]">
          <div
            className={`rounded-full h-full w-${tot_persen}/12 bg-alerange`}
          ></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="mt-auto pr-[30px]">
        <div className="p-5 bg-black rounded-[25px]">
          <img src="/icons/ic_star-rounded.svg" alt="" />
          <div className="text-white text-lg font-semibold mt-4 mb-8">
            {name}
          </div>
          <div className="text-white text-sm mb-2">
            {remainingActiveDays} of {activeDays}
          </div>
          <div className="rounded-full w-full h-[6px] bg-[#333333]">
            <div
              className={`rounded-full h-full w-${tot_persen}/12 bg-alerange`}
            ></div>
          </div>
        </div>
      </div>
    )
  }
}
