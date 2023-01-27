import { Link } from '@inertiajs/inertia-react'

export default function FeatureMovie({
  slug,
  name,
  category,
  thumbnail,
  rating = 0,
}) {
  return (
    <div className="absolute overflow-hidden group mr-[30px]">
      <img
        // src="/images/featured-1.png"
        src={`/storage/${thumbnail}`}
        className="object-cover rounded-[30px] w-[520px] h-[340px]"
        alt=""
      />
      {/* <!-- rating --> */}
      <div className="absolute top-0 left-0 rating">
        <div className="p-[30px] flex items-center gap-1">
          <img src="/icons/ic_star.svg" alt="" />
          <span className="mt-1 text-sm font-medium text-white">
            {parseFloat(rating).toFixed(1)}/5.0
          </span>
        </div>
      </div>
      {/* <!-- bottom detail --> */}
      <div
        className="absolute bottom-0 h-[100px] left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                          rounded-br-[28px] flex justify-between items-center px-7 h-[130px]"
      >
        <div>
          <div className="font-medium text-[22px] text-white">{name}</div>
          <p className="mb-0 text-sm font-light text-white">{category}</p>
        </div>
        <div className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
          <img src="/icons/ic_play.svg" width="50" alt="" />
        </div>
      </div>
      <Link
        href={route('user.dashboard.movie.show', slug)}
        method="get"
        className="absolute inset-0 z-50"
      ></Link>
    </div>
  )
}
