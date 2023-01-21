import DangerButton from '@/Components/DangerButton'
import FlashMessage from '@/Components/FlashMessage'
import Authenticated from '@/Layouts/Authenticated/Index'
import { Head, Link } from '@inertiajs/inertia-react'

export default function Index(props) {
  // console.log(props.flashMessage)
  return (
    <Authenticated auth={props.auth} errors={props.errors}>
      <Head>
        <title>Admin</title>
      </Head>
      <div>
        <div className="font-semibold text-[22px] text-black mb-4">
          Admin Dashboard
        </div>
        <Link href={route('admin.dashboard.movie.create')}>
          <DangerButton type="button" className="w-40 mb-8" variant="primary">
            Inser New Movie
          </DangerButton>
        </Link>

        {props.flashMessage?.message && (
          <FlashMessage message={props.flashMessage.message} />
        )}

        <table className="table-fixed w-full text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Nama</th>
              <th>Category</th>
              <th>Rating</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.movies.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <img
                    src={`/storage/${movie.thumbnail}`}
                    calssName="w-32 rounded-md"
                  />
                </td>
                <td>{movie.name}</td>
                <td>{movie.category}</td>
                <td>{movie.rating.toFixed(1)}</td>
                <td>
                  <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                    <DangerButton
                      type="button"
                      className="w-40 mb-8"
                      variant="warning"
                    >
                      Edit
                    </DangerButton>
                  </Link>
                </td>
                <td>
                  <DangerButton
                    type="button"
                    variant="danger"
                    className="w-40 mb-8"
                  >
                    Delete
                  </DangerButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Authenticated>
  )
}
