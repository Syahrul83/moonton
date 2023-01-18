import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import DangerButton from '@/Components/DangerButton'
import { useEffect } from 'react'
import { Head, Link, useForm } from '@inertiajs/inertia-react'
import InputError from '@/Components/InputError'

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(data)
    post(route('register'))
  }
  return (
    <>
      <Head title="Sign Up" />
      <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
          <img
            src="/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
            alt=""
          />
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
          <div>
            <img src="/images/moonton-white.svg" alt="" />
            <div className="my-[70px]">
              <div className="font-semibold text-[26px] mb-3">Sign Up</div>
              <p className="text-base text-[#767676] leading-7">
                Explore our new movies and get <br />
                the better insight for your life
              </p>
            </div>
            <form className="w-[370px]" onSubmit={submit}>
              <div className="flex flex-col gap-6">
                <div>
                  <InputLabel forInput="name" value="Name" />
                  <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    autoComplete="name"
                    isFocused={true}
                    handleChange={onHandleChange}
                    required
                    placeholder="Your fullname..."
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                  <InputLabel forInput="email" value="Email Address" />
                  <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    handleChange={onHandleChange}
                    required
                    placeholder="Your Email Address"
                  />

                  <InputError message={errors.email} className="mt-2" />
                </div>
                <div>
                  <InputLabel forInput="password" value="Password" />
                  <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    handleChange={onHandleChange}
                    required
                    placeholder="Your Password"
                  />
                  <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                  <InputLabel
                    forInput="password_confirmation"
                    value="Confirm Password"
                  />

                  <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    handleChange={onHandleChange}
                    required
                    placeholder="Your Confirm Password"
                  />
                  <InputError
                    message={errors.password_confirmation}
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="grid space-y-[14px] mt-[30px]">
                <DangerButton variant="primary" processing={processing}>
                  <span className="text-base font-semibold">Sign Up</span>
                </DangerButton>

                <Link href={route('login')}>
                  <DangerButton variant="light-outline">
                    <span className="text-base text-white">
                      Sign In to My Account
                    </span>
                  </DangerButton>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
