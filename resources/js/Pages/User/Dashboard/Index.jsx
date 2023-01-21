import Authenticated from '@/Layouts/Authenticated/Index'
import { Head } from '@inertiajs/inertia-react'
import Flickity from 'react-flickity-component'
import FeatureMovie from '@/Components/FeatureMovie'
import MovieCard from '@/Components/MovieCard'
export default function Dashboard(props) {
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
    <Authenticated auth={props.auth} errors={props.errors}>
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
        {props.flashMessage?.message && (
          <FlashMessage message={props.flashMessage.message} />
        )}
        <Flickity className="gap-[30px]" options={flickityOptions}>
          {/* <!-- Movie Thumbnail --> */}

          {props.featureMovies.map((featureMovie) => (
            <FeatureMovie
              key={featureMovie.id}
              name={featureMovie.name}
              slug={featureMovie.slug}
              rating={featureMovie.rating}
              thumbnail={featureMovie.thumbnail}
              category={featureMovie.category}
            />
          ))}
        </Flickity>
        <div className="mt-[50px]">
          <div className="font-semibold text-[22px] text-black mb-4">
            Browse
          </div>
          <Flickity className="" options={flickityOptions}>
            {/* <!-- Movies 1 --> */}
            {props.movies.map((movie) => (
              <MovieCard
                key={movie.id}
                name={movie.name}
                slug={movie.slug}
                thumbnail={movie.thumbnail}
                category={movie.category}
              />
            ))}
          </Flickity>
        </div>
      </div>
    </Authenticated>
  )
}
