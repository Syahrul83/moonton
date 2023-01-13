import Authenticated from '@/Layouts/Authenticated/Index'
import { Head } from '@inertiajs/inertia-react'
import Flickity from 'react-flickity-component'
import FeatureMovie from '@/Components/FeatureMovie'
import MovieCard from '@/Components/MovieCard'
export default function Dashboard() {
  const flickityOptions = {
    cellAlign: 'left',
    contain: true,
    groupCells: 1,
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
    draggable: '>1',
  }
  return (
    <Authenticated>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
      </Head>
      <div>
        <div className="font-semibold text-[22px] text-black mb-4">
          Featured Movies
        </div>
        <Flickity className="gap-[30px]" options={flickityOptions}>
          {/* <!-- Movie Thumbnail --> */}

          {[1, 2, 3, 4].map((i) => (
            <FeatureMovie
              key={i}
              name="Batman in Love"
              slug="batman-in-love"
              rating={1 + i}
              thumbnail="/images/featured-1.png"
              category={`Anime Action`}
            />
          ))}
        </Flickity>
        <div className="mt-[50px]">
          <div className="font-semibold text-[22px] text-black mb-4">
            Browse
          </div>
          <Flickity className="" options={flickityOptions}>
            {/* <!-- Movies 1 --> */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <MovieCard
                key={i}
                name="Meong Golden"
                slug="meong-golden"
                thumbnail="/images/browse-1.png"
                category="Comedy"
              />
            ))}
          </Flickity>
        </div>
      </div>
    </Authenticated>
  )
}
