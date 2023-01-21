import DangerButton from '@/Components/DangerButton'
import Authenticated from '@/Layouts/Authenticated/Index'
import { Head, useForm } from '@inertiajs/inertia-react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import Checkbox from '@/Components/Checkbox'
import { Inertia } from '@inertiajs/inertia'

export default function Create(props) {
  const { data, setData, processing, errors, progress } = useForm({
    ...props.movie,
  })

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === 'file' ? event.target.files[0] : event.target.value,
    )
  }

  const submit = (e) => {
    e.preventDefault()

    if (data.thumbnail === props.movie.thumbnail) {
      delete data.thumbnail
    }

    //console.log(data)
    Inertia.post(route('admin.dashboard.movie.update', data.id), {
      _method: 'PUT',
      ...data,
    })
  }

  return (
    <Authenticated auth={props.auth} errors={props.errors}>
      <Head>
        <title>Admin</title>
      </Head>
      <div>
        <div className="font-semibold text-[22px] text-black mb-4">
          Update Movie : {props.movie.name}
        </div>
        <hr className="mb-4" />
        <form className="w-[370px]" onSubmit={submit}>
          <div className="flex flex-col gap-6">
            <div>
              <InputLabel forInput="Name" value="Name" />

              <TextInput
                id="name"
                type="text"
                name="name"
                variant="primary-outline"
                value={data.name}
                isFocused={true}
                handleChange={onHandleChange}
                placeholder="Name Of Movie"
              />
              <InputError message={errors.name} className="mt-2" />
            </div>

            <div>
              <InputLabel forInput="category" value="Category" />

              <TextInput
                id="category"
                type="text"
                name="category"
                variant="primary-outline"
                value={data.category}
                handleChange={onHandleChange}
                placeholder="Category Of Movie"
              />
              <InputError message={errors.category} className="mt-2" />
            </div>

            <div>
              <InputLabel forInput="video_url" value="Video Url" />

              <TextInput
                id="video_url"
                type="url"
                name="video_url"
                variant="primary-outline"
                value={data.video_url}
                handleChange={onHandleChange}
                placeholder="Video Url Of Movie"
              />
              <InputError message={errors.video_url} className="mt-2" />
            </div>

            <div>
              <InputLabel forInput="thumbnail" value="Video Thumbnail" />
              <img src={`/storage/${data.thumbnail}`} />
              <TextInput
                id="thumbnail"
                type="file"
                name="thumbnail"
                variant="primary-outline"
                handleChange={onHandleChange}
                placeholder="Video Thumbnail"
                accept="image/*"
              />
              {progress && (
                <progress value={progress.percentage} max="100">
                  {progress.percentage}%
                </progress>
              )}

              {/* <input
                type="file"
                value={data.thumbnail}
                onChange={(e) => setData('thumbnail', e.target.files[0])}
              />
              {progress && (
                <progress value={progress.percentage} max="100">
                  {progress.percentage}%
                </progress>
              )} */}
              <InputError message={errors.thumbnail} className="mt-2" />
            </div>

            <div>
              <InputLabel forInput="rating" value="Video Rating" />

              <TextInput
                id="rating"
                type="number"
                name="rating"
                variant="primary-outline"
                value={data.rating}
                handleChange={onHandleChange}
                placeholder="Video Rating"
              />
              <InputError message={errors.rating} className="mt-2" />
            </div>

            <div className="flex flex-row items-center mt-4">
              <InputLabel
                forInput="is_featured"
                value="Is Featured"
                className="mt-1 mr-3"
              ></InputLabel>
              <Checkbox
                name="is_featured"
                checked={data.is_feature}
                handleChange={(e) => setData('is_featured', e.target.checked)}
              />
            </div>

            <DangerButton
              type="submit"
              variant="primary"
              processing={processing}
            >
              <span className="text-base font-semibold">Save</span>
            </DangerButton>
          </div>
        </form>
      </div>
    </Authenticated>
  )
}
