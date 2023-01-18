import SubcriptionCard from '@/Components/SubcriptionCard'
import Authenticated from '@/Layouts/Authenticated/Index'
import { Inertia } from '@inertiajs/inertia'
export default function SubcriptionPlan(props) {
  const selectSubscription = (id) => {
    //alert(id)
    Inertia.post(
      route('user.dashboard.subscriptionPlan.userSubcribe', {
        subscriptionPlan: id,
      }),
    )
  }
  return (
    <Authenticated auth={props.auth} errors={props.errors}>
      <div className="py-20 flex flex-col items-center">
        <div className="text-black font-semibold text-[26px] mb-3">
          Pricing for Everyone
        </div>
        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
          Invest your little money to get a whole new experiences from movies.
        </p>
        <div className="flex justify-center gap-10 mt-[70px]">
          {/* <!-- Pricing Card --> */}
          {props.subscriptionPlan.map((subscriptionPlan, i) => (
            <SubcriptionCard
              key={i}
              isBasic={subscriptionPlan.name == 'Basic' ? true : false}
              name={subscriptionPlan.name}
              price={subscriptionPlan.price}
              durationInmonth={subscriptionPlan.active_period_in_months}
              feature={JSON.parse(subscriptionPlan.feature)}
              onSelectSubscription={() =>
                selectSubscription(subscriptionPlan.id)
              }
            />
          ))}
        </div>
      </div>
    </Authenticated>
  )
}
