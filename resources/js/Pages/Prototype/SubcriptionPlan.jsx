import SubcriptionCard from '@/Components/SubcriptionCard'
import Authenticated from '@/Layouts/Authenticated/Index'

export default function SubcriptionPlan() {
  return (
    <Authenticated>
      <div className="py-20 flex flex-col items-center">
        <div className="text-black font-semibold text-[26px] mb-3">
          Pricing for Everyone
        </div>
        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
          Invest your little money to get a whole new experiences from movies.
        </p>
        <div className="flex justify-center gap-10 mt-[70px]">
          {/* <!-- Pricing Card --> */}

          <SubcriptionCard
            name="Basic"
            price={1000000}
            durationInmonth={3}
            feature={['feature 1', 'feature 2', 'feature 3']}
          />
          <SubcriptionCard
            name="Premium"
            isBasic={false}
            price={2000000}
            durationInmonth={3}
            feature={['feature 1', 'feature 2', 'feature 3']}
          />
          {/* <!-- /Pricing Card --> */}
        </div>
      </div>
    </Authenticated>
  )
}
